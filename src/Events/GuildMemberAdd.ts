import { GuildMember, MessageEmbed, TextChannel } from 'discord.js';
import Client from '../Core/Client';
import Event from '../Structures/Event';
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('guildMemberAdd');
    }
    
    public async run(member: GuildMember, client: Client): Promise<any> {
        member = await member.fetch(true);
        const embed = new MessageEmbed()
            .setTitle(`Guild Member Added`)
            .setColor('GREEN')
            .setDescription(`${member.user.username}#${member.user.discriminator} has joined`);
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}