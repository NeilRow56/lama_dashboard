import { Building2 } from 'lucide-react'
import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <div className="col-span-1 row-span-1 rounded-md border bg-slate-800  p-5 hover:bg-[#2e374a]">
      <div className="flex w-full space-x-4 text-slate-100">
        <Building2 size={24} className="" />
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">Total Users</span>
          <span className="text-sm font-light">10,273</span>
          <div className="flex gap-2 text-sm">
            <span className="text-lime-500">12% </span> more than previous week
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
