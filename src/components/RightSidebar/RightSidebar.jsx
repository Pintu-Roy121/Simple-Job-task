import React from 'react';
import profile from '../../images/Ellipse 1.png'
import icon from '../../images/icon.png'
import home from '../../images/Group 33509.png'
import gas from '../../images/Group 33497 (1).png'
import security from '../../images/Group 33509 (2).png'
import videos from '../../images/Group 33509 (3).png'
import game from '../../images/Group 33509 (4).png'
import papers from '../../images/Group 33509 (5).png'
import shop from '../../images/Group 33509 (6).png'
import travel from '../../images/Group 33509 (7).png'
import service from '../../images/Group 33509 (8).png'
import elec from '../../images/Group 33509 (9).png'
import festival from '../../images/Group 33509 (10).png'
import carS from '../../images/Group 33509 (11).png'
import control from '../../images/Category icon (3).png'
import sHome from '../../images/Category icon (1).png'
import car from '../../images/Category icon (2).png'
import notify from '../../images/Group 33502.png'
import SampleChart from '../SampleChart/SampleChart';

const RightSidebar = () => {
    return (
        <div className=' w-full px-10 bg-[#F5F5F5]'>
            <div className='mt-5 flex gap-6 items-center justify-end'>
                <button className="btn btn-warning text-white mr-3">+ Add Expense</button>
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src={profile} alt='' />
                    </div>
                </div>
                <img className='w-8' src={icon} alt="" />
            </div>

            <div className='mb-16'>
                <div className='flex justify-between mt-8'>
                    {/* Left side ---------- */}
                    <div>
                        <div className='flex justify-between gap-32 mb-10'>
                            <div>
                                <h1 className='text-3xl font-bold'>This week spend</h1>
                                <div className='flex gap-2 mt-4'>
                                    <img src={control} alt="" />
                                    <img src={sHome} alt="" />
                                    <img src={car} alt="" />
                                </div>
                                <img className='ml-9' src={notify} alt="" />
                            </div>
                            <div className='bg-white rounded-2xl p-4 flex flex-col justify-center items-center '>
                                <h1 className='text-4xl font-bold mb-2'>$540</h1>
                                <p className='text-sm'>Total Spend</p>
                            </div>
                        </div>
                        <SampleChart className='mt-10' />
                    </div>
                    {/* Right side--------- */}
                    <div className='w-96 bg-white rounded-lg py-8 px-5'>
                        <h1 className='text-lg font-medium'>Category</h1>
                        <hr className='border my-4' />
                        <div className='grid grid-cols-3 gap-5 mt-5'>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={home} alt="" />
                                <p className='text-center'>Home</p>
                            </div>

                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={gas} alt="" />
                                <p className='text-center'>Gas</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={security} alt="" />
                                <p className='text-center'>Security</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={videos} alt="" />
                                <p className='text-center'>Videos</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={game} alt="" />
                                <p className='text-center'>Game</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={papers} alt="" />
                                <p className='text-center'>papers</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={shop} alt="" />
                                <p className='text-center'>Shops</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={travel} alt="" />
                                <p className='text-center'>Travel</p>
                            </div>
                            <div className='p-3 bg-slate-100 rounded-lg flex gap-1 flex-col justify-center items-center'>
                                <img className='w-14' src={service} alt="" />
                                <p className='text-center'>Service</p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className='my-16'>
                <div className='flex justify-between'>
                    <div>
                        <h1 className='text-2xl font-bold'>Last Month Activities</h1>
                        <p>Monthly Activities</p>
                    </div>
                    <p className='text-lg font-bold'>View All</p>
                </div>
                <hr className='border my-4' />
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th className='text-gray-400'>categories Names</th>
                                <th className='text-gray-400'>Transactions</th>
                                <th className='text-gray-400'>Date</th>
                                <th className='text-gray-400'>Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={elec} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#452F02]">Home Electricity Bill</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-success font-medium'>Successful</p>
                                </td>
                                <td className='text-[#452F02] text-lg'>27 / 10 /2021</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs text-[#452F02] text-xl font-semibold">$540</button>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={festival} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#452F02]">Festival Shopping</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-success font-medium'>Successful</p>
                                </td>
                                <td className='text-[#452F02] text-lg'>27 / 10 /2021</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs text-[#452F02] text-xl font-semibold">$540</button>
                                </th>
                            </tr>
                            <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={carS} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#452F02]">Car Services</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className='text-success font-medium'>Successful</p>
                                </td>
                                <td className='text-[#452F02] text-lg'>27 / 10 /2021</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs text-[#452F02] text-xl font-semibold">$540</button>
                                </th>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;