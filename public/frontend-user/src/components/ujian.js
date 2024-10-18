import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Menu, LogOut, FileText, ChevronLeft } from 'lucide-react';

const examData = [
  { id: "0001", lembaga: "SMKN 1 SURABAYA", jumlahPeserta: 50, tanggal: "01/03/24" },
  { id: "0002", lembaga: "PT Bank Mandiri", jumlahPeserta: 30, tanggal: "02/03/24" },
  { id: "0003", lembaga: "RSUD Jakarta", jumlahPeserta: 35, tanggal: "03/03/24" },
  { id: "0004", lembaga: "Universitas Gadjah Mada", jumlahPeserta: 20, tanggal: "04/03/24" },
  { id: "0005", lembaga: "Kantor Pos Indonesia", jumlahPeserta: 25, tanggal: "05/03/24" },
  { id: "0006", lembaga: "SMA Negeri 1 Bandung", jumlahPeserta: 40, tanggal: "06/03/24" },
  { id: "0007", lembaga: "PT Telkom Indonesia", jumlahPeserta: 15, tanggal: "07/03/24" },
  { id: "0008", lembaga: "RSUP Persahabatan", jumlahPeserta: 10, tanggal: "08/03/24" },
  { id: "0009", lembaga: "SMA Taruna Nusantara", jumlahPeserta: 20, tanggal: "09/03/24" },
  { id: "0010", lembaga: "Hotel Aston", jumlahPeserta: 22, tanggal: "10/03/24" },
  { id: "0011", lembaga: "Kementerian Kesehatan", jumlahPeserta: 30, tanggal: "11/03/24" },
  { id: "0012", lembaga: "SMA Negeri 2 Tangerang", jumlahPeserta: 32, tanggal: "12/03/24" },
  { id: "0013", lembaga: "PT Unilever Indonesia", jumlahPeserta: 45, tanggal: "13/03/24" },
  { id: "0014", lembaga: "Bank BCA", jumlahPeserta: 50, tanggal: "14/03/24" },
  { id: "0015", lembaga: "SMK Negeri 5 Surabaya", jumlahPeserta: 45, tanggal: "15/03/24" },
  { id: "0016", lembaga: "SMA Negeri 3 Malang", jumlahPeserta: 40, tanggal: "16/03/24" },
  { id: "0017", lembaga: "Kantor Imigrasi", jumlahPeserta: 30, tanggal: "17/03/24" },
  { id: "0018", lembaga: "PT Astra International", jumlahPeserta: 25, tanggal: "18/03/24" },
  { id: "0019", lembaga: "RSU dr. Cipto Mangunkusumo", jumlahPeserta: 20, tanggal: "19/03/24" },
  { id: "0020", lembaga: "Universitas Indonesia", jumlahPeserta: 15, tanggal: "20/03/24" },
  { id: "0021", lembaga: "PT Pertamina", jumlahPeserta: 30, tanggal: "21/03/24" },
  { id: "0022", lembaga: "SMA Kristen 1 Jakarta", jumlahPeserta: 25, tanggal: "22/03/24" },
  { id: "0023", lembaga: "Kantor Pajak Pratama", jumlahPeserta: 40, tanggal: "23/03/24" },
  { id: "0024", lembaga: "PT Indofood", jumlahPeserta: 32, tanggal: "24/03/24" },
  { id: "0025", lembaga: "RSUD Dr. Soetomo", jumlahPeserta: 27, tanggal: "25/03/24" },
  { id: "0026", lembaga: "Universitas Airlangga", jumlahPeserta: 12, tanggal: "26/03/24" },
  { id: "0027", lembaga: "SMK Negeri 2 Jakarta", jumlahPeserta: 10, tanggal: "27/03/24" },
  { id: "0028", lembaga: "Kantor Gubernur DKI Jakarta", jumlahPeserta: 42, tanggal: "28/03/24" },
  { id: "0029", lembaga: "PT Sinar Mas", jumlahPeserta: 45, tanggal: "29/03/24" },
  { id: "0030", lembaga: "RSU dr. Hasan Sadikin", jumlahPeserta: 30, tanggal: "30/03/24" }
];

export function Ujian() {
  const [isOpen, setIsOpen] = useState(true);
  const [statuses, setStatuses] = useState(examData.reduce((acc, exam) => ({ ...acc, [exam.id]: false }), {}));

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = (id) => {
    setStatuses(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={`h-screen bg-white text-gray-900 flex`}>
      <nav className={`fixed top-0 left-0 h-full flex flex-col transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-16'} bg-blue-400 rounded-r-2xl`}>
        <button className="w-full py-3 px-4 flex items-center justify-between hover:bg-blue-300 transition-colors duration-200" onClick={toggleSidebar}>
          <div className="flex items-center">
            <Menu className="w-6 h-6 mr-3 text-white" /> {isOpen && <span className="text-lg font-medium text-white">Menu</span>}
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

      <div className={`flex-1 p-6 transition-all duration-300 ease-in-out ${isOpen ? 'ml-64' : 'ml-16'}`}>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Ujian</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lembaga</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah Peserta</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {examData.map((exam) => (
                <tr key={exam.id}>
                  <td className="px-4 py-2 whitespace-nowrap">
                    <label className="inline-flex items-center mb-5 cursor-pointer">
                      <input type="checkbox" checked={statuses[exam.id]} onChange={() => handleStatusChange(exam.id)} className="sr-only peer"/>
                      <div className={`relative w-11 h-6 ${statuses[exam.id] ? 'bg-blue-600' : 'bg-gray-200'} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600`}></div>
                    </label>
                  </td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{exam.id}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{exam.lembaga}</td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500 hover:underline"><Link to={`/results`}>{exam.jumlahPeserta}</Link></td>
                  <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{exam.tanggal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ujian;