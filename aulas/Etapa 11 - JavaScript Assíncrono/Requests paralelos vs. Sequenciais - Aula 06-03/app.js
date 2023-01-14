const getPokemons = async () => {
    const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
    const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
    const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

    const results = await Promise.all([bulbasaur, charmander, squirtle])

    results.forEach(async response => console.log(await response.json()))
}

getPokemons()

/* Para um request sequencial, utilizamos o await antes do fetch para que este segure a execução dos fetchs seguintes enquanto o primeiro não retorna a promise. Para um request pararelo, basta tirarmos a palavra-chave await para termos requests simultâneos*/