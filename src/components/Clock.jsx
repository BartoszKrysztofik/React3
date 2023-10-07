import React from "react";
import { useEffect, useState } from "react";

const Clock = ({shiftTimeZone, removeTimezone}) => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date()
            const adjustTime = new Date(currentTime.getTime() + shiftTimeZone * 3600000)
            setTime(adjustTime)
        }, 1000);
        return () => {
            clearInterval(interval)
        }
    }, [shiftTimeZone])
    return (
        <div>
            <h2> UTC {shiftTimeZone >= 0 ? `+${shiftTimeZone}` : shiftTimeZone}</h2>
            <p>{time.toLocaleString()}</p>
            <button onClick={()=> removeTimezone(shiftTimeZone)}>Usuń</button>
        </div>
    )
}

export default Clock