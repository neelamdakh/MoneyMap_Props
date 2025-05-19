import React, { useEffect, useState } from 'react'

const Form = ({ addTransaction, Edit  ,updateTransaction }) => {

    const [Amount, setAmount] = useState();
    const [Type, setType] = useState();
    const [Description, setDescription] = useState();
    const [Date, setDate] = useState();
    
    useEffect(() => {
        console.log(Edit.Transactions)
        setAmount(Edit.Transactions.Amount);
        setType(Edit.Transactions.Type)
        setDescription(Edit.Transactions.Description)
        setDate(Edit.Transactions.Date)
    }, [Edit])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Edit.isEdit==true)
        {
            updateTransaction({id: Edit.Transactions.id, Amount, Type, Description, Date})
        }
        else 
        {
        addTransaction({ id: crypto.randomUUID(), Amount:parseInt(Amount), Type, Description, Date })
        }
        setAmount("");
        setType("");
        setDescription("");
        setDate("");
    }

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 h-100 bg-gray-300 p-8 m-4 shadow-xl rounded-sm '>
                <select value={Type} onChange={(e) => setType(e.target.value)} required className='border-b outline-none p-2'  >
                    <option className='bg-gray-300' value="Select Type">Select Type</option>
                    <option className='bg-gray-300' value="Income">Income</option>
                    <option className='bg-gray-300' value="Expense">Expense</option>
                </select>
                <input value={Amount} onChange={(e) => setAmount(e.target.value)} className='border-b p-2 outline-none' required placeholder='Enter Amount' type='number'></input>
                <textarea value={Description} onChange={(e) => setDescription(e.target.value)} className='border-b p-2 outline-none' required placeholder='Enter Description' />
                <input value={Date} onChange={(e) => setDate(e.target.value)} className='border-b p-2 outline-none' placeholder='Enter Date' type='date'></input>
                <button className='bg-teal-700 p-3 mt-4  hover:bg-teal-800 cursor-pointer text-white text-lg font-medium rounded-sm'>Save</button>
            </form>
        </>
    )
}

export default Form
