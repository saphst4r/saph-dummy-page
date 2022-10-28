import React from 'react';
import logo from '../images/white-logo-1024.png'

export default function Home() {
  return (
    <div>
        <section className='flex justify-center items-center flex-col fixed left-0 right-0 bottom-0 top-0'>
            <div className='mt-12 md:mt-20'>
                <img src={logo} alt="saph logo" className='justify-center item-center md:max-h-[540px] max-h-[280px]'/>
            </div> 

            <h1 className='text-white font-md text-5xl md:text-[90px] mt-6 md:mt-10'>SAPH.CO</h1>
            <p className='text-white text-md mt-2 md:mt-6'>Hello to the bois in OG</p>
        </section>

    </div>
  )
}
