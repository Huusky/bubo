module.exports = {
    name: 'github',
    description: 'Gets link to Bubo\'s github',
    usage: '',
    args: false,
    enabled: true,
    async execute(client, message, args) {
        message.reply('https://github.com/Huusky/bubo');
    }
}