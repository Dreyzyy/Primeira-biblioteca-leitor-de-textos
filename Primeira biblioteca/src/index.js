//rodar no terminal com o caminho do arquivo: node src/index.js pasta-mae/arquivos/texto-web.txt

const fs = require('fs') //fs = sistema de arquivo do computador, tem seus metodos


const caminhoArquivo = process.argv; // Serve para enviar instruções pra o terminal em forma de array!
const link = caminhoArquivo[2];      //geralmente retorna o caminho do node, do arquivo utilizado e a instrução.

fs.readFile(link, 'utf-8', (erro, texto) => {
    console.log(texto);
})  //caminho-arquivo, sigla pra idioma normal, parametros
