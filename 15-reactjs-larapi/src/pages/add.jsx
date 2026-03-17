import "../components/login.css";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Add() {

    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [kind, setKind] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState("");
    const [breed, setBreed] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            
            const response = await axios.post("http://127.0.0.1:8000/api/pets/store", {
                name, kind, weight, age, breed, location, description
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main id="Add" className="">
            <header>
                <button type="button" className="btnBack" onClick={() => navigate("/dashboard")}>
                    <img src="imgs/arrow-line-left.svg" alt="" />
                </button>
                <img src="imgs/plus-circle.svg" alt="" />
                <h1>Add Pet</h1>
            </header>

            <form onSubmit={handleSubmit} >
                <label htmlFor="name">Name
                    <input type="text" name="name" id="name" placeholder="Enter pet's name"
                    value={name} onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <label htmlFor="kind"> Kind
                    <input type="text" name="kind" id="kind" placeholder="Enter pet's kind"
                    value={kind} onChange={(e) => setKind(e.target.value)}
                    />
                </label>
                <label htmlFor="weight"> Weight
                    <input type="number" name="weight" id="weight" placeholder="Enter pet's weight"
                    value={weight} onChange={(e) => setWeight(e.target.value)}
                    />
                </label>
                <label htmlFor="age"> Age
                    <input type="number" name="age" id="age" placeholder="Enter pet's age"
                    value={age} onChange={(e) => setAge(e.target.value)}
                    />
                </label>
                <label htmlFor="breed"> Breed
                    <input type="text" name="breed" id="breed" placeholder="Enter pet's breed"
                    value={breed} onChange={(e) => setBreed(e.target.value)}
                    />
                </label>
                <label htmlFor="location"> Location
                    <input type="text" name="location" id="location" placeholder="Enter pet's location"
                    value={location} onChange={(e) => setLocation(e.target.value)}
                    />
                </label>
                <label htmlFor="description"> Description
                    <textarea name="description" id="description" placeholder="Enter pet's description"
                    value={description} onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>
                <div className="action">
                    <button type="submit" className="Add"> Add</button>
                    <button type="button" className="btnCancel" onClick={() => navigate("/dashboard")}>
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    )
}

export default Add;