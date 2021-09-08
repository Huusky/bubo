import { CommandInteraction, MessageEmbed } from "discord.js";
import Client from "../../Core/Client";
import SlashCommand from "../../Structures/SlashCommand";

export default class extends SlashCommand {
    public constructor() {
        super({
            name: 'calculators',
            description: 'WGU calculator policy',
        });
    }

    public async run(interaction: CommandInteraction, client: Client): Promise<any> {
        const embed = new MessageEmbed().setTitle('WGU Calculator Policy')
            .setURL('https://cm.wgu.edu/t5/Frequently-Asked-Questions/What-type-of-calculators-are-allowed-during-Objective/ta-p/1692')
            .setDescription('You may use one basic, scientific, business/financial, or graphing calculator unless it has a built-in computer algebra system (CAS).')
            .addFields(
                {name: 'College of Business Recommendations', value: 'TI-BA II or BA II Plus', inline: true},
                {name: 'General Education Recommendations', value: 'TI-30XS, TI-30XIIS, or TI-30X', inline: true},
                {name: 'Prohibited Calculators', value: `Calculators that include a computer algebraic system (CAS) are not allowed. The following are examples:`},
                {name: '\u200B', value: `• TI-89\n• TI-92\n• HP 49G`, inline: true},
                {name: '\u200B', value: `• HP 48GII\n• HP 40G`, inline: true},
                {name: '\u200B', value: `• HP 50G\n• TI-Nspire (CAS)`, inline: true},
                {name: '\u200B', value: `• Any other models that begin with "HP" that have not been listed
                • Computers and personal digital assistants (PDAs)
                • Calculators with an electronic writing pad, pen-input device, or QWERTY (typewriter) keyboards
                • Calculators that are part of electronic communication devices`},
            );
        return await interaction.reply({ embeds: [embed] });
    }
}