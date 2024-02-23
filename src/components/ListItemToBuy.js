import React, { useState } from 'react'
import CheckBox from '../molekul/CheckBox'

const ListItemToBuy = ({
    start = {time : '02:00', date : "Sat, August 23"}, 
    end = {time : '05:00', date : 'Sat, February 24'},
    listItem = [
        {name: 'MacBook'},
        {name: 'Bicycle'},
        {name: 'Motorcycle'},
        {name: 'Iphone 14 Pro'},
        {name: 'Books'},
    ],
    handleAdditem = () => {}
}) => {
    const [selectedItem, setSelectedItem] = useState([])

    const handleSelectItem = (item) => {
        if(selectedItem.includes(item)){
            let currentSelected = selectedItem
            currentSelected = currentSelected.filter(i => {
                return i !== item
            })
            setSelectedItem(currentSelected)
        } else {
            setSelectedItem(prev => [...prev, item])
        }
    }
  return (
    <div className='p-3'>
        <div className='font-semibold'>List of items to buy</div>
        <div className='flex items-center my-3 space-x-4'>
            <div>
                <div className='text-2xl font-semibold'>{start.time}</div>
                <p className='text-xs font-light'>{start.date}</p>
            </div>
            <span className="material-symbols-rounded text-xl">
                chevron_right
            </span>
            <div>
                <div className='text-2xl font-semibold'>{end.time}</div>
                <p className='text-xs font-light'>{end.date}</p>
            </div>
        </div>
        <div className='flex justify-between pr-7 mb-2 font-semibold text-sm'>
            <div>
                <span className='font-light text-gray-500'>{selectedItem.length}/{listItem.length}</span> Shopping list
            </div>
            <div onClick={handleAdditem} className='cursor-pointer'>+ Add an item</div>
        </div>
        <div className='flex flex-wrap'>
            {listItem.map((item, i) => {
                return (
                    <div className='mr-3'>
                        <CheckBox selectItem={handleSelectItem} key={i} label={item.name} inputId={item.name+i} /> 
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ListItemToBuy