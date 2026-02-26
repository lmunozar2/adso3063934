import BtnBack from "../components/BtnBack";


function Charmander() {
    return(
        <div style={{border: "4px solid orange", padding: "1.4rem", borderRadius: "0.3rem", background: "rgba(222, 165, 67, 0.31)", width: "100%", }}>
            <h2 >Charmander 🔥</h2>
            <p>Charmander is a Fire-type Pokémon that evolves into Charmeleon and then into Charizard.</p>
            <p>Type: Fire</p>
            </div>
    )
}

function Pikachu() {
    return(
        <div style={{border: "4px solid yellow", padding: "1.4rem", borderRadius: "0.3rem", background: "rgba(213, 234, 76, 0.31)", width: "100%", }}>
            <h2 >Pikachu ⚡</h2>
            <p>Pikachu is an Electric-type Pokémon that evolves from Pichu and can evolve into Raichu.</p>
            <p>Type: Electric</p>
            </div>
    )
}

function Example1Components() {
    return (
        <div className="container">
            <BtnBack />
            <h2>Example 1: Components</h2>
            <p>Create Independent a reusable UI Pieces</p>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"1.4rem", gap:"1rem"}}>
            <Charmander />
            <Pikachu />
            </div>
        </div>
    )
}

export default Example1Components;