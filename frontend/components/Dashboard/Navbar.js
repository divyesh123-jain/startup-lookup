import React from 'react'

const Navbar = () => {
  return (
    <nav className='grid place-items-center'>
        <div className="max-w-[1260px] w-full py-4 h-full border-b-[2px] border-black flex justify-between items-center">
            <h2 className='text-2xl font-bold'>StartUp</h2>
            <div className='flex gap-3'>
                <p>Stats</p>
                <p>Documentation</p>
                <p>Team</p>
                <p>Contact Founder</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar