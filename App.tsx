import React from 'react';
import { SERVICES, BRANDS, COVERAGE } from './constants';
import AITroubleshooter from './components/AITroubleshooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 text-white font-righteous p-2 rounded-lg text-xl shadow-md">SB</div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 leading-tight">Screen Savers</span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter font-semibold">TV Repair Specialists</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-600">
            <a href="#services" className="hover:text-red-600 transition-colors">Services</a>
            <a href="#brands" className="hover:text-red-600 transition-colors">Brands</a>
            <a href="#about" className="hover:text-red-600 transition-colors">Why Us</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://wa.me/919606960679" className="bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-all shadow-lg active:scale-95 flex items-center justify-center">
              <img src="https://cdn.simpleicons.org/whatsapp/ffffff" className="w-5 h-5" alt="WA" />
            </a>
            <a href="tel:+919606960679" aria-label="Call Helpline" className="bg-red-600 text-white p-3 rounded-xl hover:bg-red-700 transition-all shadow-lg active:scale-95 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1600"
            alt="Technician working on a Television"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-1.5 rounded-full mb-8 font-bold text-sm tracking-wide uppercase shadow-lg shadow-red-600/30">
              <span className="animate-pulse">●</span>
              <span>Bengaluru's #1 Service Center</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-righteous leading-[1.1] mb-8">
              Expert TV <br />
              <span className="text-red-600">Panel</span> & <br />
              Board Repair
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              Authorized lab for <span className="text-white font-bold underline decoration-red-600">Samsung, Sony, OnePlus, Panasonic, MI & LG</span>.
              We resolve cracked panels, horizontal lines, and motherboard failures using genuine factory-calibrated components.
            </p>
            <div className="flex flex-wrap gap-5">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-red-600/30 active:scale-95">
                Book Doorstep Visit
              </a>
              <a href="https://wa.me/919606960679" className="bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl px-10 py-5 rounded-2xl font-bold text-lg border border-white/10 transition-all flex items-center gap-3">
                <img src="https://cdn.simpleicons.org/whatsapp/ffffff" className="w-6 h-6" alt="WA" />
                WhatsApp Tech
              </a>
            </div>

            <div className="mt-16 flex items-center gap-8 py-8 border-t border-white/10">
              <div className="flex -space-x-4">
                {[
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80",
                  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
                ].map((url, i) => (
                  <img key={i} src={url} className="w-14 h-14 rounded-full border-4 border-slate-900 shadow-xl" alt="Client" />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-500 mb-1">★★★★★</div>
                <p className="text-slate-400 text-sm font-medium">
                  Trusted by <span className="text-white font-bold">2,000+ Smart TV Owners</span>
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:translate-x-8">
            <AITroubleshooter />
          </div>
        </div>
      </section>

      {/* Brand Strip */}
      <section id="brands" className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-12">Authorized Specialist Parts Support</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 transition-all">
            {BRANDS.map(brand => (
              <div key={brand.name} className="flex flex-col items-center gap-3 group">
                <div className="h-10 md:h-14 w-auto flex items-center justify-center p-2 rounded-xl group-hover:bg-slate-50 transition-colors">
                  <img src={brand.logo} alt={brand.name} className="h-full w-auto transition-transform duration-300 group-hover:scale-110" />
                </div>
                <span className="font-bold text-slate-900 text-[10px] uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-600 font-bold tracking-widest uppercase text-xs">Technical Lab Expertise</span>
            <h2 className="text-4xl md:text-5xl font-righteous mt-4 mb-6">Our Core Repair Specializations</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto gap-10">
            {SERVICES.map(service => (
              <div key={service.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/50">
                <div className="h-72 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-6 left-6 text-white font-righteous text-3xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:translate-x-2 transition-transform">
                    {service.title}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl bg-slate-50 w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-red-50 group-hover:border-red-100 transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors">Expert Resolution</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-8 h-12 overflow-hidden">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.brands.map(b => (
                      <span key={b} className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2.5 py-1.5 rounded-lg border border-slate-200/50">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Tech Detail */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl font-righteous leading-tight">Professional Restoration Standards</h2>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                We handle premium TVs with specialized equipment that maintains original color depth, factory refresh rates, and hardware safety standards.
              </p>
              <div className="grid gap-8">
                {[
                  { title: "Panel Restoration", desc: "Scientific calibration for OLED/QLED panels ensuring zero dead pixels and perfect factory color profiles.", icon: "🎯" },
                  { title: "BGA Chip Rework", desc: "Advanced soldering techniques for motherboard processor repairs to ensure long-term hardware reliability.", icon: "🔬" },
                  { title: "Voltage Stabilization", desc: "Rigorous testing of power modules using high-frequency oscilloscopes to prevent future electrical failure.", icon: "⚡" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-16 h-16 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-3xl group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {BRANDS.map((brand, i) => {
                const brandHex = brand.logo.split('/').pop() || 'EF4444';
                return (
                  <div key={brand.name} className={`group p-8 rounded-[2.5rem] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 ${i === 0 ? 'col-span-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white rounded-xl group-hover:scale-105 transition-transform shadow-lg shadow-black/40">
                        <img src={brand.logo} className="h-6" alt={brand.name} />
                      </div>
                      <h5 className="font-bold text-xl">{brand.name}</h5>
                    </div>
                    <div className="space-y-3">
                      <p className="text-[10px] font-black mb-2 tracking-[0.2em] uppercase opacity-90" style={{ color: `#${brandHex}` }}>
                        {brand.specialty}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed font-medium">{brand.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-red-600 font-bold uppercase tracking-widest text-xs">Doorstep Assistance</span>
              <h2 className="text-4xl font-righteous mt-4 mb-10">Our Service Areas in Bengaluru</h2>

              <div className="mb-12">
                <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl shadow-slate-900/40 flex gap-6 relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-red-600/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="text-3xl bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-md">📞</div>
                  <div className="relative z-10">
                    <h4 className="font-bold mb-2 uppercase tracking-widest text-[10px] text-red-500">24/7 Support Hotline</h4>
                    <p className="text-3xl font-righteous tracking-tight">+91 96069 60679</p>
                    <p className="text-slate-400 text-xs mt-2 font-medium">Direct technical consultation with an expert</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {COVERAGE.map(area => (
                  <div key={area.name} className="flex items-center gap-3 text-xs font-bold text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all">
                    <span className="text-red-600">{area.icon}</span>
                    {area.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-100 rounded-[3.5rem] overflow-hidden relative min-h-[500px] border-[12px] border-slate-50 shadow-2xl group">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-12 text-center">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-8 animate-bounce transition-transform group-hover:scale-110">
                  <span className="text-5xl text-red-600">🛠️</span>
                </div>
                <h3 className="text-3xl font-righteous text-slate-900 mb-6 drop-shadow-sm">Book Visit</h3>
                <p className="text-slate-800 font-bold mb-10 max-w-sm drop-shadow-sm">Our technician will reach your location within 120 minutes with original spares.</p>
                <a href="https://wa.me/919606960679" className="w-full max-w-xs bg-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-600/30 flex items-center justify-center gap-3 active:scale-95">
                  <img src="https://cdn.simpleicons.org/whatsapp/ffffff" className="w-6 h-6" alt="WA" />
                  Book on WhatsApp
                </a>
              </div>
              <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&q=80&w=1000" className="absolute inset-0 w-full h-full object-cover opacity-25 group-hover:scale-110 transition-transform duration-1000 grayscale" alt="TV repair visual" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white font-righteous p-2.5 rounded-xl text-2xl shadow-lg">SB</div>
                <span className="text-3xl font-righteous tracking-tight">Screen Savers</span>
              </div>
              <p className="text-slate-500 max-w-md leading-relaxed text-lg font-medium">
                Bengaluru's specialized lab for premium Smart TV restoration. We maintain original factory specifications across all brands we service.
              </p>
              <div className="flex gap-4">
                {['whatsapp'].map(social => (
                  <a key={social} href="https://wa.me/919606960679" className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all border border-white/5 hover:border-red-500 shadow-xl">
                    <img src={`https://cdn.simpleicons.org/${social}/ffffff`} className="w-5 h-5 opacity-70" alt={social} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-red-600">Core Repairs</h5>
              <ul className="space-y-5 text-slate-400 font-bold text-sm">
                {SERVICES.map(s => (
                  <li key={s.id}><a href="#services" className="hover:text-white transition-colors">{s.title}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-bold mb-8 uppercase tracking-[0.2em] text-[10px] text-red-600">Quick Links</h5>
              <ul className="space-y-5 text-slate-400 font-bold text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Pricing Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">90-Day Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service Areas</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Expert</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-xs font-bold uppercase tracking-widest">
            <p>&copy; 2026 Screen Savers TV Repair Bengaluru. Independent Authorized Specialist Hub.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 w-[calc(100%-1.5rem)] max-w-md animate-fade-in-up">
        <a href="tel:+919606960679" className="flex-[1.4] bg-slate-900 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-bold text-base shadow-2xl hover:bg-slate-800 active:scale-95 transition-all border border-white/10">
          <span className="text-xl animate-pulse">📞</span> Call Expert
        </a>
        <a href="https://wa.me/919606960679" className="flex-1 bg-green-600 text-white h-16 rounded-2xl flex items-center justify-center gap-3 font-bold text-base shadow-2xl hover:bg-green-700 active:scale-95 transition-all">
          <img src="https://cdn.simpleicons.org/whatsapp/ffffff" className="w-5 h-5" alt="WA" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default App;