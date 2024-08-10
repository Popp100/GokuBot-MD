import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botnumber = '' //Ejemplo: +593939005387
global.confirmCode = ''

//• ↳𝑺𝑶𝑳𝑶 𝑫𝑬𝑺𝑨𝑹𝑹𝑶𝑳𝑳𝑨𝑫𝑶𝑹𝑬𝑺 𝑨𝑷𝑹𝑶𝑩𝑨𝑫𝑶𝑺
global.owner = [
['224620780851', '👑 créateur 👑', true],
['22891442720', 'proprietaire 👑', true],
['22891442720', 'proprietaire 👑', true]]

//• ↳utilisateurs!
global.mods = ['224620780851']

global.suittag = ['22462078085113']
global.prems = []

//• ↳ ◜filigranes◞ • 💌
global.packname = '⪛✰ 𝐆𝐨𝐤𝐮 𝐁𝐨𝐭 - 𝐌𝐃 ✰⪜'
global.author = 'Belmont 👑'
global.wm = '✨◌*̥₊ IsseiBᴏᴛ-MD ◌❐⚡༉'
global.titulowm = 'IsseiBot-MD 🍟'
global.titulowm2 = 'Jostin'
global.igfg = 'BELMONT'
global.botname = 'Issei Bᴏᴛ - MD 🚩'
global.dev = '👑 Developed By • ✨ Belmont'
global.textbot = 'Issei𝗕𝗼𝘁 : belmont 🚩'
global.vs = '2.0.2'

//• ↳ ◜𝑰𝑴𝑨𝑮𝑬S◞ • 🌇
global.imagen1 = fs.readFileSync('./Menu.jpg')
global.imagen2 = fs.readFileSync('./Menu2.jpg')
global.imagen3 = fs.readFileSync('./Menu3.jpg')

//• ↳ ◜𝑳𝑰𝑵𝑲𝑺◞ • 🌿
global.gp1 = 'https://wa.me/224620780851' //Grupo Oficial De Goku
global.gp2 = 'https://wa.me/224620780851' //Grupo Oficial De Goku 2 
global.gp3 = 'https://wa.me/224620780851' //KiraBot Y Goku
global.gp4 = 'https://wa.me/224620780851' //NilouBot Y Goku 𝗙𝗔𝗟𝗧𝗔
global.comunidad1 = 'https://wa.me/224620780851' //Comunidad Goku
global.comunidad2 = 'https://wa.me/224620780851' //Comunidad de Moonligth
global.channel = 'https://wa.me/224620780851' //Canal Oficial
global.channel2 = 'https://wa.me/224620780851' //Canal MoonLight Team 
global.yt = 'https://www.youtube.com/@Jostin207Oficialmanito' //Canal De Youtube
global.md = 'https://github.com/Popp100/IsseiBot-MD' //Github Oficial
global.fb = 'https://www.facebook.com/JostinOfici' //Facebook Del Propietario
global.tiktok = 'https://tiktok.com/@gokubot_md' //Cuenta tiktok

