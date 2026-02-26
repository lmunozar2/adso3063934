import BtnBack from "../components/BtnBack";

function Example2JSX() {

    // JS Variables
    const pkName = "Ponyta";
    const pkType = "Fuego";
    const pkLevel = 21;
    const pkAbilities = ["Leak", "absorbs Fire"];
    const pkImgUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png";

    // Style Object
    const style = {
        display:"flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        maxWidth: "200px",
        textAlign: "center",
        backgroundColor: "#ef9f5e",
        color:"#333"
    };
    

    return(
        <div className="container">
            <BtnBack />
            <h2>Example 2: JSX</h2>
            <p>Writing HTML-Like code whitin JavaScript using curly braces {} for JS Expresions</p>
            <div className="card" style={style}>
                <h3>{pkName} (Lvl.{pkLevel})</h3>
                <img src={pkImgUrl} alt={pkName} style={{width: '140px', justifyContent: 'center', display: 'block', margin: '0 auto'}} />
                <p>Type: {pkType}</p>
                <p>Abilities: {pkAbilities.join(", ")}</p>
            </div>
        </div>  
    )
}

export default Example2JSX;