import { useState } from "react";
import React from "react";

const TimezoneSelector = ({ addTimezone }) => {
    const [selectShiftTimeZone, setSelectShiftTimeZone] = useState('')
    const shiftOptions = [
        { value: "UTC-12", label: "UTC-12", shiftTimeZone: -12 },
        { value: "UTC-6", label: "UTC-6", shiftTimeZone: -6 },
        { value: "UTC-3", label: "UTC-3", shiftTimeZone: -3 },
        { value: "UTC-2", label: "UTC-2", shiftTimeZone: -2 },
        { value: "UTC-1", label: "UTC-1", shiftTimeZone: -1 },
        { value: "UTC", label: "UTC", shiftTimeZone: 0},
        { value: "UTC+1", label: "UTC+1", shiftTimeZone: 1 },
        { value: "UTC+2", label: "UTC+2", shiftTimeZone: 2 },
        { value: "UTC+3", label: "UTC+3", shiftTimeZone: 3 },
        { value: "UTC+6", label: "UTC+6", shiftTimeZone: 6 },
        { value: "UTC+12", label: "UTC+12", shiftTimeZone: 12 },
    ]
    const handleAddTimeZone = () => {
        if (selectShiftTimeZone !== "") {
            addTimezone(selectShiftTimeZone);
            setSelectShiftTimeZone("")
        }
    }
    return (
        <div>
            <select value={selectShiftTimeZone} onChange={(event) => setSelectShiftTimeZone(Number(event.target.value))} >
                <option value="">Wybór strefy</option>
                {shiftOptions.map((option) => (
                    <option key={option.shiftTimeZone} value={option.shiftTimeZone}>{option.shiftTimeZone}</option>
                ))}
            </select>
            <button onClick={handleAddTimeZone}>Dodaj strefe</button>
        </div>
    )
}
export default TimezoneSelector