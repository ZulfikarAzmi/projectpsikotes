import React from 'react';
import Sidebar, { SidebarItem } from './component/sidebar';
import { BarChart3, LayoutDashboard, } from "lucide-react";
import CardExam from './component/card';
import { Link } from 'react-router-dom';






export default function Soal() {


  return (
    <>
      <div className='flex'>
        <Sidebar>
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Soal"
            active
          />
          <Link to="/ujian" replace>
            <SidebarItem icon={<BarChart3 size={20}/>} text="Ujian"/>
          </Link>
        </Sidebar>

        <CardExam/>

      </div>
    </>
  )
}




