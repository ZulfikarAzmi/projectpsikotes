import React from 'react'

export default function PopUpUjian(props) {
  return (props.trigger) ? (
    <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50 '>
    <div className='relative p-8 w-full max-w-lg bg-white rounded-2xl'> 
      <button onClick={() => props.setTrigger(false)} className='bg-gray-400 w-24 h-8 text-black rounded'>
        cancel
      </button>
    </div>
    </div>
  ) :''
}
