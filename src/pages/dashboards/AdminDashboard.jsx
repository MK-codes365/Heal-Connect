import React from 'react';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div style={{ padding: '2rem', color: 'white' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h1>Admin Panel</h1>
                <button onClick={logout} style={{ padding: '0.5rem 1rem', background: '#ef4444', border: 'none', color: 'white', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '2rem' }}>
                <div style={{ padding: '2rem', background: '#334155', borderRadius: '8px', textAlign: 'center' }}>
                    <h2>Total Users</h2>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>124</p>
                </div>
                <div style={{ padding: '2rem', background: '#334155', borderRadius: '8px', textAlign: 'center' }}>
                    <h2>Active Doctors</h2>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>12</p>
                </div>
                 <div style={{ padding: '2rem', background: '#334155', borderRadius: '8px', textAlign: 'center' }}>
                    <h2>Cases Today</h2>
                    <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>35</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
