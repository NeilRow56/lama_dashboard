'use client'

import { BaggageClaim } from 'lucide-react'
import { CollapsibleItem } from './collapsibleItem'

const inventoryLinks = [
  {
    label: 'Admin - summary',
    href: '/admin',
    icon: BaggageClaim,
  },
  {
    label: 'Brands',
    href: '/admin/brands',
    icon: BaggageClaim,
  },
  {
    label: 'Categories',
    href: '/admin/categories',
    icon: BaggageClaim,
  },
  { label: 'Items', href: '/admin/items', icon: BaggageClaim },
  {
    label: 'Units',
    href: '/admin/units',
    icon: BaggageClaim,
  },
  {
    label: 'Warehouse',
    href: '/admin/warehouse',
    icon: BaggageClaim,
  },
]

export const CollapsibleRoutes = () => {
  const routes = inventoryLinks

  return (
    <div className="flex w-full flex-col gap-2 py-2">
      {routes.map((route) => (
        <CollapsibleItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
