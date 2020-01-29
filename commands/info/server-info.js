const Discord = require('discord.js');

module.exports = {
    name: 'server-info',
    description: 'Get information about current server',
    usage: '',
    args: false,
    enabled: true,
    permissions: 'ADMINISTRATOR',
    async execute(message, args) {
        const embed = new Discord.RichEmbed()
            .setAuthor(message.guild.name, message.guild.iconURL)
            .addField("Name", message.guild.name, true)
            .addField("ID", message.guild.id, true)
            .addField("Owner", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
            .addField("Total | Humans | Bots", `${message.guild.members.size} \
                | ${message.guild.members.filter(member => !member.user.bot).size} \
                | ${message.guild.members.filter(member => member.user.bot).size}`, true)
            .addField("Channels", message.guild.channels.size, true)
            .addField("Roles", message.guild.roles.size, true)
            .addField("Creation Date", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)}`)
            .setThumbnail(message.guild.iconURL);
        message.channel.send(embed);
    }
}