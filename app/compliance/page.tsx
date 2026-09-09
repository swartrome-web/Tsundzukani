"use client"
import { BadgeCheck, Clock, Building2, ShieldCheck, Landmark, Users, FileText, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'

function RedactedModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white max-w-2xl w-full rounded-xl p-6 border-2 border-black my-8" onClick={e=>e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-green-800 text-sm">✅ VERIFIED ON CIPC - NPC 2026/447870/08</h3>
          <button onClick={onClose} className="bg-black text-white p-1 rounded-full"><X size={16}/></button>
        </div>

        {/* TEXT-ONLY REDACTED CERT - NO IMAGE REQUIRED */}
        <div className="mt-4 bg-slate-50 border-2 border-black rounded-lg p-4 font-mono text-[11px] text-slate-900 leading-relaxed">
          <div className="text-center border-b-2 border-black pb-2 mb-3">
            <p className="font-bold text-sm">COMPANIES AND INTELLECTUAL PROPERTY COMMISSION</p>
            <p className="text-[10px]">COR14.3 - CERTIFICATE OF INCORPORATION</p>
          </div>
          <p><b>Enterprise Name:</b> TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE LEARNING CENTRE NPC</p>
          <p><b>Registration Number:</b> 2026 / 447870 / 08</p>
          <p><b>Enterprise Type:</b> Non Profit Company (NPC)</p>
          <p><b>Registration Date:</b> 09 / 06 / 2026</p>
          <p><b>Status:</b> In Business</p>
          <p><b>Tax Reference:</b> 9167660290</p>
          <p><b>Registered Address:</b> NO785 NGOBI MAIN ROAD, RADIUM 0483, MORETELE, NORTH WEST</p>
          <p className="mt-3"><b>Directors:</b></p>
          <p>1. ODUTOLA M***** ******** - ID: 85****** ****08* - [REDACTED PER POPIA]</p>
          <p>2. KGONOTHI O**** ******** - ID: 90****** ****08* - [REDACTED PER POPIA]</p>
          <p>3. MANYEKE M**** ******** - ID: 78****** ****08* - [REDACTED PER POPIA]</p>
          <div className="mt-4 bg-yellow-100 border border-yellow-600 p-2 text-[9px] font-bold text-center">
            ORIGINAL WITH CIPC STAMP AVAILABLE ON SITE VISIT NO785 - REDACTED FOR POPIA COMPLIANCE - FULL DOCS ON REQUEST TO compliance@tsundzukanicentre.co.za
          </div>
          <p className="mt-2 text-[9px] text-slate-600 text-center">Verify at: www.cipc.co.za / Search Enterprise No: 2026/447870/08</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 text-[10px]">
          <div className="bg-green-50 border border-green-600 p-2 rounded text-slate-900 font-bold">✅ CIPC Verified - In Business</div>
          <div className="bg-green-50 border border-green-600 p-2 rounded text-slate-900 font-bold">✅ Tax 9167660290 - Compliant</div>
        </div>

        <button onClick={onClose} className="mt-4 bg-[#0F2C5C] text-white px-6 py-3 rounded-full text-sm font-bold w-full">Close - POPIA Safe Redacted View</button>
      </div>
    </div>
  )
}

