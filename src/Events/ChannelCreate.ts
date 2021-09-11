import { GuildChannel, MessageEmbed, TextChannel } from "discord.js";
import Client from "../Core/Client";
import Event from "../Structures/Event";
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('channelCreate');
    }

    public async run(channel: GuildChannel, client: Client): Promise<any> {
        const embed = new MessageEmbed()
            .setTitle('Channel Created')
            .setColor('GREEN')
            .setDescription(`${channel.name}: <#${channel.id}>`);
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}