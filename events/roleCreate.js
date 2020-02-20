const { logChannel } = require('../config.json');
const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, role) => {
    const date = new Date();
    const embed = new Discord.RichEmbed()
        .setAuthor(role.guild.name, role.guild.iconURL)
        .setColor('#00FF00')
        .setDescription(`**Role Created: ${role.name}**`)
        .setFooter(`ID: ${role.id}`)
        .setTimestamp();
    await client.channels.get(logChannel).send(embed);
}