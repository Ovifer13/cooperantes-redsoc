import React from 'react'

const Hero = ({}) => {
    return (
        <div className='Hero grid grid-cols-1 md:grid-cols-2'>
            <div className='grid grid-rows-2 px-2 lg:px-4'>
                <div className=''>
                    <h1 className=''>
                        { 'Text1' }
                    </h1>
                    <h1 className=''>
                        { 'Text2' }
                    </h1>
                </div>
                <div className='mt-8 xl:mt-0'>
                    <p>
                        { 'Text3' }
                    </p>
                </div>
            </div>
            <div className='grid px-2 lg:px-4 max-w-md md:max-w-lg place-content-center mt-12 md:mt-0 m-auto'>
                <img src='/' alt='Hero' />
            </div>
        </div>
    )
}

export default Hero