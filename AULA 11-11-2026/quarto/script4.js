const palavra = [
    "casa", "gato", "bola", "pato", "mesa",
    "lixo", "rosa", "faca", "vela", "tela"
];
// Vamos sortear uma das palavras 
// Math.florr -> arredonda um para baixo ->inteiro
const sorteada = palavra[Math.floor(Math.random()* palavra.length)]
console.log(sorteada);
// Atribuir os elementos HTML ao JS
const inputs = document.querySelectorAll('.palavra input');
const verificar = document.getElementById('verificar');

//Preenchimento dos inputs ao digitar a palavra
inputs.forEach((input,i) => {
    input.addEventListener("input", () =>{
        if(input.value && i <inputs.length -1 ){
            inputs [i+1].focus();
        }
    })
});


// Atribuindo a tabela
const corpoTabela = document.querySelectorAll('#tentativas tbody');

verificar.addEventListener("click", () =>{

    // const linha = corpoTabela.insertRow();

    inputs.forEach((input, i) => {

        // linha.insertCell().textContent = input.value;

        if(input.value === sorteada[i]){
            input.readOnly = true;
        }
        else{
            input.value ="";
        }
    });

    if([...inputs].every((input) => input.readOnly)){
        alert("Parabéns, você venceu!")
    }

    // . chamamos classe no css
    // # chamamos o ID no css

})