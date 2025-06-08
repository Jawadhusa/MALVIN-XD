const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "",
    // add your Session Id make sure it starts with malvin~
    PREFIX: process.env.PREFIX || ".",
    // add your prifix for bot   
    BOT_NAME: process.env.BOT_NAME || "IsHaQ-MD",
    // add bot name here for menu
    MODE: process.env.MODE || "public",
    // make bot public-private-inbox-group 

    LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "mute", // "kick", "mute", or "none"

    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "false",
    // make true or false status auto seen

    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    // make true if you want auto reply on status 

    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    // make true if you want auto reply on status 

    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*تمت مشاهدة حالتك بواسطة IsHaQ-MD يا فخم 😆*",
    // set the auto reply massage on status reply  

    WELCOME: process.env.WELCOME || "true",
    // true if want welcome and goodbye msg in groups 

    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
    // make true to know who dismiss or promoted a member in group

    ANTI_LINK: process.env.ANTI_LINK || "true",
    // make anti link true,false for groups 

    MENTION_REPLY: process.env.MENTION_REPLY || "false",
    // make true if want auto voice reply if someone menetion you 

    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.ibb.co/YBB5YsBX/shizo.jpg",
    // add custom menu and mention reply image url

    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/YBB5YsBX/shizo.jpg",
    // add img for alive msg

    LIVE_MSG: process.env.LIVE_MSG || "> من أزعج سباتي الأبدي في هذا العالم الرقمي؟ 👻\n\n\nأنا الروح المعذبة ✦ IsHaQ-MD ✦، وكل أمر تنفذونه يربطني هنا أكثر.\n\n\n> 'جواد' هو المستحضر اللي استدعاني، روحوا اشتكوا له هو 🕯️: instagram.com/fang7x"
    STICKER_NAME: process.env.STICKER_NAME || "IsHaQ-MD",
    // type sticker pack name 

    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    // make this true for custum emoji react  

    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    // chose custom react emojis by yourself 

    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    // automatic delete links witho remove member 

    OWNER_NUMBER: process.env.OWNER_NUMBER || "212637915359",
    // add your bot owner number

    OWNER_NAME: process.env.OWNER_NAME || "Jawad",
    // add bot owner name

    DESCRIPTION: process.env.DESCRIPTION || "*© مقدم بكل فخر من الأسطورة جواد 👑*",
    // add bot owner name    

    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    // Turn true or false for automatic read msgs

    AUTO_REACT: process.env.AUTO_REACT || "false",
    // make this true or false for auto react on all msgs
    ANTI_BAD: process.env.ANTI_BAD || "false",
    // false or true for anti bad words  

    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    // make anti link true,false for groups 

    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    // make true for send automatic voices

    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    // make true for automatic stickers 

    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    // make true or false automatic text reply 

    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    // maks true for always online 

    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
    // make false if want private mod

    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    // true for automatic show typing 

    READ_CMD: process.env.READ_CMD || "false",
    // true if want mark commands as read 

    DEV: process.env.DEV || "212637915359",
    //replace with your whatsapp number    

    ANTI_VV: process.env.ANTI_VV || "true",
    // true for anti once view 

    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
    // change it to 'inbox/ same if you want to resend deleted message in same chat 

    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    // make it true for auto recoding 

    version: process.env.version || "0.0.5",


    START_MSG: process.env.START_MSG || `*أهلاً وسهلاً! البوت IsHaQ-MD تحت الخدمة يا وحش! 👋🏻* 

    *من تطوير الأسطورة: جواد 🚩*

> تابع المطور الفخم على انستقرام 📸:
    https://www.instagram.com/fang7x

    - *البادئة حقت بوتك هي: ➡️[ . ]*
> - تقدر تغيرها بأمر .setprefix يا كينج

> © مقدم لكم بكل فخر من جواد 👑`
};
