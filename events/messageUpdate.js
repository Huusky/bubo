const { logChannel } = require('../config.json');
const { RichEmbed } = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, oldMessage, newMessage) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${oldMessage.user.username}#${oldMessage.user.discriminator}`,
            oldMessage.user.displayAvatarURL)
        .setColor('#FFA500')
        .setTitle(`Message edited in <#${oldMessage.channel.id}> [link](${oldMessage.url})`)
        .addField('Message before', oldMessage.content)
        .addField('Message after', newMessage.content)
        .setFooter(`ID: ${oldMessage.user.id}`)
        .setTimestamp();
    await client.channels.get(logChannel).send(embed);
}