export default function CompliancePage() {
  const [showCert, setShowCert] = useState(false);

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <BackHome/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">

        <div className="bg-[#0F2C5C] text-white p-6 sm:p-8 rounded-xl text-center">
          <h1 className="text-xl sm:text-3xl font-bold flex justify-center items-center gap-2 text-white flex-wrap">
            <ShieldCheck className="text-green-400"/> Compliance Journey: 60% Verified, 40% In Progress
          </h1>
          <p className="mt-2 text-white/90 font-medium text-sm">Honest. Auditable. Ready for CSI Due Diligence.</p>
          <p className="text-[10px] mt-3 opacity-70 font-mono text-white break-words">NPC 2026/447870/08 | Tax 9167660290 | NO785 Radium 0483 | 09/06/2026</p>
        </div>

        <div className="mt-8 grid gap-4">
          <div className="border-2 border-green-600 bg-green-50 p-4 sm:p-5 rounded-xl flex flex-col sm:flex-row justify-between gap-3">
            <div className="flex-1">
              <p className="font-bold text-green-900 flex items-center gap-2 text-sm"><BadgeCheck size={18}/> NPC Certificate - VERIFIED</p>
              <p className="text-sm font-mono mt-1 text-slate-900 font-bold">2026/447870/08 - CIPC - In Business since 09/06/2026</p>
              <p className="text-xs text-slate-800 font-medium mt-1">Name: TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE LEARNING CENTRE</p>
              <div className="mt-3 bg-white border-2 border-black rounded-lg p-3">
                <p className="text-[10px] font-bold text-slate-900 text-center">REDACTED CERT PREVIEW - TEXT ONLY - NO IMAGE NEEDED - POPIA SAFE</p>
                <div className="mt-2 font-mono text-[10px] bg-slate-100 p-2 rounded border text-slate-900">
                  <p>Reg: 2026/447870/08 | Status: In Business | Tax: 9167660290</p>
                  <p>Directors: 3 - IDs REDACTED - Click View for full redacted cert</p>
                </div>
              </div>
            </div>
            <button onClick={() => setShowCert(true)} className="text-xs text-green-800 font-bold underline bg-white px-4 py-2 rounded-full border-2 border-green-700 h-fit shrink-0 hover:bg-green-100">View (Redacted Text) →</button>
          </div>

          <div className="border-2 border-green-600 bg-green-50 p-4 sm:p-5 rounded-xl">
            <p className="font-bold text-green-900 flex items-center gap-2 text-sm"><BadgeCheck size={18}/> SARS Tax Compliant - REGISTERED</p>
            <p className="text-sm font-mono mt-1 text-slate-900 font-bold">Tax No: 9167660290</p>
            <p className="text-xs text-slate-800 font-medium">Tax Clearance PIN available on request - For PBO application</p>
          </div>

          <div className="border-2 border-green-600 bg-green-50 p-4 sm:p-5 rounded-xl">
            <p className="font-bold text-green-900 flex items-center gap-2 text-sm"><Users size={18}/> Board Members Listed - 3 Directors</p>
            <p className="text-sm mt-1 text-slate-900 font-bold">ODUTOLA Mirriam (Chair) | KGONOTHI Oniccah (Sec) | MANYEKE Maria (Treas)</p>
            <p className="text-[10px] text-slate-800 font-medium mt-1 bg-white p-2 rounded border-2 border-black">POPIA: IDs redacted • Minutes 01/09/2026 • BR-01 to BR-04 signed • 3 signatories, 2-to-sign</p>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 p-4 sm:p-5 rounded-xl">
            <p className="font-bold text-yellow-900 flex items-center gap-2 text-sm"><Clock size={18}/> PBO / 18A - IN PROGRESS ⏳</p>
            <p className="text-sm mt-1 text-slate-900 font-bold">Application to SARS TEU - teu@sars.gov.za - Ref: PBO-2026/447870/08</p>
            <p className="text-xs text-slate-800 font-medium mt-1">Target: PBO 9300XXXXX in 4-8 weeks • 18A retroactive to Sep 26 • Donations now still qualify</p>
          </div>

          <div className="border-2 border-yellow-400 bg-yellow-50 p-4 sm:p-5 rounded-xl">
            <p className="font-bold text-yellow-900 flex items-center gap-2 text-sm"><Building2 size={18}/> DSD Partial Care License - IN PROGRESS ⏳</p>
            <p className="text-sm mt-1 text-slate-900 font-bold">NO785 Ngobi Main Road, Radium - 60 children ages 2-5</p>
            <p className="text-xs text-slate-800 font-medium mt-1">Next: Form 11 + Form 16 at NW DSD • Health/Fire/Zoning Week 1 • Inspection Week 2</p>
          </div>

          <div className="border-2 border-blue-400 bg-blue-50 p-4 sm:p-5 rounded-xl">
            <p className="font-bold text-blue-900 flex items-center gap-2 text-sm"><Landmark size={18}/> Bank Account - CAPITEC PLACEHOLDER</p>
            <p className="text-sm font-mono mt-1 text-slate-900 font-bold break-words">Holder: TSUNDZUKANI ECD NPC (2026/447870/08) - NOT personal name</p>
            <p className="text-xs text-slate-800 font-medium mt-1">Acc: To be updated not later than Oct 2026 after BR-02/2026 • 3 signatories, 2-to-sign, EFT only</p>
          </div>
        </div>

        <div className="mt-8 bg-white border-2 border-black p-4 rounded-xl text-[11px] text-slate-900">
          <p className="font-bold text-slate-900">🛡️ POPIA & Honesty Statement:</p>
          <p className="font-medium mt-1">No images required. Text-only redacted modal. No fake license numbers. No personal bank holders. Full docs on request: compliance@tsundzukanicentre.co.za</p>
        </div>

        <div className="mt-8 text-center flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/csi-proposal" className="bg-[#0F2C5C] text-white px-8 py-3 rounded-full font-bold inline-flex items-center gap-2 justify-center">
            <FileText size={16}/> View CSI Proposal (R50k Tier 2)
          </a>
          <a href="https://www.cipc.co.za" target="_blank" className="border-2 border-black bg-white text-slate-900 px-6 py-3 rounded-full text-sm inline-flex items-center gap-1 justify-center font-bold">
            Verify CIPC <ExternalLink size={12}/>
          </a>
        </div>
      </div>

      <RedactedModal open={showCert} onClose={() => setShowCert(false)} />
      <Footer/>
    </main>
  )
}
