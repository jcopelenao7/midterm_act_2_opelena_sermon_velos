import React, {useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";


function Login() {
    const [username, setUsername] = useState("johndoe") //preset value
    const [password, setPassword] = useState("")
    const [title, setTitle] = useState("")

    // placeholder values
    const realusername = "jesiah";
    const realpassword = "something";
    const navigate = useNavigate();

    useEffect(() =>{
        setTitle(`Hello, ${username}`)
    }, [username])

    const handleLogin = (e) =>{
        e.preventDefault();
        if(username === realusername && password === realpassword){
            alert("Logged In Sucessfully")
            navigate("/home")
        }
        else{
            alert("Logged In Error")
        }
    }
    return (
    
    <div>
        <h1>Login Form</h1>
        <h2>{title}</h2>
        <form onSubmit={handleLogin}>
            <div className='form-group'>
                <label>Username</label>
                <input type='text' className='form-control' value={username} required maxLength={20} onChange={(e) => setUsername(e.target.value)}></input>
            </div>

            <div className='form-group mb-5'>
                <label>Password</label>
                <input type='password' className='form-control' value={password} required maxLength={20} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button type="submit" class="btn btn-danger">Login</button>
        </form>
    </div>
  );
}

export default Login;