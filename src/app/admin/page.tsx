'use client';

import { useEffect } from 'react';

export default function AdminPage() {
    useEffect(() => {
        const basePath = process.env.NODE_ENV === 'production' ? '/blog' : '';
        window.location.href = `${basePath}/admin/index.html`;
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
