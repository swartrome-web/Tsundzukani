// app/compliance/page.tsx - CRISP + HONEST + CSI-READY + LUCIDE
"use client"
import { BadgeCheck, Clock, Building2, ShieldCheck, Landmark, Users, ArrowLeft, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import ComplianceViewer from '@/components/ComplianceViewer'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'
export default function CompliancePage() {
  const [showCert, setShowCert] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      
      <BackHome/>

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* HEADER - HONEST SCORE */}
        <div className="bg-[#0F2C5C] text-white p-8 rounded-xl text-center">
          <h1 className="text-3xl font-bold flex justify-center items-center gap-2">
            <ShieldCheck className="text-green-400"/> Compliance Journey: 60% Verified, 40% In Progress
          </h1>
          <p className="mt-2 opacity-80">Honest. Auditable. Ready for CSI Due Diligence.</p>
          <p className="text-xs mt-3 opacity-60 font-mono">NPC 2026/447870/08 | Tax 9167660290 | NO785 Radium 0483 | 09/06/2026</p>
        </div>

        <div className="mt-8 grid gap-4">
          {/* 1 - NPC - VERIFIED GREEN */}
          <div className="border-2 border-green-600 bg-green-50 p-5 rounded-xl flex justify-between items-start">
            <div>
              <p className="font-bold text-green-800 flex items-center gap-2"><BadgeCheck size={18}/> NPC Certificate - VERIFIED</p>
              <p className="text-sm font-mono mt-1">2026/447870/08 - CIPC - In Business since 09/06/2026</p>
              <p className="text-xs text-gray-600">Name: TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE LEARNING CENTRE</p>
            </div>
            <button onClick={() => setShowCert(true)} className="text-xs text-green-700 font-bold underline  hover:text-[#0F2C5C]">View (Redacted) →</button>
          </div>

          {/* 2 - TAX - VERIFIED */}
          <div className="border-2 border-green-600 bg-green-50 p-5 rounded-xl">
            <p className="font-bold text-green-800 flex items-center gap-2"><BadgeCheck size={18}/> SARS Tax Compliant - REGISTERED</p>
            <p className="text-sm font-mono mt-1">Tax No: 9167660290</p>
            <p className="text-xs text-gray-600">Tax Clearance PIN available on request - For PBO application</p>
          </div>

          {/* 3 - BOARD - VERIFIED */}
          <div className="border-2 border-green-600 bg-green-50 p-5 rounded-xl">
            <p className="font-bold text-green-800 flex items-center gap-2"><Users size={18}/> Board Members Listed - 3 Directors</p>
            <p className="text-sm mt-1">ODUTOLA Mirriam (Chair) | KGONOTHI Oniccah (Sec) | MANYEKE Maria (Treas)</p>
            <p className="text-[10px] text-gray-500 mt-1">POPIA: IDs redacted • Minutes 01/09/2026 • BR-01 to BR-04 signed • 3 signatories, 2-to-sign</p>
          </div>

          {/* 4 - PBO - YELLOW PENDING - HONEST */}
          <div className="border-2 border-yellow-400 bg-yellow-50 p-5 rounded-xl">
            <p className="font-bold text-yellow-800 flex items-center gap-2"><Clock size={18}/> PBO / 18A - IN PROGRESS ⏳</p>
            <p className="text-sm mt-1">Application to SARS TEU - teu@sars.gov.za - Ref: PBO-2026/447870/08</p>
            <p className="text-xs text-gray-600">Target: PBO 9300XXXXX in 4-8 weeks • 18A retroactive to Sep 26 • Donations now still qualify for tax cut later</p>
          </div>

          {/* 5 - DSD - YELLOW PENDING */}
          <div className="border-2 border-yellow-400 bg-yellow-50 p-5 rounded-xl">
            <p className="font-bold text-yellow-800 flex items-center gap-2"><Building2 size={18}/> DSD Partial Care License - IN PROGRESS ⏳</p>
            <p className="text-sm mt-1">NO785 Ngobi Main Road, Radium - 60 children ages 2-5</p>
            <p className="text-xs text-gray-600">Next: Form 11 + Form 16 at NW DSD (Bojanala District) • Health/Fire/Zoning Week 1 • Inspection Week 2 • Cert Week 3-4 → Subsidy R17/child/day</p>
          </div>

          {/* 6 - BANK - BLUE PLACEHOLDER - HONEST */}
          <div className="border-2 border-blue-400 bg-blue-50 p-5 rounded-xl">
            <p className="font-bold text-blue-800 flex items-center gap-2"><Landmark size={18}/> Bank Account - CAPITEC PLACEHOLDER</p>
            <p className="text-sm font-mono mt-1">Holder: TSUNDZUKANI ECD NPC (2026/447870/08) - NOT personal name</p>
            <p className="text-xs text-gray-600">Acc: To be updated not later than Oct 2026 after BR-02/2026 signing at Capitec Branch • 3 signatories, 2-to-sign, EFT only, R5k cash limit • Confirmation letter with stamp to be uploaded</p>
          </div>
        </div>

        <div className="mt-8 bg-gray-50 p-4 rounded-xl text-[11px] text-gray-500">
          <p className="font-bold">🛡️ POPIA & Honesty Statement:</p>
          <p>We show VERIFIED vs IN PROGRESS clearly. No fake license numbers. No personal bank holders. Redacted certs hide IDs. Full docs on request: <a href="mailto:tsundzukaniecd@gmail.com?subject=Enquiry%20via20Tsundzukani%Website" className="hover:text-[#FFD93D]">compliance@tsundzukanicentre.co.za</a> We believe honesty = trust = funding. This is Behind the Deal #4 Risk.</p>
        </div>

        <div className="mt-8 text-center flex gap-3 justify-center">
          <a href="/csi-proposal" className="bg-[#0F2C5C] text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 hover:bg-[#FFD93D]">
            <FileText size={16}/> View CSI Proposal (R50k Tier 2)
          </a>
          <a href="https://www.cipc.co.za" target="_blank" className="border border-gray-300 px-6 py-3 rounded-full text-sm inline-flex items-center gap-1">
            Verify CIPC <ExternalLink size={12}/>
          </a>
        </div>
      </div>

      {/* MODAL - Redacted Cert Viewer */}
      {showCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowCert(false)}>
          <div className="bg-white max-w-2xl w-full rounded-xl p-6" onClick={e=>e.stopPropagation()}>
            <h3 className="font-bold text-green-700">✅ VERIFIED ON CIPC - NPC 2026/447870/08</h3>
            <div className="mt-4 bg-gray-100 p-4 font-mono text-xs rounded-lg">
              <p>Enterprise: TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE LEARNING CENTRE</p>
              <p>Reg No: 2026/447870/08</p>
              <p>Status: In Business</p>
              <p>Date: 09/06/2026</p>
              <p>Tax: 9167660290</p>
              <p>Address: NO785 NGOBI MAIN ROAD, RADIUM 0483</p>
            </div>
            <p className="text-[10px] text-gray-400 mt-3">Redacted image: /certs/tsundzukani_redacted_cert.png - No full IDs shown - POPIA safe</p>
            <button onClick={() => setShowCert(false)} className="mt-4 bg-[#0F2C5C] text-white px-4 py-2 rounded-lg text-sm">Close</button>
          </div>
        </div>
      )}
      <Footer/>
    </main>
  )
}