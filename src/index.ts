import { Client, Message } from 'discord.js';
import { ENV }             from './ENV.js'
import { TOKEN }           from './SECRET.js'

const client: Client = new Client()

client.on('ready', () => {
    
	console.log(`Logged in as ${client.user.tag}!`);
	
	let currentActivity = 0;
	client.user.setActivity(ENV.statuses.arr[currentActivity]);

	setInterval(() => {
		client.user.setActivity(ENV.statuses.arr[currentActivity]);
		currentActivity < ENV.statuses.arr.length - 1 ? currentActivity ++ : currentActivity = 0;
	}, ENV.statuses.delay)
});

client.on('message', msg => {
    if (msg.content === 'ping') {
    	msg.reply('Pong!');
    }
});


client.on('raw', async packet => {

	switch(packet.t){ 
		
		// ${client.channels.fetch(packet.d.channel_id).then(c => {return c.fetchMessage(packet.d.message_id).then(m => {return m.author})})}
		// ${client.channels.fetch(packet.d.channel_id).fetchMessage(packet.d.message_id)}

		case 'MESSAGE_REACTION_ADD':
		case 'MESSAGE_REACTION_REMOVE':{
			{
				console.log(`reactor: ${await client.users.fetch(packet.d.user_id)} | reactee: ${client.channels.fetch(packet.d.channel_id).then(c => {return new Message(client,{},c)})}`)
			}
			break;
		}
	}
});

client.login(TOKEN);