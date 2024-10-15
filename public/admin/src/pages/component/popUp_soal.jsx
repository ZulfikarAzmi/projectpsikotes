import React, { useState } from 'react'
import { FileInput, Label, Button } from "flowbite-react";
import axios from 'axios';

export default function PopUpSoal({ trigger, setTrigger, refreshData, getNextNumber }) {  
  const [soalFile, setSoalFile] = useState(null);
  const [jawabanFiles, setJawabanFiles] = useState([]);
  const [kunciFile, setKunciFile] = useState(null);
  const [val,setVal]=useState([]);

  const handleAdd=()=>{
    const abc=[...val,[]]
    setVal(abc)
  }

  const handleEdit=(onChangeValue,i)=>{
    const inputdata=[...val]
    inputdata[i]=onChangeValue.target.value;
    setVal(inputdata)
   }
   const handleDelete=(i)=>{
       const deletVal=[...val]
       deletVal.splice(i,1)
       setVal(deletVal)  
   }

  const handleSoalChange = (e) => {
    setSoalFile(e.target.files[0]);            //upload soal cuma bisa sekali
  };

  const handleJawabanChange = (e) => {
    setJawabanFiles(Array.from(e.target.files));  // Multiple jawaban as array
  };

  const handleKunciChange = (e) => {
    setKunciFile(e.target.files[0]);            //upload kunci jawaban cuma bisa sekali
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  const nextNumber = getNextNumber ? getNextNumber() : 1;  
  const newItem = {
    no: nextNumber,  // Assign random ID
    soal: soalFile?.name,
    jawaban: jawabanFiles.map(file => file.name),
    kunci_jawaban: kunciFile?.name
  };

    axios.post('http://localhost:3000/Subject', newItem)
      .then(response => {
        console.log("Data added successfully: ", response.data);
        refreshData();  // Refresh table data after submit
        setTrigger(false);  // Close popup after submission
      })
      .catch(err => console.error('Error posting data', err));
  };

  return (trigger) ? (
    <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50 '>
      <div className='relative p-8 w-full max-w-3xl bg-white rounded-2xl  
      max-h-[650px] overflow-y-auto
      [&::-webkit-scrollbar]:w-2
      [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100
      [&::-webkit-scrollbar-thumb]:rounded-full
      [&::-webkit-scrollbar-thumb]:bg-gray-400
      dark:[&::-webkit-scrollbar-track]:bg-neutral-700
      dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500'> 

        <form className='flex flex-col' onSubmit={handleSubmit}>
          <Label htmlFor="soal-upload" value="Soal" className='mt-4 text-base font-semibold font-inter'/>
          <input type="text" onChange={handleSoalChange} className='my-5 rounded-lg'/>
          <FileInput id="soal-upload" onChange={handleSoalChange} className='' helperText="PNG, JPG or JPEG"/>

          <hr className=' w-[600px] h-1 mx-auto bg-gray-700 border-0 rounded md:my-20 dark:bg-gray-100'/>

          <Label htmlFor="jawaban-upload" value="Jawaban" className='text-base font-semibold font-inter'/>
          {val.map((data,i)=>{
            return(
              <div className='flex'>
                <input type="text" value={data} onChange={e=>handleEdit(e,i)} className='my-5 rounded-lg w-full'/>
                <Button onClick={()=>handleDelete(i)} color="failure" className='h-10 mt-5 ml-2'>Cancel</Button>
              </div>
            )
          })}
          <button onClick={(e) => {e.preventDefault(); handleAdd();}}  className='w-full h-12 rounded-xl bg-gray-100 border-gray-300 border'>+ Add New Answer</button>
          <FileInput id="jawaban-upload" multiple onChange={handleJawabanChange} className='mt-5' helperText="PNG, JPG or JPEG"/>

          <hr className=' w-[600px] h-1 mx-auto bg-gray-700 border-0 rounded md:my-20 dark:bg-gray-100'/>

          <Label htmlFor="kunci-upload" value="Kunci Jawaban" className=' text-base font-semibold font-inter'/>
          <input type="text" className='my-5 rounded-lg'/>
          <FileInput id="kunci-upload" onChange={handleKunciChange} className='' helperText="PNG, JPG or JPEG"/>

          <hr className=' w-[600px] h-1 mx-auto bg-gray-700 border-0 rounded md:mt-20 dark:bg-gray-100'/>

          <div className='flex space-x-[500px] mt-5'>
            <button type='button' onClick={() => setTrigger(false)} className='bottom-4 mt-6 bg-gray-400 w-24 h-8 text-black rounded'>Batal</button>
            <button type='submit' className='bottom-4 mt-6 bg-black w-24 text-white rounded'>Tambah</button>
          </div>
        </form>
      </div>
    </div>  
  ) : "";
}
