window.addEventListener('load', () => {
    const form = document.querySelector("#new-pokemon-form");
    const input = document.querySelector("#new-pokemon-input");
    const list_el = document.querySelector("#Pokemons");

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const Pokemons = input.value;


        if (!Pokemons) {
            alert("Please type a Pokeomon before submitting");
            return;
        }

        const pokemon_el = document.createElement("div");
        pokemon_el.classList.add("pokemon");

        const pokemon_content_el = document.createElement("div");
        pokemon_content_el.classList.add("content");

        pokemon_el.appendChild(pokemon_content_el);

        const pokemon_input_el = document.createElement("input");
        pokemon_input_el.classList.add("pokemons");
        pokemon_input_el.type = "text";
        pokemon_input_el.value = "pokemon";

        pokemon_content_el.appendChild(pokemon_input_el);

        list_el.appendChild(pokemon_el);
    })
})