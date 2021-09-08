import { ContextMenuInteraction, MessageEmbed } from "discord.js";
import Client from "../../Core/Client";
import MessageCommand from "../../Structures/MessageCommand";

export default class extends MessageCommand {
    public constructor() {
        super({
            type: 3,
            name: 'courses'
        })
    }

    public async run(interaction: ContextMenuInteraction, client: Client): Promise<any> {
        const re = /(C[\d]{3})|(D[\d]{3})/gm;
        const match = interaction.options.getMessage('message')!.content.match(re);
        const matches: string[] = []; 
        if (match) {
            for (const m of match) matches.push(m);
        } else {
            return await interaction.reply({content:'No courses mentioned in that message',ephemeral:true});
        }

        const sql  = `SELECT id,name,cu FROM course WHERE id IN (${matches.map(()=>'?').join(',')})`;
        const courses = client.database.prepare(sql).all(matches);

        let response: string = '';
        for (const c of courses) response += `${c.id} is ${c.name} and is ${c.cu} CU(s)\n`;

        return await interaction.reply(response);
    }
}