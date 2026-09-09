"use client"
import { useState } from "react"

export default function Footer() {
  return (
      <footer className="bg-blue-900 text-white px-6 py-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-bold">Tsundzukani ECD Centre</h4>
            <p className="text-blue-200 mt-1">Nurturing young minds through quality early childhood development. Registered ECD Centre, Moretele, South Africa</p>
          </div>
          <div>
            <h4 className="font-bold">Contact</h4>
            <p className="text-blue-200 mt-1">Moretele, North West, South Africa</p>
            <p className="text-blue-200 mt-1">Email: <a href="mailto:tsundzukaniecd@gmail.com?subject=Enquiry%20via20Tsundzukani%Website" className="underline hover:text-[#FFD93D]">compliance@tsundzukanicentre.co.za</a></p>
            <p className="text-blue-200 mt-1">Tel: +27 72 783 9378</p>
          </div>
          <div>
            <h4 className="font-bold">Governance</h4>
            <p className="text-blue-200 mt-1">Department of Social Development NW</p>
            <p className="text-blue-200 mt-1"><a href="www.nwpg.gov.za/dsd"></a>www.nwpg.gov.za/dsd</p>
            <p className="text-blue-200 mt-1">National NPC Register: <a href="npo.dsd.gov.za">npo.dsd.gov.za</a></p>
          </div>
        </div>
        <div className="border-t border-blue-800 mt-6 pt-4 flex justify-between text-xs text-blue-300">
          <div>
            <p>© Tsundzukani ECD & Aftercare | NPC 2026/447870/08 | Tax No: 9167660290</p>
            <p>No785 Ngobi Main Road, Voyentin. Radium 0483 | Non Profit Company - In Business</p>
          </div>
          <span>Developed by Aerie Group • Systems Thinking • Empire Building</span>
        </div>
      </footer>
  )

}