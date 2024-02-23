import React from 'react'
import Avatar from '../assets/avatar-user.png'
import Receiver from '../assets/receiver-avatar.png'
import TextArea from '../molekul/TextArea'


const ChatRoom = ({receiver = 'Esther Howard'}) => {
  return (
    <div className='p-4 h-full'>
        <div className='flex flex-col justify-between h-full'>
            <div className='font-semibold'>{receiver}</div>
            <div>
                <div className='flex justify-end mb-2'>
                    <div className='text-white p-2 mr-1 bg-main rounded-s-xl rounded-t-xl'>Are you ready ?</div>
                    <img src={Avatar} height={20} width={40} alt='user-avatar' />
                </div>
                <div className='flex justify-start mb-3'>
                    <img src={Receiver} height={20} width={40} alt='receiver-avatar' />
                    <div className='text-black p-2 ml-1 bg-gray-100 rounded-br-xl rounded-t-xl'>I have prepared everything</div>
                </div>
            </div>
            <div>
                <TextArea />
            </div>
        </div>
    </div>
  )
}

export default ChatRoom