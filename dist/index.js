"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const ENV_js_1 = require("./ENV.js");
const SECRET_js_1 = require("./SECRET.js");
const client = new discord_js_1.Client();
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    let currentActivity = 0;
    client.user.setActivity(ENV_js_1.ENV.statuses.arr[currentActivity]);
    setInterval(() => {
        client.user.setActivity(ENV_js_1.ENV.statuses.arr[currentActivity]);
        currentActivity < ENV_js_1.ENV.statuses.arr.length - 1 ? currentActivity++ : currentActivity = 0;
    }, ENV_js_1.ENV.statuses.delay);
});
client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!');
    }
});
client.on('raw', (packet) => __awaiter(void 0, void 0, void 0, function* () {
    switch (packet.t) {
        case 'MESSAGE_REACTION_ADD':
        case 'MESSAGE_REACTION_REMOVE': {
            {
                console.log(`reactor: ${yield client.users.fetch(packet.d.user_id)} | reactee: `);
            }
            break;
        }
    }
}));
client.login(SECRET_js_1.TOKEN);
//# sourceMappingURL=index.js.map