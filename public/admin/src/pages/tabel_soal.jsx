import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import { ArrowLeft } from 'lucide-react';
import { Pencil, Trash, Plus } from 'lucide-react';
import PopUpSoal from './component/popUp_soal';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function TabelSoal() {
  const [IsPopUpOpen, setIsPopUpOpen] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  
  const fetchData = () => {
    axios.get('http://localhost:3000/Subject')
      .then(response => {
        setData(response.data.map(item => ({
          ...item,
          soal: `/images/${item.soal}`,
          jawaban: item.jawaban.map(jawaban => `/images/${jawaban}`),
          kunci_jawaban: `/images/${item.kunci_jawaban}`
        })));
      })
      .catch(err => console.error('Error Menampilkan data', err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCheckboxChange = (itemNo) => {
    if (selectedItems.includes(itemNo)) {
      setSelectedItems(selectedItems.filter(no => no !== itemNo));
    } else {
      setSelectedItems([...selectedItems, itemNo]);
    }
  };

  const handleDeleteSelected = () => {
    selectedItems.forEach(itemNo => {
      axios.delete(`http://localhost:3000/Subject/${itemNo}`)
        .then(() => {
          refreshData();
          fetchData();
        })
        .catch(err => console.error('Error deleting data', err));
    });

    setSelectedItems([]);
  };

  const getNextNumber = () => {
    if (data.length > 0) {
      const lastNo = Math.max(...data.map(item => item.no));
      return lastNo + 1;
    } else {
      return 1;
    }
  };

  return (
    <body className="flex justify-center items-center h-screen bg-white relative">
      <Link to="/soal" replace>
        <button className='absolute top-5 left-8'><ArrowLeft/></button>
      </Link>
      
      <h1 className='absolute top-6 text-5xl font-extrabold font-inter'>Soal</h1>
      
      <div className='container border-2 w-full h-auto border-gray-400 mx-10 my-10 rounded-lg z-20 relative'>
        <div className="overflow-x-auto max-h-[450px] overflow-y-scroll scrollbar-hide">
          <Table striped>
            <Table.Head>
              <Table.HeadCell className='bg-gray-200 w-20 sticky top-0'>
                <button 
                  className='text-red-700 absolute top-2' 
                  onClick={handleDeleteSelected}
                  disabled={selectedItems.length === 0}
                >
                  <Trash size={24}/>
                </button>
              </Table.HeadCell>
              <Table.HeadCell className='bg-gray-200 w-20 text-center sticky top-0'>No</Table.HeadCell>
              <Table.HeadCell className='bg-gray-200 text-center w-64 sticky top-0'>Soal</Table.HeadCell>
              <Table.HeadCell className='bg-gray-200 text-center w-64 sticky top-0 '>Jawaban</Table.HeadCell>
              <Table.HeadCell className='bg-gray-200 text-center w-64 sticky top-0'>Kunci</Table.HeadCell>
              <Table.HeadCell className='bg-gray-200 w-32 text-center sticky top-0'>Edit</Table.HeadCell>
            </Table.Head>

            <Table.Body>{data.map((item, index) => (
              <Table.Row key={index} className="bg-white border-black dark:bg-gray-800">
                <Table.Cell>
                  <input 
                    type='checkbox' 
                    className='rounded' 
                    onChange={() => handleCheckboxChange(item.no)} 
                    checked={selectedItems.includes(item.no)}
                  />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
                  {item.no}
                </Table.Cell>
                <Table.Cell className='items-center justify-center'>
                  <img src={item.soal} alt={`Soal ${item.no}`} />
                </Table.Cell>
                <Table.Cell className='items-center justify-center pt-10 flex '>
                  {item.jawaban.map((jawaban, idx) => (
                    <img 
                      className='max-w-[42px] h-auto'
                      key={idx} 
                      src={jawaban} 
                      alt={`Jawaban ${item.no}-${idx}`}
                    />
                  ))}
                </Table.Cell>
                <Table.Cell className=' justify-center items-center pl-24'>
                  <img 
                    className='max-w-[80px] h-auto' 
                    src={item.kunci_jawaban} 
                    alt={`Kunci Jawaban ${item.no}`} 
                  />
                </Table.Cell>
                <Table.Cell className='justify-center items-center pl-14'>
                  <button><Pencil size={24}/></button>
                </Table.Cell>
              </Table.Row>
            ))}
            </Table.Body>
          </Table>
        </div>
      </div>

      <div>
        <button 
          onClick={() => setIsPopUpOpen(true)} 
          className='flex w-40 h-10 px-2 bg-gray-300 items-center justify-center rounded-xl bottom-6 left-10 absolute'
        >
          <Plus/>
          Tambahkan Soal
        </button>

        <button 
          type="submit" 
          className='w-32 h-10 px-2 bg-gray-300 items-center justify-center rounded-xl bottom-6 right-10 absolute'
        >
          Selesai
        </button>
      </div>
      
      <PopUpSoal trigger={IsPopUpOpen} setTrigger={setIsPopUpOpen} refreshData={fetchData} getNextNumber={getNextNumber}/>
    </body>
  );
}
