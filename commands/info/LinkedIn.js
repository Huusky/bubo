"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'linkedin',
            group: 'info',
            memberName: 'linkedin',
            description: 'Get a link to linkedin'
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://www.linkedin.com/school/western-governors-university');
    }
}
exports.default = default_1;
