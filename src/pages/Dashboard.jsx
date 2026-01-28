import { Phone, Bot, ArrowLeftRight, Calendar, X, Clock } from 'lucide-react'
import StatCard from '../components/dashboard/StatCard'
import DashChart from '../components/dashboard/DashChart'
import DashboardExtras from '../components/dashboard/DashboardExtras'
import { useEffect } from 'react'
import { useOutletContext } from 'react-router'

export default function Dashboard() {
  const { setTitle } = useOutletContext()

  useEffect(() => {
    setTitle('Dashboard Overview')
  }, [setTitle])

  return (
    <div
      className="min-h-full px-8 py-6 space-y-8"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard
          title="Total Calls Today"
          value="127"
          change="+12%"
          icon={Phone}
          iconBg="bg-sky-500"
          positive
        />
        <StatCard
          title="AI-Handled Calls"
          value="98"
          change="+77%"
          icon={Bot}
          iconBg="bg-pink-500"
          positive
        />
        <StatCard
          title="Warm Transfer"
          value="23"
          change="+18%"
          icon={ArrowLeftRight}
          iconBg="bg-orange-500"
          positive
        />
        <StatCard
          title="Appointments Booked"
          value="34"
          change="+8%"
          icon={Calendar}
          iconBg="bg-emerald-500"
          positive
        />
        <StatCard
          title="Missed/Failed Calls"
          value="6"
          change="-3%"
          icon={X}
          iconBg="bg-red-500"
          circle
        />
        <StatCard
          title="Avg Call Duration"
          value="3:42"
          change="+15%"
          icon={Clock}
          iconBg="bg-indigo-500"
          positive
        />
      </div>

      <DashChart />
      <DashboardExtras />
    </div>
  )
}
