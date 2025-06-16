import React from 'react';
import { Link } from 'react-router-dom';

const Barnav = () => {
    return (
        <nav style={{ padding: '1rem', background: '#222', color: '#fff' }}>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
                <li>
                    <Link to="/Principal" style={{ color: '#fff', textDecoration: 'none' }}>Principal</Link>
                </li>
                <li>
                    <Link to="/Peliculas" style={{ color: '#fff', textDecoration: 'none' }}>Películas</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Barnav;