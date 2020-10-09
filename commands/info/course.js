const logger = require('../../util/logger');

module.exports = {
    name: 'course',
    description: 'get course name',
    usage: '<course code>',
    args: true,
    enabled: true,
    async execute(client, message, args) {
        const course_id = args[0].toUpperCase();
        const sql = `SELECT name FROM course WHERE id=?`;
        await client.db.query(sql, [course_id], (err, result) => {
            if (err) {
                logger.log(err, 'error');
                return;
            }
            if (typeof result[0] === 'undefined') {
                message.reply('Please enter a valid course id. If this is a missing course, please submit a course request via github (!bubo github)');
                return;
            }
            message.reply(`${course_id} is ${result[0].name}`)
        });
    }
}
