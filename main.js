
        const NomeContext = React.createContext('nome')

        function meuComponente1(){
            const meuNome = 'Roger Rogerio do Nascimento';
            return (
                <NomeContext.Provider value={meuNome}>
                    <div className="componente-1">
                        <meuComponente2/>
                    </div>
                </NomeContext.Provider>
            )
        }

        function meuComponente2(){
            return (
                <div className="componete-2"> 
                    <meuComponente3/>
                </div>
            )
        }

        function meuComponente3(){     
            return(
                <div className="componente-3">
                    <meuComponente4/>
                </div>
            )
        }

        function meuComponente4(){
            return (
                <NomeContext.Consumer>
                    {(NomeContext) =>(
                        <div className="componentes-4">
                            <p>{NomeContext}</p>
                        </div>
                    )}
                </NomeContext.Consumer>
            )
        }

        function meuComponente(){
            return (
                <div id="componentes">
                    <meuComponente1 />
                </div>
            )
        }

        ReactDOM.render(
            <meuComponente/>,
            document.getElementById('app')
        )