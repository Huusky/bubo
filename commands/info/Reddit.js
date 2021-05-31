"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'reddit',
            group: 'info',
            memberName: 'reddit',
            description: 'Get a link to the WGU subreddit',
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://www.reddit.com/r/WGU/');
    }
}
exports.default = default_1;
