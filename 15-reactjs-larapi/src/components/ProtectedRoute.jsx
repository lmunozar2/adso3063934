import { Navigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    }

    
    axios.get("http://127.0.0.1:8000/api/pets/list", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/";
    });

    return children;
}

export default ProtectedRoute;