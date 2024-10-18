import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, ChevronLeft, FileText, LogOut } from 'lucide-react';
import axios from "axios";

export function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [formData, setFormData] = useState({
    namaPeserta: '',
    deskripsi: '',
    namaInstansi: '',
    jenisKelamin: '',
    tanggalLahir: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/data', formData); //ganti kode link jika berbeda
      console.log('Data berhasil dikirim!', response.data); 
    } catch (error) {
      console.error('Error mengirim data!', error);
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen bg-white text-gray-900 flex">
      <nav className={`fixed top-0 left-0 h-full flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} bg-blue-400 rounded-r-2xl`}>
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

      <div className={`bg-white flex-grow flex justify-center items-center transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="bg-white mr-16 rounded-lg shadow-2xl p-12 w-[70%] max-w-[800px]">
          <h2 className="text-2xl mb-8 font-bold text-left">Input Data Diri</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Nama Peserta</label>
              <input type="text" name="namaPeserta" placeholder="Nama Peserta" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" value={formData.namaPeserta}onChange={handleChange}/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Deskripsi</label>
              <input type="text" name="deskripsi" placeholder="Deskripsi" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" value={formData.deskripsi}onChange={handleChange}/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Nama Instansi</label>
              <input type="text" name="namaInstansi" placeholder="Nama Instansi" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" value={formData.namaInstansi}onChange={handleChange}/>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Jenis Kelamin</label>
              <select type="text" name="jenisKelamin" placeholder="Jenis Kelamin" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full"value={formData.jenisKelamin}onChange={handleChange} required>
              <option value="" disabled>Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            <div className="input-group flex flex-col mb-5 w-full">
              <label className="text-sm mb-2">Tanggal Lahir</label>
              <input type="date" name="tanggalLahir" placeholder="Tanggal Lahir" className="border border-gray-300 rounded-full py-2 px-4 text-base shadow-md w-full" value={formData.tanggalLahir}onChange={handleChange}/>
            </div> 
            
            <button type="submit" className="submit-btn bg-black text-white py-2 px-8 rounded-full cursor-pointer text-base mt-8 self-end hover:bg-gray-800">Selesai</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
