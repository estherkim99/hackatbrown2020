import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>----- This is the header -----</h1>
        </header>
    )
}

const headerStyle = {
    background: '#B895AF',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header;
