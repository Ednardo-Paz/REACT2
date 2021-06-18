import { func } from 'prop-types';
import React from 'react';

const App = () => {
  const [mensagem, setMensagem] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cores, setCores] = React.useState(['azul']);

  function handleChange ({target}) {
    if(target.checked){
      setCores( [...cores, target.value])
    } else {
      setCores(
        cores.filter((cor) =>  cor !== target.value))
    }
  }

  function handleClick({ target }) {
    setProduto(target.value);
  }
  return (
    <form>
      <label>
        <input
        type="checkbox"
        value="azul"
        checked={cores.includes(`azul`)}
          onChange={handleChange}
        />
        Azul
      </label>

      <label>
        <input
        type="checkbox"
        value="vermelho"
        checked={cores.includes(`vermelho`)}
          onChange={handleChange}
        />
        Vermelho
      </label>

      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <select value={select} onChange={({ target }) => setSelect(target.value)}>
        <option value="" disabled>
          Selecione
        </option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <p>{select}</p>
      <label>
        <input
          onChange={handleClick}
          type="radio"
          checked={produto === 'smartphone'}
          name="produto"
          value="smartphone"
        />
        smartphone
      </label>
      {produto}
      <label>
        <input
          onChange={handleClick}
          type="radio"
          checked={produto === 'notebook'}
          value="notebook"
        />
        notebook
      </label>
    </form>
  );
};

export default App;
