import React from 'react';
import Sidebar, { SidebarItem } from './component/sidebar';
import { BarChart3, LayoutDashboard, } from "lucide-react";
import CardExam from './component/card';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> eecb4bb862553de14765ab5cb1c9c4febb6e35e6






export default function Soal() {


  return (
    <>
<<<<<<< HEAD
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
=======
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




>>>>>>> eecb4bb862553de14765ab5cb1c9c4febb6e35e6
