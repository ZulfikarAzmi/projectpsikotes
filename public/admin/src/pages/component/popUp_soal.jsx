import React from 'react'
import { FileInput, Label } from "flowbite-react";


export default function PopUpSoal(props) {
  return (props.trigger) ? (
  <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50 '>
    <div className='relative p-8 w-full max-w-lg bg-white rounded-2xl'> 
      <form className='flex flex-col'>
        <Label htmlFor="multiple-file-upload" value="Soal" className='mt-4 text-lg'/>
        <FileInput id="multiple-file-upload" multiple className='mt-1'/>

        <Label htmlFor="multiple-file-upload" value="Jawaban" className='mt-4 text-lg'/>
        <FileInput id="multiple-file-upload" multiple className='mt-1'/>

        <Label htmlFor="multiple-file-upload" value="Kunci" className='mt-4 text-lg'/>
        <FileInput id="multiple-file-upload" multiple className='mt-1'/>
      </form>

      <div className='flex space-x-72'>
        <button onClick={() => props.setTrigger(false)} className='bottom-4 mt-6 bg-gray-400 w-24 h-8 text-black rounded'>Batal</button>
        <button type='submit' className='bottom-4 mt-6 bg-black w-24 text-white rounded'>Tambah</button>
      </div>
      
      {props.children} 
    </div>
  </div>  
  ) :""
}
