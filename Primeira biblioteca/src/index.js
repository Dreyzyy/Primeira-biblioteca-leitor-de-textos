//node src/cli.js arquivos/texto-web.txt ./resultados

//========== FORMATAR TEXTO ==========
export function contaPalavras(texto) {
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return [];
        return verificarPalavrasDuplicadas(paragrafo); //retorna em array
    })
    return contagem;
}

function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n'); //quebra de linha
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