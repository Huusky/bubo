const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Get list of commands',
    usage: 'help or help <command>',
    args: false,
    enabled: true,
    execute(message, args) {
        if (!args[0]) {
            command_list = message.client.commands.map(command => command.name).join(', ');
            const embed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .setTitle('Help')
                .addField('Available Commands', `${command_list}`)
                .setTimestamp();
            message.channel.send(embed);
        }
        if (args && message.client.commands.get(args[0])) {
            const name = args[0].toLowerCase();
            const command = message.client.commands.get(name);
            const embed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .setTitle(`${args[0].toLowerCase()} help`)
                .addField('Name', `${command.name}`)
                .addField('Description', `${command.description}`)
                .addField('Usage', `${command.usage}`)
                .addField('Args', `${command.args}`, true)
                .addField('Enabled', `${command.enabled}`, true);
            message.channel.send(embed);
        }
    }
}