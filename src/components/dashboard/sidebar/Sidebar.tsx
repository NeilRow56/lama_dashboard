import { BaggageClaim } from 'lucide-react'
import { SidebarRoutes } from './SidebarRoutes'
import Link from 'next/link'
import SidebarCollapsibleItem from './SidebarCollsibleItem'

const Sidebar = () => {
  return (
    <div className="fixed flex min-h-screen w-60 flex-col justify-between bg-slate-800 px-3 py-3 text-slate-50">
      {/* Top */}

      <div className="flex flex-col  ">
        {/* Logo */}
        <Link
          href="/dashboard"
          className="cursor=pointer flex items-center gap-3 bg-slate-950 p-2"
        >
          <BaggageClaim />
          <span className="text-bold text-xl">Dashboard</span>
        </Link>
        <SidebarCollapsibleItem />
        <SidebarRoutes />
      </div>
    </div>
  )
}

export default Sidebar
