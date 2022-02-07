import React from 'react';
import "../loading.css"

const Loading = ({load,main,children}) => {
    return (
        <>
            {load &&
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
            {main && children}
        </>
    )
}

export default Loading
