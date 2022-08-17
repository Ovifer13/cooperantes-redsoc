import { useState } from 'react'

import HamburgerButton from './HamburgerButton'

import { 
    LOGO, 
    NAV_ITEMS,
    ORGANIZACIONES_AFILIADAS_URL,
} from '../constants'
import { ORGANIZACIONES_AFILIADAS } from '../constants/strings'

const renderNavItems = () => {
    return (
        NAV_ITEMS.map((n, i) => {
            return (
                <a 
                    className='text-2xl font-bold my-4 text-primary md:mx-4 md:text-base md:text-solid-black md:my-0' 
                    href={n != ORGANIZACIONES_AFILIADAS ? n.toLowerCase().replace(' ', '-') : ORGANIZACIONES_AFILIADAS_URL} 
                    key={i}
                >
                    {n}
                </a>
            )
        })
    )
}

function MobileNav({open, setOpen}: any) {
    return (
        <div 
            className={`
                absolute top-0 bg-solid-white left-0 h-screen w-screen transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md
            `}
        >
            <div className="flex items-center justify-center filter drop-shadow-md h-30">
                <a href="/">
                    <img 
                        src={LOGO}
                        alt='Logo'
                    />
                </a>
            </div>
            <div className='flex flex-col ml-4'>
                { renderNavItems() }
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    
    return (
        <nav className='flex px-8 py-4 h-30 md:bg-solid-white md:px-24 xl:px-48'>
            <MobileNav open={open} setOpen={setOpen} />
            <div className='w-6/12 flex md:w-3/12'>
                <a href='/'>
                    <img 
                        src={LOGO}
                        alt='Logo'
                    />
                </a>
            </div>
            <div className="w-6/12 flex justify-end items-center md:w-9/12">
                <HamburgerButton 
                    open={open}
                    setOpen={setOpen}
                />
                <div className="hidden md:flex">
                    { renderNavItems() }
                </div>
            </div>
        </nav>
    )
}