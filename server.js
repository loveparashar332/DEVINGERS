const express = require('express'); 
const cors = require('cors');
const twilio = require('twilio'); 

//twilio requirements -- Texting API 
const accountSid = 'ACe72bb88c9ab9d070edc177f318563183';
const authToken = 'a1e3d5290ce31aef6aa5c5312341d5fa';

const client = new twilio(accountSid, authToken);

const app = express(); //alias

app.use(cors()); //Blocks browser from restricting any data

//Welcome Page for the Server 
app.get('/', (req, res) => {
    res.send('Welcome to the Express Server')
})

//Twilio 
app.get('/send-text', (req, res) => {
    //Welcome Message
    

    //_GET Variables
    const { recipient, textmessage } = req.query;
    res.send('Hello to the Twilio Server ' + recipient )


    //Send Text
    client.messages.create({
        body: textmessage,
        to: '+916376797207',  // Text this number
        from: '+12563986327' // From a valid Twilio number
    }).then((message) => console.log(message.body));
})

app.listen(4000, () => console.log("Running on Port 4000"))