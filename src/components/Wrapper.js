import React from 'react';
import "../UserDirectory.css";

function Wrapper({ children }) {
    return (
        <div className="wrapper">
            {children}
        </div>
    );
}

export default Wrapper;
