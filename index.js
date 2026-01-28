const { Client, GatewayIntentBits } = require("discord.js");

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

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const commands = require('./commands');

const BOT_TOKEN = " MTQ1ODYzMjQ0MzQ3NjMxNjQxNA.GGQqSu.3ZONEh0F_QuBlNhuWpcS3hXU8V-qs8Vx2rcSmg";
const BOT_ID = " 1458632443476316414 ";
const GUILD_ID = " 1458293733001924731 ";

client.on('ready', () => {
  console.log(`${client.user.tag} شغال!`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  const { commandName, channel } = interaction;

  if (commandName === 'ping') {
    await interaction.reply('Pong! 🏓');
  }

  if (commandName === 'hello') {
    await interaction.reply('هلا! 👋');
  }

  if (commandName === 'serverinfo') {
    await interaction.reply(`السيرفر: ${interaction.guild.name}\nعدد الأعضاء: ${interaction.guild.memberCount}`);
  }

  if (commandName === 'help') {
    const cmds = commands.map(cmd => `/${cmd.name} - ${cmd.description}`).join('\n');
    await interaction.reply(`قائمة الأوامر:\n${cmds}`);
  }

  if (commandName === 'lock') {
    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, { SendMessages: false });
    await interaction.reply('🔒 الروم مقفل!');
  }

  if (commandName === 'unlock') {
    await channel.permissionOverwrites.edit(interaction.guild.roles.everyone, { SendMessages: true });
    await interaction.reply('🔓 الروم مفتوح!');
  }
});

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v10');
const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(BOT_ID, GUILD_ID),
      { body: commands }
    );
    console.log('تم تسجيل الأوامر على السيرفر!');
  } catch (error) {
    console.error(error);
  }
})();

const rest = new REST({ version: '10' }).setToken(BOT_TOKEN);

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(BOT_ID, GUILD_ID),
      { body: commands }
    );
    console.log('تم تسجيل الأوامر على السيرفر!');
  } catch (error) {
    console.error(error);
  }
})();
