module.exports.config = {
  name: "🥰",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "sand best islamick Video",
  usePrefix: true,
  commandCategory: "noprefix",
  usages: "🥰",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};
module.exports.handleEvent = async ({ api, event, Threads }) => {
    if (event.body.indexOf("🥰")==0 || (event.body.indexOf("😍")==0) || event.body.indexOf("🤩")==0 ||
event.body.indexOf("🥳")==0 ||
event.body.indexOf("😊")==0 ||
event.body.indexOf("😗")==0 ||
event.body.indexOf("😙")==0 ||
event.body.indexOf("😚")==0 ||
event.body.indexOf("🥰")==0 ||
event.body.indexOf("🥰")==0) {
    const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://drive.google.com/uc?id=1Z-6qll7ACq8Ka1pKpnC3guGcXU0gNvoL",
    "https://drive.google.com/uc?id=1YHm_oC7xItLokbt_MCWu-VdMGavvx-G4",
    "https://drive.google.com/uc?id=1YvDanPpMZKK4s547h9Bsf0uL719AvVEG",
    "https://drive.google.com/uc?id=1YemK-RQH3gUX_I9ThgNJLC89yPF-VtEY",
    "https://drive.google.com/uc?id=1YN25UGQQCpZvN29Y5a84ZCYlL-rc_JL_",
    "https://drive.google.com/uc?id=1YXbox7CyKc6Gu-56WAtAPlxSTs51Yo9n",
    "https://drive.google.com/uc?id=1YNVe1cEM0JM3lj7sU49tuJn4-8ASYVd8",
    "https://drive.google.com/uc?id=1ZDjeuPfIyUkovgmJCRsE7vE67aOe0Sp2",
    "https://drive.google.com/uc?id=1YcJciCtidcUxRGihUyx2uDgDg3cBYUE5",
    "https://drive.google.com/uc?id=1ZIE6xPwXg6_oxG0K7xCWKS04MNyag3QL",
    "https://drive.google.com/uc?id=1ZF9cOD_fj26rpWDf6WOjUQNz8QuRJhkv",
    "https://drive.google.com/uc?id=1ZAXQwA5BsnN555FrWii2bb-kdLaoMxLP",
    "https://drive.google.com/uc?id=1YvWRk-wQ_I8kuJzOuw2Mx7Q-Rrgbw6CT",
    "https://drive.google.com/uc?id=1Z8vKgEBUkKbwgMPvv_6K_lvVsrBca_X8",
    "https://drive.google.com/uc?id=1ZG-BJq7pP4oh93U6tHIKuYvZ8XiidlCV"
        ];
     var callback = () => api.sendMessage({body:`•—»✨ [ 𝐏𝐫𝐞𝐟𝐢𝐱 𝐄𝐯𝐞𝐧𝐭 ] ✨«—•\n•┄┅════❁🌺❁════┅┄•\n\n .\n\nএক আকাশ শুন্যতার মাঝে তুমি এক পূর্ণতার ছায়া..

🦋~হাজার মানুষের ভিড়ে তুমি এক অদ্ভুত মায়া!~😊 ❤️🥀\n\n︵🤍 \n\n•┄┅════❁🌺❁════┅┄•\n•—»✨[ 𝐒𝐡𝐚𝐨𝐧 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 ]✨«—•\n[🐰]  𝗣𝗿𝗲𝗳𝗶𝘅 : [ ${PREFIX} ]\n[🫰] 𝐍𝐎𝐏𝐑𝐄𝐅𝐈𝐗  : 🥰\n[⌛]  𝐃𝐚𝐭𝐞  : ${Date.now() - timeStart} 𝐓𝐢𝐦𝐞\n[🍒]  ${global.config.BOTNAME}`,attachment: fs.createReadStream(__dirname + "/cache/2024.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/2024.mp4"), event.messageID);
  const timeStart = Date.now();
  const dcm = process.uptime(); 
 var anh = Math.floor(dcm / (60 * 60));
  var la = Math.floor((dcm % (60 * 60)) / 60);
  var vt = Math.floor(dcm % 60);
const res = await
axios.get(`https://zctdmg-8888.csb.app/text`);
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
  if (typeof data["🥰"] == "undefined" || data["🥰"] == true) data["🥰"] = false;
  else data["🥰"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
api.sendMessage(`${(data["🥰"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}      





    }
module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {

   };
