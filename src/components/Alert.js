import React from 'react'

function Alert(props) {
    const {msg,type}=props
    return (
        <div>
             <div className={`alert alert-${type} alert-dismissible fade show`} style={{position:'fixed',top:'0',left:'0',width:'100%',zIndex:'53665'}} role="alert">
                <strong>{msg}</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> 
        </div>
    )
}

export default Alert
