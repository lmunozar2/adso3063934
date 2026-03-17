import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    return (

        <main id="login" class="">
            <header>
                <img src="/imgs/user-circle-dashed.svg" alt="User Icon" />
                <h1>Login</h1>
            </header>
            <form action="" id="loginForm">
                <label for="">Email:
                    <input type="email" name="email" id="email" placeholder="Example@gmail.com" />
                </label>
                <label for=""> Password
                    <input type="password" name="password" id="password" placeholder="*********" />
                </label>
                <button class="btnLogin">Login</button>
            </form>
        </main>
    )
}

export default Login;