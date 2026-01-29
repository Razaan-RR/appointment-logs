import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { motion } from 'framer-motion'
import Profile from '../components/settings/Profile'

export default function Settings() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Settings')
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

  const contentVariants = {
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
      <motion.div variants={contentVariants}>
        <Profile />
      </motion.div>
    </motion.div>
  )
}
