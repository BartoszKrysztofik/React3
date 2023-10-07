import { useState } from 'react'
import React from 'react'
import TimezoneSelector from './components/TimezoneSelector'
import ClockList from './components/ClockList'

function App() {
  const [timezones, setTimezones] = useState([])

  const addTimezone = (shiftTimeZone) => {
    setTimezones([...timezones, shiftTimeZone])
  }

  const removeTimezone = (shiftTimeZone) => {
    const updateTimezones = timezones.filter((zone) => zone !== shiftTimeZone)
    setTimezones(updateTimezones)
  }
  return (
    <>
      <div>
        <h3>Sterfy czasowe</h3>
        <TimezoneSelector addTimezone= { addTimezone }/>
        <ClockList timezones={timezones} removeTimezone={removeTimezone} />
      </div>
    </>
  )
}

export default App
