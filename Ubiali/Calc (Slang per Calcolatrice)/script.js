let schermo = document.getElementById("schermo");

["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove"].forEach((id, num) => {
    document.getElementById(id).addEventListener("click", () => {
        schermo.value += num;
    });
});

let operazioni = { piu: "+", meno: "-", moltiplica: "*", div: "/" };
for (let key in operazioni) {
    document.getElementById(key).addEventListener("click", () => {
        schermo.value += operazioni[key];
    });
};

document.getElementById("punto").addEventListener("click", () => {
    schermo.value += ".";
});

document.getElementById("canc").addEventListener("click", () => {
    schermo.value = "";
});

document.getElementById("uguale").addEventListener("click", () => {
    try {
        schermo.value = eval(schermo.value);
    } catch {
        schermo.value = "Errore";
    }
});