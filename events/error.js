const logger = require('../util/logger');

module.exports = async (client, error) => {
    logger.log(error, 'error');
}