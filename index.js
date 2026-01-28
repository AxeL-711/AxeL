const { Client, GatewayIntentBits } = require("discord.js");
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'serverinfo') {
    const { guild } = interaction;
    await interaction.reply(`السيرفر: ${guild.name}\nعدد الأعضاء: ${guild.memberCount}`);
  }

  if (interaction.commandName === 'hello') {
    await interaction.reply('هلا! 👋');
  }
});
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log("Bot is Online");
});

client.login(process.env.TOKEN);
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const commands = require('./commands'); // هنا ربطنا ملف الأوامر

const rest = new REST({ version: '10' }).setToken('توكن البوت هنا');

(async () => {
  try {
    console.log('🔄 جاري تسجيل الأوامر...');
    await rest.put(
      Routes.applicationCommands('ID البوت هنا'), // للأوامر العالمية
      { body: commands }
    );
    console.log('✅ تم تسجيل جميع الأوامر!');
  } catch (error) {
    console.error(error);
  }
})();
