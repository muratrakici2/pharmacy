import React from 'react';
import "../loading.css"

const Loading = (props) => {
    return (
        <>
            {props.load &&
                <div className="holder">
                    <div className="preloader">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
            {props.main && props.children}
        </>
    )
}

export default Loading
