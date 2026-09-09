"use client"
import { useState } from 'react';
import { ShieldCheck, Lock, AlertTriangle, Baby, Wallet, MessageCircle } from 'lucide-react';
import BackHome from '@/components/BackHome';
import Footer from '@/components/Footer';

export default function EnrollmentForm() {
  const [status, setStatus] = useState("");
  const WHATSAPP = "27647919022";

  const [form, setForm] = useState({
    childFirstName: "",
    childAge: "",
    childGroup: "",
    parentFirstName: "",
    parentPhone: "",
    parentRelation: "Mother",
    consentPOPIA: false,
    consentPhoto: false,
    honeypot: ""
  });

  const sanitize = (s: string, len: number) => s.replace(/<[^>]*>?/gm,'').replace(/[^a-zA-Z0-9 ]/g,'').trim().slice(0,len);

  const handleAge = (ageStr: string) => {
    const age = parseInt(ageStr);
    let group = "";
    if (age >= 0 && age <= 2) group = "0-2 years - R280/month";
    if (age >= 2 && age <= 5) group = "2-5 years - R250/month";
    if (age === 2) group = "2-5 years - R250/month";
    setForm({...form, childAge: ageStr.replace(/[^0-9]/g,'').slice(0,1), childGroup: group});
  };

  const validate = () => {
    if (form.honeypot) return false;
    if (form.childFirstName.length < 2) { setStatus("❌ Child first name (2+ letters)"); return false; }
    if (!/^[0-9]{10}$/.test(form.parentPhone)) { setStatus("❌ Parent phone 10 digits e.g. 0647919022"); return false; }
    const age = parseInt(form.childAge);
    if (isNaN(age) || age < 0 || age > 5) { setStatus("❌ Age 0-5 only"); return false; }
    if (!form.consentPOPIA) { setStatus("❌ POPIA consent required"); return false; }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("⏳ Securing...");
    const payload = {
      childFirstName: sanitize(form.childFirstName, 30),
      childAge: parseInt(form.childAge),
      childGroup: form.childGroup,
      parentFirstName: sanitize(form.parentFirstName, 30),
      parentPhone: sanitize(form.parentPhone, 10),
      parentRelation: form.parentRelation,
      fees: { registration: "R100 once-off", monthly: form.childGroup.includes("0-2")? "R280" : "R250" },
      consentPOPIA: form.consentPOPIA,
      timestamp: new Date().toISOString()
    };
    const waMsg = `ENR-2026/447870/08%0AChild: ${payload.childFirstName} - Age ${payload.childAge} (${payload.childGroup})%0AParent: ${payload.parentFirstName} - ${payload.parentPhone} (${payload.parentRelation})%0AFees: Reg R100 + ${payload.fees.monthly}/month%0APOPIA: YES%0AFrom: tsundzukanicentre.co.za/enroll`;
    try { await fetch('/api/enroll', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }); } catch {}
    window.open(`https://wa.me/${WHATSAPP}?text=${waMsg}`, '_blank');
    setStatus(`✅ Sent to WhatsApp 0647919022 - Ref ENR-2026/447870/08/${payload.childFirstName} - Reg R100 + ${payload.fees.monthly}/month - We will reply with payment + start date`);
    setForm({ childFirstName:"", childAge:"", childGroup:"", parentFirstName:"", parentPhone:"", parentRelation:"Mother", consentPOPIA:false, consentPhoto:false, honeypot:"" });
  };

  const monthly = form.childGroup.includes("0-2")? "R280" : form.childGroup.includes("2-5")? "R250" : "R250 / R280";

  return (
    <section className="bg-white w-full overflow-x-hidden">
      <BackHome/>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 w-full">
        <div className="flex items-center gap-2 flex-wrap">
          <Lock size={20} className="text-[#0F2C5C]"/><h2 className="font-bold text-[#0F2C5C] text-lg sm:text-xl">Enrollment - NO785 Radium</h2>
          <span className="ml-auto bg-green-100 text-green-800 text-[10px] px-2 py-1 rounded-full flex items-center gap-1"><ShieldCheck size={10}/>POPIA SAFE</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3 text-center">
          <div className="bg-[#0F2C5C] text-white p-2 sm:p-3 rounded-xl">
            <Wallet size={16} className="mx-auto"/><p className="text-[10px] sm:text-xs mt-1 opacity-70">Registration</p><p className="font-bold text-base sm:text-lg">R100</p><p className="text-[9px] sm:text-[10px] opacity-70">Once-off</p>
          </div>
          <div className="bg-[#FFF8E1] border-2 border-[#FFD93D] p-2 sm:p-3 rounded-xl">
            <Baby size={16} className="mx-auto text-[#0F2C5C]"/><p className="text-[10px] sm:text-xs mt-1">0-2 Years</p><p className="font-bold text-base sm:text-lg text-[#0F2C5C]">R280</p><p className="text-[9px] sm:text-[10px]">per month</p>
          </div>
          <div className="bg-[#EAF1F8] border p-2 sm:p-3 rounded-xl">
            <Baby size={16} className="mx-auto text-[#0F2C5C]"/><p className="text-[10px] sm:text-xs mt-1">2-5 Years</p><p className="font-bold text-base sm:text-lg text-[#0F2C5C]">R250</p><p className="text-[9px] sm:text-[10px]">per month</p>
          </div>
        </div>

        <div className="mt-4 bg-yellow-50 border border-yellow-400 p-3 rounded-lg text-xs flex gap-2">
          <AlertTriangle size={14} className="text-yellow-700 mt-0.5 shrink-0"/>
          <div><b>Online = First name + phone only.</b> ID, birth cert, clinic card = IN PERSON only with Form 19. 60 slots - DSD Ref NW-BOJ-PC-2026-XXXXX pending.</div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4 bg-gray-50 p-4 sm:p-6 rounded-xl border w-full">
          <input type="text" value={form.honeypot} onChange={e=>setForm({...form, honeypot:e.target.value})} style={{display:'none'}} tabIndex={-1} autoComplete="off"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="text-xs font-bold">Child First Name *</label>
              <input value={form.childFirstName} onChange={e=>setForm({...form, childFirstName:e.target.value})} maxLength={30} placeholder="Amara" className="mt-1 w-full border px-3 py-2.5 rounded-lg text-sm" required/>
            </div>
            <div className="w-full">
              <label className="text-xs font-bold">Child Age * (0-5)</label>
              <input value={form.childAge} onChange={e=>handleAge(e.target.value)} type="text" inputMode="numeric" placeholder="3" className="mt-1 w-full border px-3 py-2.5 rounded-lg text-sm" required/>
              {form.childGroup && <p className="text-[11px] mt-1 font-bold text-[#0F2C5C]">→ {form.childGroup}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-full">
              <label className="text-xs font-bold">Parent First Name *</label>
              <input value={form.parentFirstName} onChange={e=>setForm({...form, parentFirstName:e.target.value})} maxLength={30} placeholder="Mirriam" className="mt-1 w-full border px-3 py-2.5 rounded-lg text-sm" required/>
            </div>
            <div className="w-full">
              <label className="text-xs font-bold">Parent Phone * (WhatsApp)</label>
              <input value={form.parentPhone} onChange={e=>setForm({...form, parentPhone:e.target.value.replace(/[^0-9]/g,'').slice(0,10)})} placeholder="0647919022" className="mt-1 w-full border px-3 py-2.5 rounded-lg text-sm" required/>
            </div>
          </div>

          <div className="w-full">
            <label className="text-xs font-bold">Relation</label>
            <select value={form.parentRelation} onChange={e=>setForm({...form, parentRelation:e.target.value})} className="mt-1 w-full border px-3 py-2.5 rounded-lg text-sm">
              <option>Mother</option><option>Father</option><option>Grandmother</option><option>Guardian</option>
            </select>
          </div>

          <div className="bg-white border p-3 rounded-lg text-xs space-y-2 w-full">
            <label className="flex gap-2"><input type="checkbox" checked={form.consentPOPIA} onChange={e=>setForm({...form, consentPOPIA:e.target.checked})} required/><span><b>POPIA *:</b> I consent NPC 2026/447870/08 storing first name + phone for enrollment only.</span></label>
            <label className="flex gap-2"><input type="checkbox" checked={form.consentPhoto} onChange={e=>setForm({...form, consentPhoto:e.target.checked})}/><span>Photo: Allow blurred group photos for reports (optional).</span></label>
          </div>

          <div className="bg-[#0F2C5C] text-white p-3 rounded-lg text-sm flex flex-col sm:flex-row justify-between gap-2 w-full">
            <div><p className="text-[11px] opacity-70">TOTAL TO PAY ON START</p><p className="font-bold">Reg R100 + {monthly}/month (First month)</p></div>
            <div className="text-left sm:text-right"><p className="text-[11px] opacity-70">We reply with EFT request</p><p className="font-bold text-[#FFD93D]">Capitec</p></div>
          </div>

          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3.5 rounded-full font-bold text-sm flex justify-center items-center gap-2">
            <MessageCircle size={16}/> Submit & Send to WhatsApp 0647919022
          </button>

          {status && <p className="text-xs text-center p-3 bg-white border rounded-lg font-bold break-words">{status}</p>}
        </form>

        <div className="mt-4 mb-4 text-center text-[11px] text-gray-500 px-2">
          <p className="break-words">🔐 Sanitized: No HTML, allowlist only, 30 char max, no ID, honeypot, rate limit backend.</p>
          <p>NPC 2026/447870/08 | NO785 | 0647919022</p>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
