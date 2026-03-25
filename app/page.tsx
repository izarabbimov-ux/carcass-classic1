"use client";

import React, { useState } from 'react';

// Mahsulotlar turi (TypeScript uchun)
interface Product {
  id: number;
  name: string;
  price: string;
  desc: string;
  img: string;
}

const products: Product[] = [
  { id: 1, name: "Carcass Shpaklyofka (Fasad)", price: "55,000", desc: "Tashqi devorlar uchun maxsus chidamli qoplama", img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=400&h=300&auto=format&fit=crop" },
  { id: 2, name: "Carcass Shpaklyofka (Ichki)", price: "45,000", desc: "Ichki ishlar uchun silliq va qordek oq", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400&h=300&auto=format&fit=crop" },
  { id: 3, name: "Carcass Plitka Klei (Ekonom)", price: "38,000", desc: "Kafel va keramika uchun hamyonbop tanlov", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7903?q=80&w=400&h=300&auto=format&fit=crop" },
  { id: 4, name: "Carcass Plitka Klei (Premium)", price: "72,000", desc: "Og'ir granit va yirik kafellar uchun maxsus", img: "https://images.unsplash.com/photo-1590385602724-40d1f554967a?q=80&w=400&h=300&auto=format&fit=crop" },
  { id: 5, name: "Carcass Shtukaturka (Gipsli)", price: "42,000", desc: "Tez quriydigan va oson ishlov beriladigan", img: "https://images.unsplash.com/photo-1517646281691-150109f26a91?q=80&w=400&h=300&auto=format&fit=crop" },
  { id: 6, name: "Carcass Shtukaturka (Sement)", price: "85,000", desc: "Namlikka o'ta chidamli va baquvvat sementli asos", img: "https://images.unsplash.com/photo-1533000632560-69539d710f60?q=80&w=400&h=300&auto=format&fit=crop" },
  { id: 7, name: "Etap 700 (Carcass Edition)", price: "145,000", desc: "Eng yuqori sifatli professional pardozlash mahsuloti", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=400&h=300&auto=format&fit=crop" },
];

export default function ConstructionSite() {
  const [submitted, setSubmitted] = useState(false);

  // Formani yuborish funksiyasi (Xatolar to'g'rilandi)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-slate-900 scroll-smooth relative bg-slate-50 overflow-hidden">
      {/* FON EFFEKTLARI */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[100px]"></div>
      </div>

      {/* NAV BAR */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 py-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-900 italic uppercase">
            CARCASS <span className="text-yellow-500">CLASSIC</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-xs uppercase tracking-widest text-slate-700">
            <a href="#products" className="hover:text-blue-600 transition-colors">Mahsulotlar</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Buyurtma</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-[650px] flex items-center justify-center text-white pt-16 mt-16">
        <div className="absolute inset-0 bg-slate-900">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1600" className="w-full h-full object-cover opacity-40" alt="Background" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/90 to-slate-950"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h2 className="text-yellow-400 font-bold tracking-[0.4em] mb-4 uppercase text-sm">Sifat va Ishonch</h2>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight uppercase">CARCASS CLASSIC</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed text-slate-100">
            O'zbekiston bozoridagi eng mustahkam va sifatli qurilish qorishmalari.
          </p>
          <div className="mt-14 flex gap-5 justify-center font-bold">
            <a href="#products" className="bg-blue-600 hover:bg-blue-500 py-4 px-14 rounded-2xl transition-all shadow-xl hover:scale-105">Katalog</a>
            <a href="#contact" className="bg-white/10 py-4 px-14 rounded-2xl transition-all hover:bg-white/20 italic border border-white/20 backdrop-blur-sm">Bog'lanish</a>
          </div>
        </div>
      </section>

      {/* MAHSULOTLAR */}
      <section id="products" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4 border-b-2 border-slate-200 pb-10">
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Mahsulotlarimiz</h2>
            <p className="text-slate-600 mt-2 italic">Har bir loyiha uchun mukammal yechim</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full transform hover:-translate-y-2">
              <div className="relative h-64">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
                <div className="absolute bottom-5 left-5 bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg">
                  {p.price} UZS
                </div>
              </div>
              <div className="p-9 flex-grow flex flex-col">
                <h3 className="text-xl font-black mb-3 text-slate-800">{p.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{p.desc}</p>
                <a href="#contact" className="block text-center py-4 bg-slate-100 text-slate-500 group-hover:bg-yellow-500 group-hover:text-slate-900 rounded-2xl font-black text-xs uppercase transition-all">
                  Buyurtma berish
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ALOQA FORMASI */}
      <section id="contact" className="relative z-10 py-32 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-slate-950 mb-8 tracking-tighter">BOG'LANING</h2>
            <p className="text-slate-700 text-lg mb-10 italic">
              "Carcass Classic" mutaxassislari sizga yordam berishadi.
            </p>
            <div className="bg-white p-5 rounded-2xl shadow-sm font-bold text-blue-700">
              📞 +998 90 123 45 67
            </div>
          </div>

          <div className="relative">
            {!submitted ? (
              <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl border border-slate-100 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <input type="text" placeholder="Ism va Familya" className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-blue-400 outline-none" required />
                  <input type="tel" placeholder="+998" className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-blue-400 outline-none" required />
                  <button type="submit" className="w-full bg-slate-950 text-white font-black py-6 rounded-2xl shadow-xl hover:bg-blue-900 transition-all uppercase text-sm tracking-widest">
                    Yuborish
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-blue-600 p-20 rounded-[3.5rem] text-center text-white shadow-2xl">
                <h2 className="text-4xl font-black mb-5 uppercase">Rahmat!</h2>
                <p className="text-blue-100 italic text-lg">Arizangiz qabul qilindi.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-xs font-bold uppercase border-b border-white pb-1">Yangi ariza</button>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="relative z-10 py-24 bg-white border-t border-slate-200 text-center">
        <div className="text-3xl font-black text-slate-900 mb-8 italic uppercase">
          CARCASS <span className="text-yellow-500">CLASSIC</span>
        </div>
        <div className="text-slate-400 text-xs uppercase tracking-[0.25em]">
          © 2026 Carcass Classic. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
}