const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () => {
    console.log(`${client.user.username} está listo!`);
    client.user.setActivity("Secretos 🔐")
});

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().tolowerCase();


    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;
    
    switch (comando) {
        case "prueba":
            message.reply("Este bot a sido iniciado con exito")
            break;
    };
});

client.login(config.token);
