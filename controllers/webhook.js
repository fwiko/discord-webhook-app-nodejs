
const { Webhook, MessageBuilder } = require('discord-webhook-node');


exports.send = (req, res) => {
    const { webhook_url, username, avatar_url, content } = req.body;

    const hook = new Webhook({
        url: webhook_url,
        retryOnLimit: false
    });

    if (username) {
        hook.setUsername(username);
    };

    if  (avatar_url) {
        hook.setAvatar(avatar_url);
    };
    
    hook.send(content)
    .then(() => {
        return res.render('index', {
            message: "Successfully sent webhook!",
            status: true
        });
    })
    .catch(err => {
        return res.render('index', {
            message: "Failed to send webhook",
            status: false
        });
    });
}