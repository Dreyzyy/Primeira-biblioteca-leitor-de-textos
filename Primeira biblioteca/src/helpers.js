function filtaOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function montaSaidaArquivo(listaPalavras) {
    let textoFinal = '';

    listaPalavras.forEach((paragrafo, i) => {
        const duplicadas = filtaOcorrencias(paragrafo);
        if(duplicadas.length > 0) {
            duplicadas.join(', ');
            textoFinal += `Palavras duplicadas no parágrafo ${i + 1}: ${duplicadas} \n`;
        } else {
           duplicadas.join(', ');
            textoFinal += `Nenhuma palavra duplicada no parágrafo ${i + 1}! \n`; 
        }
    });

    return textoFinal;
}

export { montaSaidaArquivo };