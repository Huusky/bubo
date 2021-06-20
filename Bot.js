"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BuboClient_1 = require("./client/BuboClient");
const discord_js_1 = require("discord.js");
const path_1 = __importDefault(require("path"));
const SQLite = __importStar(require("better-sqlite3"));
const Cron = __importStar(require("node-cron"));
const Config = __importStar(require("./config.json"));
const client = new BuboClient_1.BuboClient({ owner: "187069489530011648", commandPrefix: "!bubo" });
client.registry
    .registerGroups([
    ['info', 'Info'],
    ['misc', 'Misc'],
    ['moderator', 'Moderator'],
    ['util', 'Util']
])
    .registerDefaults()
    .registerCommandsIn(path_1.default.join(__dirname, 'commands'));
//.registerTypesIn(path.join(__dirname, 'types'));
//Set activity like a boss
client.once("ready", () => { client.user?.setActivity("To the moooooon"); });
//Load db
client.db = new SQLite.default('./courses.db', { verbose: console.log });
Cron.schedule('0 12 1 1-12 *', async () => {
    const d = new Date().toLocaleString('default', { month: 'long' }).toUpperCase();
    return await client.announcementsChannel.send(`
    **HEY ${d} 1ST STUDENTS!**
    Welcome to WGU, officially. Please note that it is very, very common for WGU's systems to die on the 1st. **Do not panic**. It will recover, and you'll get added to your courses at some point today.
    
    If you have an idea of what you would like to start on, check the drive with !bubo drive for materials, or ask for help from other students. 
    
    I wish you all the best in your new term! :heart:`);
});
//Log this mf in
client.login(Config.token);
//Some more logging fuckery except in discord and I'm too lazy to put this shit in a separate file
client.on("guildBanAdd", (g, u) => {
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor('Member Banned').setColor('#FF0000').setDescription(`<@${u.id}> ${u.username}#${u.discriminator}`)
        .setFooter(`ID: ${u.id}`).setTimestamp();
    client.logChannel.send(embed);
});
client.on("guildBanRemove", (g, u) => {
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor('Member Unbanned').setColor('#00FF00').setDescription(`<@${u.id}> ${u.username}#${u.discriminator}`)
        .setFooter(`ID: ${u.id}`).setTimestamp();
    client.logChannel.send(embed);
});
client.on("guildMemberAdd", (u) => {
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor('Member Joined').setDescription(`<@${u.id}> ${u.user?.username}#${u.user?.discriminator}`)
        .setFooter(`ID: ${u.id}`);
    client.logChannel.send(embed);
});
client.on("guildMemberRemove", (u) => {
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor('Member Left').setDescription(`<@${u.id}> ${u.user?.username}#${u.user?.discriminator}`)
        .setFooter(`ID: ${u.id}`);
    client.logChannel.send(embed);
});
client.on("messageUpdate", (oM, nM) => {
    if (oM.content === nM.content || oM.author?.bot)
        return;
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor(`${oM.author?.tag}`).setColor('#FFA500').setDescription(`**Message edited in **<#${oM.channel.id}> [Jump to message](${oM.url})`)
        // Hacky shit here, \u200B for zero width space since discord complains about empty embed fields
        .addField('Message before', `${oM.content}\u200B`).addField('Message after', `${nM.content}\u200B`).setFooter(`Author ID: ${oM.author?.id} | Message ID: ${oM.id}`).setTimestamp();
    client.logChannel.send(embed);
});
client.on("messageDelete", (m) => {
    if (m.author?.bot)
        return;
    const embed = new discord_js_1.MessageEmbed()
        .setAuthor(`${m.author?.tag}`).setColor('#FF0000').setDescription(`**Message sent by** <@${m.author?.id}> **deleted in** <#${m.channel.id}>\
        \n${m.content}`).setFooter(`Author ID: ${m.author?.id} | Message ID: ${m.id}`).setTimestamp();
    client.logChannel.send(embed);
});
//Do some api logging shit here
//client.on("debug", d => console.log(d));
client.on("warn", w => console.log(w));
client.on("error", e => console.error(e));
//Log unhandled rejections
process.on("unhandledRejection", (r) => console.log(r));
//Handle exits so we can close db properly
process.on("exit", () => { client.db.close(); process.exit(); });
process.on("SIGINT", () => { client.db.close(); process.exit(); });
process.on("uncaughtException", (e) => { console.log(e); client.db.close(); process.exit(); });
