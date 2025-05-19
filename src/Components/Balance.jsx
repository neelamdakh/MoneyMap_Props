import React from 'react'

const Balance = ({TransactionArray}) => {

  const TotalIncome = TransactionArray.filter((trans)=>trans.Type === "Income").reduce((a,c)=>a+c.Amount,0)
  const TotalExpense = TransactionArray.filter((trans)=>trans.Type === "Expense").reduce((a,c)=>a+c.Amount,0)
  const Balance = TotalIncome-TotalExpense;
  console.log(TotalIncome)
  return (
    <>
     <div className='bg-gray-300 p-8 m-4 shadow-xl rounded-sm'>
          <h1 className='text-lg font-bold text-center text-teal-800'>BALANCE</h1>
          <div className='grid grid-cols-1 rounded-sm gap-x-8 gap-y-4 md:grid-cols-3  bg-gray-300 p-8 m-4 inset-shadow-sm inset-shadow-gray-400 '>

            <div className=' h-25  bg-[#A3D1C6] p-4 text-center text-blue-800 rounded-sm  '>
              <h1 className='text-lg font-bold '>Balance </h1>
              <p className='mt-2 text-base font-medium'> ₹ {Balance}</p>
            </div>
            <div className=' h-25  bg-[#A3D1C6] p-2 text-center  text-green-800 rounded-sm'>
              <h1 className='text-lg font-bold '>Income </h1>
              <p className='mt-2 text-base font-medium'> ₹ {TotalIncome}</p>
            </div>
            <div className=' h-25  bg-[#A3D1C6] p-2 text-center text-red-700  rounded-sm' >
              <h1 className='text-lg font-bold '>Expenses </h1>
              <p className='mt-2 text-base font-medium'> ₹ {TotalExpense}</p>
            </div>
          </div>
          </div>
    </>
  )
}

export default Balance
