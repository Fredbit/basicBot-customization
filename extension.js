(function () {

    function extend() {

        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        var bot = window.bot;

        bot.retrieveSettings();

        bot.loadChat();

    }


    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "basicBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 30,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "Beep boop, this song isn't indie!. "],
            ["op", "Beep boop, this song is on the OP list. "],
            ["history", "Beep boop, this song is in the history. "],
            ["mix", "Boop beep, it's not cool to play a mix here. "],
            ["sound", "Boop beep, the song you played had bad sound quality or no sound. "],
            ["nsfw", "Boop beep, the song you contained was NSFW (image or sound). "],
            ["unavailable", "Beeeeep, the song you played was not available for some users. "]
        ],
        afkpositionCheck: 5,
        afkRankCheck: "bouncer",
        motdEnabled: false,
        motdInterval: 30,
        motd: "Temporary Message of the Day",
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: "http://goo.gl/C1ZICB",
        themeLink: null,
        fbLink: "https://www.facebook.com/groups/indiegoogle/",
        youtubeLink: null,
        website: "http://www.last.fm/user/IndieGoogle",
        intervalMessages: ["Make sure to join our Facebook group for updates and information! https://www.facebook.com/groups/indiegoogle/ ", "Want to see what kind of music is played here? Be sure to check out the last.fm account to see the artists played! http://www.last.fm/user/IndieGoogle", "Take a look at our FAQ to see if any questions are answered there! http://goo.gl/C1ZICB"],
        messageInterval: 15,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Fredbit/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Fredbit/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    $.getScript('https://rawgit.com/Yemasthui/basicBot/master/basicBot.js', extend);

}).call(this);
