"use client";

import React, { useState } from "react";

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
    price: "55,000",
    desc: "Tashqi devorlar uchun maxsus chidamli va silliq yakuniy qoplama.",
    img: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop",
    features: ["Fasad uchun", "Namlikka chidamli", "Silliq finish"],
    badge: "Top tanlov",
  },
  {
    id: 2,
    name: "Carcass Shpaklyofka (Ichki)",
    price: "45,000",
    desc: "Ichki ishlar uchun oq, silliq va qulay ishlov beriladigan aralashma.",
    img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    features: ["Ichki devorlar", "Qordek oq", "Oson ishlov"],
  },
  {
    id: 3,
    name: "Carcass Plitka Klei (Ekonom)",
    price: "38,000",
    desc: "Kafel va keramika uchun hamyonbop va ishonchli tanlov.",
    img: "https://images.unsplash.com/photo-1581094288338-2314dddb7903?q=80&w=800&auto=format&fit=crop",
    features: ["Kafel uchun", "Kuchli yopishish", "Qulay narx"],
  },
  {
    id: 4,
    name: "Carcass Plitka Klei (Premium)",
    price: "72,000",
    desc: "Og‘ir granit va yirik plitkalar uchun yuqori mustahkam yopishtiruvchi.",
    img: "https://images.unsplash.com/photo-1590385602724-40d1f554967a?q=80&w=800&auto=format&fit=crop",
    features: ["Premium sifat", "Granit uchun", "Kuchli ushlash"],
    badge: "Premium",
  },
  {
    id: 5,
    name: "Carcass Shtukaturka (Gipsli)",
    price: "42,000",
    desc: "Tez quriydigan va tekis ishlov berish uchun qulay gipsli qorishma.",
    img: "https://images.unsplash.com/photo-1517646281691-150109f26a91?q=80&w=800&auto=format&fit=crop",
    features: ["Tez quriydi", "Ichki ishlar", "Tekis natija"],
  },
  {
    id: 6,
    name: "Carcass Shtukaturka (Sement)",
    price: "85,000",
    desc: "Namlikka chidamli va og‘ir sharoitlarda ham mustahkam sementli asos.",
    img: "https://images.unsplash.com/photo-1533000632560-69539d710f60?q=80&w=800&auto=format&fit=crop",
    features: ["Sementli asos", "Namlikka chidamli", "Mustahkam"],
  },
  {
    id: 7,
    name: "Carcass Rotband (Universal)",
    price: "65,000",
    desc: "Hamma turdagi yuzalar uchun universal gipsli shtukaturka.",
    img: "https://images.unsplash.com/photo-1585338661021-096c4333626e?q=80&w=800&auto=format&fit=crop",
    features: ["Universal", "Qalin qatlam", "Yorilmaydi"],
    badge: "Yangi",
  },
  {
    id: 8,
    name: "Etap 700 (Carcass Edition)",
    price: "145,000",
    desc: "Professional pardozlash uchun eng yuqori sifatli premium mahsulot.",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    features: ["Professional", "Premium finish", "Yuqori sifat"],
    badge: "PRO",
  },
];

