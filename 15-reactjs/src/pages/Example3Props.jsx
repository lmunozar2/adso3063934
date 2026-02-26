import BtnBack from "../components/BtnBack";
import CardPokemon from "../components/CardPokemon";

function Example3Props() {

    // Data
    const pokemons = [
        {id: 1, name: 'Pikachu',    type: 'Electric',        power:'Thunderbolt',   legendary: false, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'} ,
        {id: 2, name: 'Bulbasaur',  type: 'Grass',    power:'Vine Whip',     legendary: false, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'},
        {id: 3, name: 'Charmander', type: 'Fire',            power:'Ember',         legendary: false, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'},
        {id: 4, name: 'Squirtle',   type: 'Water',           power:'Water Gun',     legendary: false, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'},
        {id: 5, name: 'Mewtwo',     type: 'Psychic',         power:'Psychic',       legendary: true, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'},
        {id: 6, name: 'moltres',    type: 'Fire',     power:'Fire Blast',    legendary: true, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png'},
        {id: 7, name: 'Zapdos',     type: 'Electric', power:'Thunder Shock', legendary: true, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png'},
        {id: 8, name: 'Articuno',   type: 'Ice',      power:'Ice Beam',      legendary: true, image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png'}
    ]

    //Styles
    const styles = {
        card:{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        }
    }


    return (
        <div className="container">
            <BtnBack />
            <h2>Example 3: Props</h2>
            <p>Pass data from parent to children (like function arguments).</p>   
            <div style={styles.card}>
{/* We pass different props to each Card */}
{
    pokemons.map(pokemon => (
        <CardPokemon
           key          ={pokemon.id}
           image        ={pokemon.image}
           name         ={pokemon.name}
           type         ={pokemon.type}
           power        ={pokemon.power}
           legendary    ={pokemon.legendary}
        />
    ))
}
            </div>         
        </div>
    )
}

export default Example3Props;