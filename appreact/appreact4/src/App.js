import React from 'react'
const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },
  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },
  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },
  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },
  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },
  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },
  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];


const App = () => {
  const [form, setForm] = React.useState( 
formFields.reduce((acc, form) => {
  console.log(acc)
  return {
    ...acc,
    [form.id]: ''
  }
},{})
);

const [response, setResponse] = React.useState(null);

function handleChange ({target}) {
  const {id, value} = target
  setForm({...form, [id]:value })
}
function handleSubmit(event) {
  event.preventDefault();
  fetch('https://ranekapi.origamid.dev/json/api/usuario', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  }).then((response) => {
    setResponse(response);
  });
}


  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((item) => (
        <div key={item.id}>
          <label htmlFor={item.id}>{item.label}</label>
          <input type={item.type} id={item.id} value={form[item.id]} onChange={handleChange}/>
        </div>
      ))}
      <button>Enviar</button>
      {response && response.ok && <p>Usuário Criado</p>}
    </form>
  )
}

export default App
