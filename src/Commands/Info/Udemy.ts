import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'udemy',
            description: 'Get a link to Udemy',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        return await interaction.reply('https://wgu.udemy.com/');
    }
}