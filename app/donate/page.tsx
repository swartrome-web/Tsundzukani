"use client"
import { BadgeCheck, Clock, Building2, ShieldCheck, Landmark, Users, ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image"
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'

export default function DonationsSection() {
  return (
    <section className="bg-[#FFFBEB] w-full overflow-x-hidden">
      <BackHome/>

      <div className="relative h-[400px] sm:h-[450px] w-full">
        <img src="DSC_1198.JPG" alt="ECD Kids" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C5C]/90 to-transparent flex flex-col justify-end p-6 sm:p-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            Help Us Raise The Future
          </h1>
          <p className="mt-2 text-white text-sm md:text-base text-center font-bold">— Every Rand Builds A Dream —</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10 w-full">

        <h2 className="text-center text-xl md:text-2xl font-bold text-[#0F2C5C]">
          Your donation is DEDICATED to:
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#D6E7FF] rounded-xl p-6 text-center border border-[#0F2C5C]/10">
            <div className="text-2xl">🍲</div>
            <p className="mt-1 text-xl font-bold text-[#0F2C5C]">Feeding Scheme</p>
          </div>
          <div className="bg-[#D6E7FF] rounded-xl p-6 text-center border border-[#0F2C5C]/10">
            <div className="text-2xl">📚</div>
            <p className="mt-1 text-xl font-bold text-[#0F2C5C]">Learning Resources</p>
          </div>
        </div>

        {/* FUNDS RAISED - FIXED VISIBILITY */}
        <div className="mt-6 bg-[#EFF6FF] rounded-xl p-4 border border-slate-200">
          <p className="font-bold text-[#0F2C5C] text-slate-900">Funds Raised So Far</p>
          <div className="mt-2 h-3 w-full bg-white rounded-full overflow-hidden border">
            <div className="h-full w-[49%] bg-[#0F2C5C] rounded-full" />
          </div>
          <p className="mt-2 text-xs text-slate-900 font-semibold">
            R 24,350 raised of R50,000 goal • 49% • 73 donors • Updated Jul 2026
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold text-slate-900">
            <span className="bg-white px-3 py-1 rounded-full border">💛 CSI Donations Section</span>
            <span className="bg-white px-3 py-1 rounded-full border">👥 Community Aid</span>
            <span className="bg-white px-3 py-1 rounded-full border">📍 Transparent Use</span>
          </div>
        </div>

        {/* SUPPORT 60 CHILDREN - FIXED */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C5C] flex justify-center items-center gap-2 flex-wrap">
            <span className="text-red-500">❤️</span> Support 60 Children at NO785 Radium
          </h2>
          <p className="mt-2 text-sm text-slate-900 font-bold">SECURE • POPIA Safe</p>
          <p className="text-xs text-slate-800 font-medium">NPC 2026/447870/08 | Tax 9167660290 | Capitec 2-to-sign | BR-02</p>

          <div className="mt-6 mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            <div className="bg-green-50 border-2 border-green-600 rounded-lg p-3 text-[11px] text-slate-900 font-bold">
              ◎ VERIFIED: NPC 2026/447870/08, Tax 9167660290, 3 directors 2-to-sign
            </div>
            <div className="bg-yellow-50 border-2 border-yellow-500 rounded-lg p-3 text-[11px] text-slate-900 font-bold">
              ◉ BANK: Holder = FULL NPC name, EFT only - Letter Tue 02/09
            </div>
          </div>
        </div>

        {/* TIERS - FIXED VISIBILITY */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tier 1 */}
          <div className="bg-white border-2 border-[#FFD93D] rounded-xl p-5 relative">
            <span className="absolute -top-3 left-4 bg-[#FFD93D] text-[9px] font-bold px-3 py-1 rounded-full text-slate-900 border">PERSONAL • SECURE</span>
            <p className="font-bold text-[#0F2C5C] text-sm">Tier 1 - Personal Donations</p>
            <p className="text-xl font-extrabold mt-1 text-slate-900">R100 - R4,999</p>
            <div className="mt-4 bg-[#FFFBEB] p-3 rounded-lg text-[11px] leading-tight text-slate-900 border">
              <p className="font-bold">Preferred Ref</p>
              <p>Your Name/Business + Blog:Yes/No</p>
              <p>e.g Thabo Yes</p>
              <p className="mt-2 font-bold">Thank You Blog - At Will</p>
              <ul className="list-disc pl-4 mt-1 space-y-1 font-medium">
                <li><b>ANON:</b> DONATION ANON BLOG.ANON → anon only</li>
                <li><b>YES:</b> DONATION THABO BLOG:YES → first name only</li>
                <li><b>NO:</b> DONATION LERATO BLOG:NO → private</li>
              </ul>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="bg-[#0F2C5C] text-white rounded-xl p-5">
            <p className="text-[#FFD93D] font-bold text-sm">Tier 2 - CSI Ready</p>
            <p className="text-xl font-extrabold mt-1 text-white">R50,000</p>
            <p className="mt-3 text-[11px] leading-tight text-white/90 font-medium">
              Invoice INV-2026/447870/08/001 - Holder = NPC name - 2-to-sign
            </p>
            <p className="mt-3 text-[9px] text-white/60">Ref: INV-2026-447870-08-001 + Name</p>
            <a href="/csi-proposal" className="mt-3 bg-white text-[#0F2C5C] px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#FFD93D]">
              <FileText size={16}/> View CSI Proposal
            </a>
          </div>

          {/* Tier 3 */}
          <div className="bg-white border-2 border-gray-800 rounded-xl p-5">
            <p className="font-bold text-[#0F2C5C] text-sm">Tier 3 - Build</p>
            <p className="text-xl font-extrabold mt-1 text-slate-900">R120,000</p>
            <p className="mt-3 text-[11px] text-slate-900 font-medium">Full year + toilets + JoJo. Naming classroom.</p>
          </div>
        </div>

        <p className="mt-6 text-center text-[10px] text-slate-900 font-bold">NPC 2026/447870/08 | NO785 Radium | compliance@tsundzukanicentre.co.za | BR-02 controls</p>

        {/* EFT + QR - FIXED */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white border-2 border-[#0F2C5C] rounded-xl p-5">
            <p className="font-bold text-sm flex gap-2 text-slate-900">🏛️ EFT / Bank Transfer - SECURE</p>
            <div className="mt-4 border-2 border-black rounded-lg p-4 text-xs leading-tight text-slate-900 bg-white font-medium">
              <p><b>Holder:</b> TSUNDZUKANI ECD AND AFTERCARE LEARNING CENTRE NPC</p>
              <p><b>Reg:</b> 2026/447870/08</p>
              <p><b>Bank:</b> Capitec Business</p>
              <p className="bg-yellow-100 p-1 mt-1"><b>Acc No:</b> TO BE UPDATED TUE 02/09/2026 after BR-02</p>
              <p className="bg-yellow-100 p-1"><b>Branch:</b> Universal 470010</p>
              <p className="mt-2 bg-green-100 p-1"><b>Ref (SECURE):</b> Name/Company + Blog:Yes/No</p>
              <p className="mt-2"><b>Control:</b> 3 directors, 2-to-sign, EFT only, R5k limit - BR-02/2026</p>
            </div>
            <button
              onClick={()=>navigator.clipboard.writeText('Holder: TSUNDZUKANI ECD AND AFTERCARE LEARNING CENTRE NPC\nReg: 2026/447870/08\nBank: Capitec Business\nBranch: 470010\nRef: Name/Company + Blog Yes/No')}
              className="mt-4 text-[11px] border-2 border-black px-4 py-2 rounded-full font-bold text-slate-900 bg-white hover:bg-slate-100"
            >
              📋 Copy Secure Banking Details
            </button>
          </div>

          <div className="bg-white border-2 border-black rounded-xl p-5 text-center">
            <p className="font-bold text-sm text-slate-900">QR - Secure</p>
            <div className="mt-4 border-2 border-dashed border-black rounded-lg h-44 flex flex-col items-center justify-center bg-white">
              <p className="text-[11px] text-slate-900 font-bold">QR Placeholder</p>
              <p className="text-xs text-slate-800">capitec.com/pay/202644787008</p>
              <p className="text-[9px] text-slate-700 mt-1 font-medium">Live after Tue - Ref auto-sanitized</p>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-400 rounded-lg p-3 text-left text-[10px] text-slate-900 font-medium">
              <b>Tax Note:</b><br/>PBO Pending Ref PBO-2026/447870/08 - 18A retro to 09/06/2026 after approval - Ref secure = no fraud.
            </div>
          </div>
        </div>

        {/* DONORS WALL - FIXED */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-[#0F2C5C]">Thank You to Our Donors Wall</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Thandi M. • R500","Mike S. • R150","Zanele K. • R500","The Smith Family • R500","Local Business Co. • R1500"].map(d=>(
              <span key={d} className="bg-[#D6E7FF] px-3 py-1 rounded-full text-xs text-slate-900 font-bold border">{d}</span>
            ))}
          </div>
        </div>

      </div>
      <Footer/>
    </section>
  )
}
