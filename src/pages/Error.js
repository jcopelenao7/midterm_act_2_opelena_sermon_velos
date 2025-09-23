import React from 'react';
import './Error.css';

function Error({ currentUser, onGoHome }) {
    const getPersonalizedErrorContent = () => {
        // Debug log to check if currentUser is being passed correctly
        console.log('Current user in Error component:', currentUser);
        
        switch (currentUser?.name) {
            case 'Sersi':
                return {
                    title: "Reality Fractured",
                    subtitle: "The Matter Has Been Displaced",
                    message: "Even my transmutation powers cannot reconstruct this page. The molecular structure seems to have been scattered across dimensions.",
                    action: "Let me reshape reality and guide you back",
                    quote: "Sometimes the most beautiful transformations come from the most broken pieces.",
                    glitchText: "TRANSMUTING...",
                    theme: "sersi"
                };
            case 'Thena':
                return {
                    title: "Memory Lost",
                    subtitle: "Mahd Wy'ry Has Struck Again",
                    message: "This path has vanished from existence, much like fragments of my own memories. The golden weapons of my mind cannot pierce this void.",
                    action: "Draw your sword and forge a new path",
                    quote: "What is broken can be reforged, what is lost can be found again.",
                    glitchText: "REMEMBERING...",
                    theme: "thena"
                };
            case 'Gilgamesh':
                return {
                    title: "Strength Cannot Reach",
                    subtitle: "Even the Strongest Must Rest",
                    message: "My mighty fists have shattered mountains and stopped Deviants, but this page lies beyond even my eternal strength.",
                    action: "Channel your power toward home",
                    quote: "True strength isn't in the power to destroy, but in knowing when to step back.",
                    glitchText: "FLEXING...",
                    theme: "gilgamesh"
                };
            case 'Kingo':
                return {
                    title: "Scene Not Found",
                    subtitle: "This Shot Didn't Make the Final Cut",
                    message: "Looks like this page got left on the cutting room floor! Even my cosmic energy projections can't illuminate what isn't there.",
                    action: "Return to the main stage",
                    quote: "Every great performance has a few missed cues. The show must go on!",
                    glitchText: "PROJECTING...",
                    theme: "kingo"
                };
            case 'Arishem':
                return {
                    title: "JUDGMENT ERROR",
                    subtitle: "CELESTIAL COORDINATES INVALID",
                    message: "THE COSMIC ORDER HAS BEEN DISRUPTED. THIS REALM DOES NOT EXIST IN MY ETERNAL DESIGN. THE EMERGENCE CANNOT PROCEED FROM VOID.",
                    action: "REALIGN WITH CELESTIAL PROTOCOL",
                    quote: "EVEN GODS MUST ACKNOWLEDGE THE LIMITS OF CREATION.",
                    glitchText: "CALCULATING...",
                    theme: "arishem"
                };
            default:
                return {
                    title: "Cosmic Void Detected",
                    subtitle: "Lost in the Space Between Stars",
                    message: "You have wandered into the void between realities, where even Eternals fear to tread. The Celestials did not account for this destination.",
                    action: "Return to the known universe",
                    quote: "In the vastness of space, every path leads somewhere - except this one.",
                    glitchText: "SEARCHING...",
                    theme: "default"
                };
        }
    };

    const content = getPersonalizedErrorContent();

    const handleGoHome = () => {
        if (onGoHome) {
            onGoHome();
        } else {
            // Fallback navigation
            window.location.href = '/home';
        }
    };

    return (
        <div className={`error-container ${content.theme}-error-theme`}>
            {/* Cosmic background animation */}
            <div className="cosmic-void"></div>
            
            {/* Glitch overlay */}
            <div className="glitch-overlay">
                <div className="glitch-text">{content.glitchText}</div>
            </div>

            {/* Main error content */}
            <div className="error-content">
                <div className="error-code">
                    <span className="code-digit">4</span>
                    <span className="code-digit code-zero">0</span>
                    <span className="code-digit">4</span>
                </div>
                
                <h1 className="error-title">{content.title}</h1>
                <h2 className="error-subtitle">{content.subtitle}</h2>
                
                <div className="error-message">
                    <p>{content.message}</p>
                </div>

                <blockquote className="error-quote">
                    <p>"{content.quote}"</p>
                </blockquote>

                <div className="error-actions">
                    <button 
                        className="eternal-home-btn"
                        onClick={handleGoHome}
                    >
                        {content.action}
                    </button>
                </div>

                {/* Character-specific visual element */}
                <div className="character-symbol">
                    {currentUser?.name === 'Sersi' && <div className="matter-particles"></div>}
                    {currentUser?.name === 'Thena' && <div className="golden-weapon"></div>}
                    {currentUser?.name === 'Gilgamesh' && <div className="strength-aura"></div>}
                    {currentUser?.name === 'Kingo' && <div className="energy-projections"></div>}
                    {currentUser?.name === 'Arishem' && <div className="celestial-eye"></div>}
                    {!currentUser && <div className="void-spiral"></div>}
                </div>
            </div>

            {/* Floating cosmic debris */}
            <div className="cosmic-debris">
                <div className="debris-particle"></div>
                <div className="debris-particle"></div>
                <div className="debris-particle"></div>
                <div className="debris-particle"></div>
                <div className="debris-particle"></div>
            </div>
        </div>
    );
}

export default Error;