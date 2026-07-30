import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <> 
      <section className=' bg-black w-full pt-30 pb-12'>
     <div className="mt-5 p-6 text-center flex flex-col items-center justify-center bg-black">
      <h1 className="text-9xl font-bold bg-gradient-to-t from-[#FA5400] via-[#FF7A02] to-[#F5A402] bg-clip-text text-transparent w-fit mx-auto">
         404
      </h1>
      {/* icon */}
    <div className="flex items-center justify-center 
            bg-orange-900/30 backdrop-blur-md 
            border border-orange-500/20 
            w-32 h-32 rounded-full 
            text-orange-400 text-6xl mt-5 ">
         <i className="fa-regular fa-face-frown" />
     </div>
     <h2 className="text-white text-2xl font-bold mt-3 ">
        عفوا! الصفحة غير موجودة
     </h2>
     <p className="text-gray-400 text-lg leading-loose text-center mt-5 max-w-2xl mx-auto">
        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
المسار الصحيح.
     </p>
      {/* tow btn */}
      <div className="flex   flex-col items-center justify-between gap-7 mt-5 sm:flex-row">
       <Link to="/home" id='btn-note' className="text-white bg-orange-500 py-3  px-6 rounded-3xl ">
       
          الذهاب للرئيسية <i className="fa-solid fa-arrow-left-long"></i>
       </Link>
       <Link to="/note" className=" text-white inline-flex items-center gap-2  rounded-full bg-amber-950/30 border border-amber-800/40 hover:text-amber-500/90 text-sm font-medium backdrop-blur-sm px-6 py-3">
         <i className="fa-solid fa-circle-info"></i>  تصفح المقالات
       </Link>
      </div>
      
    </div>
    </section>
    </>
  
  )
}
