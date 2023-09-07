import React, { useState } from 'react';

const IconList = (props) => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const style = {
        alignItems: 'flex-start',
        display: 'flex',
        flexWrap: 'wrap',
        gridGap: '14px',
        gap: '14px',
        marginBottom: '30px',
    };

    const iconStyle = {
        height: "1.9em",
        width: "auto",
        transition: "opacity 0.2s",
        cursor: "pointer",
        position: "relative"
    };

    const nameStyle = {
        textAlign: "center",
        color: "#00BCD4",
        marginTop: "5px",
        opacity: 1,
        transition: "opacity 0.2s",
        position: "absolute", // Added position
        width: "100%", // Added width
    };

    return (
        <div style={style}>
            {props.icons.map((icon) => (
                <div
                    key={icon.name}
                    onMouseEnter={() => setHoveredIcon(icon)}
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{ position: "relative" }}
                >
                    <img
                        src={'images/icons/' + icon.name + '.svg'}
                        alt={icon.name}
                        style={{ ...iconStyle, opacity: hoveredIcon === icon ? 0.7 : 1 }}
                    />
                    {hoveredIcon === icon && (
                        <>
                            <div style={{ ...nameStyle, opacity: 0 }}>{icon.name}</div>
                            <div style={nameStyle}>{icon.name}</div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default IconList;
