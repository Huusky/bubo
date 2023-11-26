import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: "Don't ask to ask",
            description: 'post DNATA',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        return await interaction.reply("Don't ask to ask, just ask \n https://dontasktoask.com/");
    }
}