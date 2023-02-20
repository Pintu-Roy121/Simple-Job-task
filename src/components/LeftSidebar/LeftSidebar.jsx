import React from 'react';

import balancebg from '../../images/current Balance.png'
import wallet from '../../images/Wallet.png'
import antivirus from '../../images/Group 33497.png'
import refilled from '../../images/Group 33497 (1).png'

const LeftSidebar = () => {
    return (
        <div className='px-10 bg-[#FFFBF3]'>
            <h1 className='text-3xl font-bold text-[#452F02] mt-5'>Kösten</h1>
            <p className='text-lg text-[#452F02]'>Expense manager</p>
            <div className='mt-10 relative'>
                <img className='w-96' src={balancebg} alt="" />
                <h1 className='uppercase absolute top-2 left-4 tracking-wide text-lg font-semibold'>Current Balance</h1>

                <div className='absolute top-12 left-5 flex items-center gap-5'>
                    <img className='w-14' src={wallet} alt="" />
                    <div >
                        <h1 className='text-3xl font-bold'>$55,569</h1>
                        <p className='text-lg font-medium'>Total Expense</p>
                    </div>
                </div>
                <div className='my-10'>
                    <h1 className='my-3 font-medium tracking-widest uppercase text-[#EB001B]'>Latest Activity</h1>
                    <hr className='border' />
                    <p className='text-center text-gray-400 my-2'>Today</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5 items-center'>
                            <img className='w-14' src={antivirus} alt="" />
                            <h1 className='font-semibold'>Antivirus</h1>
                        </div>
                        <p className='text-2xl font-bold text-[#EB001B]'>-$500</p>
                    </div>
                    <hr className='border my-4' />
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5 items-center'>
                            <img className='w-14' src={refilled} alt="" />
                            <h1 className='font-semibold'>Re-filled</h1>
                        </div>
                        <p className='text-2xl font-bold text-[#EB001B]'>-$200</p>
                    </div>

                    <p className='text-center text-gray-400 my-2'>Yesterday</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-5 items-center'>
                            <img className='w-14' src={antivirus} alt="" />
                            <h1 className='font-semibold'>IP Cams</h1>
                        </div>
                        <p className='text-2xl font-bold text-[#EB001B]'>-$300</p>
                    </div>
                    <hr className='border my-4' />
                </div>

            </div>
        </div>
    );
};

export default LeftSidebar;