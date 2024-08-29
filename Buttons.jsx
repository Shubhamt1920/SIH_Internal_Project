import React from 'react'

const Buttons = () => {
  return (
    <div className='flex justify-center items-center h-5 gap-4'>
        <button className='border border-black p-1 w-16 flex justify-center items-center font-semibold bg-green-500 rounded-md'>Create</button>
        <button className='border border-black p-1 w-16 flex justify-center items-center font-semibold bg-green-500 rounded-md'>Edit</button>
    </div>
  )
}

export default Buttons
