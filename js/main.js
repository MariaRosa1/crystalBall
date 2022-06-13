const possivelRespostas = [
    "Com certeza!",
    "Não tenho tanta certeza.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Ao meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Sinais apontam que não.",
    "Perspectiva boa.",
    "Definitivamente, não.",
    "Minhas fontes dizem sim.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se no objetivo que dará certo.",
    "Sinais apontam que sim.",
    "Não.",
]

function clicar(){
    const pergunta = document.getElementById("pergunta").value;
    const resposta = document.getElementById("resposta");
    const resultado = document.getElementById("resultado");

    if(pergunta.length == 0){
        alert("Por favor, faça uma pergunta")
        return
    }

    //number random
    let numeroAleatorio = Math.floor(Math.random() * possivelRespostas.length)

    //resposta
    resposta.innerHTML += pergunta + "?"
    resultado.innerHTML += possivelRespostas[numeroAleatorio];

    setTimeout(function (){
        resposta.innerHTML = ''
        resultado.innerHTML = ''
      }, "5000")
}

