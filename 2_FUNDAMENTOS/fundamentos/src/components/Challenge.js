const Challenge = () => {

    let a = 4
    let b = 23

    return(
        <div>
            <p>Os números são {a} e {b}</p>
            <button onClick = {() => window.alert(a + b)}>
                Clique para somar
            </button>
        </div>
    )
}

export default Challenge;