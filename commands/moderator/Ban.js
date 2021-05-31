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
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
const Config = __importStar(require("../../config.json"));
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            group: 'moderator',
            memberName: 'ban',
            description: 'Ban a user',
            examples: ['ban 560245779634323468', 'ban 560245779634323468 Repeated rule abuse'],
            userPermissions: ["BAN_MEMBERS"],
            clientPermissions: ["BAN_MEMBERS"],
            argsCount: 2,
            args: [
                {
                    key: "member",
                    prompt: "Who do you want to ban?",
                    type: "member"
                },
                {
                    key: "reason",
                    prompt: "What\'s the reason?",
                    type: "string",
                    default: " "
                }
            ]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        //      await this._client.guilds.resolve(message.guild)?.members.ban(args.member, { reason: args.reason });
        const guild = message.guild;
        const member = await guild.members.fetch(args.member);
        await member.ban().then((gM) => console.log(`${gM.displayName} banned by ${message.author}`)).catch(e => console.log(e));
        const userModChannel = this._client.channels.cache.get(Config.userModChannel);
        return await userModChannel.send(`:hammer: ${member.displayName} has been banned by ${message.author} for \`${args.reason}\``);
    }
}
exports.default = default_1;
