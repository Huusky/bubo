import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'pluralsight',
            description: 'Get a link to Pluralsight',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        return await interaction.reply('https://lrps.wgu.edu/provision/114583870');
    }
}