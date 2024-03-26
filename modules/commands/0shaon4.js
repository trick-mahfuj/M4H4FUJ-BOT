module.exports.config = {
  name: "😘",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "sand best islamick Video",
  usePrefix: true,
  commandCategory: "noprefix",
  usages: "😘",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("😘")==0 || (event.body.indexOf("♥️")==0) || event.body.indexOf("😻")==0 ||
event.body.indexOf("😽")==0 ||
event.body.indexOf("💕")==0 ||
event.body.indexOf("💞")==0 ||
event.body.indexOf("❣️")==0 ||
event.body.indexOf("💖")==0 ||
event.body.indexOf("💗")==0 ||
event.body.indexOf("💓")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/uPBir34.mp4",
"https://drive.google.com/uc?id=1lh3e7y9DJbg9PBT0uqQukyGpdS25CYwZ",
      "https://drive.google.com/uc?id=1mFt0aZYF4D1cUvgG5K_CQGzJHcjMbnOD",
      "https://drive.google.com/uc?id=1mJnDNssz52TJlrwGh92i_nTk_sbnm2h7",
      "https://drive.google.com/uc?id=1mBNtCfEu03t9m8rCtY0me3DxwN3vQ5J7",
      "https://drive.google.com/uc?id=1mfI-Ik1nbwupNeEXmjNmVIut4hf6VUR0",
      "https://drive.google.com/uc?id=1mYbChhNIl0wvLCi6kwIV1vNSPHsjUfEO",
      "https://drive.google.com/uc?id=1mHCtHuM_mWH1grzAS_p4NXQjrV6uBm_M",
      "https://drive.google.com/uc?id=1mWIVbyfzsT3PdqOuGvlEUPrNP2lPIyBg",
      "https://drive.google.com/uc?id=1mKjxUOXZ09vYIvZss7L2rujMjH8dIrDu",
      "https://drive.google.com/uc?id=1mgHx9uu38Jwx2XH5Dd0Hf4J6YremfsLr",
      "https://drive.google.com/uc?id=1mLDgS5dBKl3_kXx-LRoMGK37cy2ia96b",
      "https://drive.google.com/uc?id=1miM7bwmC6M9Kb7KKY8O9rv-KcQK6Aizf",
        ];
     var callback = () => api.sendMessage({body:`•—»✨[ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ]✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n❂\n  তোমাকে যতোদিন না নিজের করে পাচ্ছি,ততোদিন আমি অপূর্ণ থাকবো"!!🥺💫🖤\n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🕌\n[⌛]  𝐃𝐚𝐭𝐞  : ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vt = Math.floor(dcm % 60);
const res = await
axios.get(`https://noobs-api-d7bl.onrender.com/text`);
var shaon = res.data.data;
let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
      const PREFIX = config.PREFIX;
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/2024.mp4")).on("close",() => callback());
}

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
    }
  module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["😘"] == "undefined" || data["😘"] == true) data["😘"] = false;
  else data["😘"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["😘"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      





    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
