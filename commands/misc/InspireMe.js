"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = __importStar(require("discord.js"));
const discord_js_commando_1 = require("discord.js-commando");
const Request = __importStar(require("request"));
class default_1 extends discord_js_commando_1.Command {
    constructor(client) {
        super(client, {
            name: 'inspireme',
            group: 'misc',
            memberName: 'inspireme',
            description: 'Get something inspirational',
        });
    }
    async run(message, args, fromPattern, result) {
        const qString = { generate: 'true' };
        Request.default({ url: 'http://inspirobot.me/api', qs: qString }, async (err, res, body) => {
            if (err) {
                console.log(err);
                return;
            }
            const embed = new Discord.MessageEmbed()
                .setTitle(`Here's something inspirational for you`)
                .setImage(body)
                .setTimestamp();
            return await message.channel.send(embed);
        });
        return null;
    }
}
exports.default = default_1;
