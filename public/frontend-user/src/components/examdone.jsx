import React from 'react';
import {CheckCircle} from 'lucide-react';
import {useNavigate} from 'react-router-dom'; 

const ExamDone = () =>{
    const navigate = useNavigate();

    const handleBack = () =>{
        navigate('/soal');
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white rounded-lg shadow-md p-12 max-w-md w-full">
                <h2 className="text-2xl font-bold text-center mb-4">Ujian Selesai!</h2>
                <div className="flex justify-center mb-4">
                    <CheckCircle className="text-green-500 w-24 h-24"/>
                </div>
                <p className="text-center font-semibold mb-2">Selamat Anda telah menyelesaikan ujian!</p>
                <p className="text-center text-gray-600 text-sm mb-6">Anda telah berhasil menyelesaikan semua pertanyaan.</p>
                <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transitin-colors" onClick={handleBack}>Kembali</button>
            </div>
        </div>
    )
}

export default ExamDone;