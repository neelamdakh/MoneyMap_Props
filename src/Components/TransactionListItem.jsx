import React from 'react'
import { SquarePen, Trash2 } from 'lucide-react';

const TransactionListItem = ({TransactionItem,removeTransaction,editTransaction}) => {
  return (
    <>
     <tr className='border-b-3 border-gray-200 p-4 h-14' >
                <td >{TransactionItem.Type}</td>
                <td >₹{TransactionItem.Amount}</td>
                <td >{TransactionItem.Description}</td>
                <td >{TransactionItem.Date}</td>
                <td><button className='mr-2 cursor-pointer' onClick={()=>editTransaction(TransactionItem)}> <SquarePen color="#034f1a" /></button>
                  <button className='cursor-pointer ' onClick={()=>removeTransaction(TransactionItem.id)}><Trash2 color="#ed0707" /></button>
                </td>
              </tr>
    </>
  )
}

export default TransactionListItem
