"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuboClient = void 0;
const discord_js_commando_1 = require("discord.js-commando");
class BuboClient extends discord_js_commando_1.CommandoClient {
    constructor(options) {
        super(options);
    }
}
exports.BuboClient = BuboClient;
