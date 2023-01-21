exports.run = {
   usage: ['premium'],
   category: 'special',
   async: async (m, {
      client,
      isPrefix
   }) => {
      client.reply(m.chat, `🏷️ Upgrade Ke Premium Dengan Harga 10k Bonus Youtube Premium.\n\nIngin Premium?,Hubungi *${isPrefix}owner*`, m)
   },
   error: false,
   cache: true,
   location: __filename
}