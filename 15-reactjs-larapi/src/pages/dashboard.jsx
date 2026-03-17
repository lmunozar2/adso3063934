import "../components/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Dashboard() {

    const handleDelete = async (id) => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.delete(`http://127.0.0.1:8000/api/pets/delete/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            getPets(); // Recarga la lista de mascotas
        } catch (error) {
            console.error(error);
        }
    }

    const navigate = useNavigate();
    const [pets, setPets] = useState([]);

    useEffect(() => {
        getPets();
    }, []);

    const getPets = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get("http://127.0.0.1:8000/api/pets/list", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setPets(response.data.pets);
            console.log(response.data);
        } catch (error) {
            console.error(error)
        }

    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    }

    return (
        <main id="Dashboard" className="">
            <header>
                <img className="tittle" src="imgs/squares-four.svg" alt="" />
                <h1 className="tittle">Dashboard</h1>
            </header>

            <nav>
                <button type="button" className="btnAdd" onClick={() => navigate("/add")}>
                    <img className="icon" src="imgs/plus-circle.svg" alt="" />
                </button>

                <button type="button" className="btnLogout" onClick={handleLogout}>
                    <img className="icon" src="imgs/sign-out.svg" alt="" />
                </button>
            </nav>


            <h2>Pet List</h2>
            <section className="list">
                {pets.map((pet) => (
                    <div className="row" key={pet.id}>
                        <img className="img" src={`/images/${pet.image}`}
                            alt={pet.name}
                            onError={(e) => e.target.src = "imgs/no-image.png"} />
                        <div className="data">
                            <h3>{pet.name}</h3>
                            <h4>{pet.kind}</h4>
                        </div>
                        <nav className="actions">
                            <button className="btnShow" onClick={() => navigate(`/detail/${pet.id}`)}>
                                <img src="imgs/eye.svg" alt="" />
                            </button>
                            <button className="btnEdit" onClick={() => navigate(`/edit/${pet.id}`)}>
                                <img src="imgs/pencil.svg" alt="" />
                            </button>
                            <button className="btnDelete" onClick={() => handleDelete(pet.id)}>
                                <img src="imgs/trash.svg" alt="" />
                            </button>
                        </nav>
                    </div>
                ))}
            </section>
        </main>

    )
}

export default Dashboard;