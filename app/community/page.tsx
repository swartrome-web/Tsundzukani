// app/community-impact/page.tsx
'use client'
import BackHome from '@/components/BackHome'
import Footer from '@/components/Footer'
export default function CommunityImpact() {
  return (
    <main className="bg-white">
      {/* NAV */}
      <BackHome/>

      {/* HERO */}
      <section className="relative h-[400px]">
        <img src="/farm-impact.jpg" className="w-full h-full object-cover" alt="community" />
        <div className="absolute inset-0 bg-[#0F2C5C]/80 flex flex-col justify-center items-center text-center p-6">
          <span className="bg-[#FFD93D] text-[#0F2C5C] px-4 py-1 rounded-full text-xs font-bold">
            🌱 COMMUNITY AID & DEVELOPMENT PROGRAMS
          </span>
          <h1 className="text-4xl font-bold text-white mt-4 max-w-3xl">
            Beyond The Classroom - Building Moretele
          </h1>
          <p className="text-white mt-3 max-w-2xl">
            Katso Team runs 5 community programs - ECD, 20ha Farm, Water Purification, Soccer Team,
            ICT Academy - all feeding back to the children.
          </p>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-3 gap-4 text-center">
        <div className="bg-[#C7D9EF] rounded-xl p-4">
          <h3 className="text-3xl font-bold text-[#0F2C5C]">127</h3>
          <p className="text-sm">Children Supported</p>
        </div>
        <div className="bg-[#C7D9EF] rounded-xl p-4">
          <h3 className="text-3xl font-bold text-[#0F2C5C]">20ha</h3>
          <p className="text-sm">Farm Supplying Spar</p>
        </div>
        <div className="bg-[#C7D9EF] rounded-xl p-4">
          <h3 className="text-3xl font-bold text-[#0F2C5C]">Purified water</h3>
          <p className="text-sm">Local, Healthy And Reliable</p>
        </div>
      </section>

      {/* 6 PROGRAMS */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-[#0F2C5C]">Our Community Impact Programs</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div className="border-2 border-[#0F4DA8] rounded-xl p-6 bg-[#F8FAFC]">
            <div className="flex gap-3">
              <span className="text-3xl">👶</span>
              <div>
                <h3 className="font-bold text-[#0F2C5C]">1. Tshundzukani ECD - Little Bundle of Joy</h3>
                <p className="text-sm mt-2">Top rated ECD in Moretele. Safe haven for ages 2-6. Blog + donations section shows transparency to funders.</p>
                <span className="text-xs bg-[#FFD93D] px-2 py-1 rounded-full mt-2 inline-block">Donations Open</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#C7D9EF] rounded-xl p-6">
            <div className="flex gap-3">
              <span className="text-3xl">🌾</span>
              <div>
                <h3 className="font-bold">2. Katso Farm - 20 Hectares</h3>
                <p className="text-sm mt-2">Supplies Spar & local shops. Losing money on sales due to manual orders. Needs online ordering system. Your experience needed!</p>
                <span className="text-xs bg-[#C7D9EF] px-2 py-1 rounded-full mt-2 inline-block">Spar Contract • Needs System</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#C7D9EF] rounded-xl p-6">
            <div className="flex gap-3">
              <span className="text-3xl">🏨</span>
              <div>
                <h3 className="font-bold">3. Katso Water Purification</h3>
                <p className="text-sm mt-2">Local supllies</p>
                <span className="text-xs bg-[#C7D9EF] px-2 py-1 rounded-full mt-2 inline-block">Local business partnerships</span>
              </div>
            </div>
          </div>

          
          <div className="border-2 border-[#C7D9EF] rounded-xl p-6">
            <div className="flex gap-3">
              <span className="text-3xl">⚽</span>
              <div>
                <h3 className="font-bold">4. Soccer Team</h3>
                <p className="text-sm mt-2">Youth development through sports. Keeps kids off streets. Perfect for CSI funding - sport + education combo.</p>
                <span className="text-xs bg-[#C7D9EF] px-2 py-1 rounded-full mt-2 inline-block">Youth Development</span>
              </div>
            </div>
          </div>

          <div className="border-2 border-[#C7D9EF] rounded-xl p-6">
            <div className="flex gap-3">
              <span className="text-3xl">💻</span>
              <div>
                <h3 className="font-bold">5. ICT Academy - Future Phase</h3>
                <p className="text-sm mt-2">Digital skills for community. Farm needs your experience in systems. Time consumer pain = needs automation.</p>
                <span className="text-xs bg-[#C7D9EF] px-2 py-1 rounded-full mt-2 inline-block">Applying for Funds</span>
              </div>
            </div>
          </div>

        </div>

        {/* FUNDING CTA */}
        <div className="bg-[#0F2C5C] rounded-xl p-8 mt-12 text-center text-white">
          <h3 className="text-2xl font-bold">Support Our Community Ecosystem</h3>
          <p className="mt-2 opacity-80">One donation supports ECD, Farm, Purified Water, Soccer, ICT - all interconnected</p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#0F4DA8] px-8 py-3 rounded-full font-bold hover:bg-[#1A4AB9]"><a href="/donate">Donate to ECD</a></button>
            <button className="bg-white text-[#0F2C5C] px-8 py-3 rounded-full font-bold hover:bg-[#FFD93D]"><a href='/csi-proposal'>CSI Proposal Page</a></button>
          </div>
          <p className="text-xs mt-4 opacity-60">Transparent Use of Funds • CSI Compliant • Community Aid & Development Programs</p>
        </div>
      </section>

      <Footer/>
    </main>
  )
}