//validando Nome


//validando Mail
document.getElementById('mail').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('mailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Um texto é exibido em div só quando está errado
    if (emailRegex.test(campo.value)) {
      valido.innerText = "Mail Válido";
      document.getElementById("mailOK").classList.add('d-none');
    } else {
      valido.innerText = "Mail incorreta";
      document.getElementById("mailOK").classList.remove('d-none');
    }
});

//validando Telefone apenas números


//Form
const myForm = document.getElementById('myForm');
console.log (myForm);
// let btnExibirMaisVelhos = document.querySelector("#exibirMaisVelhos");
let pessoas = [];

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
 
    //console.log("Formulario");
    //console.log(nome.value);
    //console.log(mail.value);
    //console.log(tel.value);
    //console.log(idade.value);
    //console.log(conteudo.value);
    function persoas(nome, mail, tel, idade, conteudo) {
        this.nome = nome;        
        this.mail = mail;
        this.tel = tel;
        this.idade = idade;
        this.conteudo = conteudo;
    }
    const voce = new persoas(nome.value, mail.value, tel.value, idade.value, conteudo.value);
    
    console.log("Tabla Formulario");
    console.table(voce);
    pessoas.push(voce);

    console.log(pessoas);

    let text = document.createTextNode(`${nome.value} tem ${mail.value} mail tem ${idade.value} idade`);
       
    resultado.appendChild(text);

    let linebreak = document.createElement('br');
    resultado.appendChild(linebreak);

    nome.value = '';
    mail.value = '';
    tel.value = '';
    idade.value = '';
    conteudo.value = '';

    // Pessoas mais de 18 anos e 30
    console.log(pessoas);

    function cal(pessoas) {
        return pessoas.filter(pessoa => pessoa.idade > 19 && pessoa.idade < 31);
    }
    
    let total = cal(pessoas);


    let text2 = document.createTextNode(`Pessoas Registradas maiores de dezoito e menos de trinta: ${total.length}`);
   
    estatisticas.appendChild(text2);
   
    
    

});

