import React from 'react';
import { useAuth } from '../../context/AuthContext';

const DoctorDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div style={{ padding: '2rem', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Doctor Dashboard</h1>
                <button onClick={logout} style={{ padding: '0.5rem 1rem', background: '#ef4444', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
            </div>
            <p>Welcome, Dr. {user?.name}</p>
            
            <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#1e293b', borderRadius: '8px' }}>
                <h3>Incoming Triage Cases</h3>
                <p>No active cases at the moment.</p>
            </div>
        </div>
    );
};

export default DoctorDashboard;
