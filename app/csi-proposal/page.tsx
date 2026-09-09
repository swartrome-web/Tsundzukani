'use client'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function CSIProposal() {
  const [downloading, setDownloading] = useState(false)

  const downloadPDF = async () => {
    setDownloading(true)
    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF()
    doc.setFillColor(15,44,92)
    doc.rect(0,0,210,35,'F')
    doc.setTextColor(255,255,255)
    doc.setFontSize(16)
    doc.text('TSUNDZUKANI ECD - CSI PARTNERSHIP PROPOSAL', 10, 14)
    doc.setFontSize(9)
    doc.text('TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE NPC 2026/447870/08 | Tax 9167660290', 10, 21)
    doc.text('NO785 Ngobi Main Road, Radium 0483, Moretele | tsundzukaniecd@gmail.com | +27 72 783 9378', 10, 27)
    let y = 42
    const addSection = (title: string, content: string[]) => {
      doc.setTextColor(15,44,92)
      doc.setFontSize(11)
      doc.setFont('helvetica','bold')
      doc.text(title, 10, y)
      y+=6
      doc.setFont('helvetica','normal')
      doc.setFontSize(8.5)
      content.forEach(line => {
        const split = doc.splitTextToSize(line, 185)
        split.forEach((s: string) => {
          if(y>270){ doc.addPage(); y=15 }
          doc.text(s, 10, y)
          y+=4
        })
        y+=2
      })
      y+=4
    }
    addSection('1. STRATEGIC FIT - NOT CHARITY', [
      'You asked: How does this fit OUR strategy? Answer:',
      '• Location: Top rated ECD in Moretele, Radium (NO785), North-West - 70% unemployment, Bojanala priority.',
      '• Your Focus: Mining Charter + B-BBEE Socio-Economic Development + Education + Women/Youth empowerment.',
      '• We Deliver: 60+ children ages 2-5 + aftercare, 100% Black beneficiaries, Women-led, rural.',
    ])
    addSection('2. VALUE - WHAT R50K BUYS YOU', [
      'Tier 2 - R50,000 - Invoice INV-2026/447870/08/001:',
      '• Brand: Logo on classroom wall NO785 + uniforms + thank you board.',
      '• Content: 12 content packs for LinkedIn / ESG report / Newsletter.',
      '• HR: Employee Volunteer Day at NO785.',
      '• B-BBEE: Qualifies as Socio-Economic Development 100%.',
    ])
    addSection('3. RISK: ZERO - VERIFIED', [
      'VERIFIED TODAY: CIPC NPC 2026/447870/08, Tax 9167660290, 3 Directors 2-to-sign, BR-02, Bank Capitec Business holder NPC name.',
      'IN PROGRESS: NPO Applied Mon 01/09/2026, Partial Care Form 11 Wed 03/09/2026, PBO 18A Application Mon 01/09/2026 Retro to 09/06/2026.',
    ])
    addSection('4. BUDGET BREAKDOWN - R50,000', [
      'R15,000 - Nutrition, R8,000 - Learning, R12,000 - DSD Compliance, R5,000 - PBO + Tax, R7,000 - Practitioners, R3,000 - Admin',
    ])
    addSection('5. EASY APPROVAL', [
      'Invoice INV-2026/447870/08/001, Bank Capitec Business Acc TO BE UPDATED TUE, Ref: Invoice + Donor, Docs: CIPC + Tax + BR-02',
    ])
    doc.setFillColor(255,217,61)
    doc.rect(0,280,210,17,'F')
    doc.setTextColor(15,44,92)
    doc.setFontSize(8)
    doc.setFont('helvetica','bold')
    doc.text('TSUNDZUKANI ECD NPC 2026/447870/08 | Tax 9167660290 | PBO Pending Retro to Sep 2026', 10, 290)
    doc.save('TSUNDZUKANI-CSI-Proposal-R50k-CORP-2026-447870-08.pdf')
    setDownloading(false)
  }

  return (
    <main className="bg-white min-h-screen w-full overflow-x-hidden">
      <BackHome/>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-10 w-full">
        <div className="bg-[#0F2C5C] text-white p-6 sm:p-8 rounded-2xl text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Corporate Partnership Proposal</h1>
          <p className="mt-2 text-[#FFD93D] font-bold text-sm sm:text-base">R50,000 Tier 2 - Strategic Fit + Value + Zero Risk</p>
          <p className="mt-2 text-[10px] sm:text-xs opacity-80 font-mono text-white break-words">NPC 2026/447870/08 | Tax 9167660290 | NO785 Radium | 60 Children | 3 Directors 2-to-sign</p>
          <button onClick={downloadPDF} disabled={downloading} className="mt-6 bg-[#FFD93D] text-[#0F2C5C] px-6 sm:px-8 py-3 rounded-full font-bold text-sm hover:bg-yellow-300 shadow">
            {downloading? 'Generating Honest PDF...' : '📄 Download R50,000 Proposal PDF'}
          </button>
          <p className="text-[9px] mt-3 opacity-60 text-white">Honest: 60% Verified / 40% Pending - Holder = NPC name, PBO pending retroactive</p>
        </div>

        <div className="bg-green-50 border-2 border-green-600 p-4 rounded-xl mt-6">
            <p className="font-bold text-green-900 text-sm">✅ VERIFIED & COMPLIANT - One Link:</p>
            <a href="/compliance" className="text-blue-700 underline font-bold text-sm break-words">
                www.tsundzukanicentre.co.za/compliance → CIPC 2026/447870/08, Tax 9167660290, BR-02, Bank Not later than Oct 2026
            </a>
            <p className="text-xs mt-1 text-slate-900 font-medium">Low risk, fundable - Strategy + Value + Risk + Easy Approval</p>
        </div>

        <div className="mt-8 border-2 border-slate-200 rounded-xl p-4 sm:p-6 space-y-5 text-sm bg-white">
          <h2 className="font-bold text-lg text-[#0F2C5C]">Preview: R50k Corporate Social Investment Proposal</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-[#EAF1F8] p-3 rounded border"><p className="font-bold text-slate-900">60 Children+</p><p className="text-slate-800 font-medium">Supports extra programs</p></div>
            <div className="bg-[#EAF1F8] p-3 rounded border"><p className="font-bold text-slate-900">R50k Tier 2</p><p className="text-slate-800 font-medium">CSI Ready - Invoice INV-2026/447870/08/001</p></div>
            <div className="bg-[#FFF8E1] p-3 rounded border-2 border-[#FFD93D]"><p className="font-bold text-slate-900">Bank Honest</p><p className="text-slate-800 font-medium">Holder = NPC name, Capitec Tue, Ref = Invoice</p></div>
          </div>

          <div className="bg-white">
            <h3 className="font-bold text-slate-900">What You Get for R50k (Value not Charity):</h3>
            <ul className="list-disc pl-5 text-xs mt-2 space-y-1 text-slate-900 font-medium">
              <li>Logo wall NO785 + uniforms + thank you board</li>
              <li>12 content packs for ESG / LinkedIn / PR (POPIA safe)</li>
              <li>Employee volunteer day at Radium</li>
              <li>SED 100% + B-BBEE affidavit + Tax retroactive 18A after PBO approval</li>
            </ul>
          </div>

          <div className="bg-[#0F2C5C] text-white p-4 rounded-lg text-xs">
            <p className="font-bold text-[#FFD93D]">Bank - HONEST (No LBJ):</p>
            <p className="text-white font-medium">Holder: TSUNDZUKANI EARLY CHILDHOOD DEVELOPMENT AND AFTERCARE LEARNING CENTRE NPC</p>
            <p className="text-white/90">Reg: 2026/447870/08 | Tax: 9167660290 | Bank: Capitec Business | Acc: TO BE UPDATED NOT LATER THAN OCT 2026 | Branch 470010</p>
            <p className="text-white/90 break-words">Ref: INV-2026/447870/08/001 + Donor Name | Control: 3 directors, 2-to-sign, EFT only, R5k limit - BR-02/2026</p>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
