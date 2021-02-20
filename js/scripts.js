/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    300,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict

// Wrap every letter in a span
var textWrapperMl2 = document.querySelector('.ml2');
var textWrapperMl9 = document.querySelector('.ml9 .letters');

textWrapperMl2.innerHTML = textWrapperMl2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
textWrapperMl9.innerHTML = textWrapperMl9.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

anime.timeline({ loop: true })
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
console.log("------- Xin chào / Hello / 你好 / Hallo / 안녕하세요.\n------- I dont know why you open this in my webpage.\n------- But if you're interested in my profile, you can write me an email, even in your native language.\n------- We might work together in the future.\n(^ ^)")

// "use strict";
// {
//     const num_of_hearts = 33;
//     const driftX = 0;
//     const gravity = 50;
//     const update_speed = 500;
//     const heartTypes = [..."💵💰"];
//     const viewportWidth = document.documentElement.clientWidth;
//     const viewportHeight = document.documentElement.clientHeight;
//     const viewSpaceWidth = viewportWidth + 50;
//     const viewSpaceHeight = viewportHeight + 50;
//     const randomInt = ((xmin, xmax) => (Math.floor(Math.random() * (xmax + 1 - xmin) + xmin)));
//     const randomReal = ((xmin, xmax) => (Math.random() * (xmax - xmin) + xmin));
//     const randomColor = (() => ("hsla" + "(" + randomInt(0, 360) + "," +
//         randomInt(70, 100) + "%," +
//         randomInt(40, 60) + "%," +
//         randomReal(.8, 1) + ")"));
//     const f_restart_heart = ((xx) => {
//         xx["xxleft"] = randomInt(0, viewSpaceWidth);
//         xx.style.left = xx["xxleft"] + "px";
//         xx["xxtop"] = randomInt(0, viewSpaceHeight) - viewSpaceHeight;
//         xx.style.top = xx["xxtop"] + "px";
//         xx["xrotate"] = randomInt(-150, 150);
//         xx.style.transform = "rotate(" + xx["xrotate"] + "deg)";
//     });
//     const heart_box = document.createElement("div");
//     heart_box.setAttribute("id", "heart_box");
//     const f_new_heart = (() => {
//         const yy = document.createElement("div");
//         yy.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
//         yy["xxleft"] = randomInt(0, viewSpaceWidth);
//         yy.style.left = yy["xxleft"] + "px";
//         yy["xxtop"] = -90;
//         yy.style.top = yy["xxtop"] + "px";
//         yy["xrotate"] = randomInt(-150, 150);
//         yy.style.transform = "rotate(" + yy["xrotate"] + "deg)";
//         yy.style.color = randomColor();
//         yy["xsize"] = 10 + randomInt(0, 30);
//         yy.style.fontSize = yy["xsize"] + "px";
//         yy.style.position = "fixed";
//         yy.style.zIndex = randomInt(100, 9999).toString();
//         yy.style.transition = "top linear 1.5s, left linear 1.5s, transform linear 1.5s";
//         // f_restart_heart(yy);
//         return yy;
//     });
//     {
//         for (let i = 0; i < num_of_hearts; i++) {
//             heart_box.appendChild(f_new_heart());
//         }
//     }
//     ;
//     document.body.appendChild(heart_box);
//     const heartNodes = Array.from(heart_box.children);
//     const f_update_positions = (() => {
//         heartNodes.forEach(((xx) => {
//             xx["xxleft"] +=
//                 (() => {
//                     const rnd = Math.random();
//                     if (rnd < 0.3333) {
//                         return 0;
//                     }
//                     else if (rnd < 0.6666) {
//                         return driftX;
//                     }
//                     else {
//                         return -driftX;
//                     }
//                 })();
//             xx["xxtop"] = xx["xxtop"] + ((xx["xsize"] / 20) * (gravity));
//             if (xx["xxtop"] > (viewSpaceHeight) + viewSpaceHeight / 10) {
//                 f_restart_heart(xx);
//             }
//             else {
//                 xx["xxtop"] = xx["xxtop"] + gravity / 10 * randomInt(0, 10);
//             }
//             ;
//             if (xx["xrotate"] !== 0) {
//                 xx["xrotate"] = xx["xrotate"] + randomInt(-30, 60);
//                 xx.style.transform = "rotate(" + xx["xrotate"] + "deg)";
//             }
//             ;
//             xx.style.left = xx["xxleft"] + "px";
//             xx.style.top = xx["xxtop"] + "px";
//         }));
//     });
//     setInterval(f_update_positions, update_speed);
// }
// ;