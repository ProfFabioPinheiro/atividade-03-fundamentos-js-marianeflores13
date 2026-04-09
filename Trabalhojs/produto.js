function calcularDesconto(){
    const valorFone = 150;
    const desconto = 10;

    const valorDesconto = valorFone * desconto / 100;
    const valorFinal = valorFone - valorDesconto;

    console.log("O valor original do fone é: R$" + valorFone)
    console.log(" o valor do desconto é: R$" + valorDesconto)
    console.log("O valor final é: R$" + valorFinal)
}

calcularDesconto()