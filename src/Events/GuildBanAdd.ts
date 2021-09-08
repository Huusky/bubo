import { GuildBan, MessageEmbed, TextChannel } from 'discord.js';
import Client from '../Core/Client';
import Event from '../Structures/Event';
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('guildBanAdd');
    }
    
    public async run(ban: GuildBan, client: Client): Promise<any> {
        ban = await ban.fetch(true);
        const embed = new MessageEmbed()
            .setTitle(`Guild Ban Added`)
            .setColor('RED')
            .setDescription(`${ban.user.username}#${ban.user.discriminator} has been banned`);
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}