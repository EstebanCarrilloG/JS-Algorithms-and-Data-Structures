const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

let pokemonData = [];

function fetchData(value) {
  fetch("https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/" + value.toLowerCase())
    .then((res) => res.json())
    .then((data) => {
      pokemonData = data;
      renderPockemonInfo(pokemonData);
    })
    .catch((err) => {
      alert("Pokémon not found");
    });
}

function renderPockemonInfo(data) {
  const { name, id, weight, height, sprites, stats, types } = data;
  const pkName = document.getElementById("pokemon-name");
  const pkId = document.getElementById("pokemon-id");
  const pkWeight = document.getElementById("weight");
  const pkHeight = document.getElementById("height");
  const pkSpriteContainer = document.getElementById("sprite-container");
  const pkTypes = document.getElementById("types");
  const pkHp = document.getElementById("hp");
  const pkAttack = document.getElementById("attack");
  const pkDefense = document.getElementById("defense");
  const pkSpecialAttack = document.getElementById("special-attack");
  const pkSpecialDefense = document.getElementById("special-defense");
  const pkSpeed = document.getElementById("speed");

  pkName.textContent = name.toUpperCase();
  pkId.textContent = "#" + id;
  pkWeight.textContent = "Weight: " + weight;
  pkHeight.textContent = "Height: " + height;
  pkSpriteContainer.innerHTML = `<img
              id="sprite"
              src="${sprites.front_default}"
              alt="${name} front default sprite"
            />`;
  pkTypes.innerHTML = types
    .map(
      (type) => `<span class="type ${type.type.name}">${type.type.name}</span>`
    )
    .join("");
  pkHp.textContent = stats[0].base_stat;
  pkAttack.textContent = stats[1].base_stat;
  pkDefense.textContent = stats[2].base_stat;
  pkSpecialAttack.textContent = stats[3].base_stat;
  pkSpecialDefense.textContent = stats[4].base_stat;
  pkSpeed.textContent = stats[5].base_stat;

  console.log(data);
}
 function handleSubmit(event) {
  event.preventDefault();
  const searchTerm = searchInput.value;
  fetchData(searchTerm.toLowerCase());
}

searchButton.addEventListener("click", handleSubmit);
