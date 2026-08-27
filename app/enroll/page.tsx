// app/enroll/page.tsx - Katso Crèche Enroll
'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function EnrollPage() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    const data = new FormData(e.target)
    const phone = data.get('whatsapp')
    // Replace with your WhatsApp number
    const msg = `New Katso Enrolment:%0AChild: ${data.get('childName')}%0ADOB: ${data.get('dob')}%0AParent: ${data.get('parent')}%0AProgram: ${data.get('program')}%0APhone: ${phone}`
    window.open(`https://wa.me/2714794147?text=${msg}`, '_blank')
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[#F8FAFF]">
      {/* NAV - same as home */}
      <nav className="bg-white border-b-4 border-[#2A7FFF] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link href="/" className="font-extrabold text-[#1A4AB9] text-xl md:flex items-center">⭐🖍️TSUNDZUKANI ECD</Link>
          <span className="bg-blue-50 border px-3 py-1 rounded-full text-xs font-bold">🇿🇦 Moretele • North-West</span>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-[1.6fr_0.9fr] gap-8">
        {/* FORM */}
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-[#2A7FFF] p-6 md:p-8 space-y-5">
          <div>
            <h1 className="text-3xl font-extrabold text-[#1A2E5A]">Child Enrollment Application</h1>
            <p className="text-sm text-slate-500 mt-1">Join our nurturing early learning centre — complete the form below to enroll your child for 2024/2025</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-900 font-bold">Child&apos;s Name</label>
              <input name="childName" required placeholder="e.g. Thabo Moloto" className="w-full mt-1 border border-[#2A7FFF]  rounded-lg px-3 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#2A7FFF]" />
            </div>
            <div>
              <label className="text-slate-900 font-bold">Date of Birth</label>
              <input name="dob" type="date" required className="w-full mt-1 border border-[#2A7FFF]  rounded-lg px-3 py-2.5 text-slate-900 outline-none focus:ring-2 focus:ring-[#2A7FFF]" />
            </div>
          </div>

          <div>
            <label className="text-slate-900 font-bold">Parent/Guardian Name</label>
            <input name="parent" required placeholder="e.g. Lerato Moloto" className="w-full mt-1 bg-white border border-[#2A7FFF]  rounded-lg px-3 py-2.5 text-sm" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="v font-bold">Phone</label>
              <div className="flex gap-2 mt-1">
                <span className="border rounded-lg px-2 py-2.5 text-sm bg-slate-50">🇿🇦</span>
                <input name="phone" required placeholder="+27 82 345 6789" className="w-full border border-[#2A7FFF]  rounded-lg px-3 py-2.5 text-sm" />
              </div>
            </div>
            <div>
              <label className=" font-bold">WhatsApp</label>
              <div className="flex gap-2 mt-1">
                <span className="border rounded-lg px-2 py-2.5 text-sm bg-green-50">💬</span>
                <input name="whatsapp" required placeholder="+27 82 345 6789" className="w-full border border-[#2A7FFF]  rounded-lg px-3 py-2.5 text-sm" />
              </div>
            </div>
          </div>

          <div>
            <label className="text-slate-900 font-bold">Program Selection</label>
            <div className="grid md:grid-cols-3 gap-3 mt-2">
              {[
                { id: 'toddler', name: 'Toddler', age: '18 months - 3 years • 07:30' },
                { id: 'preschool', name: 'Pre-School', age: '3-5 years • 07:30-14:30' },
                { id: 'aftercare', name: 'Aftercare', age: '5-7 years • 14:30-17:30' },
              ].map(p => (
                <label key={p.id} className="border rounded-xl p-3 flex gap-2 cursor-pointer hover:border-[#2A7FFF] has-[:checked]:bg-blue-50 has-[:checked]:border-[#2A7FFF]">
                  <input type="radio" name="program" value={p.name} defaultChecked={p.id==='toddler'} className="mt-1" />
                  <div>
                    <p className="font-bold text-slate-900">{p.name}</p>
                    <p className="text-[11px] text-slate-900">{p.age}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-slate-900 font-bold">Start Date</label>
              <input name="startDate" type="date" className="w-full mt-1 border rounded-lg px-3 py-2.5 text-sm" />
            </div>
            <div>
              <label className="text-slate-900 font-bold">Message</label>
              <input name="message" placeholder="Any allergies, medical needs..." className="w-full mt-1 border rounded-lg px-3 py-2.5 text-sm" />
            </div>
          </div>

          <button disabled={loading} className="w-full bg-[#2A7FFF] hover:bg-[#1A4AB9] text-white font-bold py-3.5 rounded-xl transition">
            {loading? 'Submitting...' : 'Submit Enrollment → Secure & POPIA Compliant'}
          </button>
          <p className="text-[11px] text-slate-500 text-center">We comply with POPIA. Your data is secure and will not be shared.</p>
        </form>

        {/* SUMMARY */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h3 className="font-extrabold text-lg flex gap-2">🧮 Fee Summary</h3>
            <div className="mt-4 space-y-3">
              <div className="bg-[#E6F0FF] rounded-xl p-4 flex justify-between">
                <div><p className="font-bold text-sm">Registration Fee</p><p className="text-xs text-slate-500">Once-off, paid on enrollment</p></div>
                <p className="font-extrabold text-[#1A4AB9]">R500</p>
              </div>
              <div className="bg-[#E6F0FF] rounded-xl p-4 flex justify-between">
                <div><p className="font-bold text-sm">Monthly Fee</p><p className="text-xs text-slate-500">Includes meals, activities & learning materials</p></div>
                <p className="font-extrabold">R250/month</p>
              </div>
            </div>

            <h4 className="font-bold mt-6 mb-2">Payment Options</h4>
            <div className="grid grid-cols-3 gap-2 text-[11px] font-semibold">
              <span className="border rounded-lg py-2 text-center">💳 Card / EFT</span>
              <span className="border rounded-lg py-2 text-center">📱 SnapScan</span>
              <span className="border rounded-lg py-2 text-center">💵 Cash at Office</span>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mt-4 flex justify-between font-bold text-[#1A4AB9]">
              <span>✅ Total Due Now:</span><span>R500</span>
            </div>

            <div className="mt-6">
              <p className="font-bold text-sm">Trusted & Certified</p>
              <div className="flex gap-3 mt-2 text-[10px]">
                <span className="bg-green-50 px-2 py-1 rounded">🛡️ POPIA Compliant</span>
                <span className="bg-blue-50 px-2 py-1 rounded">⭐ Registered ECD 2023/0015 Limpopo</span>
                <span className="bg-orange-50 px-2 py-1 rounded">⛑️ First Aid Certified Staff</span>
              </div>
            </div>

            <div className="mt-6 text-xs text-slate-600 space-y-1">
              <p>Need help? Contact us</p>
              <p>📞 015 123 4567 &nbsp; ✉️ info@katsocreche.co.za</p>
            </div>
          </div>

          <div className="bg-[#1A4AB9] text-white rounded-2xl p-4 text-xs text-center">
            © 2024 Katso Crèche — Mankweng, Limpopo | Reg. No: 2023/0015 | Open Mon-Fri 07:00-17:30
          </div>
        </div>
      </div>
    </main>
  )
}
