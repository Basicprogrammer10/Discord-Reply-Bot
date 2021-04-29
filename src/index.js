const common = require('./common.js')
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log("\033[32mLogged in as \033[36m" + client.user.tag + "\033[0m");
});

client.on("message", async (msg) => {
    console.log('\033[32m' + `${msg.guild.name} - ${msg.author.tag}: ${msg.content}` + '\033[0m')
    if (msg.author.tag === client.user.tag) return;
    if (msg.content === '') return;
    if (msg.content.startsWith('>>> ')) return;
    msg.channel.send(`>>> ${common.randomCaps(msg.content)}`);
});

client.login(config.token);