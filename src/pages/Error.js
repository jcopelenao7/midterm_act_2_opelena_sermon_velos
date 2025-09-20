import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
    const { currentUser } = useOutletContext();
    
    // Check using the same pattern as Home.js
    const isCelestial = currentUser?.name === 'Arishem';

    const handleGoHome = () => {
        navigate('/home');
    };

    const handleGoLogin = () => {
        navigate('/login');
    };

    return (
        <div className={`error-container ${isCelestial ? 'celestial-mode' : ''}`}>
            <div className="error-content">
                <div className="error-code">
                    <span className={`error-number ${isCelestial ? 'flaming-text' : ''}`}>404</span>
                </div>
                
                <h1 className="error-title">
                    {isCelestial ? 'Reality Distortion Detected' : 'Dimension Not Found'}
                </h1>
                
                <p className="error-message">
                    {isCelestial 
                        ? 'The path you seek exists beyond my cosmic perception. Even Celestials cannot access realms that do not exist.'
                        : 'The eternal path you seek has been lost to time. This dimension exists only in memory.'
                    }
                </p>
                
                <div className="error-actions">
                    {currentUser ? (
                        <button onClick={handleGoHome} className="error-btn primary">
                            {isCelestial ? 'Return to Judgment' : 'Return to the Forge'}
                        </button>
                    ) : (
                        <button onClick={handleGoLogin} className="error-btn primary">
                            Enter the Forge
                        </button>
                    )}
                </div>
                
                <div className="error-details">
                    <div className="glitch-text">
                        {isCelestial ? 'COSMIC_ERROR_' : 'ETERNAL_ERROR_'}
                        <span className="error-timestamp">
                            {new Date().toLocaleTimeString()}
                        </span>
                    </div>
                </div>
            </div>

            {/* Floating particles effect */}
            <div className="particles">
                {Array.from({ length: 20 }, (_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}></div>
                ))}
            </div>

            <style jsx>{`
                .error-container {
                    min-height: 100vh;
                    background: linear-gradient(135deg, #111b2eff, #122953ff);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    position: relative;
                    overflow: hidden;
                }

                .error-container.celestial-mode {
                    background: linear-gradient(135deg, #000000, #1a1a1a, #330000);
                }

                .error-content {
                    text-align: center;
                    max-width: 800px;
                    z-index: 10;
                    position: relative;
                }

                .error-code {
                    margin-bottom: 30px;
                }

                .error-number {
                    font-size: 150px;
                    font-weight: 900;
                    color: #ffd700;
                    text-shadow: 
                        0 0 20px rgba(255, 215, 0, 0.8),
                        0 0 40px rgba(255, 215, 0, 0.6),
                        0 0 60px rgba(255, 215, 0, 0.4);
                    line-height: 1;
                    transition: all 0.5s ease;
                }

                .celestial-mode .error-number {
                    color: #ff4444;
                    text-shadow: 
                        0 0 20px rgba(255, 68, 68, 0.8),
                        0 0 40px rgba(255, 68, 68, 0.6),
                        0 0 60px rgba(255, 68, 68, 0.4);
                }

                .flaming-text {
                    animation: flameEffect 3s ease-in-out infinite alternate;
                }

                @keyframes flameEffect {
                    0% {
                        text-shadow: 
                            0 0 20px rgba(255, 68, 68, 0.8),
                            0 0 40px rgba(255, 68, 68, 0.6),
                            0 0 60px rgba(255, 68, 68, 0.4);
                        transform: scale(1);
                    }
                    100% {
                        text-shadow: 
                            0 0 30px rgba(255, 0, 0, 1),
                            0 0 60px rgba(255, 0, 0, 0.8),
                            0 0 90px rgba(255, 102, 0, 0.6),
                            0 0 120px rgba(255, 102, 0, 0.4);
                        transform: scale(1.05);
                    }
                }

                .error-title {
                    font-size: 36px;
                    font-weight: bold;
                    color: #ffffff;
                    margin-bottom: 20px;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
                }

                .celestial-mode .error-title {
                    color: #ff6666;
                }

                .error-message {
                    font-size: 18px;
                    color: rgba(255, 255, 255, 0.9);
                    margin-bottom: 40px;
                    line-height: 1.6;
                    max-width: 600px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .celestial-mode .error-message {
                    color: rgba(255, 102, 102, 0.9);
                }

                .error-actions {
                    margin-bottom: 50px;
                }

                .error-btn {
                    padding: 15px 40px;
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
                    margin: 0 10px;
                }

                .error-btn:hover {
                    background: #ffd700;
                    color: #111b2e;
                    transform: translateY(-3px);
                    box-shadow: 0 10px 25px rgba(255, 215, 0, 0.4);
                }

                .celestial-mode .error-btn {
                    border-color: #ff4444;
                    color: #ff4444;
                    box-shadow: 0 0 20px rgba(255, 68, 68, 0.3);
                }

                .celestial-mode .error-btn:hover {
                    background: #ff4444;
                    color: #000;
                    box-shadow: 0 10px 25px rgba(255, 68, 68, 0.6);
                }

                .error-details {
                    opacity: 0.7;
                }

                .glitch-text {
                    font-family: 'Courier New', monospace;
                    font-size: 14px;
                    color: #ffd700;
                    letter-spacing: 2px;
                }

                .celestial-mode .glitch-text {
                    color: #ff4444;
                    animation: glitch 2s infinite;
                }

                @keyframes glitch {
                    0%, 100% { transform: translateX(0); }
                    10% { transform: translateX(-2px); }
                    20% { transform: translateX(2px); }
                    30% { transform: translateX(-1px); }
                    40% { transform: translateX(1px); }
                    50% { transform: translateX(-2px); }
                    60% { transform: translateX(2px); }
                    70% { transform: translateX(-1px); }
                    80% { transform: translateX(1px); }
                    90% { transform: translateX(-2px); }
                }

                .error-timestamp {
                    opacity: 0.5;
                    margin-left: 10px;
                }

                .particles {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                    overflow: hidden;
                }

                .particle {
                    position: absolute;
                    background: #ffd700;
                    border-radius: 50%;
                    opacity: 0.6;
                    animation: float 6s infinite ease-in-out;
                }

                .celestial-mode .particle {
                    background: #ff4444;
                }

                .particle-1 { width: 4px; height: 4px; top: 20%; left: 10%; animation-delay: 0s; }
                .particle-2 { width: 6px; height: 6px; top: 80%; left: 20%; animation-delay: 1s; }
                .particle-3 { width: 3px; height: 3px; top: 40%; left: 80%; animation-delay: 2s; }
                .particle-4 { width: 5px; height: 5px; top: 60%; left: 70%; animation-delay: 3s; }
                .particle-5 { width: 4px; height: 4px; top: 30%; left: 50%; animation-delay: 4s; }
                .particle-6 { width: 7px; height: 7px; top: 70%; left: 10%; animation-delay: 0.5s; }
                .particle-7 { width: 3px; height: 3px; top: 10%; left: 60%; animation-delay: 1.5s; }
                .particle-8 { width: 5px; height: 5px; top: 90%; left: 40%; animation-delay: 2.5s; }
                .particle-9 { width: 4px; height: 4px; top: 50%; left: 90%; animation-delay: 3.5s; }
                .particle-10 { width: 6px; height: 6px; top: 25%; left: 30%; animation-delay: 4.5s; }
                .particle-11 { width: 3px; height: 3px; top: 75%; left: 60%; animation-delay: 5s; }
                .particle-12 { width: 5px; height: 5px; top: 35%; left: 15%; animation-delay: 0.3s; }
                .particle-13 { width: 4px; height: 4px; top: 85%; left: 75%; animation-delay: 1.3s; }
                .particle-14 { width: 7px; height: 7px; top: 15%; left: 85%; animation-delay: 2.3s; }
                .particle-15 { width: 3px; height: 3px; top: 65%; left: 25%; animation-delay: 3.3s; }
                .particle-16 { width: 6px; height: 6px; top: 45%; left: 65%; animation-delay: 4.3s; }
                .particle-17 { width: 4px; height: 4px; top: 55%; left: 35%; animation-delay: 5.3s; }
                .particle-18 { width: 5px; height: 5px; top: 5%; left: 45%; animation-delay: 0.8s; }
                .particle-19 { width: 3px; height: 3px; top: 95%; left: 55%; animation-delay: 1.8s; }
                .particle-20 { width: 6px; height: 6px; top: 40%; left: 5%; animation-delay: 2.8s; }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px) rotate(0deg);
                        opacity: 0.6;
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 1;
                    }
                }

                @media (max-width: 768px) {
                    .error-number {
                        font-size: 100px;
                    }
                    
                    .error-title {
                        font-size: 28px;
                    }
                    
                    .error-message {
                        font-size: 16px;
                        padding: 0 20px;
                    }
                    
                    .error-btn {
                        padding: 12px 30px;
                        font-size: 16px;
                        margin: 5px;
                    }
                }
            `}</style>
        </div>
    );
}

export default Error;