"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const discord_js_commando_1 = require("discord.js-commando");
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: "whois",
            group: "util",
            memberName: "whois",
            description: "",
            examples: ["whois 204255221017214977"],
            argsCount: 1,
            args: [
                {
                    key: "member",
                    prompt: "Who are you looking for?",
                    type: "member"
                }
            ]
        });
        this._client = client;
    }
    async run(message, args, fromPattern, result) {
        const member = await message.guild.members.fetch(args.member);
        const embed = new discord_js_1.MessageEmbed({
            title: `${member.user.username}#${member.user.discriminator} ${member.nickname}`,
            fields: [
                { name: "ID", value: member.id, inline: true },
                { name: "Avatar", value: "NULL", inline: true },
                { name: "Created", value: member.user.createdAt.toUTCString(), inline: true },
                { name: "\u200B", value: "\u200B" },
                { name: "Joined Server", value: member.joinedAt?.toUTCString(), inline: true },
                { name: "Last Message", value: `ID: ${member.lastMessageID}\nChannel: ${member.lastMessageChannelID}`, inline: true },
                { name: "Roles", value: member.roles.cache.map(r => r).join("\n") },
                { name: "Mod Actions", value: "NOT IMPLEMENTED YET" }
            ]
        }).setTimestamp();
        return await message.channel.send(embed);
    }
}
exports.default = default_1;
