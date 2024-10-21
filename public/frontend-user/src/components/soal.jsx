import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Menu, LogOut, FileText, ChevronLeft } from 'lucide-react';
import axios from 'axios';

const Soal = () => {
    const [isNotificationVisible, setNotificationVisible] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');
    const [isConfirmationVisible, setConfirmationVisible] = useState(false);
    const [selectedExam, setSelectedExam] = useState('');
    const [hasCompletedExam1, setHasCompletedExam1] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleExamClick = (ujianName) => {
        if (ujianName === "Ujian 1") {
            setConfirmationVisible(true);
            setSelectedExam(ujianName);
        } else {
            if (!hasCompletedExam1) {
                showNotification("Anda belum mengerjakan Ujian 1");
            } else {
                setConfirmationVisible(true);
                setSelectedExam(ujianName);
            }
        }
    };

    const showNotification = (message) => {
        setNotificationMessage(message);
        setNotificationVisible(true);
    };

    const handleConfirm = async () => {
        try{
            const response = await axios.post('/api/exam',{ //ganti kode link jika berbeda
                examName: selectedExam,
            });
            alert("Anda memulai " + selectedExam + ": " + response.data.message);
            setConfirmationVisible(false);
            
            // logic untuk memulai ujian
            if (selectedExam === "Ujian 1") {
                setHasCompletedExam1(true);
            }
        } catch (error) {
            console.error('Error starting exam', error);
            showNotification('Terjadi kesalahan saat memulai ujian. Silahkan coba lagi!');
        }
    };

    const closeNotification = () => {
        setNotificationVisible(false);
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

            {/* Konten utama */}
            <div className={`flex-grow p-10 transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-16'}`}>
                <h2 className="text-3xl mb-6">Soal Ujian</h2>
                <div className="absolute top-7 right-12 mt-6">
                    <i className="fas fa-user shadow-lg text-2xl"></i>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {["Ujian 1", "Ujian 2", "Ujian 3", "Ujian 4"].map((ujian) => (
                        <div className="card bg-white p-6 rounded-xl shadow-lg flex flex-col justify-between h-[200px] w-[275px] border border-gray-300" key={ujian}>
                            <h3 className="text-lg font-bold mb-1">{ujian}</h3>
                            <p>Waktu: 30 Menit<br />Jumlah Soal: 20</p>
                            <button className="mt-4 bg-black text-white py-2 px-6 rounded-full text-sm hover:bg-gray-800" onClick={() => handleExamClick(ujian)}>Mulai</button>
                        </div>
                    ))}
                </div>
            </div>

            {isConfirmationVisible && (
                <div className="fixed inset-0 flex items-center justify-center shadow-lg bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-5 text-center">
                        <h3 className="text-lg font-bold mb-3">
                            {selectedExam === "Ujian 1" ? "Apakah Anda ingin memulai ujian?" : "Anda belum mengerjakan Ujian 1"}
                        </h3>
                        <div>
                            {selectedExam === "Ujian 1" ? (
                                <>
                                    <button className="bg-green-500 shadow-lg text-white px-4 py-2 rounded mr-2" onClick={handleConfirm}>Ya</button>
                                    <button className="bg-red-500 shadow-lg text-white px-4 py-2 rounded" onClick={() => setConfirmationVisible(false)}>Tidak</button>
                                </>
                            ) : (
                                <button className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded" onClick={() => setConfirmationVisible(false)}>OK</button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {isNotificationVisible && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-5 text-center">
                        <h3 className="text-lg font-bold mb-3">{notificationMessage}</h3>
                        <button className="bg-blue-500 shadow-lg text-white px-4 py-2 rounded" onClick={closeNotification}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Soal;
