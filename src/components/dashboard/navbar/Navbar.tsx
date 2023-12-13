'use client'

import Logo from '@/components/shared/Logo'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher'
import { usePathname } from 'next/navigation'
import React from 'react'
import { LucideIcon, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

function Navbar() {
  const pathname = usePathname()
  return (
    <nav className=" flex h-[60px] items-center justify-between border-b border-border px-4 py-2">
      <div className="flex items-center gap-3">
        <Logo />
        <h2 className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent hover:cursor-pointer">
          {pathname.split('/').pop()?.toUpperCase()}
        </h2>
      </div>
      <div className="flex gap-2">
        <div className="flex rounded-l-md ">
          <Input
            type="text"
            placeholder="Search"
            className="rounded-md border border-blue-500"
          />
        </div>
        <div className="flex items-center gap-4">
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
