const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();
const axios = require("axios");

const ethers = require("ethers");
// const { match } = require("assert");
const token = process.env.BOT_API_1;
const INFURA_PROJECT_ID = process.env.INFURA_API;

// Create a new instance of the TelegramBot class
const bot = new TelegramBot(token, { polling: true });

// using direct wallet address
bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/balance") {
    try {
      const name = "Hillary";
      // const balance = await getBalance(walletAddress);
      bot.sendMessage(chatId, `Your name is ${name}`);
    } catch (error) {
      console.error(error);
      bot.sendMessage(chatId, "There was an error retrieving wallet balance");
    }
  }
});
// async function getBalance(walletAddress) {
//   const provider = new ethers.InfuraProvider("goerli", INFURA_PROJECT_ID);

//   const balance = await provider.getBalance(walletAddress);
//   const etherBalance = ethers.utils.formatEther(balance);
//   return etherBalance;
// }
// end
//0xe2592e18C73E740BAd49e3705716b9BCb3F0e510

// use the goerli testnet on ethereum
// const provider = new ethers.InfuraProvider("goerli", INFURA_PROJECT_ID);
// bot.onText(/\/balance (.+)/, async (msg, match) => {
//   const address = match[1];
//   const provider = new ethers.InfuraProvider("goerli", INFURA_PROJECT_ID);

// const provider = new ethers.providers.InfuraProvider(
//   "mainnet",
//   "YOUR_INFURA_PROJECT_ID"
// );
//   const balance = await provider.getBalance(address);
//   bot.sendMessage(
//     msg.chat.id,
//     `The balance of ${address} is ${ethers.utils.formatEther(balance)} ETH`
//   );
// });
// Listen for messages from users
// bot.on("message", async (msg) => {
//   const chatId = msg.chat.id;
//   const messageText = msg.text;

//   // Check if the user sent the '/balance' command
//   if (messageText.startsWith("/balance")) {
//     // Get the Ethereum address from the command arguments
//     const args = messageText.split(" ");
// if (args.length !== 2) {
//   bot.sendMessage(
//     chatId,
//     "Invalid command. Usage: /balance <Ethereum address>"
//   );
//   return;
// }
//     const address = args[1];

//     // Get the balance of the Ethereum address
//     try {
//       const balance = await provider.getBalance(address);
//       const etherBalance = ethers.formatEther(balance);
//       bot.sendMessage(
//         chatId,
//         `The balance of ${address} is ${etherBalance} ETH`
//       );
//     } catch (error) {
//       bot.sendMessage(chatId, `Error: ${error.message}`);
//     }
//   } else {
//     // Respond to any other message with a default response
//     bot.sendMessage(
//       chatId,
//       "Hello! I am a test bot running on the GOERLI test network. Send me the /balance command followed by an Ethereum address to check its balance."
//     );
//   }
// });
