"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'course',
            aliases: ['c', 'class'],
            group: 'info',
            memberName: 'info',
            description: 'Get information on a WGU course',
            examples: ['course c993', 'c c993', 'class c993'],
            argsCount: 1,
            args: [
                {
                    key: 'courseCode',
                    prompt: 'What course?',
                    type: 'string',
                }
            ],
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const sql = `SELECT id, name FROM course WHERE id=?`;
        const course = await this._client.db.prepare(sql).get(args.courseCode.toUpperCase());
        if (typeof course === 'undefined') {
            return await message.reply(`Please enter a valid course code. If this is an error, please notify a moderator to add the course.`);
        }
        else
            return await message.reply(`${args.courseCode.toUpperCase()} is ${course.name}`);
    }
}
exports.default = default_1;
