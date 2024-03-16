module.exports.config = {
  name: "add",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "random love story video",
  usePrefix: true,
  commandCategory: "video",
  usages: "random",
  cooldowns: 30,
};
exports.run = async ({api, event, args}) =>{
 try {
const URL = event.messageReply.attachments[0].url;
        const response = await axios.get(`https://mx47g4-8888.csb.app/imgurv2?link==${encodeURIComponent(URL)}`);
        const imgurLink = response.data.uploaded.image;
        const fileExtension = path.extname(imgurLink);
   let query2;
        if (fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png') {query2 = 'addPhoto';} 
else if (fileExtension === '.mp4') {
  query2 = query;} else {
            api.sendMessage('Invalid file format.', event.threadID, event.messageID);
            return;
        }
        const svRes = await axios.get(`https://gmh8mf-3000.csb.app/random?addVideon&url=${imgurLink}`);
const data = svRes.data;
     //   console.log(data);
        api.sendMessage(`✅ | ${data.data}\n\n🔰 | ${data.data2}`, event.threadID, event.messageID);
    } catch (error) {console.error('Error:', error);api.sendMessage(`Failed to convert image.\n${error}`, event.threadID, event.messageID);
}
}
