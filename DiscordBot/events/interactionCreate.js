module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		console.log(`Bot > ${interaction.user.tag} in #${interaction.channel.name}  triggered an interaction.`);
	},
};