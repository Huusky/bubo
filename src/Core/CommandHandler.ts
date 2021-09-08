import { Routes } from 'discord-api-types/rest/v9';
import { sync } from 'glob';
import { resolve } from 'path';
import Client from './Client';
import { guildId } from '../config.json';

export default class CommandHandler {
    private readonly _client: Client;
    public constructor(client: Client) {
        this._client = client;
    }

    public async load(dir: string): Promise<any> {
        const a: string = resolve(dir);
        const b: string[] = sync(`${a}/**/*.js`);
        for (const c of b) {
            await import(c.split('.js')[0])
                .then((cmd) => {
                    const d = new cmd.default();
                    this._client.commands.set(d.name, d);
                    Promise.resolve(
                        console.log(
                            `[COMMAND HANDLER] : LOADED COMMAND '${d.name.toUpperCase()}' SUCCESSFULLY`
                        )
                    );
                })
                .catch((err) => {
                    Promise.reject(
                        console.log(
                            `[COMMAND HANDLER] : ERROR LOADING COMMAND FROM ${c.toUpperCase()}`,
                            err
                        )
                    );
                });
        }
    }

    public async register(): Promise<any> {
        const commands: any = [];
        this._client.commands.each((c) => {
            commands.push(c.toJSON());
        });

        try {
            console.log('[COMMAND HANDLER] : RELOADING SLASH COMMANDS');
            const cmds = await this._client._rest.put(
                Routes.applicationGuildCommands('883020231688216576', guildId),
                { body: commands }
            );
            Promise.resolve(
                console.log('[COMMAND HANDLER] : SUCCESSFULLY RELOADED SLASH COMMANDS')
            );
        } catch (e) {
            Promise.reject(
                console.error('[COMMAND HANDLER] : ERROR RELOADING SLASH COMMANDS', e)
            );
        }
    }

    public async setPermissions(): Promise<any> {
        const g = await this._client.guilds.cache.get(guildId)?.fetch()!;
        const c = await g.commands.fetch();
        this._client.commands.forEach((cmd) => {
            if (cmd.permissions) {
                const permissions = cmd.permissions;
                c.find(a=>a.name===cmd.name)?.permissions.set({permissions});
            }
        });
    }
}
