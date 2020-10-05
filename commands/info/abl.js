module.exports = {
    name: 'abl',
    description: 'Explains the ABL acronym',
    usage: '',
    args: false,
    enabled: true,
    async execute(client, message, args) {
        message.reply('ABL: Always Be Looking™');
    }
}