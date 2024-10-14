import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Menu, LogOut, FileText, ChevronLeft } from 'lucide-react';

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen bg-white text-gray-900 flex`}>
      <nav className={`flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} bg-blue-400 rounded-r-2xl`}>
        <button className="w-full py-3 px-4 flex items-center justify-between hover:bg-blue-300 transition-colors duration-200" onClick={toggleSidebar}>
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-3 text-white"/>
            {isOpen && <span className="text-lg font-medium text-white">Menu</span>}
          </div>
          {isOpen && <ChevronLeft className="w-5 h-5 text-white" />}
        </button>

        <Link to="/soal" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
          <FileText className="w-6 h-6 mr-3 text-white"/>
          {isOpen && <span className="text-white">Soal</span>}
        </Link>

        <div className="mt-auto">
          <Link to="/registration" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
            <LogOut className="w-6 h-6 mr-3 text-white"/>
            {isOpen && <span className="text-white">Logout</span>}
          </Link>
        </div>
      </nav>

      <div className="bg-white flex-grow flex justify-center items-center">
        <div className="bg-white mr-16 rounded-lg shadow-2xl p-12 w-[70%] max-w-[800px]">
          <h2 className="text-2xl mb-8 font-bold text-left">Input Data Diri</h2>
          <form className="space-y-6">
            
            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Nama Peserta</label>
              <input type="text" placeholder="Nama Peserta" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full"/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Deskripsi</label>
              <input type="text" placeholder="Deskripsi" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full"/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Nama Instansi</label>
              <input type="text" placeholder="Nama Instansi" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full"/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Jenis Kelamin</label>
              <input type="text" placeholder="Jenis Kelamin" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full"/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Tanggal Lahir</label>
              <input type="date" placeholder="Tanggal Lahir" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full"/>
            </div>
            
            <button type="submit" className="submit-btn bg-black text-white py-2 px-8 rounded-full cursor-pointer text-base mt-8 self-end hover:bg-gray-800">Selesai</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
