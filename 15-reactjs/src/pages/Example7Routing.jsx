import { Routes, Route, Link, useLocation } from 'react-router-dom'
import BtnBack from "../components/BtnBack";
import { useState, useEffect } from 'react';

const styles = {
    nav: {
        display: 'flex',
        gap: '12px',
        padding: '12px 16px',
        backgroundColor: '#1a1a2e',
        borderRadius: '10px',
        marginBottom: '20px',
        flexWrap: 'wrap',
    },
    link: {
        textDecoration: 'none',
        color: '#e0e0e0',
        padding: '8px 14px',
        borderRadius: '8px',
        backgroundColor: '#16213e',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'background-color 0.2s ease',
        border: '1px solid #0f3460',
    },
    // ✅ Estilos nuevos para la card del pokemon
    card: {
        backgroundColor: '#1a1a2e',
        borderRadius: '12px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        maxWidth: '300px',
        border: '1px solid #0f3460',
    },
    pokemonName: {
        color: '#e0e0e0',
        margin: 0,
        fontSize: '24px',
        textTransform: 'capitalize',
    },
    pokemonImg: {
        width: '180px',
        height: '180px',
        objectFit: 'contain',
    },
    infoGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '10px',
        width: '100%',
    },
    infoItem: {
        backgroundColor: '#16213e',
        borderRadius: '8px',
        padding: '8px 12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#e0e0e0',
        fontSize: '14px',
    },
    label: {
        fontSize: '11px',
        color: '#8888aa',
        marginBottom: '4px',
        textTransform: 'uppercase',
    },

    listContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
    },
    gridItem: {
        backgroundColor: '#16213e',
        border: '1px solid #0f3460',
        borderRadius: '10px',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#e0e0e0',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
    },
    gridImg: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
    },
    gridName: {
        fontSize: '13px',
        marginTop: '6px',
        textTransform: 'capitalize',
    }

}

function GeneralInfo() {
    return (
        <div><h2>General Info</h2></div>
    )
}

// ✅ Arreglo con toda la información incluida
const POKEMON_LIST = [
    { name: 'Bulbasaur',  id: 1,   emoji: '🌿', tipo: 'Planta ', altura: 0.7, peso: 6.9,  hp: 45  },
    { name: 'Charmander', id: 4,   emoji: '🔥', tipo: 'Fuego',           altura: 0.6, peso: 8.5,  hp: 39  },
    { name: 'Squirtle',   id: 7,   emoji: '💧', tipo: 'Agua',            altura: 0.5, peso: 9.0,  hp: 44  },
    { name: 'Pikachu',    id: 25,  emoji: '⚡', tipo: 'Eléctrico',       altura: 0.4, peso: 6.0,  hp: 35  },
    { name: 'Mewtwo',     id: 150, emoji: '🔮', tipo: 'Psíquico',        altura: 2.0, peso: 122,  hp: 106 },
    { name: 'Eevee',      id: 133, emoji: '🦊', tipo: 'Normal',          altura: 0.3, peso: 6.5,  hp: 55  },
    { name: 'Gengar',     id: 94,  emoji: '👻', tipo: 'Fantasma ',altura: 1.5, peso: 40.5, hp: 60  },
    { name: 'Snorlax',    id: 143, emoji: '😴', tipo: 'Normal',          altura: 2.1, peso: 460,  hp: 160 },
];

function PokemonList() {
    return (
        <div style={styles.listContainer}>
            <h2 style={styles.pokemonName}>Pokemon List</h2>
            <div style={styles.grid}>
                {POKEMON_LIST.map((pokemon) => (
                    <Link
                        key={pokemon.name}
                        to={`/example7/Details?name=${pokemon.name}`}
                        style={styles.gridItem}
                    >
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            alt={pokemon.name}
                            style={styles.gridImg}
                        />
                        <span style={styles.gridName}>
                            {pokemon.emoji} {pokemon.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

// ✅ PokemonDetails sin fetch, leyendo del arreglo
function PokemonDetails() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name');

    // Busca en el arreglo por nombre
    const pokemon = POKEMON_LIST.find(
        p => p.name.toLowerCase() === name?.toLowerCase()
    );

    // Si no existe en el arreglo
    if (!pokemon) return <p>Pokémon "{name}" no encontrado en la lista 😕</p>

    return (
        <div style={styles.card}>
            <h2 style={styles.pokemonName}>
                {pokemon.emoji} {pokemon.name}
            </h2>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                alt={pokemon.name}
                style={styles.pokemonImg}
            />
            <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                    <span style={styles.label}>Tipo</span>
                    <span>{pokemon.tipo}</span>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.label}>Altura</span>
                    <span>{pokemon.altura}m</span>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.label}>Peso</span>
                    <span>{pokemon.peso}kg</span>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.label}>HP</span>
                    <span>{pokemon.hp}</span>
                </div>
            </div>
        </div>
    )
}



function InternalNavegation() {
    return (
        <nav style={styles.nav}>
            <Link to="/example7" style={styles.link}>Home🏡</Link>
            <Link to="/example7/List" style={styles.link}>List🧾</Link>
            
        </nav>
    )
}

function Example7Routing() {
    return (
        <div className='container example7-container'>
            <BtnBack />
            <h2>Example 7: React Router</h2>
            <p>Navigation between different 'pages' without reloading</p>
            <InternalNavegation />

            <Routes>
                <Route path='/' element={<GeneralInfo />} />
                <Route path='/list' element={<PokemonList />} />
                <Route path='/details' element={<PokemonDetails />} />  {/* ✅ Bug corregido */}
            </Routes>
        </div>
    )
}

export default Example7Routing;