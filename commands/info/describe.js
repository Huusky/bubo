const Discord = require('discord.js');
const logger = require('../../util/logger');

module.exports = {
    name: 'describe',
    description: 'Describe a course',
    usage: '<course code>',
    args: true,
    enabled: true,
    async execute(client, message, args) {
        const course_id = args[0].toUpperCase();
        const sql = `SELECT name, description, pdf_url FROM course WHERE id=?`;
        await client.db.query(sql, [course_id], (err, result) => {
            if (err) {
                logger.log(err, 'error');
                return;
            }
            if (typeof result[0] === 'undefined') {
                message.reply('Please enter a valid course ID');
                return;
            }
            const embed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .setTitle(`${course_id} - ${result[0].name}`)
                .setAuthor('Bubo')
                .setDescription(`${result[0].description}`)
                .addField('Course PDF', `${result[0].pdf_url}`)
                .setTimestamp();
            message.channel.send(embed);
        });
    }
}