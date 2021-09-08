import { Routes } from 'discord-api-types/rest/v9';
import { sync } from 'glob';
import { resolve } from 'path';
import Event from '../Structures/Event';
import Client from './Client';

export default class EventHandler {
    private readonly _client: Client;
    public constructor(client: Client) {
        this._client = client;
    }

    public async load(dir: string): Promise<any> {
        const a: string = resolve(dir);
        const b: string[] = sync(`${a}/**/*.js`);
        for (const c of b) {
            await import(c.split('.js')[0])
                .then((event) => {
                    const d: Event = new event.default();
                    this._client.events.set(d.name, d);
                    this._client.on(
                        d.name,
                        async (...args: any) => await d.run(...args, this._client)
                    );
                    Promise.resolve(
                        console.log(
                            `[EVENT HANDLER] : LOADED EVENT '${d.name.toUpperCase()}' SUCCESSFULLY`
                        )
                    );
                })
                .catch((err) => {
                    Promise.reject(
                        console.log(
                            `[EVENT HANDLER] : ERROR LOADING EVENT FROM ${c.toUpperCase()}`,
                            err
                        )
                    );
                });
        }
    }
}
