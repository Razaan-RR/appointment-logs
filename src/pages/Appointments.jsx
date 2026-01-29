import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import AppointmentStats from '../components/appointments/AppointmentStats'
import BookingDetails from '../components/appointments/BookingDetails'
import { useOutletContext } from 'react-router'

function Appointments() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Appointments')
  }, [setTitle])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-full px-8 py-6"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <motion.div variants={sectionVariants}>
        <AppointmentStats />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <BookingDetails />
      </motion.div>
    </motion.div>
  )
}

export default Appointments
