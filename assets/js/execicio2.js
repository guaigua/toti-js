let nome = prompt('Nome de usuário');
let senhaantiga = prompt('escreva sua senha antiga');
let senha = prompt('senha novo');

let confirmesenha = prompt('Confirme sua senha') 

console.table({
    nome,
    senhaantiga,
    senha,
    confirmesenha
})

if (senhaantiga === senha ) {
    console.log ( `Insira uma senha diferente da atual, o sinal escrito atual é ${senhaantiga}`)
}
else if ( senha != confirmesenha ){
    console.log ( `Sua nova senha ${senhaantiga} é diferente da sua confirmação ${confirmesenha}`)
}
else {
    console.log ( 'Alteração de senha correta')
}