module.exports = {
    name: 'restart',
    description: 'Restarts the bot',
    usage: '',
    args: false,
    enabled: true,
    permissions: 'ADMINISTRATOR',
    async execute(client, message, args) {
        process.exit(1);
    }
}