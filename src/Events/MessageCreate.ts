import { Message, MessageEmbed, TextChannel } from 'discord.js';
import Client from '../Core/Client';
import Event from '../Structures/Event';

export default class extends Event {
    public constructor() {
        super('messageCreate');
    }
    
    public async run(message: Message, client: Client): Promise<any> {
    }
}