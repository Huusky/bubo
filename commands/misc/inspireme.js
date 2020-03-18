const Discord = require('discord.js');
const request = require('request');

module.exports = {
    name: 'inspireme',
    description: 'Get something inspirational',
    usage: '',
    args: false,
    enabled: true,
    async execute(client, message, args) {
        const qString = { generate: 'true' };

        request( { url:'http://inspirobot.me/api', qs:qString }, (err, res, body) => {
            if (err) { console.log(err); return; }
            const embed = new Discord.RichEmbed()
                .setTitle(`Here's something inspirational for you`)
                .setImage(body)
                .setFooter('Powered by inspirobot')
                .setTimestamp();
            message.channel.send(embed);
        });
    }
}