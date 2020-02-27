const { logChannel } = require('../config.json');
const { RichEmbed } = require('discord.js');
const logger = require('../util/logger');

module.exports = (client, oldMessage, newMessage) => {
    // If content is the same, done
    if (oldMessage.content === newMessage.content) return;
    const embed = new RichEmbed()
        .setAuthor(`${oldMessage.author.tag}`, oldMessage.member.user.avatarURL)
        .setColor('#FFA500')
        .setDescription(`**Message edited in **<#${oldMessage.channel.id}> [Jump to message](${oldMessage.url})`)
        // Hacky shit here, \u200B for zero width space since discord complains about empty embed fields
        .addField('Message before', `${oldMessage.content}\u200B`)
        .addField('Message after', `${newMessage.content}\u200B`)
        .setFooter(`User ID: ${oldMessage.author.id}`)
        .setTimestamp();
    client.channels.get(logChannel).send(embed);
}