import React, { useState } from 'react'
import { Table } from "flowbite-react";
import { ArrowLeft } from 'lucide-react';
import { Pencil, Trash, Plus } from 'lucide-react';
import PopUpSoal from './component/popUp_soal';

import { Link } from 'react-router-dom';

export default function TabelSoal() {

  const [IsPopUpOpen, setIsPopUpOpen] =useState(false)

  return (
      <body className="flex justify-center items-center h-screen bg-white relative">

<<<<<<< HEAD
      <button className='absolute top-5 left-8'><ArrowLeft/></button>
      <h1 className='absolute top-6 text-5xl font-extrabold font-inter'>Soal</h1>


        <div className="overflow-x-auto w-full h-auto mx-10 my-10 max-h-[450px] overflow-y-scroll ">
        <Table>
        <Table.Head>

        <Table.HeadCell className='bg-gray-200 w-20'>
          <button className=' text-red-700 absolute top-2'><Trash sixe={2}/></button>
        </Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 w-20 text-center'>No</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 text-center w-64'>Soal</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 text-center w-96'>Jawaban</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 text-center w-64'>Kunci</Table.HeadCell>
          <Table.HeadCell className='flex items-center bg-gray-200 w-32 text-center'>Actions</Table.HeadCell>
=======
      <Link to="/soal" replace>
        <button className='absolute top-5 left-8'><ArrowLeft/></button>
      </Link>

      <h1 className='absolute top-6 text-5xl font-extrabold font-inter'>Soal</h1>


        <div className="overflow-x-auto w-full h-auto mx-10 my-10 max-h-[500px] overflow-y-scroll scrollbar-hide">
        <Table>
        <Table.Head>

        <Table.HeadCell className='bg-gray-200 w-20 sticky top-0'>
          <button className=' text-red-700 absolute top-2'><Trash sixe={2}/></button>
        </Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 w-20 text-center sticky top-0'>No</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 text-center w-64 sticky top-0'>Soal</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 text-center w-96 sticky top-0'>Jawaban</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 text-center w-64 sticky top-0'>Kunci</Table.HeadCell>
          <Table.HeadCell className='bg-gray-200 w-32 text-center sticky top-0'>Actions</Table.HeadCell>
>>>>>>> eecb4bb862553de14765ab5cb1c9c4febb6e35e6

        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 1</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 1</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 1</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              2
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 2</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 2</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 2</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              3
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 3</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 3</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 3</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              4
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 5</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 5</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 5</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              5
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 6</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 6</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 6</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              6
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 7</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 7</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 7</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              7
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 8</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 8</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 8</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              8
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 8</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 8</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 8</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white border-black dark:bg-gray-800">
          <Table.Cell>
            <input type='checkbox' className='rounded '/>
          </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-center text-gray-900 dark:text-white">
              9
            </Table.Cell>
            <Table.Cell className='text-center'>Soal 8</Table.Cell>
            <Table.Cell className='text-center'>Jawaban 8</Table.Cell>
            <Table.Cell className='text-center'>Kunci Jawaban 8</Table.Cell>
            <Table.Cell className='flex flex-col w-24 items-center'>
              <button><Pencil sixe={4}/></button>
            </Table.Cell>
          </Table.Row>


        </Table.Body>

        </Table>
        <button onClick={() => setIsPopUpOpen(true)} className='flex w-40 h-10 px-2 bg-gray-300 items-center justify-center rounded-xl bottom-6 absolute'>
        <Plus/>
        Tambahkan Soal
        </button>

        <button type="submit" className='flex w-32 h-10 px-2 bg-gray-300 items-center justify-center rounded-xl bottom-6 right-10 absolute'>
        Selesai
        </button>
        </div>
        <PopUpSoal trigger={IsPopUpOpen} setTrigger={setIsPopUpOpen}></PopUpSoal>
      </body>
  )
}
