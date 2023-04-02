// function openStaticApp(app) {
//     console.log(app);
// }

const e = require("express");

// function openDynanicApp(app) {
//     console.log(app);
// }

//time
var date = new Date();
var hrs;

date.getHours() > 12 ? hrs = date.getHours() - 12 : hrs = date.getHours();

var time = hrs + ":" + date.getMinutes();

window.addEventListener('load', () => {
    document.querySelector(".small-time").innerHTML = time;
    document.querySelector(".time").innerHTML = time;
})

//instagram
function showStory(user) {
    document.querySelector("." + user + "-story").classList.add('story-show');
    document.querySelector(".top").classList.add("hide");
    document.querySelector(".bottom").classList.add("hide");
    document.querySelector(".sasuke-story-link").classList.add("hide");
    document.querySelector(".sakura-story-link").classList.add("hide");

    const storyTimer = setTimeout(() => {
        skipStory(user)
    }, 3000);

    //cancel timeout on story image click
    document.querySelector("." + user + "-story").addEventListener("click", () => {
        clearTimeout(storyTimer);
    })
}

function skipStory(user) {
    document.querySelector("." + user + "-story").classList.remove('story-show');
    document.querySelector(".top").classList.remove("hide");
    document.querySelector(".bottom").classList.remove("hide");
    document.querySelector(".sakura-story-link").classList.remove("hide");
    document.querySelector(".sasuke-story-link").classList.remove("hide");
}


//page nav functionality

function showPage(page, num) {
    var max;
    page == "phone" ? max = 2 : max = 4;
    console.log("page = " + page + " num = " + num)

    if (page == "phone") {
        console.log("!!page = " + page)
        if (num != 3 && (document.querySelector(".voicemail").style.height != '0')) {
            console.log("num isnt 3!")
            document.querySelector(".voicemail").style.height = '0';
            document.querySelector(".voicemail img").style.height = '0';
            document.querySelector(".voicemail").style.display = 'none';
            document.querySelector(".voicemail img").style.display = 'none';
            document.querySelector(".play-voicemail").style.display = 'none';
            document.querySelector(".voicemail").style.display = 'none';
            document.querySelector(".sakura-voicemail-link").style.display = 'none';
        }
        for (var i = 0; i <= max; i++) {
            document.querySelectorAll("." + page + "")[i].classList.remove("show");
        }

        // console.log("num = " + num + "\n  document.querySelector('.voicemail').style.display == ('block') = " + document.querySelector(".voicemail").style.display == ("block"));
    }

    document.querySelectorAll("." + page + "")[num - 1].classList.add("show");
    document.querySelector("." + page + "-back").classList.add("show");

}

function backPage(page) {
    var max;
    page == "phone" ? max = 2 : max = 4;

    for (var i = 0; i <= max; i++) {
        document.querySelectorAll("." + page + "")[i].classList.remove("show");
    }

    if (page != "phone") {
        document.querySelector("." + page + "-back").classList.remove("show");
    } else {
        document.querySelector(".voicemail").style.height = '0';
        document.querySelector(".voicemail img").style.height = '0';
        document.querySelector(".voicemail").style.display = 'none';
        document.querySelector(".voicemail img").style.display = 'none';
        document.querySelector(".play-voicemail").style.display = 'none';
        document.querySelector(".voicemail").style.display = 'none';
        document.querySelector(".sakura-voicemail-link").style.display = 'none';
    }

}

function voicemailPage() {
    showPage("phone", 3);
    document.querySelector(".voicemail").style.display = 'block';
    document.querySelector(".voicemail img").style.display = 'block';
    document.querySelector(".play-voicemail").style.display = 'block';
    document.querySelector(".sakura-voicemail-link").style.display = 'block';
}

function voicemailShow() {
    if (document.querySelector(".voicemail").style.height == '0px') {
        document.querySelector(".voicemail").style.height = 'auto';
        document.querySelector(".voicemail img").style.height = 'auto';
        document.querySelector(".play-voicemail").style.display = 'block';
    } else {
        document.querySelector(".voicemail").style.height = '0';
        document.querySelector(".voicemail img").style.height = '0';
        document.querySelector(".play-voicemail").style.display = 'none';
    }
}

function playVoicemail() {
    var x = document.querySelector("#voicemail-audio");
    if (document.querySelector(".play-voicemail").classList.contains("play")) {
        x.pause();
        x.currentTime = 0;
        document.querySelector(".play-voicemail").classList.remove("play")
    } else {
        x.play();
        document.querySelector(".play-voicemail").classList.add("play");
        setTimeout(() => {
            if (document.querySelector(".play-voicemail").classList.contains("play")) {
                document.querySelector(".play-voicemail").classList.remove("play")
            }
        }, 9000)
    }
}

