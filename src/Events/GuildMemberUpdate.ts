import { GuildMember, MessageEmbed, TextChannel } from "discord.js";
import Client from "../Core/Client";
import Event from "../Structures/Event";
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('guildMemberUpdate');
    }
    public async run(oldMember: GuildMember, newMember: GuildMember, client: Client): Promise<any> {
        const user = client.users.resolve(oldMember.id);
        if (oldMember.nickname != newMember.nickname) {
            const embed = new MessageEmbed()
                .setColor('YELLOW')
                .setTitle('Guild Member Updated')
                .setAuthor(`${user?.username}#${user?.discriminator}`,user?.displayAvatarURL())
                .addField('Nickname Before', `${oldMember.nickname?oldMember.nickname:'None'}`)
                .addField('Nickname After', `${newMember.nickname?newMember.nickname:'None'}`)
                .setFooter(`Member ID: ${oldMember.id}`)
                .setTimestamp();;
            return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
        }
        //if (oldMember.roles != newMember.roles) {
        //    const oR = oldMember.roles.cache.values();
        //    const nR = newMember.roles.cache.values();
        //    const oRoles: string[] = [];
        //    const nRoles: string[] = [];
        //    for (const r_ of oR) oRoles.push(r_.name);
        //    for (const r_ of nR) nRoles.push(r_.name);
        //    
        //    //const embed = new MessageEmbed()
        //    //    .setColor('YELLOW')
        //    //    .setTitle('Guild Member Updated')
        //    //    .setAuthor(`${oldMember.displayName}`)
        //    //    .addField('Roles Before', `${}`)
        //    //    .addField('Roles After', `${}`)
        //    //    .setFooter(`Member ID: ${oldMember.id}`)
        //    //    .setTimestamp();;
        //    //return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
        //}
    }
}