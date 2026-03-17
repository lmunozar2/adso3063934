import "../components/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Details() {

    const navigate = useNavigate();
    const { id } = useParams();
    const [pet, setPet] = useState(null);

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
            setPet(response.data.pet);
            console.log(response.data);
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

    return (
        <main id="Detail" className="">
            <header>
                <button type="button" className="btnBack" onClick={() => navigate("/dashboard")}>
                    <img src="/imgs/arrow-line-left.svg" alt="" />
                </button>
                <img src="imgs/eye.svg" alt="" />
                <h1>Detail Pet</h1>
            </header>
            <div className="data">
                <h2>{pet?.name}</h2>
                <div className="imageContainer">
                    <img
                        src={`/images/${pet?.image}`}
                        alt={pet?.name}
                    />
                </div>

                <div className="info">
                    <p><strong>Kind:</strong>{pet?.kind}</p>
                    <p><strong>Weight:</strong>{pet?.weight} KG</p>
                    <p><strong>Age:</strong>{pet?.age} Y/O</p>
                    <p><strong>Breed:</strong> {pet?.breed}</p>
                    <p><strong>Location:</strong> {pet?.location}</p>
                    <p><strong>Description:</strong> {pet?.description}</p>
                </div>
            </div>
        </main>
    )
}

export default Details;