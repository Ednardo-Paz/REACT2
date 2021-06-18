import React from 'react';
import Input from './Form/Input';
import Select from './Form/Select';
import Radio from './Form/Radio';
import Checkbox from './Form/Checkbox';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cores, setCores] = React.useState('azul');
  const [frutas, setFrutas] = React.useState('Uva ');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termo, setTermo] = React.useState([]);


  return (
    <form>
      <h2>Checkbox</h2>
      <Checkbox value={linguagens} setValue={setLinguagens} options={[ 'JavaScript', 'PHP', 'Java']}/>
      <h2>Termos</h2>
      <Checkbox value={termo} setValue={setTermo} options={['Aceite o termo.']}/>

      <h1>Cores</h1>
      <Radio value={cores} setValue={setCores} options={['azul', 'vermelho']}/>
      <h1>Frutas</h1>
      <Radio value={frutas} setValue={setFrutas} options={['Morango', 'Uva', 'Laranja']}/>

      <Select options={['notebook', 'tablet', 'smartphone']}value={produto} setValue={setProduto} />
      <Input id="nome" value={nome} setValue={setNome} label="Nome" />
      <Input id="email" value={email} setValue={setEmail} label="Email" />
    </form>
  );
};

export default App;

