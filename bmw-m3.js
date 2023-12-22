let dinheiro = 0;
let valorBmw = 810000;


function ArmazenarDinheiro() {
    numero = Number(document.getElementById('dinheiro').value)
    dinheiro += numero;
    

    console.log(dinheiro)
    document.getElementById('sobra').innerHTML ="R$" + dinheiro;

}

function comprar() {

    

    if (dinheiro >= valorBmw ) {

            dinheiro = dinheiro - valorBmw;
            alert("A compra foi realizada com sucesso , Obrigado por confiar em nossa em empresa. Como agradecimento enviaremos um par de rodas junto com o carro :)")
    
            document.getElementById('sobra').innerHTML = "R$" + dinheiro;
        
        
    } else {
        alert('Saldo Insuficiente')
    }

}



function box1() {
    valorBmw = 817550
    document.getElementById('valor').innerHTML = "R$817.550,00";
    document.getElementById('carro').innerHTML = "BMW M3, GREEN ";
    console.log(valorBmw)
}

function box2() {
    valorBmw = 815000
    document.getElementById('valor').innerHTML = "R$815.000,00";
    document.getElementById('carro').innerHTML = "BMW M3, WHITE ";
    console.log(valorBmw)
}

function box3() {
    valorBmw = 812550
    document.getElementById('valor').innerHTML = "R$812.550,00";
    document.getElementById('carro').innerHTML = "BMW M3, BLACK ";
    console.log(valorBmw)
}


