const logger = require('../../util/logger');
const Discord = require('discord.js');

module.exports = {
    name: 'certification',
    description: 'Get certification information',
    usage: '<certification>',
    args: true,
    enabled: true,
    async execute(client, message, args) {
        const certification_name = args.join(" ");
        const sql = `SELECT * FROM certification WHERE id=? OR name=?`;
        await message.client.db.query(sql, [certification_name, certification_name], (err, result) => {
            if (err) {
                logger.log(err, 'error');
                return;
            }
            if (typeof result[0] === 'undefined') {
                message.reply('Please enter a certification id or name');
                return;
            }

            const embed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .setTitle(`${result[0].issuing_org} ${result[0].id} - ${result[0].name}`)
                .addField('Overview', `${result[0].overview}`)
                .addField('Requires multiple exams?', `${result[0].multiple_exams === 1 ? 'Yes' : 'No'}`, true)
                .addField('Associated course', `${result[0].course_id === null ? 'None' : `${result[0].course_id}`}`, true)
                .addField('Passing score', `${result[0].passing_score}`, true)
                .setTimestamp();
            message.channel.send(embed);
            //message.reply(`${certification_name} is ${result[0].name}`)
        });
    }
}