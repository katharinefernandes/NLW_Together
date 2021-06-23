
//nomeDaVariável:TipoDaVariável
//Ponto de interrogação, atributo opcional

interface Usuario {
  nome:string, email:string, telefone?:string
}

function enviarEmail({email,nome, telefone}: Usuario) {

  console.log(`Olá ${nome} seu email é ${email} e seu telefone é ${telefone}`);
  //
  //
  //
}

enviarEmail({
  email: "katharinerodrigues2004if@gmail.com",
  nome: "Katharine",
});