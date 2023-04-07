const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_API);

// bot.use((ctx) => {
//   ctx.reply("Hello there!!");
// });

bot.start((ctx) => {
  ctx.reply("The bot has started");
});

bot.help((ctx) => {
  ctx.reply("This bot can perform the following command\n  - /start\n - /help");
});

bot.hears("chatId", (ctx) => {
  ctx.reply(`chatId ${ctx.message.chat.id}`);
});

bot.command("say", (ctx) => {
  msg = ctx.message.text;
  msgArray = msg.split();
  console.log(msgArray);

  //   msgArray.shift();
  //     console.log(msgArray);

  ctx.reply(msgArray);
  newMsg = msgArray.join(" ");
  ctx.reply(newMsg);
});

// bot.hears("true", (ctx: ) => any }) =>
//   ctx.reply(`buy success ${ctx.message.chat.id}`)
// );
bot.launch();
