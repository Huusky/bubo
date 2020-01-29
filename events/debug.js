const logger = require('../util/logger');

module.exports = (client, info) => {
    logger.log(info, 'debug');
}