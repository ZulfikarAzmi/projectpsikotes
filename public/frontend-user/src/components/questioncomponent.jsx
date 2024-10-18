
import React, { useState, useEffect } from 'react';
import { LayoutGrid, Clock } from 'lucide-react';

const QuestionComponent = () => {
  const [showGrid, setShowGrid] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [showNotification, setShowNotification] = useState(false);
  const [answers, setAnswers] = useState(Array(20).fill(null));
  const [timeLeft, setTimeLeft] = useState(30 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          setShowNotification(true);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  const handleNumberSelection = (number) => {
    setSelectedNumber(number);
    setShowGrid(false);
  };

  const handleNext = () => {
    if (selectedNumber < 20) {
      setSelectedNumber(selectedNumber + 1);
    } else {
      setShowNotification(true);
    }
  };

  const handlePrevious = () => {
    if (selectedNumber > 1) {
      setSelectedNumber(selectedNumber - 1);
    }
  };

  const handleAnswerChange = (option) => {
    const newAnswers = [...answers];
    newAnswers[selectedNumber - 1] = option;
    setAnswers(newAnswers);
  };

  const confirmFinish = () => {
    alert('Ujian telah diakhiri.');
    setShowNotification(false);
  };

  const cancelFinish = () => {
    setShowNotification(false);
  };

  const NumberGrid = () => (
    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-xl p-4 z-10 w-80 transition-all duration-300 ease-in-out">
      <div className="grid grid-cols-5 gap-2">
        {[...Array(20)].map((_, index) => (
          <button key={index} className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-md text-lg font-semibold hover:bg-blue-100 transition-colors duration-200"
            onClick={() => handleNumberSelection(index + 1)}> {index + 1}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto mt-7 p-6 bg-white rounded-lg shadow-2xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Soal {selectedNumber}</h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center"> <Clock className="w-6 h-6 mr-2"/>
            <span className="text-lg font-semibold">{formatTime(timeLeft)}</span>
          </div>
          <div className="flex items-center relative">
            <LayoutGrid className="w-6 h-6 cursor-pointer" onClick={toggleGrid}/>
            {showGrid && <NumberGrid />}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p className="mb-4">Perhatikan gambar dibawah ini!</p>
        <img src={`/assets/no${selectedNumber}.png`} alt="Gambar Soal" className="w-32 h-auto mr-4"/>
        <p className="mb-4">Pilih jawaban yang benar....</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          {['A', 'B', 'C', 'D', 'E'].map((option) => (
            <div key={option} className="flex items-center">
              <input type="radio" id={option} name="answer" className="mr-2" onChange={() => handleAnswerChange(option)} checked={answers[selectedNumber - 1] === option}/>
              <label htmlFor={option} className="flex items-center">
                <span className="mr-2">{option}.</span>
                <div className="w-24 h-24 border-2 border-black p-1">
                  <img src={`/assets/${selectedNumber}${option.toLowerCase()}.png`} alt={`Gambar ${option}`} className="w-32 h-auto mr-4"/>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-32">
        {selectedNumber > 1 && (
          <button className="px-4 py-2 bg-blue-400 text-white rounded-md" onClick={handlePrevious}>Kembali</button>
        )}
        <div className="flex justify-end w-full">
          {selectedNumber < 20 ? (
            <button className="px-4 py-2 bg-blue-400 text-white rounded-md" onClick={handleNext}>Lanjut</button>
          ) : (
            <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={() => setShowNotification(true)}>Selesai</button>
          )}
        </div>
      </div>

      {showNotification && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 text-center shadow-lg">
            <p className="text-lg font-semibold mb-4">Apakah Anda ingin mengakhiri ujian?</p>
            <div className="flex justify-between mt-4">
              <button onClick={confirmFinish} className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Ya</button>
              <button onClick={cancelFinish} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">Tidak</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionComponent;
