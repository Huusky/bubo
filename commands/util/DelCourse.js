"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: "delcourse",
            group: "util",
            memberName: "delcourse",
            hidden: true,
            description: "Delete a course in the database",
            examples: ["delcourse C993"],
            argsCount: 1,
            args: [
                {
                    key: "courseCode",
                    prompt: "What is the course code to delete?",
                    type: "string"
                },
            ]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const sql = `DELETE FROM course WHERE id=?`;
        const res = this._client.db.prepare(sql).run(args.courseCode);
        return await message.reply(`${args.courseCode.toUpperCase()} has been deleted.\
        \nVerification: \`Changes: ${res.changes} Last insert row id: ${res.lastInsertRowid}\``);
    }
}
exports.default = default_1;
