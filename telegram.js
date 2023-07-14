// const api_key ='6054990024:AAFJUNTR0sW4DZA0wUWZtu18qKTKlnTOS1Q'
// const TelegramBot = require('node-telegram-bot-api');
// const ytdl = require('ytdl-core');
// const ffmpeg = require('ffmpeg-static');
// const fs = require('fs');
// // Replace YOUR_API_TOKEN with your actual API token obtained from the BotFather
// const bot = new TelegramBot(api_key, { polling: true });

// // Event listener for incoming messages
// bot.on('message', async (msg) => {
//   const chatId = msg.chat.id;
//   const message = msg.text;

//   // Check if the message is a YouTube video URL
//   if (ytdl.validateURL(message)) {
//     try {
//       // Download the video using ytdl-core
//       const videoInfo = await ytdl.getInfo(message);
//       const videoFormat = ytdl.chooseFormat(videoInfo.formats, { quality: 'highest' });
//       const videoStream = ytdl.downloadFromInfo(videoInfo, { format: videoFormat });
//       const videoPath = `./${msg.chat.id}.mp4`;
//       videoStream.pipe(fs.createWriteStream(videoPath));

//       // Send the video file to the user
//       const video = fs.readFileSync(videoPath);
//     setTimeout(()=>{
//         bot.sendVideo(chatId, video, { caption: videoInfo.videoDetails.title });
//     },4000)
//     } catch (error) {
//       console.error(error);
//       bot.sendMessage(chatId, 'Sorry, there was an error downloading the video.');
//     }
//   } else {
//     bot.sendMessage(chatId, 'Please enter a valid YouTube video URL.');
//   }
// });









const TelegramBot = require('node-telegram-bot-api');
const fetch = require('node-fetch');
const api_key ='6054990024:AAFJUNTR0sW4DZA0wUWZtu18qKTKlnTOS1Q'
// Replace YOUR_API_TOKEN with your actual API token obtained from the BotFather
const bot = new TelegramBot(api_key, { polling: true });

// Event listener for incoming messages
bot.on('message', async (msg) => {
  const chatId = msg.chat.id;
  const message = msg.text;

  // Make a request to the music API to retrieve search results data
  try {
    const response = await fetch(`https://api.spotify.com/v1/search?q=${message}&type=track`, {
      headers: {
        Authorization: '5c84bf1aa9fc4b95b41791bec5e545d6', // Replace with your actual access token obtained from the Spotify API
      },
    });
    const data = await response.json();
    console.log(data);
  }
  catch (error){
    console.log(error);
  }
})
    // Extract the search results data from the API response
  //   const searchResults = data.tracks.items;

  //   // Send the search results data to the user
  //   if (searchResults.length > 0) {
  //     const message = searchResults.map((track) => `${track.name} by ${track.artists[0].name}`).join('\n');
  //     bot.sendMessage(chatId, message);
  //   } else {
  //     bot.sendMessage(chatId, 'No results found.');
  //   }
  // } catch (error) {
  //   console.error(error);
  //   bot.sendMessage(chatId, 'Sorry, there was an error retrieving search results data.');
  // }
  














