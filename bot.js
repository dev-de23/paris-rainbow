const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`batatabot By:Batata`);
        console.log(`----------------`);
      console.log(`Batata '     Script By : batata ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setStatus("dnd")
});


client.on("guildMemberAdd", member => {
  client.channels.find('id', 'أي دي الشات').send(`**Wel``come`` To C``reator``**`)
});



client.login(process.env.BOT_TOKEN);