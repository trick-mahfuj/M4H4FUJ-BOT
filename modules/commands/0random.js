module.exports.config = {
  name: "random",
  version: "11.9.7",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "random love story video",
  usePrefix: true,
  commandCategory: "video",
  usages: "random",
  cooldowns: 30,
};
exports.run= async ({api, event, args}) =>{
try {
const query = args.join(" ") || random;
    const res = await axios.get(`https://gmh8mf-3000.csb.app/random?video=${query}`);
    const imgUrl = res.data.url;
    const ex = path.extname(imgUrl);
    const imgRes = await axios.get(imgUrl, { responseType: 'arraybuffer' });
    const filename = __dirname + `/cache/shaon2${ex}`;
    fs.writeFileSync(filename, Buffer.from(imgRes.data, 'binary'));
    api.sendMessage({
        body: `😘random video🥰`,
        attachment: fs.createReadStream(filename),
      },
      event.threadID,
      () => fs.unlinkSync(filename), event.messageID);
  } catch (error) {
    api.sendMessage('An error occurred while fetching the media.', event.threadID, event.messageID);
  }
  }
};
