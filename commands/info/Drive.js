"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'drive',
            group: 'info',
            memberName: 'drive',
            description: 'Get a link to the google drive',
        });
    }
    async run(message, args, fromPattern, result) {
        return await message.reply('https://drive.google.com/drive/u/3/folders/0B1S7OJNChk1-cWhwNWZTb2JNY1E');
    }
}
exports.default = default_1;
