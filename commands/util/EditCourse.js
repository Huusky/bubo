"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: "editcourse",
            group: "util",
            memberName: "editcourse",
            hidden: true,
            description: "Edit a course name in the database",
            examples: ["editcourse C993 Structured Query Language"],
            argsCount: 2,
            args: [
                {
                    key: "courseCode",
                    prompt: "What is the course code to edit?",
                    type: "string"
                },
                {
                    key: "courseName",
                    prompt: "What is the new course name?",
                    type: "string"
                }
            ]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const sql = `UPDATE course SET name=? WHERE id=?`;
        const res = this._client.db.prepare(sql).run(args.courseName, args.courseCode);
        return await message.reply(`${args.courseCode.toUpperCase()} has been updated to \`${args.courseName}\`\
        \nVerification: \`Changes: ${res.changes} Last insert row id: ${res.lastInsertRowid}\``);
    }
}
exports.default = default_1;
