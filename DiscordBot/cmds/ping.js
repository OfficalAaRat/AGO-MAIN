const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};

// module.exports = {

// 	data: {
// 		name: "ping",
// 		description: "replies with pong"
// 	},

// 	async execute(message){

// 		await message.reply('Pong!');

// 	}

// }