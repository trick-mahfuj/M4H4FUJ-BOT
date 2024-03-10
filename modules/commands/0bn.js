module.exports.config = {
  'name': 'bn',
  'version': "1.0.1",
  'hasPermssion': 0x0,
  'credits': "Mirai Team",
  'description': "Text translation",
   usePrefix: false,
  'commandCategory': "media",
  'usages': "[en/ko/ja/vi] [Text]",
  'cooldowns': 0x5,
  'dependencies': {
    'request': ''
  }
};
module.exports.run = async ({
  api: _0x263f61,
  event: _0xace64b,
  args: _0x4bacdf
}) => {
  const _0x548817 = global.nodemodule.request;
  var _0x298758 = _0x4bacdf.join(" ");
  if (_0x298758.length == 0 && _0xace64b.type != "message_reply") {
    return global.utils.throwError(this.config.name, _0xace64b.threadID, _0xace64b.messageID);
  }
  var _0x12cf90 = _0x298758.slice(0, _0x298758.indexOf(" ->"));
  var _0x24fee7 = _0x298758.substring(_0x298758.indexOf(" -> ") + 4);
  if (_0xace64b.type == "message_reply") {
    _0x12cf90 = _0xace64b.messageReply.body;
    if (_0x298758.indexOf("-> ") !== -1) {
      _0x24fee7 = _0x298758.substring(_0x298758.indexOf("-> ") + 3);
    } else {
      _0x24fee7 = global.config.language;
    }
  } else if (_0x298758.indexOf(" -> ") == -1) {
    _0x12cf90 = _0x298758.slice(0, _0x298758.length);
    _0x24fee7 = global.config.language;
  }
  return _0x548817(encodeURI("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=bn&dt=t&q=" + _0x12cf90), (_0x40dfea, _0x33c809, _0x2d81a1) => {
    if (_0x40dfea) {
      return _0x263f61.sendMessage("An error has occurred!", _0xace64b.threadID, _0xace64b.messageID);
    }
    var _0x1186ec = JSON.parse(_0x2d81a1);
    var _0x523425 = '';
    _0x1186ec[0].forEach(_0x270ade => _0x270ade[0] ? _0x523425 += _0x270ade[0] : '');
    _0x263f61.sendMessage("🍂বাংলা-কনভাট🌸: " + _0x523425 + "\n\n\n🌿𝚂𝙷𝙰𝙾𝙽 𝙿𝚁𝙾𝙹𝙴𝙲𝚃🌸", _0xace64b.threadID, _0xace64b.messageID);
  });
};
