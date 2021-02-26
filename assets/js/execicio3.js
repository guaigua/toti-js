function registrarpessoas(){
    let pessoa ={}
    pessoa.nome = prompt('Nome');
    pessoa.sobrenome = prompt ('Sobrenome');
    pessoa.idade = prompt ('idade');
    pessoa.mail = prompt ('mail');
    pessoa.senha = prompt('senha novo');
    pessoa.confirmesenha = prompt('Confirme sua senha');
    
    if ( pessoa.senha != pessoa.confirmesenha ){
        console.log ( `Sua nova senha ${pessoa.senha} é diferente da sua confirmação ${pessoa.confirmesenha} registrar novamente` )
        pessoa.senha = false;
    }
    else {
        console.log ( 'Alteração de senha correta')
        pessoa.senha = true;
    }
    return pessoa;
}

let listapessoas = []
    
    while (true){  
        listapessoas.push (registrarpessoas ())      
        if (prompt ("Você quer registrar outra pessoa? S/N")==="N"){
            break
        }
    }



console.table(`Número de registros ${listapessoas.length}`);
console.log(`Pessoas Registradas: `);
for (let pessoa of listapessoas){
    
    console.log(`${pessoa.nome} ${pessoa.sobrenome} `);
}

// Pessoas mais de 18 anos e 30

function idade(listapessoas) {
    return listapessoas.filter(pessoa => pessoa.idade > 19 && pessoa.idade < 31);
}
  
var gugg = idade(listapessoas);

console.log(`Pessoas Mais de 18 anos: ${gugg.length}`);

console.log(`Nombre de Pessoas Mais de 18 anos: `);

for (let pessoa of gugg){
    
    console.log(`${pessoa.nome} ${pessoa.sobrenome} `);
}


//Pessoas com senhas ruins
let contador = 0;
for (let pessoa of listapessoas){   
    if (pessoa.senha === false) {
        contador = contador + 1;
    }    
}

console.log(`Pessoas com senhas ruins: ${contador}`);



