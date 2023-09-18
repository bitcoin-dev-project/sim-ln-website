import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className="flex justify-between py-3 px-6 items-center bg-white border border-[1px] border-b-[#E6E6E6] shadow-sm">
      <Link href="/" className="text-2xl font-press text-brand-primary">SimLN</Link>
      <div className='flex gap-4'>
        <Link href="/guide">Quickstart</Link>
        <Link href="https://github.com/bitcoin-dev-project/sim-ln">Github</Link>
      </div>
    </div>
  )
}

export default NavBar