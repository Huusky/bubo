import { ContextMenuInteraction, UserApplicationCommandData } from "discord.js";
import { ApplicationCommandTypes } from "discord.js/typings/enums";
import Client from "../Core/Client";

export default abstract class UserCommand implements UserApplicationCommandData {
    type!: "USER" | ApplicationCommandTypes.USER;
    name!: string;
    defaultPermission?: boolean | undefined;
    public constructor(info: UserApplicationCommandData) {
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