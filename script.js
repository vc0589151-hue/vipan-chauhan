

/* =====================================================
   VIPAN CHAUHAN PORTFOLIO
   JAVASCRIPT
===================================================== */


/* ---------------------------------------------
   HEADER SCROLL EFFECT
--------------------------------------------- */

const header =
    document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 20) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* ---------------------------------------------
   MOBILE MENU
--------------------------------------------- */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuBtn.textContent =
        navLinks.classList.contains("open")
            ? "×"
            : "☰";

});


document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });


/* ---------------------------------------------
   LIGHT / DARK THEME
--------------------------------------------- */

const themeBtn =
    document.getElementById("themeBtn");

let lightMode = false;

themeBtn.addEventListener("click", () => {

    lightMode = !lightMode;

    if (lightMode) {

        document.documentElement.style.setProperty(
            "--bg",
            "#f4f7ff"
        );

        document.documentElement.style.setProperty(
            "--bg-soft",
            "#e9eef8"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#101522"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#56627a"
        );

        document.documentElement.style.setProperty(
            "--card",
            "rgba(255,255,255,.75)"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "rgba(255,255,255,.95)"
        );

        document.documentElement.style.setProperty(
            "--border",
            "rgba(20,30,50,.10)"
        );

        themeBtn.textContent = "☾";

    } else {

        document.documentElement.style.setProperty(
            "--bg",
            "#070b16"
        );

        document.documentElement.style.setProperty(
            "--bg-soft",
            "#0d1425"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f5f7ff"
        );

        document.documentElement.style.setProperty(
            "--muted",
            "#9ca8bd"
        );

        document.documentElement.style.setProperty(
            "--card",
            "rgba(255,255,255,.055)"
        );

        document.documentElement.style.setProperty(
            "--card-hover",
            "rgba(255,255,255,.09)"
        );

        document.documentElement.style.setProperty(
            "--border",
            "rgba(255,255,255,.1)"
        );

        themeBtn.textContent = "☼";

    }

});


/* ---------------------------------------------
   SCROLL REVEAL
--------------------------------------------- */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },
        {
            threshold: .12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        revealObserver.observe(element);

    });


/* ---------------------------------------------
   SKILL PROGRESS ANIMATION
--------------------------------------------- */

const skillObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const bars =
                        entry.target.querySelectorAll(
                            ".progress span"
                        );

                    bars.forEach(bar => {

                        bar.style.width =
                            bar.dataset.width;

                    });

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: .25
        }
    );


document
    .querySelectorAll(".skill")
    .forEach(skill => {

        skillObserver.observe(skill);

    });


/* ---------------------------------------------
   CURRENT YEAR
--------------------------------------------- */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();


/* ---------------------------------------------
   CONSOLE MESSAGE
--------------------------------------------- */

console.log(
    "Vipin Chauhan Portfolio — Loaded Successfully."
);
