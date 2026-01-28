import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EditProfile() {
  const navigate = useNavigate()

  return (
    <div
      className="min-h-full py-6 pl-6"
      style={{ backgroundColor: 'var(--dashboard-bg)' }}
    >
      <div className="max-w-4xl mx-auto sm:ml-0.5">
        <div className="mb-10 border-b border-white/10 pb-4">
          <div className="flex items-center gap-12">
            <h1 className="text-white text-xl font-medium">Profile</h1>
            <span className="text-white/80 text-lg font-normal">
              Password Settings
            </span>
          </div>
        </div>

        <p className="text-white text-base mb-4">Profile Image</p>

        <div className="relative w-fit mb-10">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white/20">
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-md bg-sky-500 flex items-center justify-center shadow-lg">
            ✎
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 max-w-3xl">
          <Input label="Full Name" value="Jane D." />
          <Input label="Email" value="jane@gmail.com" />
          <Input label="Store Name" value="Ubreakifix Store" />
          <Input label="Store Address" value="123 Main Street, New York" />
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => navigate('/settings')}
            className="w-64 h-12 rounded-xl bg-green-500 text-white text-sm font-medium shadow-lg hover:bg-green-400 transition mr-35"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

function Input({ label, value }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white">{label}</label>
      <input
        defaultValue={value}
        className="w-full h-11 px-4 rounded-xl bg-[#0B122C] text-sm text-white border border-white/10 focus:outline-none focus:border-emerald-400/60"
      />
    </div>
  )
}
