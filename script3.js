function contar() {
    var inicio = document.getElementById("start");
    var fim = document.getElementById("end");
    var passo = document.getElementById("step");
    var res = document.getElementById("result");

    // Verifica se algum campo está vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!";
        return;
    }

    // Converte os valores para números
    var i = Number(inicio.value);
    var f = Number(fim.value);
    var p = Number(passo.value);

    // Verifica se o passo é inválido
    if (p <= 0) {
        alert("Passo não reconhecido. Voltando ao Passo 1.");
        p = 1;
    }

    res.innerHTML = "Contando: <br>";

    // Contagem crescente
    if (i < f) {
        for (let c = i; c <= f; c += p) {
            res.innerHTML += `${c} ✌🏻 `;
        }
    } else {
        // Contagem regressiva
        for (let c = i; c >= f; c -= p) {
            res.innerHTML += `${c} ✌🏻 `;
        }
    }

    res.innerHTML += "🏁";
}