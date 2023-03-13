const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
const { saveMessage } = require("./service");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    `Hello, ${ctx.message.from.first_name}. I am tracking every message now.
If you don't want to be tracked, please stop me.`
  )
);

bot.on(message("text"), async (ctx) => {
  // Track time, sender, and text of the message

  const data = {
    time: new Date(),
    senderId: ctx.message.from.id,
    text: ctx.message.text,
  };

  saveMessage(data);

  await ctx.reply(`Saved`);
});

bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
