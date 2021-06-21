"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: "managecourse",
            aliases: ["mc"],
            group: "admin",
            memberName: "managecourse",
            hidden: true,
            description: "Manage a course in the db",
            examples: ["managecourse add [id] [name]", "managecourse edit [id] [name]", "managecourse del [id]",
                "mc add [id] [name]", "mc edit [id] [name]", "mc del [id]"],
            argsCount: 3,
            args: [
                { key: "action", prompt: "Add, edit, or del?", type: "string", oneOf: ["add", "a", "edit", "e", "del", "d"] },
                { key: "courseCode", prompt: "What is the course code?", type: "string" },
                { key: "courseName", prompt: "What is the course name", type: "string", default: " " }
            ],
            userPermissions: ["KICK_MEMBERS", "BAN_MEMBERS"]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const add = "INSERT INTO bubo.course VALUES ($1, $2)";
        const edit = "UPDATE bubo.course SET name=$2 WHERE id=$1";
        const del = "DELETE FROM bubo.course WHERE id=$1";
        if (args.action == "add" || args.action == "a") {
            return this._client.db.query(add, [args.courseCode.toUpperCase(), args.courseName])
                .then(res => {
                message.reply(`COMMAND : ${res.command}\nROW COUNT : ${res.rowCount}`);
            }).catch(err => { console.error(err); message.reply(`an error has occurred:\n\`${err}\``); });
        }
        else if (args.action == "edit" || args.action == "e") {
            return this._client.db.query(edit, [args.courseCode.toUpperCase(), args.courseName])
                .then(res => {
                message.reply(`COMMAND : ${res.command}\nROW COUNT : ${res.rowCount}`);
            }).catch(err => { console.error(err); message.reply(`an error has occurred:\n\`${err}\``); });
        }
        else if (args.action == "del" || args.action == "d") {
            return this._client.db.query(del, [args.courseCode.toUpperCase()])
                .then(res => {
                message.reply(`COMMAND : ${res.command}\nROW COUNT : ${res.rowCount}`);
            }).catch(err => { console.error(err); message.reply(`an error has occurred:\n\`${err}\``); });
        }
    }
}
exports.default = default_1;
