const commands = [
  {
    name: "ping",
    description: "يتحقق إذا البوت شغال"
  }
];
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return; // يتأكد إن التفاعل أمر سلاش

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong! 🏓'); // هنا البوت يرد على الأمر
  }
});
