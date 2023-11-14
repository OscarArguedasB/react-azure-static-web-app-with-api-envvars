// In your React component
import React from 'react';

const Header = () => {
    // Accessing environment variables
    const headerColor = process.env.REACT_APP_HEADER_COLOR;
    const headerTitleColor = process.env.REACT_APP_HEADER_TITLE_COLOR;

    if (!headerColor) {
        return null;
    }
    console.log("headerColor", headerColor)

    return (
        <div style={{ backgroundColor: headerColor }} className="header">
            <h1 style={{ color: headerTitleColor }}>
                Azure Static Web Apps With React Demo
            </h1>
        </div>
    );
}

export default Header;
