"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'pluralsight',
            group: 'info',
            memberName: 'pluralsights',
            description: 'Get a link to pluralsight'
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://lrps.wgu.edu/provision/114583870');
    }
}
exports.default = default_1;
