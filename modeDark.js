
let theme = document.querySelector('#theme');
let alberto = document.querySelector('body')


let lampada = 'on';


theme.addEventListener('click', ()=>{

    if(lampada == 'on') {
        document.body.style.backgroundColor = "rgba(15, 15, 15)";
        alberto.style.color = "white";
        lampada ='of';
    } else {
        document.body.style.backgroundColor = "white"
        alberto.style.color = "black";
        lampada = 'on'
    }

})