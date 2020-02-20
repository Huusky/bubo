const Discord = require('discord.js');
const {token,prefix,db_name,db_host,db_user,db_pass}= require('./config.json');
const logger = require('./util/logger');
const mysql = require('mysql');
const fs = require('fs');

const client = new Discord.Client();
client.prefix = prefix;
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.db = mysql.createPool({
    host: db_host,
    user: db_user,
    password: db_pass,
    database: db_name
});

//load commands from /commands/ folder based on categories
const categories = ['admin', 'info', 'utility', 'misc'];

for (const category of categories) {
    const commandFiles = fs.readdirSync(`./commands/${category}`).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const command = require(`./commands/${category}/${file}`);
        client.commands.set(command.name, command);
        logger.log(`${command.name} loaded`);
    }
}

//load events from /events/ folder
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
    const event = require(`./events/${file}`);
    const eventName = file.split('.')[0];
    client.on(eventName, event.bind(null, client));
}

client.login(token);

//handle unhandledRejections
process.on('unhandledRejection', rejection => {
    logger.log(rejection, 'warn');
})