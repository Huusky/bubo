module.exports = {
    name: 'ping',
    description: 'Returns ping time (ms)',
    usage: '',
    args: false,
    enabled: true,
    async execute(client, message, args) {
        message.reply(`${Math.ceil(client.ping)}ms`);
    }
}