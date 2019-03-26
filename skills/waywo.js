const CronJob = require('cron').CronJob;

module.exports = function(controller) {

    var bot = controller.spawn();

    // Assumptions:
    // CAHTGAGBX is #waywo
    // The bot has already joined #waywo

    // invoke update_team with the following steps:
    // 1) Administration -> Manage Apps -> Remove App
    // 2) Administration -> Manage Apps -> Install
    // Note: After re-installing, remember to invite the bot back to #waywo.
    // Not exactly sure how/when create_team is called.

    console.log('============================================================');

    // 10:00 am Thursdays
    const cronPattern = '00 00 10 * * 4';
    const nextDatesCount = 5;

    console.log('waywo: Installing Job ['+ cronPattern +']');
    controller.waywoJob = new CronJob(cronPattern, function() {

        bot.say({
            channel: 'CAHTGAGBX',
            text: '<!channel> Happy Thursday, Code Youngstown! What are you working on this week?'
        });

    }, null, true, 'America/New_York');

    console.log('waywo: Next '+ nextDatesCount +' Dates');
    console.log(controller.waywoJob.nextDates(nextDatesCount));

    controller.waywoJob.start();
    console.log('waywo: Job running');

    console.log('============================================================');

};
