const { logChannel } = require('../config.json');
const { RichEmbed } = require('discord.js');

module.exports = async (client, message) => {
    if (!message.member.user || message.channel.id === logChannel) return;
    const embed = new RichEmbed()
        .setAuthor(`${message.author.tag}`, message.member.user.avatarURL)
        .setColor('#FF0000')
        .setDescription(`**Message sent by** <@${message.author.id}> **deleted in** <#${message.channel.id}>\
            \n${message.content}`)
        .setFooter(`Author ID: ${message.author.id} | Message ID: ${message.id}`)
        .setTimestamp();
    await client.channels.get(logChannel).send(embed);
}