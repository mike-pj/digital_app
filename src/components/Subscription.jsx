import React from 'react'
import { FaUser, FaUserFriends,  FaUsers } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";



{/* <FaUser />, <FaUserFriends />, <FaUsers />,  <MdAttachMoney /> */}

function Subscription() {
  return (
    <div className='w-full py-[10rem] px-8 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <div className='relative w-20 mx-auto mt-[-2rem] bg-white'>
                    <i className='text-5xl'><FaUser /></i>
                    <i className='absolute top-1/2 -translate-y-9 left-[40px] text-[40px] text-slate-500'><MdAttachMoney /></i>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-4xl font-bold text-center'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8'>1 Granted User</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <div className='relative w-20 mx-auto mt-[-3rem] bg-transparent'>
                    <i className='text-6xl'><FaUserFriends /></i>
                    <i className='absolute top-1/2 -translate-y-9 left-[49px] text-[40px] text-slate-500'><MdAttachMoney /></i>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-4xl font-bold text-center'>$199</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8'>3 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 10 GB</p>
                </div>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 '>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <div className='relative w-20 mx-auto mt-[-2rem] bg-white'>
                    <i className='text-5xl'> <FaUsers /></i>
                    <i className='absolute top-1/2 -translate-y-9 left-[40px] text-[40px] text-slate-500'><MdAttachMoney /></i>
                </div>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-4xl font-bold text-center'>$299</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8'>10 Users Allowed</p>
                    <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Subscription