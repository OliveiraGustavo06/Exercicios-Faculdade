// escolha de um seletor para realizar uma requisição
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const input = document.querySelector('#entrada'); 
const body = document.querySelector('body')
//function click(){ } -- maneira possível
button.onclick = () => {
    // .value traz o que foi digitado no input
    h1.innerHTML = input.value;
    // Estilização 
    h1.style.color = "yellow";
    body.style.backgroundColor = "green";
}
