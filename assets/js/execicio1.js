let nome = prompt('Nome de usuário');
let sobrenome = prompt ('Sobrenome');
let idade = prompt ('idade');
let mail = prompt ('mail');

console.table({
    nome,
    sobrenome,
    idade,
    mail
})

console.log(`${nome} ${sobrenome} Meu idade é ${idade} meu mail é ${mail}`);