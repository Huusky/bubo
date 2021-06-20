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
exports.BuboClient = void 0;
const discord_js_commando_1 = require("discord.js-commando");
const Config = __importStar(require("../config.json"));
class BuboClient extends discord_js_commando_1.CommandoClient {
    constructor(options) {
        super(options);
        //Cache the channels
        this.channels.fetch(Config.announcementsChannel);
        this.channels.fetch(Config.logChannel);
        this.channels.fetch(Config.userModChannel);
        this.announcementsChannel = this.channels.resolve(Config.announcementsChannel);
        this.logChannel = this.channels.resolve(Config.logChannel);
        this.userModChannel = this.channels.resolve(Config.userModChannel);
    }
}
exports.BuboClient = BuboClient;
