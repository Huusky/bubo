const logger = require('../../util/logger');

module.exports = {
    name: 'reload',
    description: 'Reloads a command',
    usage: '<command name>',
    args: true,
    enabled: true,
    permissions: 'ADMINISTRATOR',
    async execute(client, message, args) {
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        
        if (!command) return message.channel.send(`There is no command with that name or alias \`${commandName}\`, ${message.author}`);

        delete require.cache[require.resolve(`./${commandName}.js`)];
        logger.log(`${commandName} has been deleted from require cache`, 'log');
        try {
            const newCommand = require(`./${commandName}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            logger.log(`${commandName} has been added to require cache`, 'log');
        } catch (err) {
            logger.log(err, 'error');
            message.reply(`There was an error trying to reload \`${commandName}\`:\n\`${err.message}\``);
        }
        message.reply(`Command \`${commandName}\` was reloaded.`);
        logger.log(`${commandName} has been reloaded`, 'log');
    }
}