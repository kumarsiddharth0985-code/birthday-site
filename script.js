function goToPage(n) {
    document.querySelectorAll(".page").forEach(p => p.classList.add("hidden"));
    document.getElementById("page" + n).classList.remove("hidden");
}

setTimeout(() => goToPage(2), 2000);

function turnOnLight() {
    goToPage(5);
    document.getElementById("page5").classList.add("lightPink");
}

function playMusic() {
    document.getElementById("music").play();
    document.getElementById("btnMusic").style.display = "none";
    document.getElementById("btnDecor").classList.remove("hidden");
}

function decorate() {
    document.getElementById("decor").innerHTML = "🎈 HAPPY BIRTHDAY 🎈";
    document.getElementById("btnDecor").style.display = "none";
    document.getElementById("btnCake").classList.remove("hidden");
}

function showCake() {
    document.getElementById("cakeBox").classList.remove("hidden");
    document.getElementById("btnCake").style.display = "none";

    setTimeout(() => {
        document.getElementById("cutLine").style.height = "200px";
    }, 500);

    setTimeout(() => {
        document.getElementById("finalPopup").classList.remove("hidden"); // 🔥 FIX
    }, 1500);
}
