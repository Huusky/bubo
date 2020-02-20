const logger = require('../../util/logger');
const Discord = require('discord.js');

module.exports = {
    name: 'degree',
    description: 'Get degree information',
    usage: '<degree>',
    args: true,
    enabled: false,
    async execute(client, message, args) {
        const degree_name = args[0];
        const sql = `SELECT * FROM degree WHERE id=? OR name=?`;
        await client.db.query(sql, [degree_name, degree_name], (err, result) => {
            if (err) {
                logger.log(err, 'error');
                return;
            }
            if (typeof result[0] === 'undefined') {
                message.reply('Please enter a valid degree id or name');
                return;
            }

            const embed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .setTitle(`${result[0].id} - ${result[0].name}`)
                .addField('Overview', `${result[0].overview}`)
                .addField('WGU Page', `${result[0].url}`, true)
                .addField('Credits', `${result[0].credits}`, true)
                .setTimestamp();
            message.channel.send(embed);
            //message.reply(`${certification_name} is ${result[0].name}`)
        });
    }
}