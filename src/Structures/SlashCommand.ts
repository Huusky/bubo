import { ApplicationCommandOptionData, ApplicationCommandPermissionData, ChatInputApplicationCommandData, CommandInteraction } from 'discord.js';
import { ApplicationCommandTypes } from 'discord.js/typings/enums'
import Client from '../Core/Client';

interface SlashCommandData extends ChatInputApplicationCommandData {
    permissions?: ApplicationCommandPermissionData[];
}

export default abstract class SlashCommand implements SlashCommandData {
    type?: 'CHAT_INPUT' | ApplicationCommandTypes.CHAT_INPUT | undefined;
    name!: string;
    description!: string;
    options?: ApplicationCommandOptionData[] | undefined;
    defaultPermission?: boolean | undefined;
    permissions?: ApplicationCommandPermissionData[];
    public constructor(info: SlashCommandData) {
        Object.assign(this, info);
    }

    public abstract run(interaction: CommandInteraction, client: Client): Promise<any>;

    public toJSON() {
        return {
            type: this.type,
            name: this.name,
            description: this.description,
            options: this.options || [],
            default_permission: this.defaultPermission,
        };
    }
}
