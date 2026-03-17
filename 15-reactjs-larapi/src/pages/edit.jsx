import "../components/login.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Edit() {
    const navigate = useNavigate();
    const { id } = useParams(); // Obtiene el id de la URL
    const [name, setName] = useState("");
    const [kind, setKind] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    // Carga los datos de la mascota al abrir la página
    useEffect(() => {
        getPet();
    }, []);

    const getPet = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await axios.get(`http://127.0.0.1:8000/api/pets/show/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            const pet = response.data.pet;
            setName(pet.name);
            setKind(pet.kind);
            setWeight(pet.weight);
            setAge(pet.age);
            setBreed(pet.breed);
            setLocation(pet.location);
            setDescription(pet.description);
        } catch (error) {
            Swal.fire({
            title: "Pet not found!",
            text: "The pet you are looking for does not exist",
            icon: "error",
            confirmButtonText: "Go back",
            confirmButtonColor: "#6a0462",
        }).then(() => {
            navigate("/dashboard"); 
        });
    }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            console.log("Editando mascota:", id); // 👈 Agrega esto
        console.log("Datos:", {name, kind, weight, age, breed, location, description}); // 👈 Y esto
        
            const response = await axios.put(`http://127.0.0.1:8000/api/pets/edit/${id}`, {
                name, kind, weight, age, breed, location, description
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log("Respuesta edit:", response.data);
            
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <main id="Edit" className="">
            <header>
                <button type="button" className="btnBack" onClick={() => navigate("/dashboard")}>
                    <img src="/imgs/arrow-line-left.svg" alt=""/>
                </button>
                <img src="imgs/pencil.svg" alt=""/>
                <h1>Edit Pet</h1>
            </header>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name
                    <input type="text" id="name" value={name}
                        onChange={(e) => setName(e.target.value)}/>
                </label>
                <label htmlFor="kind">Kind
                    <input type="text" id="kind" value={kind}
                        onChange={(e) => setKind(e.target.value)}/>
                </label>
                <label htmlFor="weight">Weight
                    <input type="number" id="weight" value={weight}
                        onChange={(e) => setWeight(e.target.value)}/>
                </label>
                <label htmlFor="age">Age
                    <input type="number" id="age" value={age}
                        onChange={(e) => setAge(e.target.value)}/>
                </label>
                <label htmlFor="breed">Breed
                    <input type="text" id="breed" value={breed}
                        onChange={(e) => setBreed(e.target.value)}/>
                </label>
                <label htmlFor="location">Location
                    <input type="text" id="location" value={location}
                        onChange={(e) => setLocation(e.target.value)}/>
                </label>
                <label htmlFor="description">Description
                    <textarea id="description" value={description}
                        onChange={(e) => setDescription(e.target.value)}/>
                </label>
                <div className="action">
                    <button type="submit" className="btnEdit">Edit</button>
                    <button type="button" className="btnCancel" onClick={() => navigate("/dashboard")}>
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    )
}

export default Edit;