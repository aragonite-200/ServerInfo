const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.token);  //process.env.token

const memberCounter = require('./counters/member-counter.js')

client.on('ready', () => {
    console.log('online')
    memberCounter(client)
});

client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Membro');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('830386589779230791').send(`Benvenuto <@${guildMember.user.id}> nel server! Assicurati di leggere le regole del canele con il comando !regole.`)    
});

client.on('guildMemberRemove', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Membro');

    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('830386589779230791').send(`Addio <@${guildMember.user.id}> speriamo che torni presto!`)    
});

