import { CommandInteraction } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";
import * as Config from '../../config.json';

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'kick',
            description: 'Kick a user',
            options: [
                {
                    type: 6,
                    name: 'user',
                    description: 'User to kick',
                    required: true,
                },
                {
                    type: 3,
                    name: 'reason',
                    description: 'Reason for kick',
                    required: false,
                },
            ],
            defaultPermission: false,
            permissions: [{id:Config.modRole, type: 'ROLE', permission: true}],
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        const user = interaction.options.getUser('user')!;
        const reason = interaction.options.getString('reason');
        if (reason) client.guilds.cache.get(Config.guildId)?.members.kick(user,reason);
        else client.guilds.cache.get(Config.guildId)?.members.kick(user);
    }
}