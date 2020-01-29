const sqlite = require('sqlite3');

module.exports = {
    name: 'course',
    description: 'get course name',
    usage: '<course code>',
    args: true,
    enabled: true,
    async execute(message, args) {
        const db = new sqlite.Database('./data.sqlite');
        
        let course_num = args[0].toUpperCase();
        let sql_course_name = `SELECT * FROM 'courses' WHERE course_num='${course_num}'`;

        db.get(sql_course_name, [], (err, row) => {
            if (err) {
                logger.log(err, 'error');
                return;
            }
            return row
                ? message.channel.send(`${course_num} is ${row.course_name} ${message.author}`)
                : message.channel.send(`${course_num} is not in the db! ${message.author}`);
        });

        if (args[1] === '-pdf') {
            let sql_course_url = `SELECT course_url FROM 'courses' WHERE course_num='${course_num}'`;
            db.get(sql_course_url, [], (err, row) => {
                if (err) {
                    logger.log(err, 'error');
                    return;
                }
                return row
                    ? message.channel.send(`Here is the PDF for ${course_num}:\n${row.course_url}`)
                    : message.channel.send(`${course_num} or PDF is not in the db! ${message.author}`);
            })
        }
    }
}