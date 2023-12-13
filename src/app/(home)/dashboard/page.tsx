import Card from '@/components/shared/Card'
import Transactions from '@/components/shared/Transactions'
import React from 'react'

function DashboardPage() {
  return (
    <div className="flex  flex-col">
      <div className="grid  grid-cols-4 grid-rows-6 gap-4">
        <Card />
        <Card />
        <Card />
        <div className=" col-span-1 row-span-6">RightBar</div>
        <Transactions />
        <div className=" col-span-3 row-span-2 ">04</div>
      </div>
    </div>
  )
}

export default DashboardPage
