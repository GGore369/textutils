import React, { useState } from 'react'

function Alert(props) {
    const Capitalize = (letter1) => {
        let lower = letter1.toLowerCase();
        return lower[0].toUpperCase()+lower.slice(1);
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{Capitalize(props.alert.type)}</strong> : {props.alert.msg}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}

export default Alert