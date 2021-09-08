import * as Discord from 'discord.js';
import SlashCommand from '../Structures/SlashCommand';
import CommandHandler from './CommandHandler';
import { REST } from '@discordjs/rest';
import Event from '../Structures/Event';
import EventHandler from './EventHandler';
import * as SQLite from 'better-sqlite3';
import { guildId } from '../config.json';

export default class Client extends Discord.Client {
    public database: SQLite.Database;

    public commands: Discord.Collection<string, SlashCommand>;
    public commandDir: string;
    public commandHandler: CommandHandler;

    public events: Discord.Collection<string, Event>;
    public eventDir: string; 
    public eventHandler: EventHandler;

    public _rest!: REST;

    public constructor(
        token: string,
        commandDir: string,
        eventDir: string,
        database: string,
        clientOptions: Discord.ClientOptions
    ) {
        super(clientOptions);

        this.database = new SQLite.default(database);

        this.token = token;
        this.commandDir = commandDir;
        this.eventDir = eventDir;

        this.commands = new Discord.Collection<string, SlashCommand>();
        this.commandHandler = new CommandHandler(this);

        this.events = new Discord.Collection<string, Event>();
        this.eventHandler = new EventHandler(this);
    }

    public async init(): Promise<any> {
        await this.commandHandler.load(this.commandDir);
        await this.eventHandler.load(this.eventDir);
        this._rest = new REST({ version: '9' }).setToken(this.token!);
        await this.commandHandler.register();
    }

    public async start(): Promise<any> {
        await this.login(this.token!);
        await this.commandHandler.setPermissions();
    }

    public async stop(): Promise<any> {
        this.destroy();
        this.database.close();
    }
}
