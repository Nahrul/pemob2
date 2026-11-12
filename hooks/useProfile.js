import { useEffect, useState } from 'react';
export default function useProfile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProfile({
                name: 'Nahrul Hayat',
                nim: '624c0010',
                prodi: 'Informatika',
                email: 'nahrul@student.mahardika.ac.id',
                phone: '085183090221',
            });
            setLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return { profile, loading };
}