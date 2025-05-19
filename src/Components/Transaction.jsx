import React from 'react'

import TransactionListItem from './TransactionListItem';

const Transaction = ({TransactionArray,removeTransaction,editTransaction}) => {
  
  return (
    <>
        <div className='bg-gray-300 p-8 m-4 shadow-xl rounded-sm'>
          <h1 className='text-lg font-bold text-center text-teal-800 uppercase'>Transactions</h1>
          <table className='w-full h-40 bg-gray-300 p-8 m-4 inset-shadow-sm inset-shadow-gray-400 border-collapse  border border-gray-300 rounded-sm'>
            <thead className='bg-teal-700 h-14 text-white text-center'>
              <tr>
                <th >Title</th>
                <th >Amount</th>
                <th >Description</th>
                <th >Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='bg-gray-300 text-center'>
             {/* <TransactionListItem TransactionArray={TransactionArray} /> */}
             {
              TransactionArray.map((TransactionItem)=>  
                { 
                return  <TransactionListItem TransactionItem={TransactionItem}  key ={TransactionItem.id}
                removeTransaction={removeTransaction} editTransaction={editTransaction}/>
                })
             }
              
            </tbody>
          </table>
        </div>
    </>
  )
}

export default Transaction
