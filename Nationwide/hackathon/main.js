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
    })
})