const Discord = require('discord.js');
const sqlite = require('sqlite3');

module.exports = {
    name: 'describe',
    description: 'Describe a course',
    usage: '<course code>',
    args: true,
    enabled: true,
    execute(message, args) {
        const db = new sqlite.Database('./data.sqlite');

        if (!args.length) {
            return message.channel.send(`You didn't provide a course code! ${message.author}`);
        }
        let course_num = args[0].toUpperCase();
        let sql_course_name = `SELECT * FROM 'courses' WHERE course_num='${course_num}'`;
        db.all(sql_course_name, [], (err, row) => {
            if (err) {
                logger.log(err, 'error');
                message.channel.send(`There was an error! Please check logs. ${message.author}`);
                return;
            }
            row.forEach((row) => {
                var describeEmbed = new Discord.RichEmbed()
                    .setColor('#FFFFFF')
                    .setTitle('Course Information')
                    .setAuthor('Bubo')
                    .addField('Course Name', `${row.course_name}`)
                    .addField('Course Description', `${row.course_overview}.`)
                    .addField('Course PDF', `${row.course_url} .`)
                    .setTimestamp();
                message.channel.send(describeEmbed);
            });
        });
    }
}