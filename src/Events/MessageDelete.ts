import { Message, MessageEmbed, TextChannel } from 'discord.js';
import Client from '../Core/Client';
import Event from '../Structures/Event';
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('messageDelete');
    }
    
    public async run(message: Message, client: Client): Promise<any> {
        const author = await message.author.fetch();
        const embed = new MessageEmbed()
            .setColor('RED')
            .setTitle(`Message Deleted`)
            .setDescription(`<#${message.channelId}>\
                \n${message.content}`)
            .setAuthor(`${author.username}#${author.discriminator}`,author.displayAvatarURL())
            .setFooter(`Author ID: ${message.author.id} | Message ID: ${message.id}`)
            .setTimestamp();;
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}