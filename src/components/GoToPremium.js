import React from 'react'
import Crown from '../assets/crown.png'
import { useNavigate } from 'react-router-dom'

const GoToPremium = () => {
    const navigate = useNavigate()
  return (
    <div className='p-4 space-y-4'>
        <div className='text-center font-semibold'>
            Go to premium
        </div>
        <img src={Crown} width={120} height={50} />
        <div>
            <div className='font-semibold text-xl'>Need more features ?</div>
            <div className='text-lg text-gray-500 font-normal'>Update your account to premium to get more features</div>
        </div>
        <button onClick={() => navigate('/premium')} className='bg-main text-white p-2 w-full rounded-lg'>Get now</button>
    </div>
  )
}

export default GoToPremium