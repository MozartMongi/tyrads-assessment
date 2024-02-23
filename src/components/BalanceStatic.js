import React from 'react'
import Coins from '../assets/coins.png'
import LineChart from '../molekul/LineChart'
import BarChart from '../molekul/BarChart'

const BalanceStatic = ({balance = 564}) => {
  return (
    <div className='grid grid-cols-12 w-full p-3'>
        <div className='col-span-3 space-y-1'>
            <p className='text-sm'>Balance statics</p>
            <h3 className='font-semibold text-3xl'>${balance}</h3>
            <div className='flex flex-row justify-between pb-2 border-b border-b-gray-300'>
                <div>
                    <img src={Coins} width={40} height={15} alt='coins' />

                </div>
                <div className=' ml-2 text-[10px] font-light'>Your total balance</div>
            </div>
            <div>
                <LineChart />
                <p className='text-[10px] font-light text-gray-400'>Always see your earnings updates</p>
            </div>
        </div>
        <div className='col-span-9 pt-4 pl-2'>
            <BarChart />
        </div>
        
    </div>
  )
}

export default BalanceStatic