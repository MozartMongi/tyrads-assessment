import React, { useState } from 'react'
import BalanceStatic from '../components/BalanceStatic'
import VisaCard from '../components/VisaCard'
import ListItemToBuy from '../components/ListItemToBuy'
import ChatRoom from '../components/ChatRoom'
import LastTrx from '../components/LastTrx'
import GaugeChart from 'react-gauge-chart'
import Analytics from '../components/Analytics'
import ExpenseIncome from '../components/ExpenseIncome'
import LatestSpending from '../components/LatestSpending'
import GoToPremium from '../components/GoToPremium'


const Home = () => {
    const [dataUser, setDataUser] = useState({name: "John Demon"})
    
  return (
    <div className='grid grid-cols-10 ml-[104px]'>
        <div className='col-span-7 p-8 bg-gray-100 space-y-8'>
            <div className='flex flex-row justify-between'>
                <div>
                    <div className='text-2xl font-semibold'>Hello, {dataUser.name}</div>
                    <p>View and control your finance here!</p>
                </div>
                <div className=''>
                    <span className='bg-white rounded-full p-1 material-symbols-rounded'>
                        search
                    </span> 
                </div>
            </div>
            <div className='grid grid-cols-12 gap-5'>
                <div className='col-span-7 bg-white rounded-lg'>
                    <BalanceStatic />
                </div>
                <div className='col-span-5 rounded-lg'>
                    <VisaCard />
                </div>
            </div>
            <div className='grid grid-cols-12 gap-2'>
                <div className='col-span-6 bg-white rounded-lg'>
                    <ListItemToBuy handleAdditem={() => alert('coming soon')} />
                </div>
                <div className='col-span-6 bg-white rounded-lg'>
                    <ChatRoom />
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-8 max-h-72 overflow-y-scroll bg-white rounded-lg'>
                    <LastTrx />
                </div>
                <div className='col-span-4 bg-white rounded-lg p-4'>
                    <Analytics />
                </div>
            </div>
        </div>
        <div className='col-span-3 bg-white p-4 space-y-4'>
            <div className='bg-white border-2 rounded-lg'>
                <ExpenseIncome />
            </div>
            <div className='bg-white border-2 rounded-lg'>
                <LatestSpending />
            </div>
            <div className='bg-white border-2 rounded-lg'>
                <GoToPremium />
            </div>
        </div>

    </div>
  )
}

export default Home