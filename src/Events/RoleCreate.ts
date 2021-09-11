import { MessageEmbed, Role, TextChannel } from "discord.js";
import Client from "../Core/Client";
import Event from "../Structures/Event";
import { logChannel } from '../config.json';

export default class extends Event {
    public constructor() {
        super('roleCreate');
    }

    public async run(role: Role, client: Client): Promise<any> {
        const embed = new MessageEmbed()
            .setTitle('Role Created')
            .setColor('GREEN')
            .setDescription(`${role.name}: <@${role.id}>`);
        return await (client.channels.cache.get(logChannel) as TextChannel).send({embeds: [embed]});
    }
}