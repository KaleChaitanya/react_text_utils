import React from "react";

export default function Alert(props) {
    console.log(props)
    return (
        <div className="mb-5 msg-alert">
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <p>{props.alert.msg}</p>
                </div>}
        </div >
    )
}