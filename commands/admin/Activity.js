"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: "activity",
            group: "util",
            memberName: "activity",
            hidden: true,
            description: "Manage bot activity",
            examples: ["activity", "activity To the moon :rocket:"],
            argsCount: 1,
            args: [
                {
                    key: "activity",
                    prompt: "",
                    type: "string",
                    default: ""
                }
            ]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        this._client.user?.setActivity({ "name": args.activity });
        return await message.reply(`activity has been set to ${args.activity}`);
    }
}
exports.default = default_1;
