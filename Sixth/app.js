document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    searchButton.addEventListener("click", searchPokemon);

    async function searchPokemon() {
        const searchInput = document.getElementById("searchInput");
        const searchTerm = searchInput.value.trim().toLowerCase();

        if (searchTerm === "") {
            alert("Ingresa el nombre o número de un Pokémon.");
            return;
        }

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
            const data = await response.json();

            if (data) {
                displayPokemonData(data);
            } else {
                alert("No se encontró ningún Pokémon con ese nombre o número.");
            }
        } catch (error) {
            alert("Ha ocurrido un error al buscar el Pokémon.");
            console.error(error);
        }
    }

    function displayPokemonData(pokemonData) {
        const pokemonInfoDiv = document.getElementById("pokemonInfo");
        pokemonInfoDiv.innerHTML = `
            <h2>${pokemonData.name.toUpperCase()}</h2>
            <p>Número: ${pokemonData.id}</p>
            <p>Tipo: ${getTypes(pokemonData.types)}</p>
            <p>Peso: ${pokemonData.weight / 10} kg</p>
            <p>Altura: ${pokemonData.height / 10} m</p>
            <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}">
        `;
    }

    function getTypes(types) {
        return types.map((type) => type.type.name).join(", ");
    }
});