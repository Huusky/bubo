const logger = require('../util/logger');
const {prefix} = require('../config.json');

module.exports = async (client, message) => {
    //if message does not start with the prefix or is from a bot, return.
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    //get args and command name
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const commandName = args.shift().toLowerCase();

    //get command from client.commands
    const command = client.commands.get(commandName);
    
    //if there is no command with that name, return
    if (!client.commands.has(commandName)) return message.reply(`That is not a valid command`);

    if (!command.enabled) return message.reply(`That command is not enabled`);
    //check if args is true. if args are provided, skip. else warn user args weren't provided
    //and provide correct usage
    if (command.args && !args.length) {
        let msg = `You didn't provide required arguments`;

        if (command.usage) {
            msg += `\nThe proper usage would be \`${prefix} ${command.name} ${command.usage}\``;
        }

        return message.reply(msg);
    }

    //check if permissions is true. if permissions are not provided, skip. else determine if
    //users has permissions and warn if not
    if (command.permissions) {
        if (!message.member.hasPermission(command.permissions)) {
            return message.reply(`You do not have permissions to execute that command.`);
        }
    }

    //try to execute the command. warn user there was an error
    try {
        command.execute(client, message, args);
    } catch (err){
        logger.log(err);
        message.reply('There was an error trying to execute that command!');
    }
}