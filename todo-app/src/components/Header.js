import React from 'react';

const Header = () => {

    console.log("headerColor", process.env.HEADER_COLOR)
    const { headerColor, headerTitleColor } = process.env.HEADER_COLOR
    if (!headerColor) {
        return null;
    }

    return (
        <div style={{backgroundColor: headerColor}} className="header">
            <h1 style={{color: headerTitleColor}}>
                Azure Static Web Apps With React Demo
            </h1>
        </div>
    )
}

export default Header
