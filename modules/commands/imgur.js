module.exports.config = {
  name: "imgur",
  version: "30.0.10",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "imgur upload",
  usePrefix: true,
  commandCategory: "imgur",
  usages: "[reply to image]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var linkanh = event.messageReply.attachments[0].url || args.join(" ");
  if(!linkanh) return api.sendMessage('╭•┄┅════❁SHAON PROJECT❁════┅┄•╮\n\n আসসালামু আলাইকুম-!!🖤💫\n আপনি যেই ছোবি টাকে Imgur link বানাতে চান সেই ছোবি টা imgur লিখে রিপ্লাই করুন \n\n╰•┄┅════❁SHAON PROJECT❁════┅┄•╯', event.threadID, event.messageID)
const res = await axios.get(`https://mx47g4-8888.csb.app/imgurv2?link=${encodeURIComponent(linkanh)}`);    
var img = res.data.uploaded.image;
  return api.sendMessage(`"${img}",`, event.threadID, event.messageID);
}
