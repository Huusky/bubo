"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'azure',
            group: 'info',
            memberName: 'azure',
            description: 'Get a link to Azure student starter offer'
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://azure.microsoft.com/en-us/offers/ms-azr-0144p/');
    }
}
exports.default = default_1;