function photosPages(isBack, page) {
    if (isBack) {
        document.querySelectorAll('.photo-pages img').forEach((x) => {
            x.classList.add('hide');
        });
        document.querySelector('.main').style.display = 'block';
        document.querySelector('.recents-link').style.display = 'block';
        document.querySelector('.dno-link').style.display = 'block';
        document.querySelector('.sakura-link').style.display = 'block';
        document.querySelector('.back-button').classList.add('hide');
        document.querySelectorAll('.recents-photos').forEach((x) => {
            x.classList.remove('show');
        })

    } else {
        document.querySelector('.main').style.display = 'none';
        document.querySelector('.recents-link').style.display = 'none';
        document.querySelector('.dno-link').style.display = 'none';
        document.querySelector('.sakura-link').style.display = 'none';
        document.querySelector('.back-button').classList.remove('hide');
        if (page == 'recents') {
            document.querySelectorAll('.recents-photos').forEach((x) => {
                x.classList.add('show');
            })
        } else {
            document.querySelectorAll('.recents-photos').forEach((x) => {
                x.classList.remove('show');
            })
            document.querySelector('.' + page + '-photos').classList.remove('hide');
        }
    }
}

var attemptedPasscode;

// function passcodePage() {
//     document.querySelector('.lock-screen').style.display = 'none';
//     document.querySelector('.passcode-screen').style.display = 'flex';
// }


function passcodeHandler(toPage) {
    loggedIn = true;
    if (toPage == "home") {
        window.location.href = "../app-pages/home.html"
    } else if (toPage == "camera") {
        window.location.href = "../app-pages/camera.html"
    }
}

// window.addEventListener('load', () => {
//     if (loggedIn) {
//         document.querySelector('.passcode-screen').style.display = 'none';
//         document.querySelector('.home-screen').style.display = 'flex';
//     }
// })

function passcodeNum(n) {
    if (attemptedPasscode === undefined) {
        console.log("it's undefined")
        attemptedPasscode = n.toString();
        document.querySelectorAll('.passcode-input input')[attemptedPasscode.length - 1].style.background = 'white';
        return;
    }

    if (attemptedPasscode.length < 6) {
        console.log(attemptedPasscode.toString() + ' had less than 6 digits.')
        attemptedPasscode += n.toString();
        console.log(attemptedPasscode.toString() + ' now')
        document.querySelectorAll('.passcode-input input')[attemptedPasscode.length - 1].style.background = 'white';
    }

    if (attemptedPasscode.length == 6) {
        if (attemptedPasscode == '777777') {
            document.querySelectorAll('.passcode-input input')[attemptedPasscode.length - 1].style.background = 'white';
            passcodeHandler('home');
        } else {
            // wrong password, handle error here
            document.querySelector('.passcode-input').style.animation = 'shake .5s';
            setTimeout(() => {
                document.querySelector('.passcode-input').style.animation = '';
            }, 500)
        }
        attemptedPasscode = '';
        document.querySelectorAll('.passcode-input input').forEach(function(input) {
            input.style.background = '';
        });
    }
}

// 855 973 1040
// consumer report team

// safari
function triggerSwitch() {
    if (document.querySelector(".main-body").style.display == "block") {
        console.log("main on, turn on main switch")
        document.querySelector(".switch-main").style.display = "block";
    } else {
        console.log("priv on turn on priv switch")
        document.querySelector(".switch-priv").style.display = "block";
    }

    document.querySelector(".priv-link").style.display = "block";
    document.querySelector(".main-link").style.display = "block";
}

function switchTab(toPage, fromPage) {
    document.querySelector(".switch-main").style.display = "none";
    document.querySelector(".switch-priv").style.display = "none";
    document.querySelector(".priv-link").style.display = "none";
    document.querySelector(".main-link").style.display = "none";

    document.querySelector("." + fromPage + "-body").style.display = "none";
    document.querySelector("." + fromPage + "-bottom").style.display = "none";

    document.querySelector("." + toPage + "-body").style.display = "block";
    document.querySelector("." + toPage + "-bottom").style.display = "block";
}

/* messages */

function getMsgPage() {
    console.log("msg page")
    document.querySelectorAll('.sakura-message').forEach((e) => {
        e.style.display = 'block';
    })
    document.querySelector('.main').style.display = 'none';
    document.querySelector('.sakura-message-link').style.display = 'none';
    document.querySelector('.msg-back').style.display = 'block';
}

function backMsgs() {
    document.querySelectorAll('.sakura-message').forEach((e) => {
        e.style.display = 'none';
    })
    document.querySelector('.main').style.display = 'block';
    document.querySelector('.sakura-message-link').style.display = 'block';
    document.querySelector('.msg-back').style.display = 'none';

}

var txtClicked = false;

function txtSelect() {
    if (!txtClicked) {
        console.log("yooo")
        document.querySelector('.message-bottom').src = "../images/messages/input3.jpg"; //change to input 1 after cropping
        document.querySelector('.message-bottom').style.top = '84.5vh';
        document.querySelector('.send-msg').style.display = 'block';
        txtClicked = true;
    }
}

//Get form element
function jsFunction() {
    console.log("sub")
    document.querySelector('#msg').value = '';
}

// npm i express
// npm i actions-on-google
// npm i dialogflow-fulfillment