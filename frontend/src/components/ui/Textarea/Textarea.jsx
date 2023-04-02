import React from "react";
import propTypes from "prop-types";
import "./Textarea.css";
import "Travel-log-app/frontend/src/index.css";

function Textarea(props){
    const  {value, label, onChange, size, placeholder, className, name} = props;

    const TextareaClasses = `textarea ${size ? `textarea--${size}` : "m"}`;
    return(
        <>
            {label !== undefined && <label htmlFor="{name}">{label}</label>}
            <textarea 
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className={`${TextareaClasses} ${className}`}
                name={name}
            />
        </>
    );
} 

Textarea.propTypes = {
    label: propTypes.string,
    onChange: propTypes.func,
    size: propTypes.oneOf(['s','m','l']),
    placeholder: propTypes.string,
    className: propTypes.string,
    name: propTypes.string
};

Textarea.defaultProps = {
    size: 'm',
  };
export default Textarea;