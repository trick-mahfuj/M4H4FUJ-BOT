module.exports.config = {
  name: "autoreact01",
  version: "1.1.1",
  hasPermission: 0,
  credits: "Shaon Ahmed",
  description: "Bot React",
  usePrefix: true,
  commandCategory: "No Prefix",
  cooldowns: 0,
};
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body ? event.body.toLowerCase() : '';
if (haha.includes(" ")){
const dipto = ['🐸','🐥','🥺','🤣','🙄','😊','🖤','😍','😘','😁','🙂','😞','😏','😎','🤟','🤫','🥰','😚','🥱','🤭','🤫','😤','🤓','😽','🤍','♥️','💓','😙','🥀','😳','😀','☺️','😴','🥱','😒','😓','🥵','🥶','😈','👻','🥸','🤧','😇','🌚','😹','😻','😼','😽','🙀','😿','😾','❤️','🙈','💦','🙋','😱','🤔','😤','🧐','🤨','🤫','🤪','😭','😂','😅','🤤','😋','😛','😝','😜','😶','😑','😐','🤗','😥','😷','🤕','🤯','🤢','🤬','😡','😕','🙁','☹️','😥','😟','😵','😫','😖','🌝','😣','😲','😰']

const r = dipto[Math.floor(Math.random() * dipto.length)];
return api.setMessageReaction(r, event.messageID, (err) => {}, true)
    }
};

module.exports.run = function (){}