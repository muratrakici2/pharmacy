import React, { useEffect, useState } from 'react';

const Notification = ({ data }) => {
    const [notification, setnotification] = useState("");
    const [show, setshow] = useState(false);

    useEffect(() => {
        const alarm = data.filter((i) => i.read === false)
        if (alarm.length > 0) {
            setnotification(alarm.length);
            setTimeout(() => {
                setshow(true)
            }, 1000);
        }
    }, [data])
    return (
        <>
            {show && <div className="notification" onClick={()=>setshow(false)}>
                <p>{notification} Okunmamış Siparişiniz Var</p>
            </div>}
        </>
    )
};

export default Notification;
