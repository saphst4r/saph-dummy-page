import React from 'react';
import logo from '../images/white-logo-1024.png'

export default function Home() {
  return (
    <div>
        <section className='max-w-6xl mx-auto flex justify-center items-center flex-col'>
            <div className='mt-[200px]'>
                <img src={logo} alt="saph logo" className='justify-center item-center max-h-[540px]'/>
            </div> 

            <p className='text-white font-bold text-6xl mt-12'>SAPH.CO</p>
            <p className='text-white font-medium text-xl mt-6'>Hello to the bois in OG</p>
        </section>

    </div>
  )
}
