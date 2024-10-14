import React from 'react';
import Sidebar, { SidebarItem } from './component/sidebar';
import { BarChart3, LayoutDashboard, } from "lucide-react";
import CardExam from './component/card';






export default function Soal() {


  return (
    <>
    <div className='flex h-screen'>
    <div className='left-section w-1/5'>
    <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Soal"
          alert
          active
        />
        
          <SidebarItem icon={<BarChart3 size={20}/>} text="Lembaga" />
        
        
        
      </Sidebar>
    </div>
            
    <div className='right-section w-4/5 ml-10'>
    <CardExam/>

    
    </div>
    </div>
    
     

    </>
  )
}
