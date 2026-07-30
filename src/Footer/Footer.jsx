import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black w-full py-16 border-t border-white/10">
     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">

          <div className="flex flex-col gap-4 text-right">
            {/* الشعار */}
            <Link to="/" className="flex items-center justify-start gap-3 mb-2">
              <h2 className="text-2xl font-bold text-white">عدسة</h2>
              <div className="flex items-center justify-center bg-orange-500 w-10 h-10 rounded-2xl text-white text-xl font-bold shadow-lg shadow-orange-500/20">
                ع
              </div>
            </Link>
            
         
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs text-right">
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            
        
            <div className="flex items-center justify-start gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300">
                <i className="fa-brands fa-youtube text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300">
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300">
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/20 transition-all duration-300">
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 text-right">
            <div className="flex items-center justify-start gap-3 mb-2">
              <span className="w-6 h-0.5 bg-orange-500 rounded-full block"></span>
              <h4 className="text-xl font-bold text-white">استكشف</h4>
              
            </div>
            <ul className="flex flex-col gap-4 text-sm text-right">
              <li>
                <Link to="/home" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">الرئيسية</Link>
              </li>
              <li>
                <Link to="/note" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">المدونة</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">من نحن</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-right">
            <div className="flex items-center justify-start gap-3 mb-2">
              <span className="w-6 h-0.5 bg-orange-500 rounded-full block"></span>
              <h4 className="text-xl font-bold text-white">التصنيفات</h4>
              
            </div>
            <ul className="flex flex-col gap-4 text-sm text-right">
              <li>
                <Link to="/note?category=إضاءة" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">إضاءة</Link>
              </li>
              <li>
                <Link to="/note?category=بورتريه" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">بورتريه</Link>
              </li>
              <li>
                <Link to="/note?category=مناظر طبيعية" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">مناظر طبيعية</Link>
              </li>
              <li>
                <Link to="/note?category=تقنيات" className="text-gray-400 hover:text-orange-500 transition-colors duration-300">تقنيات</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-right">
            <div className="flex items-center justify-start gap-3 mb-2">
              <span className="w-6 h-0.5 bg-orange-500 rounded-full block"></span>
              <h4 className="text-xl font-bold text-white">ابق على اطلاع</h4>
              
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-2 text-right">
              اشترك للحصول على أحدث المقالات والتحديثات.
            </p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="أدخل بريدك الإلكتروني" 
                className="w-full bg-[#1a1a1a] border border-white/10 rounded-xl py-3.5 px-5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors duration-300 text-right"
              />
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 rounded-xl transition-colors duration-300 shadow-lg shadow-orange-500/20"
              >
                اشترك
              </button>
            </form>
          </div>

        </div>

      
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm text-gray-500">
           <div className="text-center lg:text-left">
            © {new Date().getFullYear()} عدسة. صنع بكل <span className=" text-orange-500">🧡</span> جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-orange-500 transition-colors">سياسة الخصوصية</Link>
            <span className="w-px h-4 bg-white/10"></span>
            <Link to="/service" className="hover:text-orange-500 transition-colors">شروط الخدمة</Link>
          </div>
         
        </div>

      </div>
    </footer>
  )
}