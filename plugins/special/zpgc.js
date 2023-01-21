
const {extract} = require('zs-extract')
const {lookup}  = require('mime-types')
exports.run = {
   usage: ['zpggroup'],
   hidden: ['zpgc'],
   use: 'link',
   category: 'special',
   async: async (m, {
      client,
      args,
      isPrefix,
      command
   }) => {
    try {
        if (!args || !args[0]) return client.reply(m.chat, Func.example(isPrefix, command, 'https://www43.zippyshare.com/v/lRq6M9DF/file.html'), m)
        if (!args[0].includes('zippyshare.com/v')) return client.reply(m.chat, global.status.invalid, m)
        client.sendReact(m.chat, '🕒', m.key)
        for (let i = 0; i < args.length; i++) {
            if (!args[i].includes('zippyshare.com/v')) continue
            let res = await extract(args[i])
            let mimetype = await lookup(res.download)
            client.sendMessage('6282250941238-1625047491@g.us', { document: { url: res.download }, fileName: res.filename, mimetype })
            client.reply(m.chat, 'Berhasil', m)
          }       
     } catch {
        return client.reply(m.chat, global.status.error, m)
     }
  },
  owner: true,
  cache: true,
  location: __filename
}