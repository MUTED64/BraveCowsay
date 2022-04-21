let cowLanguageArray = [
  "🍳",
  "三进制",
  "第一次",
  "~",
  "贝拉",
  "哞",
  "🔨",
  "第二次",
  "困难",
  "勇敢",
  "不怕",
  "终极",
  "拖拉机",
  "乱创",
  "牛牛",
  "🐮",
];

function cowEncode() {
  let humanSay = document.getElementById("humanSay").value;
  let cowSay = document.getElementById("cowSay");
  let hexEncoded = hexEncode(humanSay);
  let cowStr = hex2cow(hexEncoded).join("");
  cowSay.value = "勇敢牛曰：" + cowStr;
}

function cowDecode() {
  let cowSay = document.getElementById("cowSay").value;
  cowSay = cowSay.replace("勇敢牛曰：", "");
  let humanSay = document.getElementById("humanSay");
  let humanStr = hexDecode(cow2hex(cowSay));
  humanSay.value = humanStr;
}

function hexEncode(str) {
  bytes = new TextEncoder().encode(str);
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}

function hexDecode(hex) {
  return new TextDecoder().decode(hex2Bytes(hex));
}

function hex2Bytes(hex) {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i !== bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

function hex2cow(str) {
  let pos = 0;
  let len = str.length;
  let cowStr = new Array();
  for (let i = 0; i < len; i++) {
    let s = str.substr(pos, 1);
    let v = parseInt(s, 16);
    cowStr.push(cowLanguageArray[v]);
    pos += 1;
  }
  return cowStr;
}

function cow2hex(str) {
  for (let i = 0; i < cowLanguageArray.length; i++) {
    if (str.indexOf(cowLanguageArray[i]) != -1) {
      str = str.replaceAll(cowLanguageArray[i], i.toString(16));
    }
  }
  return str;
}
