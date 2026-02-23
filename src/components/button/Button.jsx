import React from 'react';

const Button = ({ label, type, onClick}) => {

    return (
        <button onClick={onClick} type={type} label={label} className="btn mt-4"> <span>{label}</span> </button>
         
        
    );
};

export default Button;