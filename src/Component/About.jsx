import React from 'react'
import  { useMemo } from 'react'
import postsData from '../json/posts.json'
import { Link } from 'react-router-dom'

export default function About() {
    const team = useMemo(() => {
    const seen = new Map()
    postsData.posts.forEach((post) => { 
      if (!seen.has(post.author.name)) {
        seen.set(post.author.name, post.author)
      }
    })
    return Array.from(seen.values())
  }, [])
  return (
    <>
     {/* hero section */}
     <section className='bg-black w-full pt-30 pb-12 '>
      <div className=" container  flex flex-col items-center justify-between ">
               {/* text */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm">

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-700">

              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">

              </span>
            </div>
            <span>  من نحن </span>
            </div>
               <h1 className="mt-5 text-5xl text-white font-bold ">
                                مهمتنا هي <span className='text-orange-400'>الإعلام والإلهام</span>
               </h1>
               <p className=" text-gray-400 text-lg leading-loose text-center mt-5 max-w-2xl mx-auto">
                                 مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين ونصائح عملية
لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة المصورين على تنمية مهاراتهم من
خلال محتوى عالي الجودة.
               </p>

          </div>
            {/* 4 card */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full container mt-32 pt-10 px-2 ">
               {/* item-1 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                      <i class="fa-solid fa-users"></i>
                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold text-amber-600 font-sans">
                  +2مليون
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                   قارئ شهريآ
                </p>
              </div>
               {/* item-2 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                      <i class="fa-solid fa-file-lines"></i>
                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold text-amber-600 font-sans">
                  +500
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                   مقالة منشورة 
                </p>
              </div>
               {/* item-3 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                      <i class="fa-solid fa-pen-nib"></i>
                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold text-amber-600 font-sans">
                  +50 
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                    كاتب خبير 
                </p>
              </div>
               {/* item-4 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                      <i class="fa-solid fa-book-open"></i>
                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold text-amber-600 font-sans">
                  +15
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                    تصنيف
                </p>
              </div>
           

                </div>
     </section>
     {/* Our Values section */}
     <section className="bg-[#1e1d1d] w-full py-20">
      {/* heading */}
      <div className="flex flex-col items-center justify-center gap-6 ">
        <div className=" flex gap-5 items-center">
          <span className=" text-orange-400 text-3xl rounded-2xl font-bold">|</span>
           <h2 className=' text-4xl text-white'>قيمنا</h2>
          <span className=" text-orange-400 text-3xl rounded-2xl font-bold">|</span>
        </div>
       <p className=" text-gray-500 text-[20px]" >
        المبادئ التي توجه كل ما نقوم بإنشائه
       </p>
      </div>
      {/* cart */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full  mt-32 pt-10 px-2 container  ">
               {/* item-1 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-orange-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                      <i class="fa-solid fa-bullseye"></i>
                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold  text-white font-sans hover:text-amber-500">
                  الجودة أولأ
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
محتوى مدروس ومكتوب بخبرة                </p>
              </div>
               {/* item-2 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-orange-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                      <i class="fa-solid fa-bolt"></i>

                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold text-white font-sans hover:text-amber-500">
                   تركيز عملي 
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>
              </div>
               {/* item-3 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-orange-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                     <i class="fa-solid fa-handshake"></i>

                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold  text-white font-sans hover:text-amber-500">
                  المجتمع  
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                   تعلم مع آلاف المصورين
                </p>
              </div>
               {/* item-4 */}
              <div 
                
                className="bg-zinc-900/80 hover:bg-orange-400/10 backdrop-blur-sm border border-white/10 rounded-3xl p-3 flex flex-col items-center justify-center gap-1 transition-all duration-300 px-2"
              >
                {/* icon */}
                <div className="text-orange-500 text-[35px] flex items-center justify-center mb-1">
                     <i class="fa-solid fa-rotate"></i>
                </div>
                
                {/* number */}
                <h3 className="text-2xl font-bold text-white font-sans hover:text-amber-500">
                  دائماً محدث
                </h3>
                
                {/* text*/}
                <p className="text-gray-400 text-lg">
                    أحدث الاتجاهات وأفضل الممارسات
                </p>
              </div>
           

                </div>


     </section>
     {/* team section */}
     <section className="bg-black w-full py-20">
      {/* heading */}
      <div className="flex flex-col items-center justify-center gap-5">
         
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-800/40 text-amber-500/90 text-sm font-medium backdrop-blur-sm">

            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]">

              </span>
            </div>
            <span>   فريقنا </span>
            </div>
            <h2 className="text-white text-4xl font-bold">
               تعرف على كتابنا
            </h2>
            <p className="text-gray-400 text-[18px]">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم مع المجتمع.
            </p>
      </div>
      {/* teams */}
       <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-14 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
          {team.map((member) => (
            <div
              key={member.name}
              className="group bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-orange-400/60 rounded-3xl p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300"
            >   
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-white/10 group-hover:border-orange-400 transition-colors duration-300"
                />
                <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-zinc-900 shadow-[0_0_6px_rgba(249,115,22,0.8)]"></span>
              </div>
 
              <div className="text-center">
                <h4 className="text-white font-bold text-base">{member.name}</h4>
                <p className="text-gray-500 text-sm mt-1">{member.role}</p>
              </div>
 
              <div className="flex items-center gap-2 mt-2">
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300">
                  <i className="fa-solid fa-camera text-xs"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300">
                  <i className="fa-solid fa-envelope text-xs"></i>
                </a>
                <a href="#" className="w-8 h-8 rounded-lg bg-white/5 hover:bg-orange-500/20 border border-white/10 hover:border-orange-500 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-all duration-300">
                  <i className="fa-brands fa-x-twitter text-xs"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>



     </section>
     {/* last took  */}
     <section id="took" className='w-full py-20 bg-took'>
       <div className="flex flex-col items-center justify-center">
          <h2 className="text-white text-4xl font-bold">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="text-[18px] text-white text-lg leading-loose text-center mt-5 max-w-2xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء
التحية، لا تتردد في التواصل.
          </p>
          {/* tow btn */}
          <div className=" flex flex-row items-center gap-7 mt-5">
            <button className=' email-btn bg-black text-[20px] text-white py-3 px-5 rounded-[12px] gap-5'>
            <a href="mailto:hello@adasah.com">
              <i class="fa-regular fa-envelope"></i>
              تواصل معنا
            </a>
            </button>
            <button className=' bg-transparent text-white text-[20px] border  border-white py-3 px-5 rounded-[12px] hover:bg-white hover:text-black transition transition-colors' >
            <Link to='/note'>
                  تصفح المقالات 
            </Link>
         </button>
          </div>
       </div>
       
     </section>
    
    
    </>
  )
}
