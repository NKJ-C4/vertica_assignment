import React from "react";
import Clock from 'react-live-clock';

const Time = () => {
    return (
        <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} />
    )
}

export default Time;