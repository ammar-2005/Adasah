import { useState } from 'react'
import Logo from '../assets/logo-GdqARQRt.png'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
 
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='bg-[#252525] w-full p-1 z-50 fixed top-0 left-0 mb-7'>
        <div className="container flex items-center justify-between gap-3">
           
          <div className="flex items-center justify-between gap-5 flex-row">
            <img src={Logo} alt="logo" className='w-10 h-10' />
            <div className="flex justify-between flex-col">
              <h3 className='text-2xl text-white'>عدسة</h3>
              <p className='text-[15px] text-[#b87229]'>عالم التصوير الفوتوغرا</p>
            </div>
          </div>
          
      
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 p-1.5 border border-[#535353dd] bg-[#252525] rounded-full ">
              <ul className="flex gap-3 text-white p-3">
                <li>
                  <NavLink 
                    to="/home" 
                    className={({ isActive }) => `
                      px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300
                      ${isActive 
                        ? 'text-white bg-orange-600 shadow-lg shadow-orange-600/20' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                      }
                    `}
                  >
                    الرئيسية
                  </NavLink>
                </li>
                <li>
                  <Link to="/note" className="px-6 py-2.5 rounded-full text-sm font-bold text-white hover:bg-orange-700 transition-all duration-300 ">المدونة</Link>
                </li>
                <li>
                  <Link to="/about" className="px-6 py-2.5 rounded-full text-sm font-bold text-white hover:bg-orange-700 transition-all duration-300 ">من نحن</Link>
                </li>
              </ul>
            </div>
          </div>

        
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-white transition hover:text-orange-400"
          >
            <i className="fa-solid fa-bars text-2xl"></i>
          </button>

        
          <div className="hidden md:flex items-center justify-between gap-3 p-5">
            <button className="p-3 rounded-2xl transition-all duration-300 hover:border hover:border-gray-400 text-gray-400 hover:text-orange-500 flex items-center justify-center">
              <i className="fa-solid fa-magnifying-glass text-lg"></i>
            </button>
            <div className="">
                <Link 
                  to="/note" 
                  className="inline-block bg-orange-500 text-white font-bold text-sm px-7 py-3 rounded-full hover:bg-orange-400 transition-all duration-300 shadow-md btn"
                >
                  ابدأ القراءة
                </Link>
            </div>
          </div>
        </div>
      </header>

  
      {isOpen && (
        <div className="fixed inset-0 z-[999] bg-[#101010] h-screen flex flex-col text-right" dir="rtl">
   
          <div className="flex items-center justify-between p-6">
          
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <h2 className="text-white text-xl font-bold">عدسة</h2>
            </div>
           
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-3xl transition"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* الروابط في المنتصف */}
          <div className="flex flex-col px-6 mt-5 gap-2">
            <NavLink 
              to="/home" 
              onClick={() => setIsOpen(false)}
              className="bg-[#2e1a0d] border border-orange-500/30 text-orange-500 text-center py-4 rounded-xl text-lg font-bold"
            >
              الرئيسية
            </NavLink>
            
            <Link 
              to="/note" 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-center py-4 text-lg transition"
            >
              المدونة
            </Link>

            <Link 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-center py-4 text-lg transition"
            >
              من نحن
            </Link>
          </div>

          {/* الزر العريض في الأسفل */}
          <div className="mt-auto px-6 pb-10">
            <Link 
              to="/note" 
              onClick={() => setIsOpen(false)}
              className="block w-full bg-orange-500 text-white text-center font-bold py-4 rounded-full text-lg"
            >
              ابدأ القراءة
            </Link>
          </div>
        </div>
      )}
    </>
  )
}