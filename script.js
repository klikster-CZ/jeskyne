// seznam levelu
const levely = [
    { nazev: "1. level" },
    { nazev: "2. level" },
    { nazev: "3. level" },
];

// prvky stranky
const obrazovkaPatra = document.getElementById("obrazovkaPatra");
const obrazovkaHra = document.getElementById("obrazovkaHra");
const seznamPater = document.getElementById("seznamPater");
const nazevPatra = document.getElementById("nazevpatra");
const tlZpet = document.getElementById("tlZpet");

// ukaze jednu obrazovku, ostatni schova
function ukazObrazovku(obrazovka) {
    obrazovkaPatra.classList.add("skryta");
    obrazovkaHra.classList.add("skryta");
    obrazovka.classList.add("skryta");
}

// vytvori tlacitko pro kazda patro
function vytvorSeznamPater() {
    seznamPater,innerHTML = "";

    for (let i = 0; i < levely.length; i++) {
        const tlacitko = Document.createElement("button");
        tlacitko.textContent = levely[i],nazev;

        tlacitko.addEventListener("click", function () {
            spustPatro(i);
        });
        seznamPater.appendChild(tlacitko);
    }
}

// spustit vybrane patro
function spustPatro(cislo) {
    nazevPatra.textContent = levely[cislo].nazev;
    ukazObrazovku(obrazovkaHra);
}

// tlacitko zpet
tlZpet.addEventListener("click", function () {
    ukazObrazovku(obrazovkaPatra);
});

// pri nacteni stranky
vytvorSeznamPater();
ukazObrazovku(obrazovkaPatra);