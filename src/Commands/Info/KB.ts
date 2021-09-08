import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'kb',
            description: 'Link to WGU Knowledge Center',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        return await interaction.reply('https://cm.wgu.edu/');
    }
}