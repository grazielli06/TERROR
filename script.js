const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Em uma noite com tempestades. Você e seus amigos decidem investigar uma casa abandonada no final da rua, famosa por suas lendas assustadoras. O vento uivava, e relâmpagos iluminavam o céu enquanto vocês se aproximavam da porta range",
        alternativas: [
             "entrar na casa"
            "verificar janela"
        
    },
    {
        enunciado: "Ao entrar, você se depara com o cheiro  forte de podridão. A luz do relâmpago revela uma mesa com objetos estranhos, e você sente uma presença atrás de você.",
        alternativas: [
            "Ao entrar, você se depara com o cheiro  forte de podridão. A luz do relâmpago revela uma mesa com objetos estranhos, e você sente uma presença atrás de você",
            "Ignorar e explorar a sala. ",
        ]
    },
    {
        pergunta: "congelada em seu rosto.  A presença parece imóvel,como se estivesse esperando por algo.A luz do relamgago revel uma figura esquelética, com olhos vazios e uma expressão de desespero ",
        alternativas: [
            "Tentae se comunicar com a figura.",
            "Ignorar a figura e explorar mais a sala."
        ]
    },
    {
        enunciado: "Á medida que você se afasta, o cheiro de podridão se torna mais forte, quase insuportável. Você nota um armário encostado na parede, com portas entreabertas. Dentro, há uma pilha de livros antigos e uma pequena caixa de madeira. ",
        alternativas: [
            "Examinar os livros no armário.",
            "            "Examinar os livros no armário.",
"
        ]
    },
    {
        enunciado: "como um esforço, você consegue abrir a caixa. Dentro, há com um antigo diário coberto de poeira. A capa é de couro escuro e está desgastada pelo tempo. Ao abrir as páginas estão cheias de escritas corridas e desenhos estranhos. algumas palavras estão destacadas em vermelhos "NÃO OLHE PARA TRÁS".",
        alternativas: [
           "Continuar lendo.",
            "Procurar mais pistas na sala."
        
        
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }Em uma noite com tempestades. Você e seus amigos decidem investigar uma casa abandonada no final da rua, famosa por suas lendas assustadoras. O vento uivava, e relâmpagos iluminavam o céu enquanto vocês se aproximavam da porta range",
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();