import { ContextMenuInteraction, MessageApplicationCommandData } from "discord.js";
import { ApplicationCommandTypes } from "discord.js/typings/enums";
import Client from "../Core/Client";

export default abstract class MessageCommand implements MessageApplicationCommandData {
    type!: "MESSAGE" | ApplicationCommandTypes.MESSAGE;
    name!: string;
    defaultPermission?: boolean | undefined;
    public constructor(info: MessageApplicationCommandData) {
        Object.assign(this, info);
    }

    public abstract run(interaction: ContextMenuInteraction, client: Client): Promise<any>;

    public toJSON() {
        return {
            type: this.type,
            name: this.name,
            default_permission: this.defaultPermission
        }
    }
}