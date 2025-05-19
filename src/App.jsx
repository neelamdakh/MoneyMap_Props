import React, { useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import Form from './Components/Form.jsx'
import Balance from './Components/Balance.jsx'
import Transaction from './Components/Transaction.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {

  const [TransactionArray, setTransactionArray] = useState([]);

  const [Edit, setEdit] = useState({
    Transactions: {},
    isEdit: false
  })

  //  remove transaction
  const removeTransaction = (id) => {
    setTransactionArray(TransactionArray.filter(item => item.id !== id))
  }

  // add transaction
  const addTransaction = (newTransaction) => {
    setTransactionArray([newTransaction, ...TransactionArray])
  }

  //edit Transaction

  const editTransaction = (oldTransaction) => {
    setEdit({
      Transactions: oldTransaction,
      isEdit: true
    })
  }
   // update transaction

    const updateTransaction = (updated) => {
      console.log(updated)
      setTransactionArray(TransactionArray.map(item=>item.id==updated.id? updated : item))
      console.log(TransactionArray)
    }

  return (
    <>
      <div className='min-h-auto w-full bg-zinc-200 box-border m-0 p-0'>
        <Navbar />
        <Form addTransaction={addTransaction} Edit={Edit} updateTransaction={ updateTransaction}  />
        <Balance TransactionArray={TransactionArray} />
        <Transaction TransactionArray={TransactionArray} removeTransaction={removeTransaction} editTransaction={editTransaction} />
        <Footer />


      </div>



    </>
  )
}

export default App
