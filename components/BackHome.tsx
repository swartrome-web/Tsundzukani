'use client'
import Image from 'next/image'

export default function BackHome() {
    return (
        <nav className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 py-3 bg-white border-b-4 border-[#0F2C5C] w-full">
        <div className="flex items-center gap-2 font-bold text-[#0F2C5C] text-sm sm:text-base">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#0F2C5C] bg-white shrink-0">
            <img 
              src="/tsundzukani-icon.jpg" 
              alt="Tsundzukani Icon" 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
          <span className="text-slate-900 font-extrabold flex items-center gap-1">
        TSUNDZUKANI ECD
          </span>
        </div>
        <a href="/" className="text-xs sm:text-sm font-bold text-slate-900 bg-white border-2 border-black px-3 sm:px-4 py-1.5 rounded-full hover:bg-[#FFD93D] hover:text-[#0F2C5C] transition shrink-0">
          ← Back Home
        </a>
      </nav>
    )
}
