import { ArrowRight , ArrowLeft, LogOut   } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { useNavigate } from 'react-router-dom';


const SidebarContext = createContext()

export default function Sidebar({ children }) {

  const [expanded, setExpanded] = useState(true)
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('authToken');

    navigate('/login');
  };

  
  return (

    
    <aside className=" h-max">
      <nav className="h-[680px] inline-flex flex-col bg-blue-400 border-r shadow-sm ml-6 mt-6 rounded-xl ">
        <div className="p-4 pb-2 flex justify-between items-center">
          
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg "
          >
            {expanded ? <ArrowLeft /> : <ArrowRight />} 
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 mt-10">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3 justify-center ">
          <button className="">
           <LogOut/>
          </button>
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4 h-4 ">
              
              <button onclick={handleLogout}>
              <h4 className="font-semibold">Logout</h4>
              </button>
              
            </div>
             
          </div>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext)
  
  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-black"
            : "hover:bg-indigo-50 text-gray-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-42 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-red-700 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-black text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-10
      `}
        >
          {text}
        </div>
      )}
    </li>
  )
}