//• ↳ ◜TIME◞ • 🕒
global.d = new Date(new Date + 3600000);
global.locale = 'tg';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nGoku`;
global.nomorown = '224620780851';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.jpg')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

//• ↳ ◜𝑨𝑷𝑰𝑺 𝑭𝑼𝑵𝑪𝑰𝑶𝑵◞ 👑
global.openai_org_id = 'org-3';
global.openai_key = 'sk-0';
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDiosV2']; // ['BrunoSobrino_2']
global.itsrose = ['4b146102c4d500809da9d1ff'];

global.APIs = {
  ApiEmpire: 'https://api-brunosobrino.zipponodes.xyz',
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat: 'https://api.popcat.xyz',
  xcoders: 'https://api-xcoders.site',
  vihangayt: 'https://vihangayt.me',
  erdwpe: 'https://api.erdwpe.com',
  xyroinee: 'https://api.xyroinee.xyz',
  nekobot: 'https://nekobot.xyz'
},
global.APIKeys = {
  'https://api.xteam.xyz': `${keysxteam}`,
  'https://api.lolhuman.xyz': 'GataDios',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://api.zahwazein.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren',
  'https://api.xyroinee.xyz': 'uwgflzFEh6'
};

/** ************************/
global.cheerio = cheerio;
global.fs = fs;
global.fetch = fetch;
global.axios = axios;
global.moment = moment;
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase();
    const emot = {
      niveau : '🧬Niveau',
 étoiles : '🌟 Étoile',
 exp : '⚡Expérience',
 banque : '🏦 Banque',
 diamant : '💎 Diamant',
 santé : '❤️San',
 Kyubi : '🌀Magie',
 compte : '💰 Token',
 émeraude : '💚 Émeraude',
 résistance : '✨Énergie',
 rôle : '💪Classement',
 prime : '🎟️Premium',
 xppoint : '📧Points d'expérience',
 or : '👑 Or',
 poubelle : '🗑Corbeille',
 cristal : '🔮 Cristal',
 intelligence : '🧠 Intelligence',
 chaîne : '🕸️Chaîne',
 keygold : '🔑Clé d'Or',
 clé de fer : '🗝️ clé de fer',
 emas : '🪅Piñata',
 canne à pêche : '🎣 Canne à pêche',
 gemmes : '🍀 Gemmes',
 baguette magique : '⚕️Baguette magique',
 mana : '🪄Sort',
 agilité : '🤸‍♂️ Agilité',
 cristal sombre : '♠️ Dark Crystal',
 fer : '⛓️ Fer',
 rock : '🪨Rock',
 potion : '🥤 Potion',
 en haut : '💼En haut',
 vol : '🚔 Vol',
 updater : '🧰 Augmenter la mise à jour',
 bois : '🪵 Bois',
 force : '🦹‍♀️ Force',
 arc: '🏹Arc',
 armure : '🥼 Armure',
 arc : '🏹 Super arc',
 pic : '⛏️ Pic',
 épée : '⚔️ Épée',
 commun : '📦Boîte commune',
 peu commun : '🥡 Boîte peu commune',
 mythique : '🗳️ Coffret Mythique',
 légendaire : '🎁 Coffret Légendaire',
 petFood : '🍖 Nourriture pour animaux',
 animal : '🍱 Boîte pour animaux de compagnie',
 bibitanggur : '🍇Pépins de raisin',
 bibitapel : '🍎 Pépin de Pomme',
 bibitjeruk : '🍊 Graines d'orange',
 bibitmangga : '🥭Graine de mangue',
 bibitpisang : '🍌 Graines de banane',
 ayam : '🐓Poulet',
 babi : '🐖 Cochon',
 Sanglier : '🐗 Sanglier',
 taureau : '🐃 Taureau',
 buaya : '🐊Crocodile',
 chat : '🐈 Chat',
 centaure : '🐐 Centaure',
 poulet : '🐓 Poulet',
 vache : '🐄 Vache',
 chien : '🐕 Chien',
 dragon : '🐉Dragon',
 éléphant : '🐘 Éléphant',
 renard : '🦊 Renard',
 girafe : '🦒 Girafe',
 appuyez sur : '🦅 Ave',
 cheval : '🐎 Cheval',
 kambing : '🐐 Chèvre',
 Kerbau : '🐃Buffle',
 lion : '🦁Lion',
 argent : '👾 GokuCoins',
 moneyet : '🐒 Singe',
 panda : '🐼Panda',
 serpent : '🐍 Serpent',
 phénix : '🕊️ Phénix',
 rhinocéros : '🦏Rhinocéros',
 loup : '🐺 Loup',
 tigre : '🐅 Tigre',
 cumi : '🦑 Calmars',
 udang: '🦐 Crevette',
 ikan : '🐟Poisson',
 nouilles : '🍝 Nouilles',
 ramuan : '🧪 ingrédient NOVA',
 couteau : '🔪 Couteau',
    };
    const results = Object.keys(emot).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emot[results[0][0]];
  }};
global.rpgg = { // Solo emojis
  emoticon(string) {
    string = string.toLowerCase();
    const emott = {
      niveau : '🧬',
 étoiles : '🌟',
 exp : '⚡',
 banque : '🏦',
 diamant : '💎+',
 santé : '❤️',
 Kyubi : '🌀',
 compte joint : '💰',
 émeraude : '💚',
 résistance : '✨',
 rôle : '💪',
 bonus : '🎟️',
 dotxp : '📧',
 ou : '👑',
 poubelle : '🗑',
 cristal : '🔮',
 informations : '🧠',
 chaîne : '🕸️',
 clé d'or : '🔑',
 clé de fer : '🗝️',
 Emma : '🪅',
 canne à pêche : '🎣',
 gemmes : '🍀',
 baguette magique : '⚕️',
 mana : '🪄',
 agilité : '🤸‍♂️',
 cristal noir : '♠️',
 fer : '⛓️',
 rocher : '🪨',
 potion : '🥤',
 en haut : '💼',
 vol : '🚔',
 mise à jour : '🧰',
 bois : '🪵',
 force : '🦹‍♀️',
 arc: '🏹',
 armure : '🥼',
 arc: '🏹',
 pic : '⛏️',
 épée : '⚔️',
 commun : '📦',
 peu courant : '🥡',
 mythique : '🗳️',
 légendaire : '🎁',
 nourriture pour animaux : '🍖',
 animal de compagnie : '🍱',
 bibitanggur : '🍇',
 bibitapel : '🍎',
 bibitjeruk : '🍊',
 bibitmangga : '🥭',
 bibitpisang : '🍌',
 ayam : '🐓',
 bébé : '🐖',
 Sanglier : '🐗',
 taureau : '🐃',
 buaya : '🐊',
 chat : '🐈',
 centaure : '🐐',
 poulet : '🐓',
 vache : '🐄',
 chien : '🐕',
 dragon : '🐉',
 éléphant : '🐘',
 renard : '🦊',
 girafe : '🦒',
 appuyez sur : '🦅',
 cheval : '🐎',
 caméra : '🐐',
 Kerbau : '🐃',
 lion : '🦁',
 argent : '👾',
 argent : '🐒',
 panda : '🐼',
 serpent : '🐍',
 Phénix : '🕊️',
 rhinocéros : '🦏',
 loup : '🐺',
 tigre : '🐅',
 cumi : '🦑',
 oudang : '🦐',
 ikan : '🐟',
 nouilles : '🍝',
 ramuan : '🧪',
 couteau : '🔪',
    };
    const results = Object.keys(emott).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emott[results[0][0]];
  }};
global.rpgshop = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emottt = {
      exp : '⚡Expérience',
 étoiles : '🌟 Étoile',
 diamant : '💎 Diamant',
 rejoindre le compte : '💰 Token',
 émeraude : '💚 Émeraude',
 berliano : '♦️ Bijou',
 kyubi : '🌀 Magie',
 or : '👑 Or',
 argent : '👾JostinCoins',
 tiketcoin : '🎫Jostin Tickers',
 résistance : '✨Énergie',
 potion : '🥤 Potion',
 eau : '💧 Eau',
 poubelle : '🗑Corbeille',
 bois : '🪵 Bois',
 rock : '🪨Rock',
 batu : '🥌Pierre',
 chaîne : '🕸️Chaîne',
 fer : '⛓️ Fer',
 charbon : '⚱️ Charbon',
 bouteille : '🍶Bouteille',
 kaleng : '🥫Mai',
 kardus : '🪧 Carton',
 eleksirb : '💡 Électricité',
 emasbatang : '〽️ Lingot d'or',
 emasbiasa : '🧭 Or commun',
 rubah : '🦊🌫️Grand Renard',
 sampah : '🗑🌫️ Super poubelle',
 serigala : '🐺🌫️ Super Loup',
 kayu : '🛷 Super Bois',
 épée : '⚔️ Épée',
 umpan : '🪱Appât',
 healtmonster : '💵 Factures',
 emas : '🪅Piñata',
 pancingan : '🪝 Crochet',
 pancing : '🎣 Canne à pêche',
 commun : '📦Boîte commune',
 peu commun : '🥡 Boîte peu commune',
 mythique : '🗳️ Coffret Mythique',
 animal : '📫 Boîte pour animaux de compagnie', // ?
 gardenboxs : '💐 Jardinière', // ?
 légendaire : '🎁 Coffret Légendaire',
 anggur : '🍇 Raisin',
 appelez : '🍎 Apple',
 Jeruk : '🍊Orange',
 mangga : '🥭Mango',
 Pisang : '🍌 Banane',
 bibitanggur : '🌾🍇 Pépins de raisin',
 bibitapel : '🌾🍎 Pépins de pomme',
 bibitjeruk : '🌾🍊 Graines d'orange',
 bibitmangga : '🌾🥭 Graines de mangue',
 bibitpisang : '🌾🍌 Graines de banane',
 centaure : '🐐 Centaure',
 appuyez sur : '🦅 Ave',
 Kucing : '🐈 Chat',
 naga : '🐉Dragon',
 renard : '🦊 Renard',
 kuda : '🐎 Cheval',
 phénix : '🕊️ Phénix',
 loup : '🐺 Loup',
 anjing : '🐶 Chien',
 petFood : '🍖 Nourriture pour animaux', // ?
 makanancentaur : '🐐🥩 Nourriture du centaure',
 makanangriffin : '🦅🥩Nourriture pour oiseaux',
 makanankyubi : '🌀🥩 Nourriture magique',
 makanannaga : '🐉🥩 Nourriture du dragon',
 makananpet : '🍱🥩 Nourriture pour animaux',
 makananphonix : '🕊️🥩 Phoenix Food',
    };
    const results = Object.keys(emottt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emottt[results[0][0]];
  }};
global.rpgshopp = { // Tienda
  emoticon(string) {
    string = string.toLowerCase();
    const emotttt = {
     exp : '⚡',
 étoiles : '🌟',
 diamant : '💎+',
 compte joint : '💰',
 émeraude : '💚',
 berliano : '♦️',
 Kyubi : '🌀',
 ou : '👑',
 argent : '👾',
 ticketcoin : '🎫',
 résistance : '✨',
 potion : '🥤',
 eau : '💧',
 poubelle : '🗑',
 bois : '🪵',
 rocher : '🪨',
 batu : '🥌',
 chaîne : '🕸️',
 fer : '⛓️',
 carbone : '⚱️',
 bouteille : '🍶',
 kaleng : '🥫',
 kardus : '🪧',
 eleksirb : '💡',
 emasbatang: '〽️',
 émasbiase : '🧭',
 rubá : '🦊🌫️',
 sampah : '🗑🌫️',
 serigala : '🐺🌫️',
 kayu : '🛷',
 épée : '⚔️',
 umpán : '🪱',
 monstre de santé : '💵',
 Emma : '🪅',
 pancingan : '🪝',
 poêle à frire : '🎣',
 commun : '📦',
 peu courant : '🥡',
 mythique : '🗳️',
 animal de compagnie : '📫', // ?
 jardinières : '💐', // ?
 légendaire : '🎁',
 Anggur : '🍇',
 appelle : '🍎',
 Jérouk : '🍊',
 pochette : '🥭',
 Pisang : '🍌',
 bibitanggur : '🌾🍇',
 bibitapel : '🌾🍎',
 bibitjeruk : '🌾🍊',
 bibitmangga : '🌾🥭',
 bibitpisang : '🌾🍌',
 centaure : '🐐',
 appuyez sur : '🦅',
 Kucing : '🐈',
 nagas : '🐉',
 renard : '🦊',
 kuda : '🐎',
 Phénix : '🕊️',
 loup : '🐺',
 anjing : '🐶',
 nourriture pour animaux : '🍖', // ?
 makanancentaure : '🐐🥩',
 makanangriffin : '🦅🥩',
 makanankyubi : '🌀🥩',
 makanannaga : '🐉🥩',
 makananpet : '🍱🥩',
 makananphonix : '🕊️🥩',
    };
    const results = Object.keys(emotttt).map((v) => [v, new RegExp(v, 'gi')]).filter((v) => v[1].test(string));
    if (!results.length) return '';
    else return emotttt[results[0][0]];
  }};

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
