import React, { useState } from 'react';
import './QuizDePerguntas_e_Respostas.css'

const perguntas = [
  {
    pergunta: 'Qual é a capital do Brasil?',
    opcoes: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Belo Horizonte'],
    resposta: 'Brasília'
  },
  {
    pergunta: 'Quem descobriu o Brasil?',
    opcoes: ['Pedro Álvares Cabral', 'Cristóvão Colombo', 'Vasco da Gama', 'Fernão de Magalhães'],
    resposta: 'Pedro Álvares Cabral'
  },
  {
    pergunta: 'Quantos planetas existem no sistema solar?',
    opcoes: ['5', '7', '9', '8'],
    resposta: '8'
  }
];

function QuizDePerguntas_e_Respostas() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const responder = (respostaSelecionada) => {
    setRespostas([...respostas, respostaSelecionada]);
    if (indicePergunta + 1 < perguntas.length) {
      setIndicePergunta(indicePergunta + 1);
    } else {
      calcularResultado();
    }
  };

  const calcularResultado = () => {
    // Verifica se todas as perguntas foram respondidas
    if (respostas.length !== perguntas.length) {
      return;
    }
  
    let pontuacao = 0;
    for (let i = 0; i < respostas.length; i++) {
      if (respostas[i] === perguntas[i].resposta) {
        pontuacao++;
      }
    }
    setResultado(pontuacao);
  };
  
  
  

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setRespostas([]);
    setResultado(null);
  };

  return (
    <div>
      {resultado !== null ? (
        <div>
          <h2>Resultado do Quiz</h2>
          <p>Você acertou {resultado} de {perguntas.length} perguntas!</p>
          <button onClick={reiniciarQuiz}>Reiniciar Quiz</button>
        </div>
      ) : (
        <div>
          <h2>Pergunta {indicePergunta + 1}</h2>
          <p>{perguntas[indicePergunta].pergunta}</p>
          <p>Só clicar na questão correta!</p>
          <ul className='questions'>
            {perguntas[indicePergunta].opcoes.map((opcao, index) => (
              <li key={index} onClick={() => responder(opcao)}>
                {opcao}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default QuizDePerguntas_e_Respostas;
