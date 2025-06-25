export const Encabezado = (props) => {
    const {tituloPrincipal,tituloSecundario} = props
    console.log(props)
    return( 
    <div>
        {tituloPrincipal &&
        <h1>
    {tituloPrincipal}
    </h1>
        }
    {tituloSecundario &&
    <h2>
    {tituloSecundario} 
    </h2>
    }
    
    </div>
 
);
}

