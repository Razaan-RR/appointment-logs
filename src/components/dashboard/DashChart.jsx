import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const chartData = [
  { day: 'Mon', calls: 45 },
  { day: 'Tue', calls: 62 },
  { day: 'Wed', calls: 58 },
  { day: 'Thu', calls: 72 },
  { day: 'Fri', calls: 88 },
  { day: 'Sat', calls: 95 },
  { day: 'Sun', calls: 56 },
]

export default function DashChart() {
  return (
    <div
      className="rounded-2xl px-6 py-5"
      style={{
        backgroundColor: '#0E1735',
        boxShadow:
          'inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)',
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-white text-lg font-normal">
            Call Trends - This Week
          </h2>
          <p className="text-sm text-white/60">Total: 472 calls</p>
        </div>

        <button className="px-4 py-2 rounded-lg text-sm text-white bg-white/10">
          This Week
        </button>
      </div>

      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="day"
              stroke="rgba(255,255,255,0.4)"
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="rgba(255,255,255,0.4)"
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#0E1735',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#fff',
              }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#areaFill)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
