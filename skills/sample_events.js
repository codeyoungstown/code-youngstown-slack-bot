module.exports = function(controller) {

    controller.on('user_channel_join,user_group_join', function(bot, message) {

        bot.reply(message, 'Welcome to Code Youngstown, <@' + message.user + '>! Post an intro so everyone knows who you are and what you\'re working on.');

    });

}
