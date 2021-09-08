import { CommandInteraction, MessageEmbed } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'course',
            description: 'Get WGU course information',
            options: [
                {
                    type: 3,
                    name: 'id',
                    description: 'Course ID (e.g. C100)',
                    required: true,
                    choices: undefined,
                },
                {
                    type: 5,
                    name: 'description',
                    description: 'Give a short course description',
                    required: false,
                    choices: undefined,
                },
            ],
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        const sql = `SELECT * FROM course WHERE id=?`;
        const id = interaction.options.getString('id')!.toUpperCase();
        const course = client.database.prepare(sql).get(id);
        if (typeof course == 'undefined') {
            return await interaction.reply({content: 'That is not a valid course code', ephemeral: true});
        }
        // if (interaction.options.getBoolean('description')) {
        //     const embed = new MessageEmbed()
        //         .setTitle(`${course.id} - ${course.name}`)
        //         .setDescription(course.description);
        //     return await interaction.reply({embeds: [embed] });
        // }
        return await interaction.reply(`${id} is \`${course.name}\` and is ${course.cu} CUs`);
    }
}