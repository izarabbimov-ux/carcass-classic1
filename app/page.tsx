"use client";

import React, { useState } from "react";
import AmoFormCard from "@/components/AmoFormCard";

interface Product {
  id: number;
  name: string;
  price: string;
  desc: string;
  img: string;
  features: string[];
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Carcass Shpaklyofka (Fasad)",
    price: "56,000",
    desc: "Tashqi devorlar uchun maxsus chidamli va silliq yakuniy qoplama.",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?q=80&w=800&auto=format&fit=crop",
    features: ["Fasad uchun", "Namlikka chidamli", "Silliq finish"],
    badge: "Top tanlov",
  },
  {
    id: 2,
    name: "Carcass Shpaklyofka (Ichki)",
    price: "46,000",
    desc: "Ichki ishlar uchun oq, silliq va qulay ishlov beriladigan aralashma.",
    img: "https://images.unsplash.com/photo-1590385602724-40d1f554967a?q=80&w=800&auto=format&fit=crop",
    features: ["Ichki devorlar", "Qordek oq", "Oson ishlov"],
  },
  {
    id: 3,
    name: "kley-505 (Ekonom)",
    price: "39,000",
    desc: "Kafel va keramika uchun hamyonbop va ishonchli tanlov.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    features: ["Kafel uchun", "Kuchli yopishish", "Qulay narx"],
  },
  {
    id: 4,
    name: "Carcass Plitka Klei (Premium)",
    price: "73,000",
    desc: "Og‘ir granit va yirik plitkalar uchun yuqori mustahkam yopishtiruvchi.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    features: ["Premium sifat", "Granit uchun", "Kuchli ushlash"],
    badge: "Premium",
  },
  {
    id: 5,
    name: "Carcass Shtukaturka (Gipsli)",
    price: "43,000",
    desc: "Tez quriydigan va tekis ishlov berish uchun qulay gipsli qorishma.",
    img: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=800&auto=format&fit=crop",
    features: ["Tez quriydi", "Ichki ishlar", "Tekis natija"],
  },
  {
    id: 6,
    name: "Shtukaturka (gipsovaya universal)",
    price: "28,000",
    desc: ".",
    img: "https://images.unsplash.com/photo-1533000632560-69539d710f60?q=80&w=800&auto=format&fit=crop",
    features: [""],
  },
  {
    id: 7,
    name: "shtukaturka gipsavoy PREMIUM ",
    price: "38,000",
    desc: "Hamma turdagi yuzalar uchun universal gipsli shtukaturka.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    features: ["Universal", "Qalin qatlam", "Yorilmaydi"],
    badge: "Yangi",
  },
  {
    id: 8,
    name: "Etap 800 (Nalivnoy-pol)",
    price: "48,000",
    desc: "Professional pardozlash uchun eng yuqori sifatli premium mahsulot.",
    img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800&auto=format&fit=crop",
    features: ["Professional", "Premium finish", "Yuqori sifat"],
    badge: "PRO",
  },
];

export default function ConstructionSite() {
  return (
    <div className="min-h-screen text-slate-900 scroll-smooth relative bg-slate-50 overflow-hidden font-sans">
      <nav className="fixed top-0 w-full bg-white/75 backdrop-blur-xl z-50 py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl md:text-3xl font-black tracking-tighter text-blue-900 italic uppercase">
            CARCASS <span className="text-yellow-500">CLASSIC</span>
          </a>
          <div className="hidden md:flex gap-8 font-semibold text-xs uppercase tracking-[0.25em] text-slate-700 items-center">
            <a href="#products" className="hover:text-blue-600 transition-colors">Mahsulotlar</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Nega biz .</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Buyurtma</a>
            {/* Ijtimoiy tarmoqlar tepada */}
            <div className="h-4 w-px bg-slate-200 mx-2"></div>
            <a href="https://t.me/carcass_classic_uz" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:scale-110 transition-transform font-black">TG</a>
            <a href="https://www.instagram.com/carcass_class1c?igsh=MWV2emNkd2o1dmx2dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition-transform font-black">INSTA</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-slate-950 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all">
            Bog‘lanish
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-[85vh] flex items-center justify-center text-white pt-24">
        <div className="absolute inset-0 bg-slate-900">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1600&auto=format&fit=crop" className="w-full h-full object-cover opacity-35" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/85 to-slate-950"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-black uppercase tracking-[0.25em] mb-8">
            Sifat • Ishonch • Mustahkamlik
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] uppercase tracking-tight mb-8">
            Qurilish uchun <br />
            <span className="text-yellow-400">ishonchli qorishmalar</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 leading-8 max-w-2xl mx-auto mb-10">
            Fasad, ichki devor, plitka va pardozlash ishlari uchun professional mahsulotlar.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#products" className="bg-blue-600 hover:bg-blue-500 py-5 px-12 rounded-2xl transition-all shadow-xl font-black uppercase text-sm tracking-[0.2em]">
              Katalogni ko‘rish
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm py-5 px-12 rounded-2xl transition-all font-black uppercase text-sm tracking-[0.2em]">
              Buyurtma berish
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.25em] mb-5">Mahsulotlar</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 uppercase tracking-tight">Mahsulotlarimiz</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-black shadow-lg">{p.price} UZS</div>
                {p.badge && <div className="absolute top-5 right-5 bg-yellow-400 text-slate-950 px-4 py-2 rounded-xl text-[10px] font-black uppercase shadow-lg">{p.badge}</div>}
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-black mb-3 text-slate-900">{p.name}</h3>
                <p className="text-slate-500 text-sm leading-6 mb-6">{p.desc}</p>
                <div className="space-y-2 mb-8">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-600 italic">
                      <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> {f}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="mt-auto block text-center py-4 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-blue-600">
                  Buyurtma berish
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AmoCRM Form Section */}
      <section id="contact" className="py-32 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6">
           <AmoFormCard />
        </div>
      </section>

      <footer className="bg-slate-950 text-white py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8">
            {/* Telegram */}
            <a href="https://t.me/carcass_classic_uz" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <span className="p-4 bg-white/5 rounded-2xl group-hover:bg-blue-600 transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z"/></svg>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-blue-400">Telegram</span>
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/carcass_class1c?igsh=MWV2emNkd2o1dmx2dw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
              <span className="p-4 bg-white/5 rounded-2xl group-hover:bg-pink-600 transition-all duration-300">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.778 6.98 6.978 1.28.058 1.688.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-pink-400">Instagram</span>
            </a>
          </div>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © 2026 Carcass Classic. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}