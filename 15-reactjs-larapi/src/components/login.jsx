import "./login.css";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Login() {
    const Navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", {
                email: email,
                password: password,
            });

            localStorage.setItem("token", response.data.token);

            Swal.fire({
                title: "Ingreso Exitoso",
                text: "Bienvenido!",
                icon: "success",
                timer: "1000",
            });

            Navigate("/dashboard");

        } catch (error) {
            setError("Las credenciales son incorrectas")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Credenciales Incorrectas",
                timer: "2000",
            })
        }
    }

    return (

        <main id="login" className="">
            <header>
                <img src="/imgs/user-circle-dashed.svg" alt="" />
                <h1>Login</h1>
            </header>

            <img className="background" src="/imgs/fondo2.jpg" alt="" />

            <form id="loginForm" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:
                    <input type="email" name="email" id="email" placeholder="Example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>

                <label htmlFor="password"> Password
                    <input type="password" name="password" id="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                
                <button className="btnLogin">Login</button>
            </form>
        </main>

    )
}

export default Login;