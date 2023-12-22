let dinheiro = 0;
let valorNissanGTR = 1399999.99;




function ArmazenarDinheiro() {
    numero = Number(document.getElementById('dinheiro').value)
    dinheiro += numero;
    

    console.log(dinheiro)
    document.getElementById('sobra').innerHTML ="R$" + dinheiro;

}

function comprar() {

    if (dinheiro >= valorNissanGTR) {
        dinheiro = dinheiro - valorNissanGTR;
        alert("A compra foi realizada com sucesso , Obrigado por confiar em nossa em empresa. Como agradecimento enviaremos um par de rodas junto com o carro :)")

        document.getElementById('sobra').innerHTML = "R$" + dinheiro;

    } else {
        alert('Saldo Insuficiente')
    }

}





function box3() {
    valorNissanGTR = 139999999;
    document.getElementById('valor').innerHTML = "R$1.399.999,99";
    document.getElementById('carro').innerHTML = "Nissan GT-R Black Edition de Sebastian Vettel ";
    console.log(valorNissanGTR)
}


