import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserInjured, FaUserMd, FaUserShield } from 'react-icons/fa';
import './RoleSelection.css';

const RoleSelection = () => {
    const navigate = useNavigate();

    return (
        <section className="role-section">
            <div className="container">
                <h2 className="section-title">Who Are You?</h2>
                <div className="role-grid">
                    <button className="role-btn patient" onClick={() => navigate('/login?role=patient')}>
                        <FaUserInjured className="role-icon" />
                        <span>Patient / Health Worker</span>
                    </button>
                    <button className="role-btn doctor" onClick={() => navigate('/login?role=doctor')}>
                        <FaUserMd className="role-icon" />
                        <span>Remote Specialist</span>
                    </button>
                    <button className="role-btn admin" onClick={() => navigate('/login?role=admin')}>
                        <FaUserShield className="role-icon" />
                        <span>Admin Panel</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RoleSelection;
