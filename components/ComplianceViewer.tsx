"use client"
import { BadgeCheck, Clock, Building2, ShieldCheck, Landmark, Users, FileText, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export default function ComplianceViewer() {
  const [showCert, setShowCert] = useState(false);

  return (
    <>
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#0F2C5C] text-white p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
              <ShieldCheck className="text-green-400" /> Compliance Journey: 60% Verified, 40% In Progress
            </h2>
            <p className="text-xs mt-2 opacity-60 font-mono">NPC 2026/447870/08 | Tax 9167660290 | NO785 Radium | 09/06/2026</p>
          </div>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {/* VERIFIED */}
            <div className="border-2 border-green-600 bg-green-50 p-4 rounded-xl">
              <p className="font-bold text-green-800 flex items-center gap-2"><BadgeCheck size={16}/> NPC Certificate - VERIFIED</p>
              <p className="text-xs font-mono mt-1">2026/447870/08 - CIPC In Business</p>
              <button onClick={()=>setShowCert(true)} className="text-xs text-green-700 underline mt-2">View (Redacted) →</button>
            </div>

            <div className="border-2 border-green-600 bg-green-50 p-4 rounded-xl">
              <p className="font-bold text-green-800 flex items-center gap-2"><BadgeCheck size={16}/> SARS Tax - REGISTERED</p>
              <p className="text-xs font-mono mt-1">9167660290 - PIN on request</p>
            </div>

            <div className="border-2 border-green-600 bg-green-50 p-4 rounded-xl">
              <p className="font-bold text-green-800 flex items-center gap-2"><Users size={16}/> Board - 3 Directors</p>
              <p className="text-xs mt-1">ODUTOLA | KGONOTHI | MANYEKE</p>
              <p className="text-[10px] text-gray-500">POPIA redacted • BR-01 to BR-04 • 2-to-sign</p>
            </div>

            {/* IN PROGRESS */}
            <div className="border border-yellow-400 bg-yellow-50 p-4 rounded-xl">
              <p className="font-bold text-yellow-800 flex items-center gap-2"><Clock size={16}/> PBO / 18A - IN PROGRESS</p>
              <p className="text-xs mt-1">SARS TEU pending 4-8 weeks • Retroactive to 09/06/2026 • Donate now, 18A later</p>
            </div>

            <div className="border border-yellow-400 bg-yellow-50 p-4 rounded-xl">
              <p className="font-bold text-yellow-800 flex items-center gap-2"><Building2 size={16}/> DSD Partial Care - IN PROGRESS</p>
              <p className="text-xs mt-1">NO785 Radium - 60 kids 2-5yrs - Form 11/16 Monday</p>
            </div>

            <div className="border border-blue-400 bg-blue-50 p-4 rounded-xl">
              <p className="font-bold text-blue-800 flex items-center gap-2"><Landmark size={16}/> Bank - CAPITEC PLACEHOLDER</p>
              <p className="text-xs mt-1">Holder: TSUNDZUKANI ECD NPC 2026/447870/08</p>
              <p className="text-[10px] text-gray-500">Real acc + letter Tuesday after BR-02 - 3 sign, 2-to-sign, EFT only</p>
            </div>
          </div>

          <div className="mt-6 flex gap-3 justify-center">
            <a href="/csi-proposal" className="bg-[#0F2C5C] text-white px-6 py-2 rounded-full text-sm font-bold inline-flex items-center gap-2">
              <FileText size={14}/> CSI Proposal R50k
            </a>
            <a href="https://www.cipc.co.za" target="_blank" className="border px-4 py-2 rounded-full text-xs flex items-center gap-1">
              Verify CIPC <ExternalLink size={10}/>
            </a>
          </div>
        </div>
      </section>

      {showCert && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={()=>setShowCert(false)}>
          <div className="bg-white max-w-xl w-full rounded-xl p-5" onClick={e=>e.stopPropagation()}>
            <h3 className="font-bold text-green-700 text-sm">✅ CIPC VERIFIED - 2026/447870/08</h3>
            <div className="mt-3 bg-gray-50 p-3 font-mono text-[11px] rounded-lg">
              <p>Enterprise: TSUNDZUKANI ECD AND AFTERCARE</p>
              <p>Reg: 2026/447870/08 | Status: In Business | Date: 09/06/2026</p>
              <p>Tax: 9167660290 | Addr: NO785 RADIUM</p>
            </div>
            <p className="text-[10px] text-gray-400 mt-2">Image: /certs/tsundzukani_redacted_cert.png - POPIA safe</p>
            <button onClick={()=>setShowCert(false)} className="mt-3 bg-[#0F2C5C] text-white px-4 py-1.5 rounded-lg text-xs">Close</button>
          </div>
        </div>
      )}
    </>
  )
}