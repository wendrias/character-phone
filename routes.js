let msgHandler = require('./google-chat');

app.post('/sendMsg', (req, res) => {
    let msg = req.query.msg;
    msgHandler.detectIntentText(msg);
})