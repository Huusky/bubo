const logger = require('../util/logger');

module.exports = async (client, info) => {
    logger.log(info, 'warn');
}