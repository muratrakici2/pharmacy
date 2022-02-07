import React, { useEffect ,useState } from 'react';

const Notification = ({data}) => {
    const [notification, setnotification] = useState("");
    const [show, setshow] = useState("none");

    useEffect(() => {
        const alarm = data.filter((i) => i.read === false)
        if (alarm.length > 0) {
            setnotification(alarm.length);
            setshow("flex")
        }
    }, [data])
    return(
    <div className="notification" style={{display:`${show}`}}>
        <p>{notification} Okunmamış Siparişiniz Var</p>
        <button onClick={() => setshow("none")}>kapat</button>
    </div>
    )};

export default Notification;
