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
    },
    pagination: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '20px',
    },
    btn: {
        backgroundColor: '#16213e',
        color: '#e0e0e0',
        border: '1px solid #0f3460',
        borderRadius: '8px',
        padding: '8px 14px',
        cursor: 'pointer',
        fontSize: '16px',
        transition: 'all 0.2s ease',
    },
    btnDisabled: {
        backgroundColor: '#0d0d1a',
        color: '#444466',
        border: '1px solid #222244',
        borderRadius: '8px',
        padding: '8px 14px',
        cursor: 'not-allowed',
        fontSize: '16px',
    },
    pageInfo: {
        color: '#e0e0e0',
        fontSize: '14px',
        backgroundColor: '#1a1a2e',
        border: '1px solid #0f3460',
        borderRadius: '8px',
        padding: '8px 16px',
    }
}

function GeneralInfo() {
    return (
        <div><h2>General Info</h2></div>
    )
}

function PokemonList() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=800')
            .then(res => res.json())
            .then(data => {
                setPokemons(data.results);
                setLoading(false);
            })
    }, []);

    if (loading) return <p>Cargando lista...</p>

    const totalPages = Math.ceil(pokemons.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentPokemons = pokemons.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div style={styles.listContainer}>
            <h2 style={styles.pokemonName}>Pokemon List</h2>
            <div style={styles.grid}>
                {currentPokemons.map((pokemon, index) => (
                    <Link
                        key={pokemon.name}
                        to={`/example8/details?name=${pokemon.name}`}
                        style={styles.gridItem}
                    >
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${startIndex + index + 1}.png`}
                            alt={pokemon.name}
                            style={styles.gridImg}
                        />
                        <span style={styles.gridName}>{pokemon.name}</span>
                    </Link>
                ))}
            </div>

            <div style={styles.pagination}>
                <button
                    style={currentPage === 1 ? styles.btnDisabled : styles.btn}
                    onClick={() => setCurrentPage(1)}
                    disabled={currentPage === 1}
                >«</button>
                <button
                    style={currentPage === 1 ? styles.btnDisabled : styles.btn}
                    onClick={() => setCurrentPage(p => p - 1)}
                    disabled={currentPage === 1}
                >‹</button>
                <span style={styles.pageInfo}>{currentPage} / {totalPages}</span>
                <button
                    style={currentPage === totalPages ? styles.btnDisabled : styles.btn}
                    onClick={() => setCurrentPage(p => p + 1)}
                    disabled={currentPage === totalPages}
                >›</button>
                <button
                    style={currentPage === totalPages ? styles.btnDisabled : styles.btn}
                    onClick={() => setCurrentPage(totalPages)}
                    disabled={currentPage === totalPages}
                >»</button>
            </div>
        </div>
    )
}

function PokemonDetails() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name')?.toLowerCase();

    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(data => {
                setPokemon(data);
                setLoading(false);
            })
    }, [name]);

    if (loading) return <p>Cargando {name}...</p>

    return (
        <div style={styles.card}>
            <h2 style={styles.pokemonName}>
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
                style={styles.pokemonImg}
            />
            <div style={styles.infoGrid}>
                <div style={styles.infoItem}>
                    <span style={styles.label}>Tipo</span>
                    <span>{pokemon.types.map(t => t.type.name).join(', ')}</span>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.label}>Altura</span>
                    <span>{pokemon.height / 10}m</span>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.label}>Peso</span>
                    <span>{pokemon.weight / 10}kg</span>
                </div>
                <div style={styles.infoItem}>
                    <span style={styles.label}>HP</span>
                    <span>{pokemon.stats[0].base_stat}</span>
                </div>
            </div>
        </div>
    )
}

function InternalNavegation() {
    return (
        <nav style={styles.nav}>
            <Link to="/example8"      style={styles.link}>Home🏡</Link>
            <Link to="/example8/list" style={styles.link}>List🧾</Link>
        </nav>
    )
}

function Example8DataFetching() {
    return (
        <div className='container example8-container'>
            <BtnBack />
            <h2>Example8: DataFetching</h2>
            <p>Consuming data from an external API</p>
            <InternalNavegation />

            <Routes>
                <Route path='/'        element={<GeneralInfo />} />
                <Route path='/list'    element={<PokemonList />} />
                <Route path='/details' element={<PokemonDetails />} />
            </Routes>
        </div>
    )
}

export default Example8DataFetching;