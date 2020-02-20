const { logChannel } = require('../config.json');
const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, role) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(role.guild.name, role.guild.iconURL)
        .setColor('#FF0000')
        .setDescription(`**Role Deleted: ${role.name}**`)
        .setFooter(`ID: ${role.id}`)
        .setTimestamp();
    await client.channels.get(logChannel).send(embed);
}