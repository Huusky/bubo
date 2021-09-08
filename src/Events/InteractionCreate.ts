import { Interaction } from "discord.js";
import Client from "../Core/Client";
import Event from "../Structures/Event";

export default class extends Event {
    public constructor() {
        super('interactionCreate');
    }
    
    public async run(interaction: Interaction, client: Client): Promise<any> {
        if (interaction.isCommand() && client.commands.has(interaction.commandName)) {
            return await client.commands.get(interaction.commandName)?.run(interaction, client);
        }
        if (interaction.isContextMenu() && client.commands.has(interaction.commandName)) {
            return await client.commands.get(interaction.commandName)?.run(interaction, client);
        }
    }
}