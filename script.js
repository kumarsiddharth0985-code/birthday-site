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

/* DECORATION + BALLOONS */
function decorate() {
    document.getElementById("decor").innerHTML = "🎈 HAPPY BIRTHDAY 🎈";

    document.getElementById("btnDecor").style.display = "none";
    document.getElementById("btnCake").classList.remove("hidden");

    let container = document.getElementById("balloons");
    container.innerHTML = "";

    for (let i = 0; i < 20; i++) {
        let b = document.createElement("div");
        b.className = "balloonFloat";
        b.style.left = Math.random() * 100 + "%";
        b.style.background = `hsl(${Math.random()*360},70%,60%)`;
        container.appendChild(b);
    }
}

/* SWIPE CUT */
let isCutting = false;
let startY = 0;

function showCake() {
    document.getElementById("cakeBox").classList.remove("hidden");
    document.getElementById("btnCake").style.display = "none";

    let cake = document.getElementById("cake");

    cake.addEventListener("mousedown", startCut);
    cake.addEventListener("touchstart", startCut);

    document.addEventListener("mousemove", moveCut);
    document.addEventListener("touchmove", moveCut);

    document.addEventListener("mouseup", endCut);
    document.addEventListener("touchend", endCut);
}

function startCut(e) {
    isCutting = true;
    startY = e.touches ? e.touches[0].clientY : e.clientY;
}

function moveCut(e) {
    if (!isCutting) return;

    let currentY = e.touches ? e.touches[0].clientY : e.clientY;
    let diff = currentY - startY;

    if (diff > 0) {
        document.getElementById("cutLine").style.height = diff + "px";
    }
}

function endCut() {
    if (isCutting) {
        isCutting = false;

        startFireworks();

        setTimeout(() => {
            document.getElementById("finalPopup").classList.remove("hidden");
        }, 1200);
    }
}

/* FIREWORKS */
function startFireworks() {
    const canvas = document.getElementById("fireworks");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    for (let i = 0; i < 60; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            angle: Math.random() * 2 * Math.PI,
            speed: Math.random() * 5 + 2,
            life: 100
        });
    }

    function animate() {
        ctx.fillStyle = "rgba(0,0,0,0.1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        particles.forEach((p, i) => {
            p.x += Math.cos(p.angle) * p.speed;
            p.y += Math.sin(p.angle) * p.speed;
            p.life--;

            ctx.fillStyle = `hsl(${Math.random()*360},100%,50%)`;
            ctx.fillRect(p.x, p.y, 3, 3);

            if (p.life <= 0) particles.splice(i, 1);
        });

        requestAnimationFrame(animate);
    }

    animate();
}
