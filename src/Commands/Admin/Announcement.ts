import { Channel, CommandInteraction, Snowflake, TextChannel } from 'discord.js';
import Client from '../../Core/Client';
import SlashCommand from '../../Structures/SlashCommand';
import * as Config from '../../config.json';

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'announcement',
            description: 'Create/Edit/Delete announcements',
            options: [
                {
                    type: 1,name: 'create',description: 'Create an announcement',
                    options: [{type: 3,name: 'text',description: 'Announcement text',required: true}]
                },
                {
                    type: 1,name: 'edit',description: 'Edit an announcement',
                    options: [
                        {type: 3,name: 'id',description: 'Announcement message id',required: true},
                        {type: 3,name: 'text',description: 'Announcement text',required: true}
                    ]
                },
                {
                    type: 1,name: 'delete',description: 'Delete an announcement',
                    options: [{type: 3,name: 'id',description: 'Announcement message id',required: true}]
                }
            ],
            defaultPermission: false,
            permissions: [{id:Config.modRole,type:'ROLE',permission:true}],
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        const id = interaction.options.getString('id')!;
        const text = interaction.options.getString('text')!;
        if (interaction.options.getSubcommand() === 'create') {
            await (await client.channels.cache.get(Config.announcementChannel)?.fetch(true) as TextChannel).send(text);
            return await interaction.reply(`Done! Check ${Config.announcementChannel}`);
        } else if (interaction.options.getSubcommand() === 'edit') {
            await (await client.channels.cache.get(Config.announcementChannel)?.fetch(true) as TextChannel).messages.edit(id, {content: text});
            return await interaction.reply(`Done! Check ${Config.announcementChannel}`);
        } else if (interaction.options.getSubcommand() === 'delete') {
            await (await client.channels.cache.get(Config.announcementChannel)?.fetch(true) as TextChannel).messages.delete(id);
            return await interaction.reply(`Done! Check ${Config.announcementChannel}`);
        }
    }
}