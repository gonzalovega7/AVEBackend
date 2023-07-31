const imageContainer = document.getElementById("imageContainer");

async function displayPokemonImages() {
  try {
    const pokemonCountInput = document.getElementById("pokemonCount");
    const pokemonCount = parseInt(pokemonCountInput.value);

    // Limpiar el contenedor de imágenes
    imageContainer.innerHTML = "";

    // Validar que el número de imágenes no supere el máximo permitido (15)
    const validPokemonCount = Math.min(pokemonCount, 15);

    // Hacer una solicitud para obtener los datos de los Pokémon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${validPokemonCount}`);
    const data = await response.json();

    // Extraer las URLs de las imágenes de los Pokémon
    const imageUrls = data.results.map(pokemon => pokemon.url);

    console.log(imageUrls);
    // Mostrar imágenes en el contenedor
    imageUrls.forEach(imageUrl => {
      const imageElement = document.createElement("img");
      imageElement.src = imageUrl;
      imageContainer.appendChild(imageElement);
    });
  } catch (error) {
    console.error("Error al obtener imágenes de Pokémon:", error);
  }
}