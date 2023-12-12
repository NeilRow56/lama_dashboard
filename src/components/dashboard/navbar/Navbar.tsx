import Logo from '@/components/shared/Logo'
import ThemeSwitcher from '@/components/shared/ThemeSwitcher'
import React from 'react'

function Navbar() {
  return (
    <nav className="flex h-[60px] items-center justify-between border-b border-border px-4 py-2">
      <Logo />
      <div className="flex items-center gap-4">
        <ThemeSwitcher />
      </div>
    </nav>
  )
}

export default Navbar
