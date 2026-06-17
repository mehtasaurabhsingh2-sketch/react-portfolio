import React, { useEffect, useState } from 'react';

const AmbientOrb = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div 
            className="ambient-orb"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        ></div>
    );
};

export default AmbientOrb;
