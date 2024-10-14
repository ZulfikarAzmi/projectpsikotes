import React from 'react'
import { X } from "lucide-react"
import { useState } from 'react';

export default function PopUpSubject(props) {

  const [namaUjian, setNamaUjian] = useState('');
  const [timer, setTimer] = useState({ hours: '', minutes: '', seconds: '' });
  const [error, setError] = useState('');

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi timer agar hanya angka yang dimasukkan
    if (
      isNaN(timer.hours) ||
      isNaN(timer.minutes) ||
      isNaN(timer.seconds) ||
      timer.hours === '' ||
      timer.minutes === '' ||
      timer.seconds === ''
    ) {
      setError('Set Timer harus berupa angka dan tidak boleh kosong.');
    } else {
      setError('');
      console.log('Nama Ujian:', namaUjian);
      console.log('Set Timer:', timer);
      // Logika tambahan saat form di-submit
    }
  };
    

  return (props.trigger) ? (
    <div className='fixed inset-0 w-full h-screen bg-black bg-opacity-20 flex justify-center items-center z-50 '>
        <div className='relative p-8 w-full max-w-lg bg-white rounded-2xl'>

            <button className='absolute top-4 right-4' onClick={() => props.setTrigger(false)} ><X></X></button>
            {props.children} 

    
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-left">Nama Ujian</label>
            <input
              type="text"
              value={namaUjian}
              onChange={(e) => setNamaUjian(e.target.value)}
              className="w-full p-2 border rounded-lg bg-gray-200"
<<<<<<< HEAD
              placeholder="Nama Ujian"
=======
              placeholder="Ujian Pertama"
>>>>>>> eecb4bb862553de14765ab5cb1c9c4febb6e35e6
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-left">Set Timer</label>
            <div className="flex space-x-2">
              <input
                type="text"
                value={timer.hours}
                onChange={(e) => setTimer({ ...timer, hours: e.target.value })}
                className="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                placeholder="HH"
              />
              <span>:</span>
              <input
                type="text"
                value={timer.minutes}
                onChange={(e) => setTimer({ ...timer, minutes: e.target.value })}
                className="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                placeholder="MM"
              />
              <span>:</span>
              <input
                type="text"
                value={timer.seconds}
                onChange={(e) => setTimer({ ...timer, seconds: e.target.value })}
                className="w-12 p-2 border rounded-lg bg-gray-200 text-center"
                placeholder="SS"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-32 bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 ml-40">
            Buat
          </button>
        </form>
      </div>
    </div>

  ) : "";
}
