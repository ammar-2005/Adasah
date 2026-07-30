import React from 'react'
import { Link , Outlet , NavLink } 
from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Note() {
   const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const value = e.target.value.trim();
      if (value) {
      
        navigate(`/note/AllArticles?search=${encodeURIComponent(value)}`);
      } else {
   
        navigate('/note/AllArticles');
      }
    }
  };
  return (
    <>
       {/* hero section */}
        <section id="hero" className='bg-black w-full pt-30 pb-12'>
          <div className="flex flex-col items-center justify-center gap-5 ">
            {/* text */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm">

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700">

              </span>
              <span className="w-3.5 h-3.5  bg-orange-500] flex items-center ">
               <i className="fa-solid fa-file" />


              </span>
            </div>
            <span>  مدونتنا </span>
          </div>
            <h2 className=" text-white text-6xl font-bold space-x-1.5 ">
              استكشف   <span className='text-orange-400'>مقالاتنا</span>
            </h2>
            <p className="text-gray-400 text-[20px]">
                  اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
               
            </p>
          </div>
        </section>
        {/* Search & nav section */}
       <section className="w-full bg-black pb-20 ">
           <div className="container mx-auto px-4">
             
             <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
               
               
               <div className="w-full lg:w-64 relative">
                  <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none"></i>
                  <input 
                      type="text" 
                      onKeyDown={handleSearch}
                      placeholder='ابحث في المقالات...' 
                      className="w-full bg-[#1a1a1a] border border-white/5 text-white placeholder-gray-500 rounded-xl py-3.5 pr-5 pl-12 focus:outline-none focus:border-orange-500 transition-colors text-right"
                  />
               </div>

               <div className="flex flex-wrap justify-center lg:justify-end gap-2 w-full lg:w-auto">
                  <NavLink 
                      to='AllArticles' 
                      className={({ isActive }) => `
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${isActive 
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                              : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5'
                          }
                      `}
                  >
                      جميع المقالات
                  </NavLink>

                  <NavLink 
                      to='Lighting' 
                      className={({ isActive }) => `
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${isActive 
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                              : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5'
                          }
                      `}
                  >
                      إضاءة
                  </NavLink>

                  <NavLink 
                      to='Portrait' 
                      className={({ isActive }) => `
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${isActive 
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                              : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5'
                          }
                      `}
                  >
                      بورتريه
                  </NavLink>

                  <NavLink 
                      to='Landscape' 
                      className={({ isActive }) => `
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${isActive 
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                              : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5'
                          }
                      `}
                  >
                      مناظر طبيعية
                  </NavLink>

                  <NavLink 
                      to='Techniques' 
                      className={({ isActive }) => `
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${isActive 
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                              : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5'
                          }
                      `}
                  >
                      تقنيات
                  </NavLink>

                  <NavLink 
                      to='Equipment' 
                      className={({ isActive }) => `
                          px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300
                          ${isActive 
                              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' 
                              : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-white/5'
                          }
                      `}
                  >
                      معدات
                  </NavLink>
               </div>

             </div>

            
             <div className="min-h-[300px] mt-12 " dir="rtl">
                <Outlet />
             </div>

           </div>
         </section>
    
    </>
  )
}
