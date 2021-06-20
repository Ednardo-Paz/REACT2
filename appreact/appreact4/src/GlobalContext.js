import React from 'react'

export const GlobalContext = React.createContext();


export const GlobalStorage = ({children}) => {
  const [dados, setDados] = React.useState(null);
 

  React.useEffect(() => {
    const resolve = fetch(`https://ranekapi.origamid.dev/json/api/produto/`).then((res) => res.json())
    .then((json) => setDados(json))
  }, [setDados])
  
  function limparDados (){
    setDados(null);
  }
 
  return <GlobalContext.Provider value={{dados, setDados, limparDados}}>{children}</GlobalContext.Provider>
}

