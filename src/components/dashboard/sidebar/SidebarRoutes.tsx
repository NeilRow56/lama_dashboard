'use client'

import {
  Layout,
  List,
  BarChart,
  Home,
  PackageSearch,
  Users,
  FileStack,
  BarChart4,
} from 'lucide-react'
import { SidebarItem } from './SidebarItem'
import { usePathname } from 'next/navigation'

const guestRoutes = [
  {
    icon: Layout,
    label: 'Dashboard',
    href: '/dashboard',
  },
  {
    icon: Home,
    label: 'Home',
    href: '/',
  },

  {
    icon: PackageSearch,
    label: 'Products',
    href: '/dashboard/products',
  },
  {
    icon: Users,
    label: 'Users',
    href: '/dashboard/users',
  },
  {
    icon: BarChart4,
    label: 'Analytics',
    href: 'dashboard/analytics',
  },
  {
    icon: FileStack,
    label: 'Transactions',
    href: '/admin/documents',
  },
]

const analyticsRoutes = [
  {
    icon: List,
    label: 'Courses',
    href: '/dashboard/analytics/courses',
  },
  {
    icon: BarChart,
    label: 'Analytics',
    href: '/dashboard/analytics',
  },
]

export const SidebarRoutes = () => {
  const pathname = usePathname()

  const isAnalyticPage = pathname?.includes('/analytics')

  const routes = isAnalyticPage ? analyticsRoutes : guestRoutes

  return (
    <div className="flex w-full flex-col gap-4 py-6">
      <h2>Pages</h2>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}
