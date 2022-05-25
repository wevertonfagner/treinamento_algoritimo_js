const livros = require('./algoritimo_lista_livros');

function insetionSort(lista) {

    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            let intemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior
            lista[analise - 1] = intemAnalise

            analise--
        }
    }
    console.log (lista);
}

insetionSort(livros);