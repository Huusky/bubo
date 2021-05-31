"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'github',
            group: 'info',
            memberName: 'github',
            description: 'Get a link to the bot\'s github'
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://github.com/Huusky/bubo');
    }
}
exports.default = default_1;
