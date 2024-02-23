import React from 'react'

const Trx = ({name, date, fund}) => {
  return (
    <div className='flex justify-between border-t-2 py-4'>
        <div>
            <div>{name}</div>
            <div>{date}</div>
        </div>
        <div>${fund}</div>
    </div>
  )
}

export default Trx