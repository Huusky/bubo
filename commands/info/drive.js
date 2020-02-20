module.exports = {
    name: 'drive',
    description: 'Get Google Drive link',
    usage: '',
    args: false,
    enabled: true,
    async execute(client, message, args) {
        message.reply('https://drive.google.com/drive/u/3/mobile/folders/0B1S7OJNChk1-cWhwNWZTb2JNY1E');
    }
}