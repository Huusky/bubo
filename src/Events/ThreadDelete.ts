import { MessageEmbed, TextChannel, ThreadChannel } from "discord.js";
import Client from "../Core/Client";
import Event from "../Structures/Event";
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('threadDelete');
    }

    public async run(thread: ThreadChannel, client: Client): Promise<any> {
        const embed = new MessageEmbed()
            .setTitle('Thread Deleted')
            .setColor('RED')
            .setDescription(`${thread.name}: <#${thread.id}>`);
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}