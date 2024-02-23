import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menus from '../molekul/menus'
import avatar from '../assets/avatar-user.png'

const Navbar = ({type = 'S'}) => {
    const navigate = useNavigate()
    const [selectMenu, setSelectMenu] = useState('home')
    const handleSelect = (val) => {
        setSelectMenu(val)
        console.log('val >>', val)
    }


  return (
    <div className='bg-white p-6 fixed' >
        <div className='text-3xl text-center'>
            {type}
        </div>
        <div className='mt-8 bg-orange-200 px-2 pt-2 pb-[2px] rounded-full cursor-pointer text-center' onClick={() => alert('Chat room not available yet')}>
            <span className="material-symbols-rounded text-3xl font-light">
                forum
            </span>
        </div>
        <div className='my-40'></div>
        <div className=''>
            <Menus handleSelectMenu={handleSelect} selectedMenu={selectMenu} />
        </div>
        <div className='my-24'></div>
        <div className='mb-8'>
            <div className='flex flex-col justify-center items-center'>
                <img src={avatar} width={45} height={45} alt='avatar' className='z-10' />
                <div onClick={() => alert('LOGOUT')} className='bg-gray-200 rounded-full px-2 pt-2 -mt-3 z-0 cursor-pointer'>
                    <span className="material-symbols-rounded text-3xl">
                        logout
                    </span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar