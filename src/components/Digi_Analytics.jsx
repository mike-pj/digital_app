import React from 'react'
import Analytics from '../assets/analytics.jpeg'

// [#00df9a]
function Digi_Analytics() {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={Analytics} alt="/" className='w-[90%] mx-auto' />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold pt-3 px-8'>DIGITAL DATA ANALYTICS DASHBOARD</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 px-8'>Manage Digital Data Analytics Centrally</h1>
                    <p className='px-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, reiciendis ut illum ab culpa corrupti asperiores. Incidunt, quasi consectetur, cumque nulla cum ratione ullam dicta numquam accusamus corporis dolorum repellendus!
                    </p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 md:ml-8'>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Digi_Analytics