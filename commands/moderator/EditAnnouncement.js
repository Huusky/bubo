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
            name: 'editannouncement',
            aliases: ['editannounce', 'ea'],
            group: 'moderator',
            memberName: 'editannouncement',
            hidden: true,
            description: `Edit an announcement in the <#${Config.announcementsChannel}> channel`,
            examples: ['editannouncement [message id] [text here]', 'editannounce [message id] [text here]', 'ea [message id] [text here]'],
            userPermissions: ["BAN_MEMBERS", "KICK_MEMBERS"],
            argsCount: 2,
            args: [
                {
                    key: "messageid",
                    prompt: "Which message to edit?",
                    type: "string"
                },
                {
                    key: "announcement",
                    prompt: "What's the announcement",
                    type: "string"
                }
            ]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const announcementsChannel = this._client.channels.cache.get(Config.announcementsChannel); //Get channel and cast to TextChannel
        return await announcementsChannel.messages.fetch({ around: args.messageid, limit: 1 }).then(async (m) => {
            if (typeof m.first() === 'undefined' || m.first()?.author.id != Config.botId || m.first()?.id != args.messageid) {
                return await message.reply("That message either doesn't belong to the bot, or can't be found");
            }
            else
                return await m.first().edit(args.announcement);
        });
    }
}
exports.default = default_1;
