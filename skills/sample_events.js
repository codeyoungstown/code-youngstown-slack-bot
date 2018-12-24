module.exports = function(controller) {

    controller.on('team_join', function(bot, message) {
        // Assumptions:
        // C4H2FGMA9 is #intro
        // #intro is configured as a default channel
        // The bot has already joined #intro
        // The bot has team_join registered under Event Subscriptions -> Subscribe to Bot Events
        bot.say({
            channel: 'C4H2FGMA9',
            text: 'Welcome to Code Youngstown, <@' + message.user.id + '>! Post an intro so everyone knows who you are and what you\'re working on.'
        });

    });

};
