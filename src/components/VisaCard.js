import React from 'react'
import VisaBg from '../assets/VISA.png'


const VisaCard = ({type = 'S', name = 'John Demon', cardNum = "**** 9838", expDate = "08/27"}) => {
  return (
    <div className='p-4 rounded-lg h-full text-white bg-cover' style={{backgroundImage: `url(${VisaBg})` }}>
        <div className='flex flex-col justify-between h-full'>
            <div className='text-3xl '>{type}</div>
            <div className='flex justify-between'>
                <div>
                    <p>{cardNum}</p>
                    <p>{name}</p>
                </div>
                <div>{expDate}</div>
            </div>
        </div>
    </div>
  )
}

export default VisaCard