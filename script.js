const data = [
    {
        judul: "❤️ Pertanyaan 1",
        teks: "..."
    },
    {
        judul: "❤️ Pertanyaan 2",
        teks: "..."
    },
    {
        judul: "❤️ Pertanyaan 3",
        teks: "..."
    }
];

let index = 0;

const judul = document.getElementById("judul");
const teks = document.getElementById("teks");

const loading = document.getElementById("loading");
const buttons = document.getElementById("buttons");
const dots = document.querySelectorAll(".dot");

let interval;

// =========================
// LOADING
// =========================

function startLoading() {

    judul.style.display = "none";
    teks.style.display = "none";
    buttons.style.display = "none";

    loading.style.display = "flex";

    let active = 1;

    dots.forEach(dot => dot.classList.remove("active"));

    interval = setInterval(() => {

        dots.forEach(dot => dot.classList.remove("active"));

        for (let i = 0; i < active; i++) {
            dots[i].classList.add("active");
        }

        active++;

        if (active > 5) {
            active = 1;
        }

    }, 180);

}

// =========================
// STOP LOADING
// =========================

function stopLoading() {

    clearInterval(interval);

    loading.style.display = "none";

    judul.style.display = "block";
    teks.style.display = "block";
    buttons.style.display = "block";

}

// =========================
// NEXT STEP
// =========================

function nextStep() {

    startLoading();

    setTimeout(() => {

        stopLoading();

        index++;

        if (index >= data.length) {

            window.location.href = "https://aishurizu14.github.io/foryou/";

            return;

        }

        // fade effect reset
        judul.classList.remove("fade");
        teks.classList.remove("fade");

        void judul.offsetWidth; // force reflow biar animasi ke-reset

        judul.innerText = data[index].judul;
        teks.innerText = data[index].teks;

        judul.classList.add("fade");
        teks.classList.add("fade");

    }, 900);

}

// =========================
// NO BUTTON KABUR
// =========================

const noBtn = document.querySelector(".no");

function kabur() {

    noBtn.style.position = "fixed";

    noBtn.style.left =
        Math.random() * (window.innerWidth - 120) + "px";

    noBtn.style.top =
        Math.random() * (window.innerHeight - 70) + "px";
}

noBtn.addEventListener("mouseover", kabur);

noBtn.addEventListener("touchstart", function (e) {
    e.preventDefault();
    kabur();
});
