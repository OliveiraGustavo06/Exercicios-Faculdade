// Estou selecionando o span pelo id
const total = document.getElementById('total');
// Atribuir os 2 inputs ao mesmo tempo às suas variáveis
const [input1,input2] = document.querySelectorAll('input');

// configuração dos botões mais e menos para cada contador
function configurarContador(input){
    const[menos, mais] = input.parentElement.querySelectorAll('button');
    //configurar o botão menos
    menos.addEventListener("click", () => {
        if(Number(input.value)> 0){
            input.value = Number(input.value) -1;
        }
    });

    //configurar o botão mais
    mais.addEventListener("click", () => {
        if(Number(input.value) < 10){
            input.value = Number(input.value) +1;
        }
    });
}

configurarContador(input1);
configurarContador(input2);

// Criando um objeto de funções -> Atribuição com : e separação com ,
const operacoes = {
    // Associando a String "+" com a função que retorna a soma
    "+": (a,b) => a + b,
    "-": (a,b) => a - b,
    "*": (a,b) => a * b,
    "/": (a,b) => (b ===0 ? "Divisão por zero" : a / b),
};

document.querySelectorAll("[data-op]").forEach((botao)=>{
    botao.addEventListener("click", () =>{

        const a = Number(input1.value);
        const b = Number(input2.value);
        total.textContent = operacoes[botao.dataset.op] (a,b);

        input1.value = 0;
        input2.value = 0;

    });
});