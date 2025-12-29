'use client';

import { useEffect } from 'react';

export default function AdminPage() {
    useEffect(() => {
        window.location.href = '/admin/index.html';
    }, []);

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: '#111',
            color: '#fff'
        }}>
            <p>Redirecting to CMS...</p>
        </div>
    );
}
