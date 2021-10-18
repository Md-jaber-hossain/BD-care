import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useMedical = () => {
    const [medical, setMedical] = useState([]);

    useEffect(() => {
        fetch('/medical.json')
            .then(res => res.json())
            .then(data => setMedical(data));
    }, []);

    return {
        medical,
        setMedical
    }

};

export default useMedical;