let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: alexmlv
╠➥ Script: @alexmlv
║
╠➥ Github: https://github.com/Arya274/Arya-Bot
╠➥ Instagram: @alex_mlv__
╠➥ YouTube: Alexmlv
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘 DONASI 〙 ═
╠➥ SmartFren: 0882-3543-5804
╠➥ Tsel: 0813-5730-2007
╠➥ Tsel: 0815-1586-0089
║
║>Request? Wa.me/523317595519
║
╠═〘 NfQ BOT 〙 ═
`.trim(), m)
}
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

