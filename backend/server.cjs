const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const fs = require('fs');
const toml = require('toml');
const { error } = require('console');

const config = toml.parse(fs.readFileSync('./config.toml', 'utf-8'));

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "alexnikol092004@gmail.com",
      pass: config.gmail.emailkey,
    },
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/ordercall', function (request, response) {
    let body = request.body;

    function sendMail() {
        async function main(text) {
            const info = await transporter.sendMail({
              from: '<alexnikol092004@gmail.com>',
              to: "nikol.alex06@mail.ru",
              subject: "Заказ звонка",
              text: text
            });
            console.log("Message sent: %s", info.messageId);
        }

        let mail = `имя: ${body.name};\nтелефон: ${body.tel};\nпродукт: ${body.product};\nВРЕМЯ: ${body.time};\nдополнительная информация: ${body.add}`
        
        main(mail).catch((e) => console.error(e));
    }

    function checkName() {
        let isCheck = true;
        let name = body.name.split('');
        Array.from(name).forEach(letter => {
            if (!isNaN(Number(letter)) && letter != ' ') {
                isCheck = false;
            }
        })
        return isCheck;
    }

    function checkTel() {
        return true;
    }

    if (checkName() && checkTel()) {
        console.log('Mail is sent')
        // sendMail();
        response.status(200);
        response.send({error: null});
    } else if (!checkName() && checkTel()) {
        response.status(400);
        response.send({error: 'Имя не должно содержать цифры или специальные символы'});
    } else if (checkName() && !checkTel()) {
        response.status(400);
        response.send({error: 'Поле телефон заполнено некорректно'});
    } else {
        response.status(400);
    }
})

app.listen(5000);