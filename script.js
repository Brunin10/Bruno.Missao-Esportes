const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Pensando em melhorar o desempenho dos atletas olímpicos para as Olimpíadas de 2028 (Los Angeles), o governo brasileiro deveria investir mais no esporte?",
        alternativas: [
            {
                texto: "Sim, os atletas precisam de incentivos maiores para melhorar seu desempenho. Além disso, é necessário incentivar o esporte nas escolas para descobrir novos e futuros atletas",
                afirmacao: "O incentivo para atletas motiva pessoas que desejam ingressar nesta carreira."
            },
            {
                texto: "Não, o governo brasileiro deveria utilizar o dinheiro público em outras áreas de maior importância, tais como: saúde e educação",
                afirmacao: "A situação do Brasil mostra que a carreira de atleta é somente para poucos."
            }
        ]
    },
    {
        enunciado: "Como o governo deveria distribuir o dinheiro investido no esporte?",
        alternativas: [
            {
                texto: "Aumentando o valor do bolsa-atleta, construção de novas estruturas esportivas em localidades sem nenhuma estrutura, incentivo e apoio financeiro para novos atletas e futuros treinadores",
                afirmacao: "Incentiva os atletas a obterem melhores desempenhos nas competições."
            },
            {
                texto: "Ampliando os centros de treinamento já construídos, investindo na formação dos treinadores já atuantes",
                afirmacao: "É necessário investir na infraestrutura e na capacitação para treinadores."
            }
        ]
    },
            {
        enunciado: "Como a educação poderia incentivar o esporte para crianças e adolescentes dentro e fora da escola?",
        alternativas: [
            {
                texto: "Os profissionais de Educação Física deveriam incentivar a prática esportiva de diversas modalidades, ampliação das aulas de Educação Física, contratação de treinadores para a prática esportiva em período contra-turno",
                afirmacao: "Aulas de Educação Física permitem a descoberta de novos atletas."
            },
            {
                texto: "A educação deveria se preocupar com a formação básica e ética do cidadão, visto que a carreira esportiva são para poucos",
                afirmacao: "O conhecimento básico em áreas do conhecimento é mais importante."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
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
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

}

mostraPergunta();
