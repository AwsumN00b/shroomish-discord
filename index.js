const Discord = require("discord.js");

const client = new Discord.Client(
	{ intents: ["GUILD_MESSAGES", "GUILD_MEMBERS", "GUILDS"] }
);

client.on("ready", () => {
	console.log("Shroomish is awake!");
});

client.login("NzI3MTU2MDU5Nzg5MzI4Mzg0.Xvnu2g.XzgNFcsYK-Rv-A7FHi1oxHvbXEE");

client.on("messageCreate", async message => {
	if (message.content == "SeeS") {
		message.reply("SooS");
	}
});
