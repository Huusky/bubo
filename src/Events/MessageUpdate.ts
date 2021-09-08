import { Message, MessageEmbed, TextChannel } from 'discord.js';
import Client from '../Core/Client';
import Event from '../Structures/Event';
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('messageUpdate');
    }

    public async run(oldMessage: Message, newMessage: Message, client: Client): Promise<any> {
        const author = await oldMessage.author.fetch();
        if (oldMessage.content == newMessage.content) return;
        const embed = new MessageEmbed()
            .setColor('YELLOW')
            .setTitle(`Message Updated`)
            .setDescription(`<#${oldMessage.channelId}> [Jump to message](${oldMessage.url})`)
            .setAuthor(`${author.username}#${author.discriminator}`,author.displayAvatarURL())
            .addField('Old Message',oldMessage.content)
            .addField('New Message',newMessage.content)
            .setFooter(`Author ID: ${author.id} | Message ID: ${oldMessage.id}`)
            .setTimestamp();
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds:[embed]});
    }
}