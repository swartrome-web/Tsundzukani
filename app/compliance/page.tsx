'use client'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'

export default function CompliancePage() {
  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <BackHome/>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full">

        <div className="bg-[#0F2C5C] text-white p-6 sm:p-8 rounded-2xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Compliance & Verification</h1>
          <p className="mt-2 text-[#FFD93D] font-bold text-sm">One Link - All Proof - 60% Verified / 40% Pending - Honest</p>
          <p className="mt-2 text-[10px] text-white/80 font-mono break-words">NPC 2026/447870/08 | Tax 9167660290 | NO785 Radium | BR-02 Controls</p>
        </div>

        {/* VERIFIED TODAY */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-2 border-green-600 p-4 rounded-xl">
            <p className="font-bold text-green-900 text-sm">✅ CIPC VERIFIED</p>
            <p className="text-xs text-slate-900 font-bold mt-2">Reg: 2026/447870/08</p>
            <p className="text-xs text-slate-800 mt-1">Name: TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE LEARNING CENTRE NPC</p>
            <p className="text-xs text-slate-800">Status: In Business 09/06/2026 - Search cipc.co.za</p>
            <div className="mt-3 bg-white border-2 border-black rounded-lg p-2">
              <p className="text-[9px] font-bold text-slate-900 text-center mb-1">REDACTED CIPC CERT - ID REDACTED - POPIA SAFE</p>
              <img src="/compliance/cipc-redacted.jpg" alt="CIPC Redacted" className="w-full h-48 object-contain bg-slate-100 rounded border" />
              <p className="text-[9px] text-slate-700 mt-1 text-center">Full cert on request - Directors ID redacted per POPIA</p>
            </div>
          </div>

          <div className="bg-green-50 border-2 border-green-600 p-4 rounded-xl">
            <p className="font-bold text-green-900 text-sm">✅ TAX & GOVERNANCE</p>
            <p className="text-xs text-slate-900 font-bold mt-2">Tax Ref: 9167660290 | PIN Available</p>
            <p className="text-xs text-slate-800 mt-1">3 Directors: ODUTOLA Mirriam (Chair), KGONOTHI Ofentse (Sec), MANYEKE Mmanoko (Treas)</p>
            <p className="text-xs text-slate-800">Controls: BR-01 to BR-04, Minutes 01/09/2026, 2-to-sign, EFT only, R5k limit</p>
            <div className="mt-3 bg-white border-2 border-black rounded-lg p-2">
              <p className="text-[9px] font-bold text-slate-900 text-center mb-1">REDACTED BR-02 - SIGNATURES REDACTED</p>
              <img src="/compliance/br02-redacted.jpg" alt="BR02 Redacted" className="w-full h-48 object-contain bg-slate-100 rounded border" />
              <p className="text-[9px] text-slate-700 mt-1 text-center">Signatures redacted - Full on site visit NO785</p>
            </div>
          </div>
        </div>

        {/* BANK - HONEST */}
        <div className="mt-6 bg-[#0F2C5C] text-white p-5 rounded-xl border-2 border-[#0F2C5C]">
          <p className="font-bold text-[#FFD93D] text-sm">🏛️ BANK - HONEST - NO LBJ - VERIFIED</p>
          <div className="mt-3 bg-white text-slate-900 p-4 rounded-lg text-xs font-bold leading-relaxed">
            <p>Holder: TSUNDZUKANI ECD AND AFTERCARE LEARNING CENTRE NPC</p>
            <p>Reg: 2026/447870/08</p>
            <p>Bank: Capitec Business Global One</p>
            <p className="bg-yellow-100 p-1 mt-1 border">Acc No: TO BE UPDATED TUE 02/09/2026 after BR-02 signing</p>
            <p className="bg-yellow-100 p-1 border">Branch: Universal 470010</p>
            <p className="mt-2">Ref: Name/Company + Blog:Yes/No OR INV-2026/447870/08/001 + Name</p>
            <p className="mt-1">Control: 3 directors, 2-to-sign, EFT only, R5k cash limit - BR-02/2026</p>
            <p className="mt-2 text-[10px] font-normal">Confirmation letter available Tue - No personal holder - No fraud</p>
          </div>
          <div className="mt-3 bg-white border-2 border-dashed border-white/50 rounded-lg p-2">
            <p className="text-[9px] font-bold text-slate-900 text-center">REDACTED BANK LETTER - ACC NO REDACTED UNTIL TUE</p>
            <img src="/compliance/bank-redacted.jpg" alt="Bank Redacted" className="w-full h-32 object-contain bg-slate-100 rounded mt-1" />
          </div>
        </div>

        {/* PENDING - HONEST */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-xl">
            <p className="font-bold text-slate-900 text-xs">⏳ NPO PENDING</p>
            <p className="text-[11px] text-slate-800 mt-2 font-medium">Applied Mon 01/09/2026 - Receipt NW - Cert NPO-285-XXX pending 2-4 weeks - DSD NW</p>
            <img src="/compliance/npo-receipt-redacted.jpg" alt="NPO Receipt" className="w-full h-24 object-contain bg-white rounded border mt-2" />
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-xl">
            <p className="font-bold text-slate-900 text-xs">⏳ PARTIAL CARE PENDING</p>
            <p className="text-[11px] text-slate-800 mt-2 font-medium">Form 11 submission Wed 03/09/2026 - Ref NW-BOJ-PC-2026-XXXXX - Inspection week 2 - License 60 kids</p>
          </div>
          <div className="bg-yellow-50 border-2 border-yellow-500 p-4 rounded-xl">
            <p className="font-bold text-slate-900 text-xs">⏳ PBO 18A PENDING - HONEST</p>
            <p className="text-[11px] text-slate-800 mt-2 font-medium">Application Mon 01/09/2026 to SARS TEU teu@sars.gov.za - Ref PBO-2026/447870/08 - 4-8 weeks - Retro to 09/06/2026 - NO FAKE 9300 number. We do NOT issue fake 18A.</p>
          </div>
        </div>

        {/* POPIA NOTE */}
        <div className="mt-8 bg-white border-2 border-black p-4 rounded-xl text-center">
          <p className="font-bold text-slate-900 text-sm">🔒 POPIA SAFE - REDACTED IMAGES</p>
          <p className="text-[11px] text-slate-800 mt-2 font-medium">All images redacted: IDs blacked out, signatures blurred, bank acc partially hidden until Tue. Full originals available on site visit NO785 Ngobi Main Road, Radium or on request to compliance@tsundzukanicentre.co.za with NDA. No personal data on website per POPIA Act 4 of 2013.</p>
          <p className="text-[10px] text-slate-600 mt-2">Images stored as /compliance/cipc-redacted.jpg, /compliance/br02-redacted.jpg - Low res - No EXIF - Sanitized</p>
        </div>

        <p className="mt-8 text-center text-[10px] text-slate-900 font-bold">NPC 2026/447870/08 | Tax 9167660290 | NO785 Radium | compliance@tsundzukanicentre.co.za | 0647919022</p>
      </div>
      <Footer/>
    </main>
  )
}
