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

  const [form, setForm] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  // YANGI SCRIPT URL (Siz bergan URL)
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyvnVcgbU5D1hGHrqSrFucnt8BnSboojR4SPAOe5H5OJekB_YjVP1SHV9pcn0uKqmM/exec";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.product) {
      alert("Iltimos, ism, telefon va mahsulotni to‘ldiring.");
      return;
    }

    setLoading(true);

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        cache: 'no-cache',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          product: form.product,
          message: form.message,
          source: "Carcass Classic Website",
          createdAt: new Date().toLocaleString("uz-UZ"),
        }),
      });

      setSubmitted(true);
      setForm({ name: "", phone: "", product: "", message: "" });
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi, qaytadan urinib ko‘ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-slate-900 scroll-smooth relative bg-slate-50 overflow-hidden">
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[100px]"></div>
      </div>

      {/* NAVBAR */}
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

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[760px] flex items-center justify-center text-white pt-24">
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
            <a href="#products" className="bg-blue-600 hover:bg-blue-500 py-4 px-10 rounded-2xl transition-all shadow-xl font-black uppercase text-sm tracking-[0.2em]">
              Katalogni ko‘rish
            </a>
            <a href="#contact" className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm py-4 px-10 rounded-2xl transition-all font-black uppercase text-sm tracking-[0.2em]">
              Buyurtma berish
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="relative z-10 py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight">Bizning Mahsulotlar</h2>
          <div className="h-1.5 w-24 bg-yellow-400 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="relative h-56">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-bold">{p.price} UZS</div>
                {p.badge && <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase">{p.badge}</div>}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-black text-lg mb-2">{p.name}</h3>
                <p className="text-slate-500 text-xs leading-5 mb-4">{p.desc}</p>
                <a href="#contact" className="mt-auto block text-center py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  Buyurtma
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 py-28 px-6 bg-white border-t">
        <div className="max-w-4xl mx-auto">
          {!submitted ? (
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200">
              <h2 className="text-3xl font-black text-center mb-8 uppercase tracking-tight">Buyurtma Formasi</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ism va Familya"
                    className="w-full p-4 rounded-2xl border bg-white outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Telefon (+998901234567)"
                    className="w-full p-4 rounded-2xl border bg-white outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <select
                  name="product"
                  className="w-full p-4 rounded-2xl border bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.product}
                  onChange={handleChange}
                  required
                >
                  <option value="">Mahsulotni tanlang</option>
                  {products.map(p => <option key={p.id} value={p.name}>{p.name}</option>)}
                </select>
                <textarea
                  name="message"
                  placeholder="Izohingiz (masalan: 100 qop kerak)"
                  rows={4}
                  className="w-full p-4 rounded-2xl border bg-white outline-none focus:ring-2 focus:ring-blue-500"
                  value={form.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 text-white font-black py-4 rounded-2xl hover:bg-blue-700 transition-all uppercase tracking-widest disabled:opacity-50"
                >
                  {loading ? "Yuborilmoqda..." : "Yuborish"}
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center p-12 bg-green-50 rounded-[2.5rem] border border-green-200">
              <h2 className="text-3xl font-black text-green-800 mb-4">MUVAFFAQIYATLI!</h2>
              <p className="text-green-700 mb-8">Arizangiz qabul qilindi. Tez orada operatorimiz siz bilan bog'lanadi.</p>
              <button onClick={() => setSubmitted(false)} className="bg-green-600 text-white px-8 py-3 rounded-full font-bold">Yangi buyurtma</button>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-12 px-6 text-center">
        <p className="text-2xl font-black italic mb-4">CARCASS CLASSIC</p>
        <p className="text-slate-500 text-sm">© 2026 Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}