import React from 'react';

function Home({ currentUser }) {
    const getPersonalizedContent = () => {
        switch (currentUser?.name) {
            case 'Sersi':
                return {
                    greeting: "Welcome back, Sersi",
                    subtitle: "Master of Matter Manipulation",
                    story: "You have served humanity for over 7,000 years, watching civilizations rise and fall. Your love for humanity runs deeper than any other Eternal, and your power to transmute matter has saved countless lives. From the fall of Babylon to the modern world, you've been their silent guardian.",
                    mission: "Continue protecting humanity while discovering the truth about your origins and the Celestials' plan.",
                    quote: "I've loved these people my whole life. I'm not gonna let them die."
                };
            case 'Thena':
                return {
                    greeting: "Welcome back, Thena",
                    subtitle: "Goddess of War and Wisdom",
                    story: "As the fiercest warrior among the Eternals, you've led countless battles against the Deviants. Your golden weapons, forged from cosmic energy, have never failed you in combat. Though Mahd Wy'ry threatens your memories, your spirit remains unbroken.",
                    mission: "Overcome the curse of your fractured memories and continue to be the shield that protects your family.",
                    quote: "Remember. Remember this world. Remember this life."
                };
            case 'Gilgamesh':
                return {
                    greeting: "Welcome back, Gilgamesh",
                    subtitle: "The Strongest Eternal",
                    story: "Your strength is legendary, but your heart is even greater. You chose to live apart from the world with Thena, caring for her when Mahd Wy'ry began to take hold. Your sacrifice and loyalty define what it means to be eternal - not the power, but the love.",
                    mission: "Though your physical form has passed, your legacy of strength and compassion lives on in your family.",
                    quote: "We're family. We stay together."
                };
            case 'Kingo':
                return {
                    greeting: "Welcome back, Kingo",
                    subtitle: "Eternal Showman and Energy Projector",
                    story: "From ancient battles to Bollywood stages, you've always known how to put on a show. Your cosmic energy projections are as dazzling as your personality. You've embraced human culture like no other, becoming a beloved film star while never forgetting your true nature.",
                    mission: "Balance your love for fame with your duty as an Eternal, and help bridge the gap between human and eternal worlds.",
                    quote: "I've always been popular. It's not a surprise."
                };
            case 'Arishem':
                return {
                    greeting: "Welcome, Arishem the Judge",
                    subtitle: "Prime Celestial and Creator",
                    story: "You are the architect of worlds, the judge of civilizations. For eons, you have seeded countless planets with life, guiding evolution toward perfection. The Eternals are your creation, sent to shepherd intelligent life until it's time for the Emergence.",
                    mission: "Oversee the cosmic cycle of creation and destruction. Judge whether humanity deserves to continue existing.",
                    quote: "I am Arishem the Judge. I have created all Eternals... and I can destroy them."
                };
            default:
                return {
                    greeting: "Welcome to the Eternal Realm",
                    subtitle: "Guardians of Earth",
                    story: "For over 7,000 years, the Eternals have secretly protected humanity from the monstrous Deviants. Created by the Celestials and sent to Earth, each Eternal possesses unique cosmic powers and an immortal lifespan.",
                    mission: "Discover your true identity and join the eternal fight for humanity's future.",
                    quote: "We have loved these people since the day we arrived."
                };
        }
    };

    const content = getPersonalizedContent();

    return (
        <div className="home-container">
            <div className="eternal-hero-section">
                <div className="cosmic-background"></div>
                <div className="hero-content">
                    <h1 className="hero-title">{content.greeting}</h1>
                    <h2 className="hero-subtitle">{content.subtitle}</h2>
                    <div className="hero-divider"></div>
                </div>
            </div>

            <div className="eternal-story-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mx-auto">
                            <div className="story-card">
                                <h3 className="story-title">Your Eternal Legacy</h3>
                                <p className="story-text">{content.story}</p>
                                
                                <div className="mission-section">
                                    <h4 className="mission-title">Current Mission</h4>
                                    <p className="mission-text">{content.mission}</p>
                                </div>

                                <blockquote className="eternal-quote">
                                    <p>"{content.quote}"</p>
                                </blockquote>

                                {currentUser && (
                                    <div className="power-display">
                                        <h4 className="power-title">Your Cosmic Power</h4>
                                        <div className="power-badge">
                                            {currentUser.powers}
                                        </div>
                                        <div className="status-badge">
                                            Status: {currentUser.status === 'alive' ? '🌟 Active' : '💫 Eternal Legacy'}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="eternal-timeline">
                <div className="container">
                    <h3 className="timeline-title">The Eternal Timeline</h3>
                    <div className="timeline-grid">
                        <div className="timeline-item">
                            <div className="timeline-year">5000 BCE</div>
                            <div className="timeline-event">Arrival on Earth</div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">575 BCE</div>
                            <div className="timeline-event">Fall of Babylon</div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">400 CE</div>
                            <div className="timeline-event">Gupta Empire Protection</div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">1945</div>
                            <div className="timeline-event">Hiroshima Intervention</div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">Present</div>
                            <div className="timeline-event">The Emergence Approaches</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;