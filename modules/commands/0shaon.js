const axios = require("axios");
const fs = require("fs");
const request = require("request");
const moment = require('moment-timezone');
const link = [
  "https://i.imgur.com/SSkDKpQ.mp4"
];

module.exports.config = {
  name: "☺️",
  version: "1.0.0",
  hasPermission: 2,
  credits: "Shaon Ahmed",
  usePrefix: true,
  description: "when send ,☺️ then response",
  commandCategory: "no prefix",
  usages: "☺️",
  cooldowns: 1,
};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    var time = moment.tz("Asia/Dhaka").format("LLLL");
  if (event.body.startsWith("☺️")) {
    const shaon = `•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n  __মনের বিষয় টা আল্লাহ ছাড়া কেও জানে নাহ -!!☺️\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : ☺️\n[⌛]  𝐃𝐚𝐭𝐞  : \n[🍒]  ${global.config.BOTNAME}` //const shaon2 = shaon[Math.floor(Math.random() * shaon.length)];

    const callback = () => api.sendMessage({
      body: `${shaon}`,
      attachment: fs.createReadStream(__dirname + "/cache/2025.mp4")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2025.mp4"), event.messageID);
    
    const requestStream = request(encodeURI(link[Math.floor(Math.random() * link.length)]));
    requestStream.pipe(fs.createWriteStream(__dirname + "/cache/2025.mp4")).on("close", () => callback());
    return requestStream;
  }
};

module.exports.languages = {
  "vi": {
    "on": "Dùng sai cách rồi lêu lêu",
    "off": "sv ngu, đã bão dùng sai cách",
    "successText": `🧠`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "success!",
  }
};

module.exports.run = async ({ api, event, Threads, getText }) => {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["☺️"] === "undefined" || data["☺️"]) data["☺️"] = false;
  else data["☺️"] = true;
  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  api.sendMessage(`${(data["☺️"]) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
};
