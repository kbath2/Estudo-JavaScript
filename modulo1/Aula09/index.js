/**
** 14. alert, confirm e prompt (Navegador)
*/

// alert("Hello World") // emite um alerta no navegador

let conf =  confirm("Posso confirma o pedido ?") // Emite uma mensagem de confirmação. Ex: Tem certeza que quer fechar a pagina?
//console.log(conf)

//let name = prompt("Qual seu nome ?") // Abre uma caixa de input 
//console.log(name)

if (conf == false) {
    alert("Vc cancelou o pedido")
} else {
    alert("Pedido confirmado, encomenda será entregue em 10 dias !")
    let endereço = prompt("Por favor insira o endereço !")
    console.log(endereço)
}