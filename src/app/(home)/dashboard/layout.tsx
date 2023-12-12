import Navbar from '@/components/dashboard/navbar/Navbar'
import Sidebar from '@/components/dashboard/sidebar/Sidebar'
import React, { ReactNode } from 'react'

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex ">
      <Sidebar />

      <main className="ml-60  flex min-h-screen w-full flex-col">
        <Navbar />
        <div className="m-2 grid grow grid-cols-1 gap-4 rounded-lg border border-blue-500 p-2">
          {children}
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
