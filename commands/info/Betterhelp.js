"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'betterhelp',
            group: 'info',
            memberName: 'betterhelp',
            description: 'Link to free online therapy via BetterHelp is available as part of the WellConnect service package available to WGU students. Use school code WGU-STU.'
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('http://wgu.personaladvantage.com/ca/');
    }
}
exports.default = default_1;
