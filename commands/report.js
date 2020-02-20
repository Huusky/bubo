const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = {
    name: 'report',
    description: 'Report an issue with someone or something',
    usage: '<message>',
    args: true,
    enabled: true,
    async execute(client, message, args) {
        const report_message = args.join(' ');
        const embed = new Discord.RichEmbed()
            .setColor('FF0000')
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('Message', report_message)
            .addField('Channel Issue Reported In', `${client.channels.get(message.channel.id)}`, true)
            .addField('Message ID', `${message.id}`, true)
            .setTimestamp();
        message.client.channels.get("679879049161736314").send(embed);
        message.delete();
    }
}