import { GuildChannel, Client, MessageEmbed, TextChannel } from "discord.js";
import Event from "../Structures/Event";
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('channelDelete');
    }

    public async run(channel: GuildChannel, client: Client): Promise<any> {
        const embed = new MessageEmbed()
        .setTitle('Channel Deleted')
        .setColor('RED')
        .setDescription(`${channel.name}: <#${channel.id}>`);
    return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}