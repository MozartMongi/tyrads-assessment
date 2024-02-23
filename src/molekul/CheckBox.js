import React from 'react'

const CheckBox = ({label, inputId, selectItem = () => {}}) => {
  return (
    <div  className="flex items-center mb-4 bg-gray-100 p-2 rounded-xl">
        <input onClick={() => selectItem(inputId)} id={inputId} type="checkbox" value="" className="w-4 h-4 text-main bg-gray-100 border-gray-300 rounded focus:ring-main dark:focus:ring-main dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label  className="ms-2 text-sm font-medium text-gray-900 dark:text-black">{label}</label>
    </div>
  )
}

export default CheckBox