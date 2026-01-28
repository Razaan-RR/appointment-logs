import React, { useEffect } from 'react'
import AppointmentStats from '../components/appointments/AppointmentStats'
import BookingDetails from '../components/appointments/BookingDetails'
import { useOutletContext } from 'react-router'

function Appointments() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Appointments')
  }, [setTitle])
  return (
    <div
      className="min-h-full px-8 py-6"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <AppointmentStats />
      <BookingDetails />
    </div>
  )
}

export default Appointments
