const { REST, Routes } = require("discord.js");

const commands = [
    {
      name: 'ping',
      description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken("MTI3MTc4NjUzNDU1NDU2Njc0Nw.Gj5rz2.l3jH92XVwftx55spNtK29bmlvuIH_lNoBZ8TZk");

(async () =>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands("1271786534554566747"), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
    }
})();