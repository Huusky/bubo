const logger = require('../util/logger');

module.exports = {
    name: 'course',
    description: 'get course name',
    usage: '<course code>',
    args: true,
    enabled: true,
    async execute(message, args) {
        const course_id = args[0].toUpperCase();
        const sql = `SELECT name FROM courses WHERE id=?`;
        message.client.db.query(sql, [course_id], (err, result) => {
            if (err) {
                logger.log(err, 'error');
                return;
            }
            console.log(result);
            message.reply(`${course_id} is ${result[0].name}`)
        });
    }
}