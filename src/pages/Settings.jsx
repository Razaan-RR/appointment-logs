import { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Profile from '../components/settings/Profile'

export default function Settings() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Settings')
  }, [setTitle])

  return (
    <div
      className="min-h-full px-8 py-6"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <Profile />
    </div>
  )
}
