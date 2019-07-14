const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
       if(message.content ===("باك")){
          message.channel.send('وِلْكُمْ يْا عَسَلْ');
          }
           if(message.content ===("برب")){
          message.channel.send('تِيْت يْا عَسَل');
             }
              if(message.content ===("كبوش")){
                 message.channel.send('أمِرْ يْا عِيونْ كَبوشْ إِنتْ ؟');
                    }                                     }
              if(message.content ===("السلام عليكم")){
                 message.channel.send('وعليكم السلام نورت ♥');

                                           }
              if(message.content ===("تكوتا")){
                 message.channel.send('اه اه اه');

                                                    }
              if(message.content ===(".")){
                 message.channel.send('يلبى الي ينقط بس ♥');

              if(message.content ===("كل زق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
              if(message.content ===("كلزق")){
                 message.channel.send('كُلْ زَقْيِن يْا حَيْوَانْ');
              }
			  
client.login('NjAwMDY3ODM4NzYxMjM4NTI5.XSuW3g.N8alsUEjGAH5HvgZvrezLMfC3vM');