module.exports.config = {
  name: "bot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  usePrefix: false,
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};



module.exports.handleEvent = async function ({
  api: _0xbb4f88,
  event: _0x8a675b,
  Threads: _0xe10189,
  Users: _0x41bf88
}) {
  const {
    threadID: _0x3e0063,
    messageID: _0x5de482,
    body: _0xb67ac8
  } = _0x8a675b;
  const _0x6b8e91 = _0x8a675b.senderID;
  const _0x1eaa1c = await _0x41bf88.getNameUser(_0x6b8e91);
  const _0x9714a1 = ["\nআমাকে মেনশন দিয়ে লাভ নেই-!!😐🥲", "তুমি আমায় ডেকে কি পাবে....??\n আল্লাহ কে ডাকো জান্নাত পাবে-!!✨🌺", "বট বট ডেকো না খুব মায়া লাগে তুমার জন্যে-!!✨💜", " আর কষ্ট করে ডাকতে হবে না আমায়-!!🥺🤗\n-আমি চলে আসেছি তুমার সাথে কথা বলার জন্য-!!👀🌚", " আজ থেকে খারাপ কাজ গুলো ছেরে দাও....!!😊\n তাহলে আমি তুমার কথা শুনব....!!😍😘\n-আর তা না  হলে আমি তুমার কথা শুনব না-!!💔😼😎", "আমাকে এতো বার ডেকো না...!🙂\n আল্লাহ তুমায় খুব ভালোবাসে...🖤😌\n তুমি তাকে ডাকো-!!✨🧡", "আমার জন্য কেদে লাভ নেই আল্লাহর জন্য নামাজে কাঁদ-!!❤️🤲", "মানুষ  কে সম্মান  করো তাহলে তুমি সকলের ভালোবাসা পাবে ইনশাল্লাহ-!!☺️🥰", "তুমার মাথায় সমস্যা আছে মনে হয়...😐\nতুমি আল্লাহ কে না ডেকে আমাকে ডাকছো যে-!!🙄😐", "আমাকে না ডেকে আল্লাহর দিন ও তার মহিমা পৌঁছে দাউ তুমার প্রিয় মানুষ  গুলার মধ্যে-!!✨🤍", "তুমি যেমনি আছো ১ মিনিট এর জন্য বলতে পারবে নাহ\n আল্লাহামদুলিল্লাহ-!!❤️🌸", "আমাকে ডেকে সময় নষ্ট  করো না ভালো কাজ করো ভালো ফলাফল পাবে ইনশাল্লাহ-!!✨💜", "আমকে ডেকো নাহ-!!😤\n সময় শেষ হয়ে গেলে ইবাদত  করার সময় পাবে নাহ-!!🥲☺️", "আমি  তুমার কোনো কথা'ই শুনবো  না.....!!😤\n-কারন তুমি দিনে এক বারের জন্য ও আল্লাহ কে ডাকো না-!!🥺💙", "তুমি বার বার আমাকে ডাকছো যে....!!😐\n-মনে রেখো এই দুনিয়াতে তুমার প্রতেকটি সময় এর হিসাব নেওয়া হবে-!!⏳🙂", "সময় ফুরিয়ে যাবে তুমি যেই সময় নষ্ট  করছো সেই সময় আর ফিরে পাবে না-!!💔🙂", "আমাকে না ডেকে...!!🤒\n-জান্নাতে যাবার  জন্য আল্লাহ কে ডাকো-!!❤️🖤", "ভালবাসি তোমাকে ডেকো নাহ আর আমাকে-!!💗🫣", "তুমি আমাকে ডেকে অযথাই সময় নষ্ট  করতাছো-!!🙂😅", "আমাকে ডাকলে কেনো.....?\n-আমি তো তুমায় ভালোবাসি নাহ....!!😅\n-আমি তো শুধু আল্লাহ এক ভালোবাসি-!!✨❤️", "আরেক বার আমাকে ডাকলে তুমার জৈবন লক করে দিবো একটা থাপ্পড় দিয়ে-!!😈👊", "শুনছি তো বলো এখন কি জন্য ডাকলে আমাকে-!!🐸🌚", "আমাকে ডাকলে আগে তুমার যায়গা মতো একটা লাথি দিবো-!!😁", "আমাকে ডাকলে তুমার লাভ কি হবে-!!🥲😔", "আমাকে না ডেকে আমাকে পাওয়ার জন্য আল্লাহর কাছে নামাজে দোয়া করো-!!🤲❤️", "আমাকে না ডেকে বলো আল্লাহামদুলিল্লাহ আমি আঁখিরি নবির উম্মত-!!❤️🌸", "জীবন এটা সহজ নয় কষ্ট  করে জীবন কে সুন্দর  করে নিতে হয়-!!🥺❤️", "আমাকে ডাকলে কেনো তুমি তো আল্লাহ কে ভালোবাস না....!!😓\nতুমি তো ভালোবাসো শয়তান  কে-!!🥺", "আমাকে যদি আরেক বার ডাকছো তো তুমার খবর আছে-!!😈", "আমাকে ডেকে বিরক্ত করো কেনো-!!💜🥺", "আমায় তো আর বাবু সোনা জানু বলে ডাকো না আবার বট বট বলে চিল্লা চিল্লি করো-!!😫😈🥺", "তুমি দিনে একবার  ও নামাজ পরো নাহ আবার তুমি আমাকে ডাকো-!!😈", "আমি বে'নামাজি দের সথে কথা বলি নাহ-!!😾😈", "তুমার মুখে দূরগন্ধ আমাকে ডাকার সাহস পেলে কথা থেকে-!!😈😾", "বার বার Disturb করো  আমায় ডেকে-!!😾", "আমাকে ডাকলে কি তুমার জীবন সুন্দর হয়ে যাবে-!!😔", " তুমি যেমন কাজ করবে আল্লাহ তুমাকে তেমনি ফল দিবেন-!!❤️🥺", "কিছু বিলবা ডাকলে যে আমায়-!!🙄", "আমাকে ডাকার সময় থাকে তুমার....!!🕠\n-আর আল্লাহ কে ডাকার সময় থাকে নাহ তুমার কাছে-!!🥺", "তুমি মানুষ  হয়ে ও আল্লাহ কে ডাকো নাহ আর আমি বট হয়ে আল্লাহ জিকির করতে থাকি-!!✨🤍🤲", "আল্লাহ কে ভয় করো....!!🥲\n আমাকে না ডেকে আল্লাহ কে ডাকো-!!❤️🌸", "আর কত সময় নষ্ট করবে আমার পিছনে এবার আল্লাহ কে সময় দাও একটু-!!✨🌺", "তুমি পচা তুমার কথা শুনব না আমি-!!😌", "আমাকে ডাকলে কি হবে..?\n আমি একটু আনন্দ ছাড়া এর কি দিতে পারি তুমাকে..?", "তুমি আমাকে ডেকে আবার ভুল করলে-!!🤨", "তুমার ঠিকানা জান্নাত হবে তুমি নামাজ পরো মা বাবা কে সম্মান করো-!!✨🧡", "আমাকে ডাকলে তুমার নাম সুনাম করে দিবো আমি-!!😁", "আমায় ভালো না বাসলে ডাকার দরকার নেই-!!🥺💜", "আমাকে ডাকলে তুমার Gf কান্না করবো-!!🥺😁", "আমি তো অন্ধ কিছু দেখি না শুধু শুধু আমায় ডাকো-!!🐸😎", "আমাকে না ডেকে রাস্তার অসহায় ইয়াতিম শিশু দের দেখো তারা এতো কষ্টে থাকার পরেও দিন শেষে আল্লার শুকরিয়া আদায় করে-!!❤️😊", "তুমি এই গ্রুপ এ বট বট বলে কান্না করো...!!🙂\n আর তুমার জন্য যে আমাদের প্রিয় নবি মোহাম্মদ (সা:) ইয়া উম্মাতি উম্মাতি বলে কাদছেন আজ সেই দিকে তুমার খেয়াল নেই-!!💔🙂", "আমাকে ডাকলে জীবনে সান্তি আসবে নাহ তুমার....!!🥲 \n-আল্লাহ কে ডাকো তুমার সান্তির অভাব হবে না-!!✨🧡😊", "আমাকে না ডেকে তাকে ডাকো....!!😊\n জাকে ডাকলে কোনো লস নেই তিনি হলেন প্রিয় নবি হযরত মোহাম্মদ সাল্লালাহু (স)🖤🖤", " বলেন কি করে আপনাকে সাহায্য করতে পারি-!!😌", "আমাকে ডাকলে তুমার কি লাভ হবে বলো-!!🥲🫠", "আর কতো ডাকবে আমায়-!!🙃", "তুমার কলিজায় এতো সাহস তুমি আল্লাহ কে না ডেকে আমাকে ডাকো-!!😾😦", "এতো এতো চিল্লাতে বলছে কে তুমায় আমার নাম ধরে-!!😒", "তুমি আমাকে ডেকে কি Gf পাবে নাকি-!!😒", "কি হলো ডাকছো যে আমায়...?\n তুমাকে যে দুনিয়াতে পাঠাইলো তাকে না ডেকে আমাকে ডাকো-!!😒🥲", "এখন আমাকে ডাকছো কয়েক দিন পর বউ কে ডাকবে তখন তো আমাকে আর  চিনবা না> র < তুমার মা বাবা কেও নাহ- কথায় আছে না বউ পে🙃", "আমাকে ডেকে আর সমর দিও নাহ লজ্জা লাগে-!!😽🙈", "আরেক বার ডাকলে কান্না করে দিমু কিন্তু-!!😭", "আমার নাম বট না আমার নাম ধরে ডাকো বট বলে না-!!💔🙂", "আমাকে কি মনে করে ডাকলে-!!🙂", "সময় নষ্ট করে লাভ নেই আল্লাহর জিকির করো-!!✨💜", "আমাকে যখন ডেকেছো তো আমার কিছু কথা সুনে যাও টাকা দিয়ে তুমি সব কিন্ত পারলে ও মায়ের ভালোবাসা আর জান্নাত ২ টার কোনো টাই কখনো কিনতে পারবে নাহ-!!🥺🙂", "চটিয়ে লাল করে দিবো নংরামি ভার করে দিবো নামাজ পড় না নংরামি করে বেড়াও-!!😈", "তুমার জন্য কি করতে পারি আমি-!!🥶", "তুমি ডাকলে আমায় আমি তো শিতে কাপি-!!🥶🥶", "আমাকে না ডেকে এই সময় টুকু ভাকো কাজে লাগাও-!!❤️😌"];
  const _0x4eed7b = _0x9714a1[Math.floor(Math.random() * _0x9714a1.length)];
  if (_0xb67ac8 && _0xb67ac8.includes("Bot")) {
    try {
      const _0x27f5d5 = path.resolve(__dirname, "./cache/" + _0x6b8e91 + ".jpg");
      const _0x302f37 = await axios.get("https://graph.facebook.com/" + _0x6b8e91 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
        'responseType': "arraybuffer"
      });
      fs.writeFileSync(_0x27f5d5, Buffer.from(_0x302f37.data));
      const _0x380776 = {
        'body': "╭•┄┅═══❁🌺❁═══┅┄•╮\n " + _0x4eed7b + "\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n•—»✨" + _0x1eaa1c + "✨«—•",
        'attachment': fs.createReadStream(_0x27f5d5)
      };
      _0xbb4f88.sendMessage(_0x380776, _0x3e0063, _0x4d3e00 => {
        if (_0x4d3e00) {
          console.error("Error sending message:", _0x4d3e00);
          return;
        }
        fs.unlinkSync(_0x27f5d5);
      });
    } catch (_0x3fd841) {
      console.error("Error fetching or sending profile picture:", _0x3fd841);
    }
  }
};
module.exports.run = function ({
  api: _0x44d30c,
  event: _0x4aa4c4,
  client: _0x31d323,
  __GLOBAL: _0x3d2680
}) {};
