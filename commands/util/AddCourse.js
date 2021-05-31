"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: "addcourse",
            group: "util",
            memberName: "addcourse",
            hidden: true,
            description: "Add a course to the database",
            examples: ["addcourse C993 Structured Query Language"],
            argsCount: 2,
            args: [
                {
                    key: "courseCode",
                    prompt: "What is the course code to add?",
                    type: "string"
                },
                {
                    key: "courseName",
                    prompt: "What is the course name to add",
                    type: "string"
                }
            ],
            userPermissions: ["KICK_MEMBERS", "BAN_MEMBERS"]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const sql = `INSERT INTO course (id, name) VALUES (?, ?)`;
        const res = this._client.db.prepare(sql).run(args.courseCode.toUpperCase(), args.courseName);
        return await message.reply(`\`${args.courseCode.toUpperCase()} - ${args.courseName}\` has been added.\
        \nVerification: \`Changes: ${res.changes} Last insert row id: ${res.lastInsertRowid}\``);
    }
}
exports.default = default_1;
