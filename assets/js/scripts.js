var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
            currentNumber = currentNumber + 1;
            currentNumberWrapper.innerHTML = currentNumber;
            

}


function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;


}


/*   

Tentativa 1
document.getElementById("add").addEventListener(increment()), 
        function(){
            document.getElementById("mensagem").innerText ="Voce esta adicionando numerios ao contador!";
    

Anotações
document.querySelector('#increment').addEventListener('click', adicionar_eventos)

function adicionar_eventos() {
    let e = document.querySelector('increment')

}
*/
