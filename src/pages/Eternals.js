import React from 'react';

function EternalsStatus({ currentUser, eternalsUsers }) {
    return (
        <div className="eternals-status-container">
            <div className="status-header">
                <h1 className="status-title">Eternals Status Report</h1>
                <p className="status-subtitle">Celestial Administrative Access Only</p>
                <div className="admin-badge">
                    <span className="badge-icon">👁️</span>
                    Accessed by: {currentUser?.name}
                </div>
            </div>

            <div className="status-grid">
                {Object.entries(eternalsUsers).map(([key, eternal]) => (
                    <div key={key} className={`eternal-status-card ${eternal.status}`}>
                        <div className="status-card-header">
                            <h3 className="eternal-name">{eternal.name}</h3>
                            <div className={`status-indicator ${eternal.status}`}>
                                {eternal.status === 'alive' ? '🌟' : '💫'}
                            </div>
                        </div>
                        
                        <div className="status-details">
                            <div className="detail-row">
                                <span className="detail-label">Role:</span>
                                <span className="detail-value">{eternal.role}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Powers:</span>
                                <span className="detail-value">{eternal.powers}</span>
                            </div>
                            <div className="detail-row">
                                <span className="detail-label">Status:</span>
                                <span className={`detail-value status-${eternal.status}`}>
                                    {eternal.status.toUpperCase()}
                                </span>
                            </div>
                        </div>

                        {eternal.status === 'deceased' && (
                            <div className="memorial-section">
                                <p className="memorial-text">
                                    💫 Their eternal essence lives on in cosmic memory
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="status-summary">
                <h3 className="summary-title">Mission Summary</h3>
                <div className="summary-stats">
                    <div className="stat-card">
                        <span className="stat-number">
                            {Object.values(eternalsUsers).filter(e => e.status === 'alive' && e.role === 'eternal').length}
                        </span>
                        <span className="stat-label">Active Eternals</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">
                            {Object.values(eternalsUsers).filter(e => e.status === 'deceased').length}
                        </span>
                        <span className="stat-label">Fallen Heroes</span>
                    </div>
                    <div className="stat-card">
                        <span className="stat-number">
                            {Object.values(eternalsUsers).filter(e => e.role === 'admin').length}
                        </span>
                        <span className="stat-label">Celestials</span>
                    </div>
                </div>
            </div>

            <div className="celestial-notes">
                <h4 className="notes-title">Celestial Observations</h4>
                <div className="notes-content">
                    <p>The Eternal mission on Earth continues as planned. Current status indicates sufficient protection capability for the coming Emergence. Deceased members have fulfilled their cosmic purpose and their essence has returned to the World Forge.</p>
                    <p className="note-signature">- Recorded by Arishem the Judge</p>
                </div>
            </div>
        </div>
    );
}

export default EternalsStatus;