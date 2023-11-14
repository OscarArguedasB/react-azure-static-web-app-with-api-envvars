import React from 'react';

const Header = ({appSettings}) => {
    const headerColor = appSettings?.headerColor || process.env.REACT_APP_HEADER_COLOR;
    const headerTitleColor = appSettings?.headerTitleColor || process.env.REACT_APP_HEADER_TITLE_COLOR;

    console.log("headerColor", process.env.REACT_APP_HEADER_COLOR)
    const { headerColor, headerTitleColor } = appSettings
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
