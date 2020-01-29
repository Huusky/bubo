const logger = require('../util/logger');

module.exports = async client => {
    logger.log(`Connected...Handling ${client.users.size} users.`, 'log')
    client.user.setActivity(`Serving ${client.users.size} users`);
}