import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between items-center h-16 text-white w-[80vw] m-auto pt-3'>
                <div className='logo font-bold text-red-400 text-3xl'>
                    CollabSheet
                </div>
                <ul>
                    <li className='flex gap-4'>
                        <a className='hover:font-bold' href='#'>Login</a>
                        <a className='hover:font-bold' href='#'>Sign Up</a>
                    </li>
                </ul>
        </nav>
    </div>
  )
}

export default Navbar
