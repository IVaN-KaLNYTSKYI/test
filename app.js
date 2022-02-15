const express = require('express');
const path = require('path');
require('dotenv').config({path:'./.env'});
const { Telegraf } = require('telegraf')

const bot = new Telegraf('5105115953:AAEum0luPNAgoC8I9DnHvzMC7yX9ebZYhM8')

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res, next) => {
    try {
        bot.telegram.sendMessage(-794545159, 'ВОЗІfdfsdfs ПІЗДА ВІД ДІМИ))))))) CИГНАЛ ДОДАНО ');
        res.json('yes')
    } catch (e) {
        next(e);
    }
});

bot.start((ctx) => {
    ctx.reply('Welcome'
)
    console.log(ctx);
})

bot.startPolling()
app.listen(3000, () => {
    console.log(3000);
});

