import React from 'react';
import { useAuth } from '../../context/AuthContext';

const PatientDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div style={{ padding: '2rem', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Patient Dashboard</h1>
                <button onClick={logout} style={{ padding: '0.5rem 1rem', background: '#ef4444', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
            </div>
            <p>Welcome, {user?.name} (Role: {user?.role})</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                    <h3>Add New Case</h3>
                    <p>Submit symptoms and vitals for AI analysis.</p>
                </div>
                <div style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                    <h3>My History</h3>
                    <p>View previous cases and doctor feedback.</p>
                </div>
            </div>
        </div>
    );
};

export default PatientDashboard;
