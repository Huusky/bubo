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
        const sql = `SELECT * FROM bubo.course WHERE id=$1`;
        return this._client.db.query(sql, [args.courseCode])
            .then(res => {
            if (typeof res.rows[0] === 'undefined')
                return message.reply("please enter a valid course code. If this is an error, please notify a moderator.");
            return message.reply(`${args.courseCode} is ${res.rows[0].name}`);
        }).catch(err => console.error(err));
    }
}
exports.default = default_1;
