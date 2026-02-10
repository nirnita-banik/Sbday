// Typewriter effect
const text = "Meowww...I made something just for you ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}
typeWriter();

// Navigate to main section
function nextSection() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");

    // Auto-play music safely
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {
        console.log("Autoplay blocked, use play button.");
    });
}

// Reasons for love
const reasons = [
    "you being you",
    "ekta biral miu",
    "tmr characteristic gulo ii",
    "karon tumi tumi ii TT",
    "kawaiii,handsome,hawtt,sensible,etc etc bole shesh kora jabena mwao!!!"
];

function showReason() {
    const random = Math.floor(Math.random() * reasons.length);
    document.getElementById("reason").innerText = reasons[random];
}

// Final reveal with confetti
function finalReveal() {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("final").classList.remove("hidden");
    startConfetti();
}

// Simple confetti effect
function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiCount = 150;
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 4,
            d: Math.random() * confettiCount,
            color: `hsl(${Math.random()*360}, 70%, 60%)`,
            tilt: Math.random() * 10 - 10
        });
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confetti.forEach((c, i) => {
            ctx.beginPath();
            ctx.lineWidth = c.r;
            ctx.strokeStyle = c.color;
            ctx.moveTo(c.x + c.tilt, c.y);
            ctx.lineTo(c.x + c.tilt + c.r / 2, c.y + c.r);
            ctx.stroke();

            c.y += Math.cos(0.01 + c.d) + 2 + c.r / 2;
            c.x += Math.sin(0.01) * 2;
            if (c.y > canvas.height) {
                c.y = -10;
                c.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(draw);
    }

    draw();
}

