import React from 'react';

const Button = ({ label, type}) => {
    console.log("label", label)
    console.log("type", type)
    return (
        <button type={type} label={label} className="btn mt-4"> <span>{label}</span> </button>
         
        
    );
};

export default Button;