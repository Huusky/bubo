import { Intents, TextChannel } from 'discord.js';
import Client from './Core/Client';
import * as Config from './config.json';

const client = new Client(Config.token, Config.commandDir, Config.eventDir, Config.database,
    {intents: [Intents.FLAGS.GUILDS,Intents.FLAGS.GUILD_MEMBERS,Intents.FLAGS.GUILD_BANS,
    Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,Intents.FLAGS.GUILD_INTEGRATIONS,Intents.FLAGS.GUILD_WEBHOOKS,
    Intents.FLAGS.GUILD_INVITES,Intents.FLAGS.GUILD_VOICE_STATES,Intents.FLAGS.GUILD_PRESENCES,
    Intents.FLAGS.GUILD_MESSAGES,Intents.FLAGS.GUILD_MESSAGE_REACTIONS,Intents.FLAGS.GUILD_MESSAGE_TYPING,
    Intents.FLAGS.DIRECT_MESSAGES,Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,Intents.FLAGS.DIRECT_MESSAGE_TYPING]});

client.init();
client.start();

client.on('debug', i => console.log(i));