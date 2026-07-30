import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../json/posts.json'

export default function Home() {
     const statsData = [ 
    { icon: 'fa-file-lines', count: '+50', label: 'مقالة' },
    { icon: 'fa-users', count: '+10ألف', label: 'قارئ' } ,
    { icon: 'fa-folder', count: '4', label: 'تصنيفات' },,
    { icon: 'fa-pen', count: '6', label: 'كاتب' },
   
   ,
  ];
    const latestPosts = Data.posts.slice(0, 3); 
    const categories = Data.categories;
  return (
    <>
      {/* hero section */}
      <section id="hero" className=" bg-black w-full pt-30 pb-12  ">
        <div className="container my-5 text-center items-center flex justify-center flex-col pt-15">

            {/* text */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm">

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700">

              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">

              </span>
            </div>
            <span>مرحباً بك في عدسة</span>
          </div>
             {/* heading */}

             <div className="">
            <h2 className='text-3xl font-bold text-white m-5 gap-5 sm:text-5xl '>
               اكتشف  <span className='text-orange-400'>فن</span> <br /> 
               
               <span className='text-4xl mt-5 font-bold pt-11 sm:text-6xl'> التصوير الفوتوغرافي</span>
              
           
            </h2>
            <p className='text-[15px] text-gray-500 mt-5 sm:text-[25px]'>
                انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في
                   <br />    التصوير.
            </p>

             </div>
              {/* tow btn */}
              <div className="flex   flex-col items-center justify-between gap-7 mt-5 sm:flex-row">
  <Link to="/note" id='btn-note' className="text-white bg-orange-500 py-3  px-6 rounded-3xl ">
    استكشف المقالات <i className="fa-solid fa-arrow-left-long"></i>
  </Link>
  <Link to="/about" className=" text-white inline-flex items-center gap-2  rounded-full bg-amber-950/30 border border-amber-800/40 hover:text-amber-500/90 text-sm font-medium backdrop-blur-sm px-6 py-3">
    <i className="fa-solid fa-circle-info"></i> اعرف المزيد
  </Link>
              </div>
        </div>
         {/* 4 card */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full container mt-32 pt-10 px-4 ">
            
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="bg-zinc-900/80 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-4 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-3"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                  <i className={`fa-solid ${stat.icon}`}></i>
                </div>
                
                {/* number */}
                <h3 className="text-4xl font-bold text-orange-500 font-sans">
                  {stat.count}
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                  {stat.label}
                </p>
              </div>
            ))}

          </div>
      </section>

      {/* Note section */}

      <section id="Note" className="bg-black w-full py-20">
        <div className="container mx-auto px-4">
          
          <div className="flex flex-col md:flex-row items-end justify-between mb-10 gap-4">
             <div className="text-right">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm mb-4">
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                    </div>
                    <span>مميز</span>
                </div>
                <h2 className="text-5xl font-bold text-white">مقالات مختارة</h2>
                <p className="text-gray-400 text-lg mt-2">محتوى منتقى لبدء رحلة تعلمك</p>
             </div>
             
             <Link to="/note" className="text-white bg-orange-500 py-3 px-6 rounded-full hover:bg-orange-400 transition-all duration-300 flex items-center gap-2">
                عرض الكل <i className="fa-solid fa-angle-left"></i>
             </Link>
          </div>
          <div className="flex flex-col gap-6 w-full" dir="rtl">
            
            {latestPosts.map((post) => (
              <div 
                key={post.id} 
                className="flex flex-col lg:flex-row bg-[#1b1b1b] border border-orange-800/40 rounded-2xl overflow-hidden hover:border-orange-400 transition-all duration-300 w-full"
              >
                <div className="w-full lg:w-[40%] h-56 lg:h-[320px] relative overflow-hidden shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <i className="fa-solid fa-star text-[10px]"></i>
                    <span>مميز</span>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] p-6 lg:p-8 flex flex-col justify-between gap-4 text-right">
                  
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-amber-950/30 border border-amber-800/40 text-orange-400 text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm flex items-center gap-1.5">
                      <i className="fa-regular fa-clock"></i> {post.readTime}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl lg:text-3xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4  mt-auto">
                    
                    <div className="flex items-center gap-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-10 h-10 rounded-full border-2 border-orange-500 object-cover"
                      />
                      <div className="flex flex-col text-right leading-tight">
                        <span className="text-white text-base font-bold">{post.author.name}</span>
                        <span className="text-gray-500 text-xs">{post.date}</span>
                      </div>
                    </div>

                    <Link 
                      to={`/note/${post.slug}`} 
                      className="text-orange-400 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
                    >
                      اقرأ المقال
                      <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-transform duration-300"></i>
                    </Link>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      {/* categories section */}
         <section id="categories" className='bg-black w-full py-20'>
   
    <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm mb-4">
            <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
            </div>
            <span>التصنيفات</span>
        </div>
        <h2 className="text-6xl font-bold text-white mt-5 mb-5">استكشف حسب الموضوع</h2>
        <p className='text-2xl text-gray-400'>اعثر على محتوى مصمم حسب اهتماماتك</p>
    </div>

  
    <div className="container mx-auto px-4">
        
        {(() => {
            const iconMap = {
                'إضاءة': 'fa-sun',
                'بورتريه': 'fa-user',
                'مناظر طبيعية': 'fa-mountain',
                'تقنيات': 'fa-sliders',
                'معدات': 'fa-gear'
            };
            
            const categories = Data.categories.map(cat => ({
                ...cat,
                icon: iconMap[cat.name] || 'fa-folder'
            }));

            return (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id='card-categories'>
                    {categories.map((cat, index) => (
                        <div 
                            key={cat.name} 
                            className="
                                flex flex-col items-center justify-center gap-3 p-8 rounded-3xl
                                bg-[#161616] border border-white/5 
                                hover:bg-[#3b1e0e] hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-900/20 
                                transition-all duration-300 cursor-pointer
                            "
                        >
                            <div className="
                                w-14 h-14 rounded-xl flex items-center justify-center text-2xl 
                                bg-[#2e1d12] text-orange-500 
                                hover:bg-orange-500/20 transition-colors duration-300
                            ">
                                <i className={`fa-solid ${cat.icon}`}></i>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white">
                                {cat.name}
                            </h3>
                            
                            <p className="text-gray-500 text-sm">
                                {cat.count} مقالة
                            </p>
                        </div>
                    ))}
                </div>
            );
        })()}
        
    </div>
         </section>
       {/* Event Section*/}
      <section id="events" className="bg-black w-full py-20">
        <div className="container mx-auto px-4">
           {/* heading */}
          <div className="flex flex-col items-start gap-5 mb-12 w-full">
          
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
              </div>
              <span>الأحداث</span>
            </div>
            <h2 className="text-6xl font-bold text-white">أحدث المقالات</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full mt-2">
              <p className="text-gray-400 text-2xl">محتوى جديد طازج من المطبعة</p>
              
              <Link 
                to={`/note`} 
                className="text-orange-400 text-base font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 group"
              >
                عرض جميع المقالات
                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-transform duration-300"></i>
              </Link>
            </div>
          </div>

          {(() => {
            const targetIds = [4, 5, 6];
            const featuredPosts = Data.posts.filter(post => targetIds.includes(post.id));

            return (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
                {featuredPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="flex flex-col bg-[#181818] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 group"
                  >
                    <div className="h-56 w-full relative overflow-hidden shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">
                        {post.category}
                      </span>
                    </div>
                    <div className="p-6 flex flex-col justify-between grow gap-4 text-right relative">
                      
                      <div className="flex items-center  gap-5 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <i className="fa-regular fa-clock"></i> {post.readTime}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{new Date(post.date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long' , year:'numeric'  })}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors ">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                        <div className="flex items-center gap-3">
                          
                          <img 
                            src={post.author.avatar} 
                            alt={post.author.name} 
                            className="w-11 h-11 rounded-full border-2 border-orange-500/30 object-cover"
                          />
                          <div className="flex flex-col text-right leading-tight">
                            <span className="text-white text-sm font-bold">{post.author.name}</span>
                            <span className="text-gray-500 text-[10px]">{post.author.role}</span>
                          </div>
                        </div>
                        <Link 
                          to={`/note/${post.slug}`}
                          className="w-10 h-10 rounded-full bg-[#2e1d12] text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                          <i className="fa-solid fa-angle-left text-sm"></i>
                        </Link>
                        

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          })()}

        </div>
      </section>
      {/* send the email  */}
      <section  className="bg-black w-full py-20">
           <div className="  w-full max-w-4xl mx-auto p-8 lg:p-12 
              bg-[#111111] border border-white/5 rounded-3xl shadow-2xl 
              flex flex-col items-center text-center">
                {/* icon */}
                <div className=" flex items-center justify-center w-20 h-20 rounded-3xl bg-orange-500 text-white text-3xl font-bold mt-5 mb-5 ">
                   <i class="fa-regular fa-envelope"></i>
                </div>
                {/* heading*/}
                <div className=" flex flex-col justify-between items-center gap-5">
                   <h2 className=" text-white text-4xl font-bold mb-2 ">
                                         اشترك في <span className='text-orange-400'>نشرتنا الإخبارية</span>
                   </h2>
                   <p className=" text-[20px] text-gray-400 ">
                         احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
                   </p>
                </div>
                {/* input & btn */}
                <div className=" gap-8  mt-5 flex flex-clo sm:flex-row items-center justify-center  w-full max-w-2xl mx-auto">
                      <input type='email' placeholder='أدخل بريدك الإلكتروني' required  className='flex-1 bg-black border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 w-full sm:w-auto transition-all' />
                      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl w-full sm:w-auto transition-colors shadow-lg shadow-orange-500/20  ">
                        اشترك الآن 
                      </button>

                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-10 text-sm text-gray-400">
              
           
              <div className="flex -space-x-3">
                <img className="w-10 h-10 rounded-full border-2 border-[#111111] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111111] object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="User" />
                <img className="w-10 h-10 rounded-full border-2 border-[#111111] object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" alt="User" />
              </div>

              
              <span className="text-white font-medium">
                انضم لـ <span className="text-white">10,000+</span> مصور
              </span>

              
              <span className="hidden md:inline text-white">.</span>
              <span>بدون إزعاج</span>
              <span className="hidden md:inline text-white">.</span>
              <span className="text-gray-400">إلغاء الاشتراك في أي وقت</span>

            </div>

          </div>

   

            
              
      </section>
    </>
  );
}
