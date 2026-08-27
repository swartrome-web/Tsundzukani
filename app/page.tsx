// app/page.tsx - Katso Crèche Mankweng - Blue Fun Theme
import Image from 'next/image'
import Link from 'next/link'
import WhatsAppButton from '@/components/whatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-[#2A7FFF]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⭐🖍️</div>
            <div>
              <h1 className="font-extrabold text-[#1A4AB9] text-xl leading-none">TSUNDZUKANI ECD</h1>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <Link href="#about" className="hover:text-[#2A7FFF]">About Us</Link>
            <Link href="#programs" className="hover:text-[#2A7FFF]">Our Programs</Link>
            <Link href="#fees" className="hover:text-[#2A7FFF]">Fees</Link>
            <Link href="#contact" className="hover:text-[#2A7FFF]">Contact</Link>
            <Link href="/enroll" className="bg-[#2A7FFF] text-white px-5 py-2.5 rounded-lg font-bold shadow-md hover:bg-[#1A4AB9]">Enroll Now</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="bg-[#2A7FFF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white space-y-5">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Where Little Stars<br/>Learn, Play & Grow ⭐
            </h2>
            <p className="text-blue-100 text-lg">
              Safe, loving daycare and creche in Moretele, North-West — nurturing your child from 6 months to 5 years
            </p>
            <div className="flex gap-3 pt-2">
              <Link href="/enroll" className="bg-[#FFD93D] text-[#1A2E5A] px-6 py-3 rounded-xl font-bold hover:scale-105 transition">⭐ Book a Tour</Link>
              <Link href="#programs" className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-[#2A7FFF]">▶ View Programs</Link>
            </div>
            <div className="flex gap-2 pt-4 text-xs font-semibold">
              <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full">✅ Registered - Dept of Social Development</span>
              <span className="bg-pink-100 text-pink-800 px-3 py-1.5 rounded-full">💗 Ages 6mo - 5 years</span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full">🛡️ Safe • Secure • Caring</span>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-2 rounded-[24px] shadow-2xl rotate-1">
              <img src="IMG-20260826-WA2889.jpg" alt="African kids playing" className="rounded-[20px] w-full h-[400px] object-cover" />
            </div>
            {/* Fun dots */}
            <div className="absolute -top-4 -right-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-20 -left-6 w-4 h-4 bg-pink-400 rounded-full"></div>
          </div>
        </div>
      </section>
      {/* ABOUT - UPDATED */}
<section id="about" className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
    <div>
      <span className="bg-[#E6F0FF] text-[#1A4AB9] text-xs font-extrabold px-3 py-1 rounded-full">⭐ TOP RATED ECD • MORETELE, NORTH-WEST</span>
      <h3 className="text-4xl font-extrabold text-[#1A4AB9] mt-3 leading-tight">
        A haven for the little ones
      </h3>
      <p className="text-slate-600 mt-4 leading-relaxed">
        Tsundzukani ECD is a loving, inclusive daycare in the heart of <b>Moretele, North-West</b> — top rated ECD centre providing safe, nurturing environment where children explore, learn, and grow through play.
      </p>
      <p className="text-slate-600 mt-3 leading-relaxed">
        Our experienced educators focus on early childhood development, creativity, and confidence — ensuring every child feels cared for, supported, and ready to thrive.
      </p>

      {/* PERKS */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
        {[
          '🥗 Healthy Meals',
          '📚 Learning Programs',
          '🎮 Games',
          '🎨 Arts & Crafts',
          '⚽ Sports',
          '🚌 Tours',
          '🏆 Competitions',
          '✨ Everlasting Memories',
        ].map((perk) => (
          <div key={perk} className="bg-white border shadow-sm rounded-xl px-4 py-3 text-sm font-bold text-slate-700 hover:border-[#2A7FFF] transition">
            {perk}
          </div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <Link href="/enroll" className="bg-[#2A7FFF] text-white px-6 py-3 rounded-xl font-bold">Enroll Now</Link>
      </div>
    </div>

    {/* Right visual */}
    <div className="relative">
      <div className="bg-[#2A7FFF] rounded-[32px] p-3 rotate-1 shadow-2xl">
        <img src="IMG-20260826-WA8995.jpg" alt="Kids haven" className="rounded-[24px] w-full h-[380px] object-cover" />
      </div>
      <div className="absolute -bottom-6 -left-6 bg-[#FFD93D] rounded-2xl px-5 py-3 shadow-lg">
        <p className="font-extrabold text-[#1A2E5A] text-sm">More than daycare</p>
        <p className="text-xs font-semibold">— we build memories 💛</p>
      </div>
    </div>
  </div>
</section>

      {/* FEES & CONTACT */}
      <section id="fees" className="bg-[#E6F0FF] py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-extrabold text-[#1A4AB9] text-xl mb-3">💰 Fees & Contact</h4>
            <p className="text-sm text-slate-700">Affordable monthly fees from <b>R250 per month</b>. Government subsidy available for qualifying families. Healthy meals & snacks are included daily.</p>
            <div className="bg-[#FFD93D] inline-block px-4 py-1.5 rounded-full text-sm font-bold mt-3">Flexible Hours: 07:00 - 17:00 • Monday to Friday</div>
          </div>
          <div>
            <h4 className="font-extrabold text-[#1A4AB9] text-xl mb-3">⭐ Contact Us</h4>
            <p className="text-sm text-slate-700">📍 785 Matjila street, Moretele, Ngobi Main Road • North-West, South Africa</p>
            <p className="text-sm text-slate-700">📞 061 508 4507 • tsundzukaniecd@gmail.com</p>
            <p className="text-sm text-slate-700">🕘 Open: Monday-Friday, 07:00-17:00 • Closed on public holidays</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#1A4AB9] text-white text-center py-4 text-xs">
        © 2026 Tsundzukani ECD — Moretele, North-West • Follow us: Facebook Instagram WhatsApp
      </footer>
      <WhatsAppButton/>
    </main>
  )
}
