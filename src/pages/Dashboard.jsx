import {
  Phone,
  Bot,
  ArrowLeftRight,
  Calendar,
  X,
  Clock,
} from "lucide-react";
import DashChart from "../components/dashboard/DashChart";

export default function Dashboard() {
  return (
    <div
      className="min-h-full px-8 py-6 space-y-8"
      style={{ backgroundColor: "var(--dashboard-bg)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <StatCard title="Total Calls Today" value="127" change="+12%" icon={Phone} iconBg="bg-sky-500" positive />
        <StatCard title="AI-Handled Calls" value="98" change="+77%" icon={Bot} iconBg="bg-pink-500" positive />
        <StatCard title="Warm Transfer" value="23" change="+18%" icon={ArrowLeftRight} iconBg="bg-orange-500" positive />
        <StatCard title="Appointments Booked" value="34" change="+8%" icon={Calendar} iconBg="bg-emerald-500" positive />
        <StatCard title="Missed/Failed Calls" value="6" change="-3%" icon={X} iconBg="bg-red-500" circle />
        <StatCard title="Avg Call Duration" value="3:42" change="+15%" icon={Clock} iconBg="bg-indigo-500" positive />
      </div>

      <DashChart />
    </div>
  );
}

function StatCard({
  title,
  value,
  change,
  icon: Icon,
  iconBg,
  positive,
  circle,
}) {
  return (
    <div
      className="rounded-2xl px-6 py-5 h-[130px] flex flex-col justify-between font-normal"
      style={{
        backgroundColor: "#0E1735",
        boxShadow:
          "inset 0 0 0 1px rgba(255,255,255,0.05), 0 16px 32px rgba(0,0,0,0.35)",
      }}
    >
      <div className="flex items-start justify-between">
        <p className="text-sm text-white/60">{title}</p>
        <div
          className={`w-10 h-10 ${
            circle ? "rounded-full" : "rounded-xl"
          } flex items-center justify-center ${iconBg}`}
        >
          <Icon size={20} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[34px] text-white leading-none">
          {value}
        </span>
        <span
          className={`text-sm ${
            positive ? "text-emerald-400" : "text-red-400"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}
