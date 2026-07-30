
import React from 'react'
import { Link } from 'react-router-dom'
import Data from '../json/posts.json'

export default function Equipment() {
   const filteredPosts = Data.posts.filter(post => post.category === 'معدات');
  return (
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" dir="rtl">
         {filteredPosts.length > 0 ? (
           filteredPosts.map((post) => (
             <div key={post.id} className="flex flex-col bg-[#181818] border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 group">
               <div className="h-56 w-full relative overflow-hidden shrink-0">
                 <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10">{post.category}</span>
               </div>
               <div className="p-6 flex flex-col justify-between grow gap-4 text-right relative">
                 <div className="flex items-center gap-5 text-xs text-gray-400">
                   <div className="flex items-center gap-1"><i className="fa-regular fa-clock"></i> {post.readTime}</div>
                   <div className="flex items-center gap-2"><span>{new Date(post.date).toLocaleDateString('ar-EG', { day: 'numeric', month: 'long' , year:'numeric' })}</span></div>
                 </div>
                 <div className="space-y-3">
                   <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{post.title}</h3>
                   <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                 </div>
                 <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                   <div className="flex items-center gap-3">
                     <img src={post.author.avatar} alt={post.author.name} className="w-11 h-11 rounded-full border-2 border-orange-500/30 object-cover" />
                     <div className="flex flex-col text-right leading-tight">
                       <span className="text-white text-sm font-bold">{post.author.name}</span>
                       <span className="text-gray-500 text-[10px]">{post.author.role}</span>
                     </div>
                   </div>
                   <Link to={`/note/${post.slug}`} className="w-10 h-10 rounded-full bg-[#2e1d12] text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300">
                     <i className="fa-solid fa-angle-left text-sm"></i>
                   </Link>
                 </div>
               </div>
             </div>
           ))
         ) : (
           <p className="text-gray-400 text-center col-span-full text-lg py-10">لا توجد مقالات في هذا التصنيف حالياً.</p>
         )}
       </div>
     )
}

