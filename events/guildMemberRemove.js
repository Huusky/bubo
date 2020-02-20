const { logChannel } = require('../config.json');
const Discord = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, member) => {
    const date = new Date();
    const embed = new Discord.RichEmbed()
        .setAuthor('Member Left', member.user.displayAvatarURL)
        .setDescription(`<@${member.id}> ${member.user.username}#${member.user.discriminator}`)
        .setFooter(`ID: ${member.id}`);
    await client.channels.get(logChannel).send(embed);
}