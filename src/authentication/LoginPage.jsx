import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import UserService from "../service/UserService"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function LoginPage(){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const userData = await UserService.login(username, password)
            if (userData.token){
                localStorage.setItem('token', userData.token)
                localStorage.setItem('role', userData.role)
                navigate("/home");
            }
        }catch(error){
            console.log(error)
            setError(error)
                setTimeout(() => {
                setError('');
            }, 5000); 
        }
    }

    
    return(
        <div className="login-container">
            <h2 className = "form-title">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <p>
            Don't have an account? <Link to="/register">Register here</Link>
            </p>

        </div>
    );
}
export default LoginPage;
