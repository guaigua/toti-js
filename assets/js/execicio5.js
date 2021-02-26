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


//validan CEP

function limpa_formulário() {
    //Limpa valores do formulário de cep.
    document.getElementById('nome').value=("");
    document.getElementById('mail').value=("");
    document.getElementById('tel').value=("");
    document.getElementById('idade').value=("");
    document.getElementById('conteudo').value=(""); 
    document.getElementById('cep').value=("");
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    
} //end if.
else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.        
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
};

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
    function persoas(nome, mail, tel, idade, conteudo, cep, rua, bairro, cidade, uf) {
        this.nome = nome;        
        this.mail = mail;
        this.tel = tel;
        this.idade = idade;
        this.conteudo = conteudo;
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
    }
    const voce = new persoas(nome.value, mail.value, tel.value, idade.value, conteudo.value);
    
    console.log("Tabla Formulario");
    console.table(voce);
    pessoas.push(voce);
    console.log(pessoas);
    
    limpa_formulário_cep(); 
   
    
    

});

