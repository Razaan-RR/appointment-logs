import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import CallDetails from '../components/callLogs/CallDetails'
import CallList from '../components/callLogs/CallList'

export default function CallLogs() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Call Logs & History')
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

  const panelVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
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
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 xl:grid-cols-[420px_1fr] gap-6"
      >
        <motion.div variants={panelVariants}>
          <CallList />
        </motion.div>

        <motion.div variants={panelVariants}>
          <CallDetails />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
