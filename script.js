function goToPage(n) {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById("page" + n).classList.remove("hidden");
}

setTimeout(() => goToPage(2), 2000);

function turnOnLight() {
    goToPage(5);
}

/* MUSIC */
function playMusic() {
    document.getElementById("music").play();
    document.getElementById("btnMusic").style.display = "none";
    document.getElementById("btnDecor").classList.remove("hidden");
}

/* DECOR */
function decorate() {
    document.getElementById("decor").innerHTML = "🎈 HAPPY BIRTHDAY 🎈";
    document.getElementById("btnDecor").style.display = "none";
    document.getElementById("btnCake").classList.remove("hidden");
}

/* SHOW CAKE */
function showCake() {
    document.getElementById("cakeBox").classList.remove("hidden");
    document.getElementById("btnCake").style.display = "none";

    cutCake();
}

/* CUT ANIMATION */
function cutCake() {
    let line = document.getElementById("cutLine");

    setTimeout(() => {
        line.style.height = "200px"; // cut animation

        setTimeout(() => {
            document.getElementById("letter").classList.remove("hidden");
        }, 1200);

    }, 500);
}

/* OPEN LETTER */
function openLetter() {
    document.getElementById("letter").classList.add("hidden");
    document.getElementById("messagePage").classList.remove("hidden");
}