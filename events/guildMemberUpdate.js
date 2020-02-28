const { logChannel } = require('../config.json');
const { RichEmbed } = require('discord.js');
const logger = require('../util/logger');

module.exports = async (client, oldMember, newMember) => {
    if (!(oldMember.nickname === newMember.nickname)) {
        const embed = new RichEmbed()
            .setAuthor(`${oldMember.user.tag}`, oldMember.user.avatarURL)
            .setDescription(`<@${oldMember.id}> **nickname changed**`)
            .addField('Before', `${oldMember.nickname}\u200B`)
            .addField('After', `${newMember.nickname}\u200B`)
            .setFooter(`User ID: ${oldMember.id}`)
            .setTimestamp();
        await client.channels.get(logChannel).send(embed);
    }
}