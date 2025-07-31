function contar() { // Define a função contar que será executada ao clicar no botão
    var inicio = document.getElementById("start"); // Pega o input de início pelo ID
    var fim = document.getElementById("end"); // Pega o input de fim pelo ID
    var passo = document.getElementById("step"); // Pega o input de passo pelo ID
    var res = document.getElementById("result"); // Pega a div onde o resultado será mostrado

    // Verifica se algum campo está vazio
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "Impossível contar!"; // Mostra mensagem de erro se faltar algum valor
        return; // Encerra a função se tiver erro
    }

    // Converte os valores para números
    var i = Number(inicio.value); // Converte o início para número
    var f = Number(fim.value); // Converte o fim para número
    var p = Number(passo.value); // Converte o passo para número

    // Verifica se o passo é inválido (menor ou igual a zero)
    if (p <= 0) {
        alert("Passo não reconhecido. Voltando ao Passo 1."); // Alerta o usuário
        p = 1; // Corrige o passo para 1
    }

    res.innerHTML = "Contando: <br>"; // Inicia o resultado mostrando "Contando:"

    // Contagem crescente (quando início é menor que fim)
    if (i < f) {
        for (let c = i; c <= f; c += p) { // Conta de i até f, pulando de p em p
            res.innerHTML += `${c} ✌🏻 `; // Adiciona o número e um emoji no resultado
        }
    } else {
        // Contagem regressiva (quando início é maior ou igual ao fim)
        for (let c = i; c >= f; c -= p) { // Conta de i até f decrescendo de p em p
            res.innerHTML += `${c} ✌🏻 `; // Adiciona o número e emoji no resultado
        }
    }

    res.innerHTML += "🏁"; // Adiciona um emoji de bandeira no final da contagem
}
