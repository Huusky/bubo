const { logChannel } = require('../config.json');
const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, guild, user) => {
    const embed = new Discord.RichEmbed()
        .setAuthor('Member Banned', guild.iconURL)
        .setColor('#FF0000')
        .setDescription(`<@${user.id}> ${user.username}#${user.discriminator}`)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp();
    await client.channels.get(logChannel).send(embed);
}