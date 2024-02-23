import React from 'react'
import { useNavigate } from 'react-router-dom'


const Menus = ({handleSelectMenu = () => {}, selectedMenu}) => {
  const navigate = useNavigate()
  return (
    <div className='bg-gray-100 rounded-full space-y-4 p-2'>
      <div 
        id='home'
        onClick={(e) => {
          handleSelectMenu(e.currentTarget.id)
          navigate('/')
        }} 
        className={`${selectedMenu == 'home' && 'bg-main text-white rounded-full px-2 pb-1 pt-2'} cursor-pointer text-center `}
      >
        <span className="material-symbols-rounded">
              home
        </span>
      </div>
      <div 
        id='notifications'
        onClick={(e) => {
          handleSelectMenu(e.currentTarget.id)
          navigate('/notifications')
        }}
        className={`${selectedMenu == 'notifications' && 'bg-main text-white rounded-full px-2 pb-1 pt-2'} cursor-pointer text-center `}>
        <span className="material-symbols-rounded">
            notifications
        </span>
      </div>
      <div 
        id='schedule'
        onClick={(e) => {
          handleSelectMenu(e.currentTarget.id)
          navigate('/schedule')
        }}
        className={`${selectedMenu == 'schedule' && 'bg-main text-white rounded-full px-2 pb-1 pt-2'} cursor-pointer text-center `}
      >
        <span className="material-symbols-rounded text-center">
            schedule
        </span>
      </div>
      <div 
        id='group'
        onClick={(e) => {
          handleSelectMenu(e.currentTarget.id)
          navigate('/group')
        }}
        className={`${selectedMenu == 'group' && 'bg-main text-white rounded-full px-2 pb-1 pt-2'} cursor-pointer text-center `}
      >
        <span className="material-symbols-rounded text-center">
            group
        </span>
      </div>
      <div 
        id='wallet'
        onClick={(e) => {
          handleSelectMenu(e.currentTarget.id)
          navigate('/wallet')
        }}
        className={`${selectedMenu == 'wallet' && 'bg-main text-white rounded-full px-2 pb-1 pt-2'} cursor-pointer text-center `}
      >
        <span className="material-symbols-rounded text-center">
            wallet
        </span>
      </div>
      <div 
        id='settings'
        onClick={(e) => {
          handleSelectMenu(e.currentTarget.id)
          navigate('/settings')
        }}
        className={`${selectedMenu == 'settings' && 'bg-main text-white rounded-full px-2 pb-1 pt-2'} cursor-pointer text-center `}
      >
        <span className="material-symbols-rounded text-center">
            settings
        </span>
      </div>
    </div>
  )
}

export default Menus
