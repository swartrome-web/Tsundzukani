// components/DonationsSection.tsx - SIMPLE DESIGN v4 - Matches Screenshots - No Sanitizing
"use client"
import { BadgeCheck, Clock, Building2, ShieldCheck, Landmark, Users, ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import Image from "next/image"
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'

export default function DonationsSection() {
  return (
    <section className="bg-[#FFFBEB]">
      <BackHome/>

      {/* HERO - Help Us Raise The Future */}

      <div className="relative h-[450px]">
        <img src="DSC_1198.JPG" alt="ECD Kids" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C5C]/90 to-transparent flex flex-col justify-end p-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white text-center">
            Help Us Raise The Future
          </h1>
          <p className="mt-2 text-white/90 text-sm md:text-base text-center">— Every Rand Builds A Dream —</p>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-4 py-10">

        {/* YOUR DONATION IS DEDICATED TO */}
        <h2 className="text-center text-xl md:text-2xl font-bold text-[#0F2C5C]">
          Your donation is DEDICATED to:
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#D6E7FF] rounded-xl p-6 text-center">
            <div className="text-2xl">🍲</div>
            <p className="mt-1 text-xl font-bold text-[#0F2C5C]">Feeding Scheme</p>
          </div>
          <div className="bg-[#D6E7FF] rounded-xl p-6 text-center">
            <div className="text-2xl">📚</div>
            <p className="mt-1 text-xl font-bold text-[#0F2C5C]">Learning Resources</p>
          </div>
        </div>

        {/* FUNDS RAISED */}
        <div className="mt-6 bg-[#EFF6FF] rounded-xl p-4">
          <p className="font-bold text-[#0F2C5C]">Funds Raised So Far</p>
          <div className="mt-2 h-3 w-full bg-white rounded-full overflow-hiddens">
            <div className="h-full w-[49%] bg-[#0F2C5C] rounded-full" />
          </div>
          <p className="mt-2 text-xs text-gray-700">
            R 24,350 raised of R50,000 goal • 49% • 73 donors • Updated Jul 2026
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-[10px]">
            <span className="bg-white px-3 py-1 rounded-full">💛 CSI Donations Section</span>
            <span className="bg-white px-3 py-1 rounded-full">👥 Community Aid & Development Programs</span>
            <span className="bg-white px-3 py-1 rounded-full">📍 Transparent Use of Funds</span>
          </div>
        </div>

        {/* SUPPORT 60 CHILDREN */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0F2C5C] flex justify-center items-center gap-2">
            <span className="text-red-500">❤️</span> Support 60 Children at NO785 Radium
          </h2>
          <p className="mt-2 text-sm text-gray-600">SECURE • POPIA Safe</p>
          <p className="text-xs text-gray-500">NPC 2026/447870/08 | Tax 9167660290 | Capitec 2-to-sign | BR-02</p>

          <div className="mt-6 mx-auto max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
            <div className="bg-green-50 border border-green-600 rounded-lg p-3 text-[11px]">
              <b>◎ VERIFIED:</b> NPC 2026/447870/08, Tax 9167660290, 3 directors 2-to-sign
            </div>
            <div className="bg-yellow-50 border border-yellow-500 rounded-lg p-3 text-[11px]">
              <b>◉ BANK:</b> Holder = FULL NPC name, EFT only - Letter Tue 02/09
            </div>
          </div>
        </div>

        {/* TIERS */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tier 1 */}
          <div className="bg-white border-2 border-[#FFD93D] rounded-xl p-5 relative">
            <span className="absolute -top-3 left-4 bg-[#FFD93D] text-[9px] font-bold px-3 py-1 rounded-full">PERSONAL • SECURE</span>
            <p className="font-bold text-[#0F2C5C] text-sm">Tier 1 - Personal Donations</p>
            <p className="text-xl font-extrabold mt-1">R100 - R4,999</p>
            <div className="mt-4 bg-[#FFFBEB] p-3 rounded-lg text-[11px] leading-tight">
              <p>Preferred Ref</p>
              <p>Your Name/Business + Blog:Yes/No</p>
              <p>e.g Thabo Yes</p>
              <p className="mt-2 font-bold">Thank You Blog - At Will</p>
              <ul className="list-disc pl-4 mt-1 space-y-1">
                <li><b>ANON:</b> DONATION ANON BLOG.ANON → anon only</li>
                <li><b>YES:</b> DONATION THABO BLOG:YES → first name only</li>
                <li><b>NO:</b> DONATION LERATO BLOG:NO → private</li>
              </ul>
            </div>
          </div>

          {/* Tier 2 */}
          <div className="bg-[#0F2C5C] text-white rounded-xl p-5">
            <p className="text-[#FFD93D] font-bold text-sm flex gap-2">Tier 2 - CSI Ready</p>
            <p className="text-xl font-extrabold mt-1">R50,000</p>
            <p className="mt-3 text-[11px] leading-tight">
              Invoice INV-2026/447870/08/001 - Holder = NPC name - 2-to-sign
            </p>
            <p className="mt-3 text-[9px] text-white/60">Ref: INV-2026-447870-08-001 + Name</p>

            <a href="/csi-proposal" className="mt-3 bg-white text-[#0F2C5C] px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#FFD93D]">
              <FileText size={16}/> View CSI Proposal
            </a>
            
          </div>

          {/* Tier 3 */}
          <div className="bg-white border border-gray-800 rounded-xl p-5">
            <p className="font-bold text-[#0F2C5C] text-sm">Tier 3 - Build</p>
            <p className="text-xl font-extrabold mt-1">R120,000</p>
            <p className="mt-3 text-[11px] text-gray-600">Full year + toilets + JoJo. Naming classroom.</p>
          </div>
        </div>

        <p className="mt-6 text-center text-[9px] text-gray-500">NPC 2026/447870/08 | NO785 Radium | <a href="mailto:tsundzukaniecd@gmail.com?subject=Enquiry%20via20Tsundzukani%Website" className="hover:text-[#FFD93D]">compliance@tsundzukanicentre.co.za</a> | BR-02 controls</p>

        {/* EFT + QR */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="bg-white border-2 border-[#0F2C5C] rounded-xl p-5">
            <p className="font-bold text-sm flex gap-2">🏛️ EFT / Bank Transfer - SECURE</p>
            <div className="mt-4 border border-black rounded-lg p-4 text-xs leading-tight">
              <p><b>Holder:</b> TSUNDZUKANI ECD AND AFTERCARE LEARNING CENTRE NPC</p>
              <p><b>Reg:</b> 2026/447870/08</p>
              <p><b>Bank:</b> Capitec Business</p>
              <p className="bg-yellow-100"><b>Acc No:</b> TO BE UPDATED TUE 02/09/2026 after BR-02</p>
              <p className="bg-yellow-100"><b>Branch:</b> Universal 470010</p>
              <p className="mt-2 bg-green-100"><b>Ref (SECURE):</b> Name/Company + Blog:Yes/No</p>
              <p className="mt-2"><b>Control:</b> 3 directors, 2-to-sign, EFT only, R5k limit - BR-02/2026</p>
            </div>
            <button
              onClick={()=>navigator.clipboard.writeText('Holder: TSUNDZUKANI ECD AND AFTERCARE LEARNING CENTRE NPC\nReg: 2026/447870/08\nBank: Capitec Business\nBranch: 470010\nRef: Name/Company + Blog Yes/No')}
              className="mt-4 text-[11px] border border-black px-4 py-2 rounded-full font-bold"
            >
              📋 Copy Secure Banking Details
            </button>
          </div>

          <div className="bg-white border border-black rounded-xl p-5 text-center">
            <p className="font-bold text-sm">☰ QR - Secure</p>
            <div className="mt-4 border-2 border-dashed border-black rounded-lg h-44 flex flex-col items-center justify-center">
              <p className="text-[11px] text-gray-500">QR Placeholder</p>
              <p className="text-xs text-gray-500">capitec.com/pay/202644787008</p>
              <p className="text-[9px] text-gray-500 mt-1">Live after Tue - Ref auto-sanitized</p>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-left text-[10px]">
              <b>Tax Note:</b><br/>PBO Pending Ref PBO-2026/447870/08 - 18A retro to 09/06/2026 after approval - Ref secure = no fraud.
            </div>
          </div>
        </div>

        {/* DONORS WALL */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-[#0F2C5C]">Thank You to Our Donors Wall</h3>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {["Thandi M. • R500","Mike S. • R150","Zanele K. • R500","The Smith Family • R500","Local Business Co. • R1500"].map(d=>(
              <span key={d} className="bg-[#D6E7FF] px-3 py-1 rounded-full text-xs">{d}</span>
            ))}
          </div>
        </div>

      </div>
      <Footer/>
    </section>
  )
}