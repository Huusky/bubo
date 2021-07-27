"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'udemy',
            group: 'info',
            memberName: 'udemys',
            description: 'Get a link to udemy (provided by WGU)'
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://wgu.udemy.com/');
    }
}
exports.default = default_1;
