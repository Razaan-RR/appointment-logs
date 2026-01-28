import { NavLink } from 'react-router-dom'
import { Home, Phone, Calendar, Settings, LogOut, Menu } from 'lucide-react'
import { useState } from 'react'

const links = [
  { name: 'Dashboard Overview', path: '/', icon: Home },
  { name: 'Call Logs', path: '/calls', icon: Phone },
  { name: 'Appointments', path: '/appointments', icon: Calendar },
  { name: 'Settings', path: '/settings', icon: Settings },
]

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-50 md:hidden text-white"
      >
        <Menu size={22} />
      </button>

      <div
        className={`fixed inset-0 z-40 bg-black/40 md:hidden ${
          open ? 'block' : 'hidden'
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col px-5 py-6 transition-transform md:static md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{
          width: '241px',
          background: 'linear-gradient(180deg, #0b1535 0%, #0a1a3f 100%)',
        }}
      >
        <div className="flex justify-center mb-10">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-14 h-14 rounded-2xl object-cover"
          />
        </div>

        <nav className="flex flex-col gap-4">
          {links.map(({ name, path, icon: Icon }) => (
            <NavLink key={name} to={path} onClick={() => setOpen(false)}>
              {({ isActive }) => (
                <div className="relative">
                  {isActive && (
                    <>
                      <div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{
                          boxShadow:
                            '0 0 0 1px rgba(255,255,255,0.95), 0 0 26px rgba(255,255,255,0.75)',
                        }}
                      />
                      <div
                        className="absolute inset-[1px] rounded-[11px] pointer-events-none"
                        style={{
                          boxShadow: 'inset 0 0 18px rgba(255,255,255,0.35)',
                        }}
                      />
                      <div
                        className="absolute left-1.5 right-1.5 -bottom-4 h-8 rounded-full pointer-events-none"
                        style={{
                          background:
                            'radial-gradient(ellipse at center, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0) 70%)',
                          filter: 'blur(10px)',
                        }}
                      />
                    </>
                  )}

                  <div
                    className={`relative z-10 flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium ${
                      isActive ? 'text-white' : 'text-white/85'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, #0b1535, #0a1a3f)'
                        : 'transparent',
                    }}
                  >
                    <Icon size={20} />
                    {name}
                  </div>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <button className="mt-auto flex items-center gap-3 px-4 py-2 text-sm font-medium text-red-500">
          <LogOut size={18} color="#000000" />
          Log Out
        </button>
      </aside>
    </>
  )
}
