import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, currentUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("Welcome to the World Forge");
    const [isCelestial, setIsCelestial] = useState(false);
    const [showWarning, setShowWarning] = useState(false);

    useEffect(() => {
        const lowerUsername = username.toLowerCase();
        
        if (lowerUsername === "arishem") {
            if (!isCelestial) {
                setIsCelestial(true);
                setShowWarning(true);
                setTitle("Awaken, Arishem");
            }
        } else {
            if (isCelestial) {
                setIsCelestial(false);
                setShowWarning(false);
            }
            
            if (username) {
                setTitle(`Hello, ${username}`);
            } else {
                setTitle("Welcome to the World Forge");
            }
        }
    }, [username, isCelestial]);

    const handleLogin = () => {
        if (onLogin(username, password)) {
            alert("Logged In Successfully");
                navigate("/home");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className={`login-container ${isCelestial ? 'celestial-mode' : ''}`}>
            {showWarning && (
                <div className="popup-overlay" onClick={() => setShowWarning(false)}>
                    <div className="celestial-warning" onClick={(e) => e.stopPropagation()}>
                        <p><strong>You have chosen to sacrifice a Celestial, for the people of this planet.</strong></p>
                        <p><strong>I will spare them, but your memories will show me if they are worthy to live.</strong></p>
                        <p><strong>And I will return, for judgement.</strong></p>
                        <button className="close-warning" onClick={() => setShowWarning(false)}>×</button>
                    </div>
                </div>
            )}
            
            <div className="login-form-wrapper">
                <h1 className="login-title">Login</h1>
                <h2 className={`login-subtitle ${isCelestial ? 'flaming-text' : ''}`}>
                    {title}
                </h2>
                
                <div className="eternal-login-form">
                    <div className='form-group mb-3'>
                        <label className="form-label">
                            {isCelestial ? 'Celestial Name' : 'Eternal Name'}
                        </label>
                        <input 
                            type='text' 
                            className='form-control eternal-input' 
                            value={username} 
                            required 
                            maxLength={20} 
                            placeholder={isCelestial ? "Enter your celestial name..." : "Enter your eternal name..."}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='form-group mb-4'>
                        <label className="form-label">
                            {isCelestial ? 'Divine Password' : 'Sacred Password'}
                        </label>
                        <input 
                            type='password' 
                            className='form-control eternal-input' 
                            value={password} 
                            required 
                            maxLength={20} 
                            placeholder={isCelestial ? "Enter your divine password..." : "Enter your sacred password..."}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <button type="button" onClick={handleLogin} className="btn btn-danger eternal-login-btn">
                        {isCelestial ? 'Commence Judgement' : 'Enter the Forge'}
                    </button>
                </div>
            </div>

            <style jsx>{`
                .login-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #111b2eff, #122953ff);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    position: relative;
                }

                .login-container.celestial-mode {
                    background: linear-gradient(135deg, #000000, #1a1a1a);
                }

                .popup-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.8);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    animation: fadeIn 0.3s ease;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                .celestial-warning {
                    background: rgba(139, 0, 0, 0.95);
                    border: 2px solid #ff4444;
                    border-radius: 15px;
                    padding: 30px;
                    max-width: 500px;
                    width: 90%;
                    text-align: center;
                    color: #ffffff;
                    font-size: 16px;
                    line-height: 1.8;
                    box-shadow: 0 0 50px rgba(255, 0, 0, 0.7);
                    animation: pulseWarning 2s infinite alternate, slideIn 0.5s ease;
                    position: relative;
                }

                @keyframes slideIn {
                    from { 
                        transform: scale(0.5) translateY(-50px);
                        opacity: 0;
                    }
                    to { 
                        transform: scale(1) translateY(0);
                        opacity: 1;
                    }
                }

                @keyframes pulseWarning {
                    0% { box-shadow: 0 0 30px rgba(255, 0, 0, 0.5); }
                    100% { box-shadow: 0 0 50px rgba(255, 0, 0, 0.8); }
                }

                .close-warning {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    background: none;
                    border: none;
                    color: #fff;
                    font-size: 24px;
                    cursor: pointer;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    transition: all 0.3s ease;
                }

                .close-warning:hover {
                    background: rgba(255, 255, 255, 0.2);
                    transform: scale(1.1);
                }

                .login-form-wrapper {
                    background: rgba(0, 0, 0, 0.8);
                    border: 2px solid #ffd700;
                    border-radius: 15px;
                    padding: 40px;
                    max-width: 450px;
                    width: 100%;
                }

                .celestial-mode .login-form-wrapper {
                    background: rgba(20, 20, 20, 0.95);
                    border: 2px solid #ff4444;
                    box-shadow: 0 20px 40px rgba(255, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                }

                .login-title {
                    text-align: center;
                    margin-bottom: 10px;
                    color: #ffd700;
                    font-size: 28px;
                    font-weight: bold;
                    text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
                    transition: all 0.8s ease;
                }

                .celestial-mode .login-title {
                    color: #ff4444;
                    text-shadow: 0 0 10px rgba(255, 68, 68, 0.8);
                }

                .login-subtitle {
                    text-align: center;
                    margin-bottom: 30px;
                    color: #ffffff;
                    font-size: 18px;
                    font-weight: 500;
                    transition: all 0.5s ease;
                }

                .celestial-mode .login-subtitle {
                    color: #ff4444;
                }

                .flaming-text {
                    animation: flameEffect 2s ease-in-out infinite alternate;
                    text-shadow: 
                        0 0 5px #ff4444,
                        0 0 10px #ff4444,
                        0 0 15px #ff4444,
                        0 0 20px #ff0000,
                        0 0 35px #ff0000,
                        0 0 40px #ff0000;
                }

                @keyframes flameEffect {
                    0% {
                        text-shadow: 
                            0 0 5px #ff4444,
                            0 0 10px #ff4444,
                            0 0 15px #ff4444,
                            0 0 20px #ff0000,
                            0 0 35px #ff0000,
                            0 0 40px #ff0000;
                    }
                    100% {
                        text-shadow: 
                            0 0 2px #ff4444,
                            0 0 5px #ff4444,
                            0 0 8px #ff4444,
                            0 0 12px #ff0000,
                            0 0 18px #ff0000,
                            0 0 25px #ff0000,
                            0 0 30px #ff6600,
                            0 0 35px #ff6600;
                    }
                }

                .form-group {
                    margin-bottom: 20px;
                }

                .form-label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 600;
                    color: #ffffff;
                    transition: color 0.5s ease;
                }

                .celestial-mode .form-label {
                    color: #ff4444;
                }

                .form-control {
                    width: 100%;
                    padding: 12px 15px;
                    border: 2px solid #ffd700;
                    border-radius: 10px;
                    font-size: 16px;
                    transition: all 0.3s ease;
                    background: rgba(0, 0, 0, 0.3);
                    color: #fff;
                    box-sizing: border-box;
                }

                .form-control::placeholder {
                    color: #ccc;
                }

                .celestial-mode .form-control {
                    background: #1a1a1a;
                    border-color: #ff4444;
                    color: #fff;
                }

                .celestial-mode .form-control::placeholder {
                    color: #aaa;
                }

                .form-control:focus {
                    outline: none;
                    border-color: #ffed4a;
                    box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
                }

                .celestial-mode .form-control:focus {
                    border-color: #ff4444;
                    box-shadow: 0 0 10px rgba(255, 68, 68, 0.5);
                }

                .eternal-login-btn {
                    width: 100%;
                    padding: 15px;
                    font-size: 18px;
                    font-weight: bold;
                    border: 2px solid #ffd700;
                    border-radius: 50px;
                    background: transparent;
                    color: #ffd700;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    box-sizing: border-box;
                }

                .eternal-login-btn:hover {
                    background: #ffd700;
                    color: #1e3c72;
                    transform: translateY(-2px);
                    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.4);
                }

                .celestial-mode .eternal-login-btn {
                    background: transparent;
                    border-color: #ff4444;
                    color: #ff4444;
                    box-shadow: 0 0 20px rgba(255, 0, 0, 0.3);
                }

                .celestial-mode .eternal-login-btn:hover {
                    background: #ff4444;
                    color: #000;
                    box-shadow: 0 5px 25px rgba(255, 0, 0, 0.7);
                }

                .mb-3 { margin-bottom: 1rem; }
                .mb-4 { margin-bottom: 1.5rem; }
            `}</style>
        </div>
    );
}

export default Login;