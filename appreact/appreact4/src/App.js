import React from 'react';
import Radio from './forms/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState(
    perguntas.reduce((acc, pergunta) => {
      return {
        ...acc,
        [pergunta.id]: '',
      };
    }, {}),
  );

  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta,
    );
    console.log(corretas);
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length -1) {
      setSlide(slide + 1);
    } else {
      setResultado(slide + 1);

      resultadoFinal();
    }
  }

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
        <Radio
          active={slide === index}
          key={pergunta.id}
          onChange={handleChange}
          value={respostas[pergunta.id]}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <button onClick={handleClick}>Proximo</button>
      )}
    </form>
  );
};

export default App;
