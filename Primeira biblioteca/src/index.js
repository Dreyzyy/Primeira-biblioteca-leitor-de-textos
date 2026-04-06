//rodar no terminal com o caminho do arquivo: node src/index.js pasta-mae/arquivos/texto-web.txt

const { log } = require('console');
const fs = require('fs') //fs = sistema de arquivo do computador, tem seus metodos


const caminhoArquivo = process.argv; // Serve para enviar instruções pra o terminal em forma de array!
const link = caminhoArquivo[2];      //geralmente retorna o caminho do node, do arquivo utilizado e a instrução.

fs.readFile(link, 'utf-8', (erro, texto) => {
    quebraEmParagrafos(texto);
})  //caminho-arquivo, sigla pra idioma normal, parametros

function quebraEmParagrafos(texto) {
    const paragrafos = texto.toLowerCase().split('\n'); //quebra de linha
    
    const contagem = paragrafos.map((paragrafo) => { //pra separar corretamente na contagem
        return verificarPalavrasDuplicadas(paragrafo); //retorna em array
    });

    console.log(contagem);
    
}


function limpaPalavras (palavras) {
    return palavras.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); //o que quer substituir, pelo o que.
}                          //isso é regex, não precisa gravar mas é util.

function verificarPalavrasDuplicadas (texto) { //Funcionalidade principal
    const listaPalavras = texto.split(' ');
    const resultado = {
    }

    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3) {
        const palavrasLimpas = limpaPalavras(palavra);
        resultado[palavrasLimpas] = (resultado[palavrasLimpas] || 0 ) +1  //pra cada palavra do array(caminhoArquivo), intera no objeto.
   }                                                                      //o no pc fica undefined. Quando a primeira palavra chega, ela se torna 0 e depois add 1
});                                                                       //dps, vai somando +1
    return resultado;                                                     
}