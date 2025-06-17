function cumprimentar(mensagem1, mensagem2) {
    console.log(mensagem1);
    console.log(mensagem2);
};

function multiplicarValor(a, b) {
    return a * b;
}

function exibirLista(lista) {
    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];
        console.log(`${index} -> ${element}`)
    }
}

function filtrarLista(lista) {
    const novaLista = [];

    for (let index = 0; index < lista.length; index++) {
        const element = lista[index];

        if (element % 2 == 0) {
            novaLista.push(element);
        }
    }

    return novaLista;
}

cumprimentar('teste', 'teste2');
console.log(multiplicarValor(2, 3));
exibirLista(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
console.log(filtrarLista([2, 3, 4, 5, 6, 7, 8, 9]));
