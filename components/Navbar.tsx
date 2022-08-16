import { useState } from 'react'

import { LOGO } from '../constants'

export default function Navbar() {

    const [open, setOpen] = useState(false)
    
    return (
        <nav className='flex px-8 py-4 h-30 md:bg-solid-white md:px-24 xl:px-48'>
            <div className='w-6/12 flex'>
                <img 
                    className='w-44'
                    src={LOGO}
                    alt='Logo'
                />
            </div>
        </nav>
    )
}