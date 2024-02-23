import React from 'react'

const Spending = ({name, date, icon}) => {
  return (
    <div className='py-3 border-b-2 flex space-x-5'>
        <img src={icon} width={45} height={1} />
        <div>
            <div>{name}</div>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Spending