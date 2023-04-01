import React from "react";

const Textarea = ( {label, onChange, size="medium", placeholder, className, name} ) => {
    return(
        <div>
            <label>{label}</label>
            <textarea 
                onChange={onChange}
                rows={size}
                placeholder={placeholder}
                className={className}
                name={name}
            />
        </div>
    )
} 
export default Textarea;