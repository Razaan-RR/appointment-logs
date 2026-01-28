import { createBrowserRouter } from 'react-router-dom'
import DashboardLayout from '../layouts/DashboardLayout'
import Dashboard from '../pages/Dashboard'
import CallLogs from '../pages/CallLogs'
import Appointments from '../pages/Appointments'
import Settings from '../pages/Settings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'calls', element: <CallLogs /> },
      { path: 'appointments', element: <Appointments /> },
      { path: 'settings', element: <Settings/> },
    ],
  },
])

export default router
