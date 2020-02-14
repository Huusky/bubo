module.exports = {
    name: 'reddit',
    description: 'Gets link to WGU subreddit',
    usage: '',
    args: false,
    enabled: true,
    execute(message, args) {
        message.reply('https://www.reddit.com/r/WGU/');
    }
}