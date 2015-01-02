(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:

         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }

         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "basicBot",
        language: "english",
        chatLink: "https://rawgit.com/Yemasthui/basicBot/master/lang/en.json",
        maximumAfk: 120,
        afkRemoval: true,
        maximumDc: 15,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: false,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 2,
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
        motd: null,
        filterChat: false,
        etaRestriction: false,
        welcome: false,
        opLink: null,
        rulesLink: ["http://goo.gl/C1ZICB"],
        themeLink: null,
        fbLink: ["https://www.facebook.com/groups/indiegoogle/"],
        youtubeLink: null,
        website: ["http://www.last.fm/user/IndieGoogle"],
        intervalMessages: ["Make sure to join our Facebook group for updates and information! https://www.facebook.com/groups/indiegoogle/ ", "Want to see what kind of music is played here? Be sure to check out the last.fm account to see the artists played! http://www.last.fm/user/IndieGoogle", "Take a look at our FAQ to see if any questions are answered there! http://goo.gl/C1ZICB"],
        messageInterval: 15,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/Fredbit/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/Fredbit/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/Fredbit/basicBot/master/basicBot.js', extend);

}).call(this);
