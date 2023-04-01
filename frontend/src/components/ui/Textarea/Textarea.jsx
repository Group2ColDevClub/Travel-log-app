import React from "react";
import propTypes from "prop-types";
import "./Textarea.css";

function Textarea(props){
    const  {label, onChange, size, placeholder, className, name} = props;

    const TextareaClasses = `textarea ${size ? `textarea--${size}` : ""}`;
    return(
        <div>
            <label>{label}</label>
            <Textarea 
                onChange={onChange}
                placeholder={placeholder}
                className={`${TextareaClasses} ${className}`}
                name={name}
            />
        </div>
    );
} 

Textarea.propTypes = {
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    size: propTypes.oneOf(['s','m','l']),
    placeholder: propTypes.string.isRequired,
    className: propTypes.string.isRequired,
    name: propTypes.string.isRequired
};

TextArea.defaultProps = {
    size: '',
  };
export default Textarea;