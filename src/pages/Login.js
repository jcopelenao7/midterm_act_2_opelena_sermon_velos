import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function Login({ onLogin, currentUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("Welcome to the World Forge");

    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) {
            navigate("/home");
        }
    }, [currentUser, navigate]);

    useEffect(() => {
        if (username) {
            setTitle(`Hello, ${username}`);
        } else {
            setTitle("Welcome to the World Forge");
        }
    }, [username]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (onLogin(username, password)) {
            alert("Logged In Successfully");
            navigate("/home");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="login-container">
            <div className="login-form-wrapper">
                <h1 className="login-title">Login</h1>
                <h2 className="login-subtitle">{title}</h2>
                
                <form onSubmit={handleLogin} className="eternal-login-form">
                    <div className='form-group mb-3'>
                        <label className="form-label">Eternal Name</label>
                        <input 
                            type='text' 
                            className='form-control eternal-input' 
                            value={username} 
                            required 
                            maxLength={20} 
                            placeholder="Enter your eternal name..."
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='form-group mb-4'>
                        <label className="form-label">Sacred Password</label>
                        <input 
                            type='password' 
                            className='form-control eternal-input' 
                            value={password} 
                            required 
                            maxLength={20} 
                            placeholder="Enter your sacred password..."
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-danger eternal-login-btn">
                        Enter the Forge
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;