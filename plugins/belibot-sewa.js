let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => {
let gh = 'https://wa.me/6281226122566'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'Payment Methode',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Jangan di Klik',
'body':'©XIN BOT',
'thumbnail':await(await fetch('https://telegra.ph/file/7ee90ebdf7bf122b25ed4.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'Hi, Silahkan pilih opsi di bawah ini.\n*Payment*\n\n*x* Dana: 081226122566\n*x* Pulsa: 081226122566',
'footer':'©XIN BOT',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'ᴅᴏɴᴀsɪ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|belibot)$/i

module.exports = handler
