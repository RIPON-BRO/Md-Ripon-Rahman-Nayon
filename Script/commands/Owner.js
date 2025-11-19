const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "owner",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAHADAT SAHU",
  description: "Show Owner Info with styled box & random photo",
  commandCategory: "Information",
  usages: "owner",
  cooldowns: 2
};

module.exports.run = async function ({ api, event }) {

  
  const info = `
╔══════════════════════════════╗       ✨ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 ✨ ╚══════════════════════════════╝ ► 👑 𝐍𝐚𝐦𝐞 : 𝐌𝐃 𝐑𝐈𝐏𝐎𝐍 𝐑𝐀𝐇𝐌𝐀𝐍 𝐍𝐀𝐘𝐎𝐍 ► 🧸 𝐍𝐢𝐜𝐤 𝐍𝐚𝐦𝐞 : 𝐍𝐚𝐲𝐨𝐧 ► 🎂 𝐀𝐠𝐞 : 𝟏𝟖+ ► 💘 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝐦𝐚𝐫𝐫𝐢𝐞𝐝 ► 🎓 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧 : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭 ► 📚 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝐇𝐒𝐂 ► 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : 𝐑𝐚𝐧𝐠𝐩𝐮𝐫 ╔══════════════════════════════╗         🔗 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐋𝐈𝐍𝐊𝐒 ╚══════════════════════════════╝ ► 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : 𝐟𝐚𝐜𝐞𝐛𝐨𝐨𝐤.𝐜𝐨𝐦/𝐦𝐝𝐫𝐢𝐩𝐨𝐧𝐫𝐚𝐡𝐦𝐚𝐧𝐧𝐚𝐲𝐨𝐧 ► 𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐞𝐫 : 𝐦.𝐦𝐞/𝐦𝐝𝐫𝐢𝐩𝐨𝐧𝐫𝐚𝐡𝐦𝐚𝐧𝐧𝐚𝐲𝐨𝐧 ► 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 : 𝟎𝟏𝟔𝟎𝟎𝟔𝟎𝟕𝟓𝟗𝟒 ► 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : 𝐭.𝐦𝐞/𝐫𝐢𝐩𝐨𝐧𝐛𝐫𝐨
`;

  const images = [
    "https://i.imgur.com/8WBso8x.png",
    "https://i.imgur.com/0VZu5eY.png",
    "https://i.imgur.com/bkixgPK.jpeg",
    "https://i.imgur.com/z6G6L4c.jpeg"
  ];

  const randomImg = images[Math.floor(Math.random() * images.length)];

  const callback = () => api.sendMessage(
    {
      body: info,
      attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
    },
    event.threadID,
    () => fs.unlinkSync(__dirname + "/cache/owner.jpg")
  );

  return request(encodeURI(randomImg))
    .pipe(fs.createWriteStream(__dirname + "/cache/owner.jpg"))
    .on("close", () => callback());
};
