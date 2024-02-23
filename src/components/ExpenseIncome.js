import React from 'react'

const ExpenseIncome = ({income = {percentage: '30%', total: '2.656'}, expense = {percentage: '70%', total: '5.653'}}) => {
  return (
    <div className='p-4'>
        <div className='font-semibold mb-3'>Expense and income</div>
        <div className='flex justify-between items-center'>
            <div>
                <div className='text-sm'>Expense</div>
                <div className='text-xl font-semibold'>{expense.percentage}</div>
                <div className='text-xs font-light'>{expense.total}</div>
            </div>
            <div className='font-semibold'>VS</div>
            <div>
                <div className='text-sm'>Income</div>
                <div className='text-xl font-semibold'>{income.percentage}</div>
                <div className='text-xs font-light'>{income.total}</div>
            </div>
        </div>
        <div className='grid grid-cols-10 gap-1 mt-5'>
            <div className={` col-span-${expense.percentage[0]} bg-main h-8 rounded-lg`}></div>
            <div className={`col-span-${income.percentage[0]} bg-orange-400 h-8 rounded-lg`}></div>
        </div>
    </div>
  )
}

export default ExpenseIncome