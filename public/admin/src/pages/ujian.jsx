import React, {useState} from 'react'
import Sidebar, { SidebarItem } from './component/sidebar';
import { BarChart3, LayoutDashboard, } from "lucide-react";
import { Link } from 'react-router-dom';
import { Table, ToggleSwitch } from "flowbite-react";
import PopUpUjian from './component/popUp_ujian';


export default function Ujian() {

    const [bukaPopup, setBukaPopup] = useState(false);

    return (
        <>
        
        <div className='flex'>
            
          <Sidebar>
            <Link to="/soal" replace>
                <SidebarItem
                icon={<LayoutDashboard size={20} />}
                text="Soal"
                />
            </Link>
            
              <SidebarItem 
                icon={<BarChart3 size={20}/>} 
                text="Ujian"
                active/>
          </Sidebar>

          

          
          <div className='w-full overflow-x-hidden'>
          <button onClick={() => setBukaPopup(true)} className=' bg-blue-500 font-inter font-semibold w-44 h-10 text-black rounded-2xl sticky top-6 z-20 ml-5 mb-10'>
                    Tambah Lembaga  
            </button>
            <PopUpUjian trigger={bukaPopup} setTrigger={setBukaPopup}></PopUpUjian>

            <div className="overflow-x-auto w-full h-auto mx-5  max-h-[630px] overflow-y-scroll ">
                <Table hoverable >
                    <Table.Head>
                    <Table.HeadCell className="p-4 text-center w-16 bg-gray-200 sticky z-20 top-0">
                        Status
                    </Table.HeadCell>
                    <Table.HeadCell className='bg-gray-200 text-center sticky top-0 w-24 z-20'>ID</Table.HeadCell>
                    <Table.HeadCell className='bg-gray-200 text-center sticky top-0 z-20'>Lembaga</Table.HeadCell>
                    <Table.HeadCell className='bg-gray-200 text-center sticky top-0 z-20'>Jumlah Peserta</Table.HeadCell>
                    <Table.HeadCell className='bg-gray-200 text-center sticky top-0 z-20'>Tanggal</Table.HeadCell>
                    
                    </Table.Head>
                    <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                        <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <ToggleSwitch/>
                        </Table.Cell>
                        <Table.Cell className="text-center whitespace-nowrap font-medium text-gray-900 dark:text-white">
                        001
                        </Table.Cell>
                        <Table.Cell className='text-center'>SMKN 1 SURABAYA</Table.Cell>
                        <Table.Cell className='text-center text-blue-400 hover:underline cursor-pointer'>350</Table.Cell>
                        <Table.Cell className='text-center'>07 / 05 / 2024</Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </div>   
        </div>
        </div>
        

        

        
    </>
      )
  };


  

