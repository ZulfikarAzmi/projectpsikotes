import { Button, Card } from "flowbite-react";
import React, { useState } from 'react';
import {Plus} from "lucide-react"
import PopUpSubject from "./popUp_subject";
import { Link } from "react-router-dom";


export default function CardExam() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [buttonPopUp, setbuttonPopUp] =useState(false)

  return (
    <>
      <div className='flex'>
        {/* Card 1 */}
        <Card className="max-w-sm max-h-80 my-10 mr-10 relative rounded-3xl w-96 h-auto border-2 ml-10"> 
          {/* Tombol elipsis */}
          <div className="absolute top-9 right-5">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleDropdown}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12 5.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0 5.25a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
                <ul>
                  <li>
                    <button
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      onClick={() => setbuttonPopUp(true)}
                    >
                      Edit
                    </button>
                  </li>
                  <li>
                    <button
                      className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                      onClick={() => console.log('Delete Card')}
                    >
                      Delete
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Konten Card */}
          <h5 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white ">
            Ujian 1
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 my-8">
            Waktu : 60 Menit <br/>
            Jumlah Soal : 30
          </p>

          <Link to="/tabel_soal" replace>
            <Button className='bg-black text-white px-4 py-2 w-80 rounded-lg hover:bg-gray-800'>
              Kelola
            </Button>
          </Link>
          
        </Card>


        {/* Card 2 */}
        <Card className="max-w-sm max-h-80 my-10 mr-10 relative rounded-3xl w-96 h-auto border-2 ml-5"> {/* Tambahkan relative */}
          <Plus size={96} className="ml-32 my-8"/>
          <Button onClick={() => setbuttonPopUp(true)} className='bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800'>
            Tambah Ujian
          </Button> 
        </Card>

        <PopUpSubject trigger={buttonPopUp} setTrigger={setbuttonPopUp}></PopUpSubject>
      </div>
    </>
  );
}
