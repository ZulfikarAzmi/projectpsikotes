import React from 'react'
import { Label, TextInput, Datepicker, Dropdown   } from "flowbite-react";


export default function PopUpUjian(props) {
  return (props.trigger) ? (
    <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50 '>
    <div className='relative p-8 w-full max-w-lg bg-white rounded-2xl'> 

    <form>
        <div className='mb-4'>
            <div className="mb-2 block font-inter">
            <Label htmlFor="base" value="Nama" />
            </div>
            <TextInput id="base" type="text" sizing="md" />
        </div>
        <div className='mb-2 font-inter text-sm'>
            Tanggal
        </div>
        <Datepicker />
        

        <div className="my-4 bg-gray-100 border-gray-300 border w-24 rounded-xl">
            <Dropdown label="Status" dismissOnClick={false} color={"white"}>
                <Dropdown.Item>On</Dropdown.Item>
                <Dropdown.Item>Off</Dropdown.Item>
            </Dropdown>
        </div>

        <div className='mb-8 bg-gray-100 border-gray-300 border w-24 rounded-xl'>
            <Dropdown label="Subject" dismissOnClick={false} color={"white"}>
                <Dropdown.Item>Subject 1</Dropdown.Item>
                <Dropdown.Item>Subject 2</Dropdown.Item>
                <Dropdown.Item>Subject 3</Dropdown.Item>
            </Dropdown>
        </div>
        



        
    <div className='space-x-64'>
        <button onClick={() => props.setTrigger(false)} className='bg-gray-400 w-24 h-8 text-black font-inter rounded text-center '>
            cancel
        </button>

        <button type='submit' className='bg-gray-400 w-24 h-8 font-inter text-black rounded text-center '>
            Tambah
        </button>
    </div>
        

    </form>
    
    </div>
    </div>
  ) :''
}
