async function getPokemon() {
    let response = await fetch("pokemon.json")
    let data = await response.json()
    return data
}

function getPokemonHtml(pokemon) {
    return `<div class="pokemon">
        <div class="id">${pokemon.id}</div>
        <div class="name">${pokemon.name.english}</div>
        <div class="type">${pokemon.type.join(' / ')}</div>
        <div class="stat">HP: ${pokemon.base.HP}</div>
        <div class="stat">Attack: ${pokemon.base.Attack}</div>
        <div class="stat">Defense: ${pokemon.base.Defense}</div>
        <div class="stat">Speed: ${pokemon.base.Speed}</div>
        <div class="alt-name">Japanese: ${pokemon.name.japanese}</div>
        <div class="alt-name">Chinese: ${pokemon.name.chinese}</div>
        <div class="alt-name">French: ${pokemon.name.french}</div>
    </div>`
}

function pokedex(allPokemon) {
    console.log(allPokemon)
    document.body.innerHTML = `
    <div class="pokedex">
        ${allPokemon.map(aPokemon => getPokemonHtml(aPokemon)).join('')}
    </div>
    `
}

getPokemon().then(pokedex)