export default function ConstructionSite() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", product: "", message: "" });

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvnVcgbU5D1hGHrqSrFucnt8BnSboojR4SPAOe5H5OJekB_YjVP1SHV9pcn0uKqmM/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({ ...form, source: "Carcass Website", createdAt: new Date().toLocaleString() }),
      });
      setSubmitted(true);
      setForm({ name: "", phone: "", product: "", message: "" });
    } catch (error) {
      alert("Xatolik!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 scroll-smooth relative bg-slate-50 overflow-hidden font-sans">
      {/* 1. NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/75 backdrop-blur-xl z-50 py-4 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-2xl md:text-3xl font-black tracking-tighter text-blue-900 italic uppercase">
            CARCASS <span className="text-yellow-500">CLASSIC</span>
          </a>
          <div className="hidden md:flex gap-8 font-semibold text-xs uppercase tracking-[0.25em] text-slate-700">
            <a href="#products" className="hover:text-blue-600 transition-colors">Mahsulotlar</a>
            <a href="#about" className="hover:text-blue-600 transition-colors">Nega biz</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Buyurtma</a>
          </div>
          <a href="#contact" className="hidden md:inline-flex bg-slate-950 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all">
            Bog‘lanish
          </a>
        </div>
      </nav>

      {/* 2. HERO SECTION */}
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

      {/* 3. TRUST STRIP */}
      <section className="relative z-10 -mt-16 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-2xl border border-slate-100 p-10 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: "Yuqori sifat", desc: "Sinovdan o‘tgan tarkib" },
            { title: "Kuchli yopishish", desc: "Ishonchli natija" },
            { title: "Qulay buyurtma", desc: "Tez aloqa va maslahat" },
            { title: "Professional", desc: "Ustalar uchun yechim" },
          ].map((item, idx) => (
            <div key={idx} className="text-center md:text-left">
              <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
              <p className="text-slate-500 mt-2 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRODUCTS SECTION */}
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

      {/* 5. NEGA BIZ (ABOUT) */}
      <section id="about" className="relative z-10 py-32 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-[0.25em] mb-5">Nega biz</div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">Quruvchilar tanlaydigan sifat</h2>
            <p className="text-slate-600 mt-6 text-lg leading-8">CARCASS CLASSIC mahsulotlari mustahkam natija va ishonchli sifatni birlashtiradi.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { t: "Sifatli tarkib", d: "Tanlangan xomashyo asosida." },
              { t: "Qulay ishlov", d: "Ustalar uchun oson surtish." },
              { t: "Mustahkam", d: "Yillar davomida chidamli." },
              { t: "Tez aloqa", d: "Professional maslahat." },
            ].map((item, i) => (
              <div key={i} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8">
                <h3 className="text-xl font-black text-slate-900 mb-2">{item.t}</h3>
                <p className="text-slate-500 text-sm">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONTACT & SOCIALS SECTION */}
      <section id="contact" className="relative z-10 py-32 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.25em] mb-6">Bog‘lanish</div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-tight uppercase mb-8">Biz bilan <br /><span className="text-blue-600">aloqada bo‘ling</span></h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <a href="https://t.me/iza_offf" target="_blank" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all group">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Telegram</div>
                <div className="text-xl font-black text-slate-900 group-hover:text-blue-600">@iza_offf</div>
              </a>
              <a href="https://instagram.com/carcass_classic" target="_blank" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-all group">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Instagram</div>
                <div className="text-xl font-black text-slate-900 group-hover:text-pink-600">@carcass_classic</div>
              </a>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Telefon</div>
                <div className="text-xl font-black text-slate-900">+998 90 123 45 67</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-3">Ish vaqti</div>
                <div className="text-xl font-black text-slate-900">09:00 – 20:00</div>
              </div>
            </div>
          </div>

          <div className="relative">
            {!submitted ? (
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-xl border border-slate-100">
                <h3 className="text-3xl font-black mb-8 uppercase">Tez buyurtma</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="text" name="name" placeholder="Ismingiz" className="w-full p-5 bg-slate-50 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500" value={form.name} onChange={handleChange} required />
                  <input type="tel" name="phone" placeholder="Telefon (+998...)" className="w-full p-5 bg-slate-50 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500" value={form.phone} onChange={handleChange} required />
                  <select name="product" className="w-full p-5 bg-slate-50 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500" value={form.product} onChange={handleChange} required>
                    <option value="">Mahsulotni tanlang</option>
                    {products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                  </select>
                  <textarea name="message" placeholder="Izoh (qoplar soni...)" rows={4} className="w-full p-5 bg-slate-50 rounded-2xl border outline-none focus:ring-2 focus:ring-blue-500 resize-none" value={form.message} onChange={handleChange} />
                  <button type="submit" disabled={loading} className="w-full bg-slate-950 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all uppercase tracking-widest">
                    {loading ? "Yuborilmoqda..." : "Yuborish"}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-blue-600 p-16 rounded-[3rem] text-center text-white shadow-2xl">
                <div className="text-6xl mb-6">✓</div>
                <h2 className="text-4xl font-black mb-4 uppercase">Rahmat!</h2>
                <p className="text-blue-100 text-lg">Arizangiz qabul qilindi. Operatorimiz tez orada bog‘lanadi.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 border border-white/30 px-8 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-all font-bold uppercase">Yangi ariza</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-12 gap-8">
            <div className="text-3xl font-black uppercase italic">CARCASS <span className="text-yellow-400">CLASSIC</span></div>
            <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
              <a href="#products" className="hover:text-white transition">Mahsulotlar</a>
              <a href="#about" className="hover:text-white transition">Nega biz</a>
              <a href="https://instagram.com/carcass_classic" className="hover:text-white transition">Instagram</a>
            </div>
          </div>
          <div className="pt-8 text-center md:text-left text-slate-500 text-xs">
            © 2026 Carcass Classic. Barcha huquqlar himoyalangan. O'zbekistonda ishlab chiqarilgan.
          </div>
        </div>
      </footer>
    </div>
  );
}