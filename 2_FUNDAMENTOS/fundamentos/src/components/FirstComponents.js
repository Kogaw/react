// arquivo de estilo

//components
import MyComponent from "./MyComponent";

const FirstComponent = () => {
    // essa função faz isso

    return(
        <div>       
            {/*Algum comentário*/}
            <h1>Meu primeiro componente</h1>
            <p className = "teste">Meu Texto</p>
            <MyComponent/>

        </div>
    )

}

export default FirstComponent;