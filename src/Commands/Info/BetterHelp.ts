import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'betterhelp',
            description: 'Get a link to BetterHelp. Use school code WGU-STU',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        return await interaction.reply('Use school code WGU-STU\nhttps://wgu.personaladvantage.com/ca/');
    }
}