import React from 'react'
import OnlineStore from '../assets/online-shopping.png'
import Hospital from '../assets/hospital.png'
import Tickets from '../assets/tickets.png'
import Spending from '../molekul/Spending'
import { useNavigate } from 'react-router-dom'

const LatestSpending = () => {
    const navigate = useNavigate()
    const listSpending = [
        {name: 'Online store', date: 'Jan 10, 2024', icon: OnlineStore},
        {name: 'Pay the hospital', date: 'Jan 21, 2024', icon: Hospital},
        {name: 'Tickets', date: 'Jan 27, 2024', icon: Tickets}

    ]
  return (
    <div className='p-4'>
        <div className='font-semibold mb-3'>Latest spending</div>
        {listSpending.slice(0, 3).map((item, i) => {
            return <Spending name={item.name} date={item.date} icon={item.icon} key={i} />
        })}

        <div onClick={() => alert('view all latest spending')} className=' cursor-pointer text-center text-main text-sm mt-8 items-center'>View all <span className=' text-sm material-symbols-rounded'>arrow_forward</span></div>
    </div>
  )
}

export default LatestSpending