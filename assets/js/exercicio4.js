const myForm = document.getElementById('myForm');
console.log (myForm);

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
 
    console.log("Formulario");
    console.log(nome.value);
    console.log(mail.value);
    console.log(cel.value);
    console.log(conteudo.value);
    function persoas(nome, mail, cel, conteudo) {
        this.nome = nome;
        this.mail = mail;
        this.cel = cel;
        this.conteudo = conteudo;
    }
    const voce = new persoas(nome.value, mail.value, cel.value, conteudo.value);

    console.table(voce);


});