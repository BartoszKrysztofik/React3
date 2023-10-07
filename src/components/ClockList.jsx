import React from "react";
import Clock from "./Clock";

const ClockList = ({ timezones, removeTimezone }) => {
    return (
        <div>
            {timezones.map((shiftTimeZone) => (
            <Clock key={shiftTimeZone} shiftTimeZone={shiftTimeZone} removeTimezone={removeTimezone} />
        ))}
        </div>
    )
}
export default ClockList