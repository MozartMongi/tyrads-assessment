import React from 'react'
import Trx from '../molekul/Trx'

const LastTrx = () => {
    const listTrx = [
        {"name" : "Bessie Cooper", "fund": 3100, "date": "03 July 2023" },
        {"name" : "Guy Hawkin", "fund": 2210, "date": "02 July 2023"},
        {"name" : "Floyd Miles", "fund": 3910, "date": "02 July 2023"},
        {"name" : "James Vop", "fund": 1152, "date": "01 July 2023"},
        {"name" : "Bratt Clint", "fund": 3100, "date": "01 July 2023"}
    ]
  return (
    <div className='p-4'>
        <div className='flex space-x-4 mb-2'>
            <div className='font-semibold flex-1'>Last transactions</div>
            <div className='cursor-pointer' onClick={() => alert('not develop yet')}>Newest</div>
            <div className='cursor-pointer' onClick={() => alert('not develop yet')}>Oldest</div>
        </div>
        {listTrx.map((trx, i) => {
            return <Trx name={trx.name} date={trx.date} fund={trx.fund} />
        })}
    </div>
  )
}

export default LastTrx