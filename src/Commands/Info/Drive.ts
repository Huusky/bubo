import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'drive',
            description: 'Get a link to the Google drive',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        return await interaction.reply(`Don't forget to use your WGU email to access this:\
        \nhttps://drive.google.com/drive/u/3/folders/0B1S7OJNChk1-cWhwNWZTb2JNY1E`);
    }
}