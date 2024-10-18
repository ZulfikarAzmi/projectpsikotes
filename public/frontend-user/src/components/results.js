import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Menu, LogOut, FileText, ChevronLeft } from 'lucide-react';

const examData = [
  { id: "0001", nama: "Nafisa Aqila Aninditha", hasil: 100, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0002", nama: "Muhammad Rizki", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span>},
  { id: "0003", nama: "Nabila Puteri", hasil: 102, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0004", nama: "Ahmad Syaifuddin", hasil: 105, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0005", nama: "Laili Ramadhani", hasil: 97, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0006", nama: "Rachmad Dwi", hasil: 110, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0007", nama: "Aniela Aiko", hasil: 100, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0008", nama: "Naysila Cahya", hasil: 108, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0009", nama: "Kalyca Nasywa", hasil: 119, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0010", nama: "Annisa Naila", hasil: 102, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0011", nama: "Maximus Krisna", hasil: 101, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0012", nama: "Naila Izza", hasil: 110, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0013", nama: "Praba Wirayudha", hasil: 125, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0014", nama: "Rizky Aditya", hasil: 99, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0015", nama: "Indah Permatasari", hasil: 120, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0016", nama: "Fahri Setiawan", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0017", nama: "Siti Fatimah", hasil: 95, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0018", nama: "Budi Santoso", hasil: 107, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0019", nama: "Diana Kurnia", hasil: 111, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0020", nama: "Fikri Rahman", hasil: 108, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0021", nama: "Nina Wijaya", hasil: 113, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0022", nama: "Arief Hidayat", hasil: 118, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0023", nama: "Sari Dewi", hasil: 104, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0024", nama: "Eko Prasetyo", hasil: 100, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0025", nama: "Tia Shabrina", hasil: 99, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0026", nama: "Rina Amelia", hasil: 96, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0027", nama: "Hendra Susanto", hasil: 105, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0028", nama: "Rudy Hartono", hasil: 112, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0029", nama: "Dewi Anggraini", hasil: 119, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0030", nama: "Yusuf Muhammad", hasil: 102, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0031", nama: "Citra Ningsih", hasil: 106, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0032", nama: "Vina Widiastuti", hasil: 114, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0033", nama: "Dimas Pramudya", hasil: 121, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0034", nama: "Ayu Kurniasari", hasil: 97, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0035", nama: "Agung Setiawan", hasil: 103, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0036", nama: "Suci Rahmawati", hasil: 110, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0037", nama: "Arni Setyowati", hasil: 99, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0038", nama: "Iwan Kurniawan", hasil: 104, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0039", nama: "Julianto", hasil: 100, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0040", nama: "Erni Susanti", hasil: 107, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0041", nama: "Rizal Ramadhan", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0042", nama: "Fajar Setiadi", hasil: 98, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0043", nama: "Siti Khadijah", hasil: 105, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0044", nama: "Ali Rahman", hasil: 109, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0045", nama: "Dani Permana", hasil: 111, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0046", nama: "Lia Mulyani", hasil: 106, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0047", nama: "Yuli Setyawati", hasil: 113, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0048", nama: "Bobby Kurniawan", hasil: 120, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0049", nama: "Tia Maharani", hasil: 99, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
  { id: "0050", nama: "Dewi Lestari", hasil: 115, tanggal: "10/09/24", keterangan: <span>Progress <strong>1 dari 3</strong></span> },
];

const Results = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen bg-white text-gray-900 flex">
      <nav className={`fixed top-0 left-0 h-full flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} bg-blue-400 rounded-r-2xl`}>
        <button 
          className="w-full py-3 px-4 flex items-center justify-between hover:bg-blue-300 transition-colors duration-200" 
          onClick={toggleSidebar}
        >
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-3 text-white" />
            {isOpen && <span className="text-lg font-medium text-white">Menu</span>}
          </div>
          {isOpen && <ChevronLeft className="w-5 h-5 text-white" />}
        </button>

        <Link to="/soal" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
          <FileText className="w-6 h-6 mr-3 text-white" />
          {isOpen && <span className="text-white">Soal</span>}
        </Link>

        <div className="mb-8">
          <Link to="/ujian" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
            <i className="fa-university w-6 h-6 mr-3 text-white"></i>
            {isOpen && <span className="text-white">Ujian</span>}
          </Link>
        </div>

        <div className="mt-auto">
          <Link to="/registration" className="w-full py-3 px-4 flex items-center hover:bg-blue-300 transition-colors duration-200">
            <LogOut className="w-6 h-6 mr-3 text-white" />
            {isOpen && <span className="text-white">Logout</span>}
          </Link>
        </div>
      </nav>

      <div className={`flex-1 transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="container mx-auto p-4">
          <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Ujian</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nama Lengkap</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hasil Tes</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Keterangan</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {examData.map((exam) => (
                  <tr key={exam.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.nama}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.hasil}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.tanggal}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{exam.keterangan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
