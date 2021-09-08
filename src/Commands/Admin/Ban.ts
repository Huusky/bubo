import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";
import * as Config from '../../config.json';

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'ban',
            description: 'Ban a user',
            options: [
                {
                    type: 6,
                    name: 'user',
                    description: 'User to ban',
                    required: true,
                },
                {
                    type: 4,
                    name: 'days',
                    description: 'Days to ban for',
                    required: false,
                },
                {
                    type: 3,
                    name: 'reason',
                    description: 'Reason for ban',
                    required: false,
                },
            ],
            defaultPermission: false,
            permissions: [{id:Config.modRole, type: 'ROLE', permission: true}],
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        const user = interaction.options.getUser('user')!;
        const days = interaction.options.getInteger('days');
        const reason = interaction.options.getString('reason');
        if (days) client.guilds.cache.get(Config.guildId)?.members.ban(user, {days:days});
        else if (reason) client.guilds.cache.get(Config.guildId)?.members.ban(user, {reason:reason});
        else if (days && reason) client.guilds.cache.get(Config.guildId)?.members.ban(user, {days:days,reason:reason});
        else client.guilds.cache.get(Config.guildId)?.members.ban(user);
    }
}