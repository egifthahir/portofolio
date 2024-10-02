import React from 'react';

function MultiProjectCard({ img_a, img_b, link_a, link_b, h3, p }) {
    const openLinkA = (e) => {
        e.preventDefault();
        window.open(link_a, "_blank", "noopener,noreferrer");
    };

    const openLinkB = (e) => {
        e.preventDefault();
        window.open(link_b, "_blank", "noopener,noreferrer");
    };
    
    return (
        <a style={{ textAlign: 'center' }}>
            <button 
                onClick={openLinkA} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
            >
                <img
                    className="hover"
                    src={img_a}
                    alt={`${h3} logo for link a`}
                />
            </button>
            <button 
                onClick={openLinkB} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '10px' }}
            >
                <img
                    className="hover"
                    src={img_b}
                    alt={`${h3} logo for link b`}
                />
            </button>
            <h3>{h3}</h3>
            <p>{p}</p>
        </a>
    );
}

export default MultiProjectCard;
