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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbxPQBcp-vBpbphVHw-3ZssWKHUyDjlY3pFLsVD6Jce9TTVLUIO9el1g7KROzTvNsgo/exec",
        {
          method: "POST",
          mode: "no-cors",
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
        }
      );

      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        product: "",
        message: "",
      });
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
          <a
            href="#home"
            className="text-2xl md:text-3xl font-black tracking-tighter text-blue-900 italic uppercase"
          >
            CARCASS <span className="text-yellow-500">CLASSIC</span>
          </a>

          <div className="hidden md:flex gap-8 font-semibold text-xs uppercase tracking-[0.25em] text-slate-700">
            <a href="#products" className="hover:text-blue-600 transition-colors">
              Mahsulotlar
            </a>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              Nega biz
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Buyurtma
            </a>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex bg-slate-950 text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all"
          >
            Bog‘lanish
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative min-h-[760px] flex items-center justify-center text-white pt-24"
      >
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1600&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-35"
            alt="Qurilish materiali fon rasmi"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-900/85 to-slate-950"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex px-5 py-2 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-300 text-xs font-black uppercase tracking-[0.25em] mb-8">
              Sifat • Ishonch • Mustahkamlik
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] uppercase tracking-tight">
              Qurilish uchun
              <span className="block text-yellow-400">ishonchli qorishmalar</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-200 leading-8 max-w-2xl">
              Fasad, ichki devor, plitka va pardozlash ishlari uchun sifatli,
              mustahkam va professional qurilish mahsulotlari.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#products"
                className="bg-blue-600 hover:bg-blue-500 py-4 px-8 rounded-2xl transition-all shadow-xl font-black uppercase text-sm tracking-[0.2em]"
              >
                Katalogni ko‘rish
              </a>
              <a
                href="#contact"
                className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm py-4 px-8 rounded-2xl transition-all font-black uppercase text-sm tracking-[0.2em]"
              >
                Buyurtma berish
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                "Namlikka chidamli",
                "Ustalar tanlovi",
                "Sifatli tarkib",
                "Tez aloqa",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl px-4 py-4 text-sm font-semibold text-slate-100 backdrop-blur-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
              <div className="text-xs uppercase tracking-[0.25em] text-yellow-300 font-black mb-4">
                Top mahsulotlar
              </div>
              <div className="space-y-5">
                {products.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-2xl"
                    />
                    <div className="flex-1">
                      <h3 className="font-black text-white text-sm">{item.name}</h3>
                      <p className="text-slate-300 text-sm mt-1">{item.price} UZS</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="relative z-10 -mt-12 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_80px_rgba(15,23,42,0.08)] border border-slate-100 p-8 md:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Yuqori sifat", desc: "Sinovdan o‘tgan tarkib" },
            { title: "Kuchli yopishish", desc: "Ishonchli natija" },
            { title: "Qulay buyurtma", desc: "Tez aloqa va maslahat" },
            { title: "Professional yondashuv", desc: "Quruvchilar uchun yechim" },
          ].map((item, idx) => (
            <div key={idx}>
              <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
              <p className="text-slate-500 mt-2 text-sm leading-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="relative z-10 py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.25em] mb-5">
              Mahsulotlar
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight">
              Mahsulotlarimiz
            </h2>
            <p className="text-slate-600 mt-4 text-lg max-w-2xl">
              Har bir loyiha uchun mustahkam, sifatli va ishonchli qurilish yechimlari.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_80px_rgba(15,23,42,0.12)] transition-all duration-500 border border-slate-100 flex flex-col h-full hover:-translate-y-2"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                />

                <div className="absolute top-5 left-5 bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-black shadow-lg">
                  {p.price} UZS
                </div>

                {p.badge && (
                  <div className="absolute top-5 right-5 bg-yellow-400 text-slate-950 px-4 py-2 rounded-xl text-xs font-black uppercase shadow-lg">
                    {p.badge}
                  </div>
                )}
              </div>

              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-black mb-3 text-slate-900">{p.name}</h3>
                <p className="text-slate-600 text-sm leading-7 mb-6">{p.desc}</p>

                <div className="space-y-3 mb-8">
                  {p.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-auto block text-center py-4 bg-slate-950 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-yellow-400 hover:text-slate-950"
                >
                  Buyurtma berish
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="about" className="relative z-10 py-28 px-6 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-yellow-100 text-yellow-700 text-xs font-black uppercase tracking-[0.25em] mb-5">
              Nega biz
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase tracking-tight leading-tight">
              Quruvchilar va mijozlar tanlaydigan sifat
            </h2>
            <p className="text-slate-600 mt-6 text-lg leading-8 max-w-2xl">
              CARCASS CLASSIC mahsulotlari qulay ishlov, mustahkam natija va
              ishonchli sifatni birlashtiradi. Har bir loyiha uchun amaliy va
              professional yechim taklif qilamiz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Sifatli tarkib",
                desc: "Yuqori natija beruvchi tanlangan xomashyo asosida tayyorlanadi.",
              },
              {
                title: "Qulay ishlov",
                desc: "Ustalar uchun qulay surtish, yoyish va ishlatish imkoniyati.",
              },
              {
                title: "Mustahkam natija",
                desc: "Ichki va tashqi ishlar uchun ishonchli va chidamli yechim.",
              },
              {
                title: "Tez maslahat",
                desc: "Mahsulot tanlashda sizga tezkor ma’lumot va yo‘riqnoma beramiz.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-7 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <div className="inline-block px-5 py-2 rounded-full bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-[0.25em] mb-6">
              Bog‘lanish
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-tight uppercase">
              Buyurtma qoldiring <br />
              <span className="text-blue-600">va biz siz bilan bog‘lanamiz</span>
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8 max-w-xl">
              Mahsulotlar, narxlar, maslahat yoki buyurtma uchun formani to‘ldiring.
              Operatorimiz siz bilan tez orada aloqaga chiqadi.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold mb-3">
                  Telegram
                </div>
                <a
                  href="https://t.me/iza_offf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black text-slate-900 hover:text-blue-600 transition"
                >
                  @iza_offf
                </a>
                <p className="text-slate-500 text-sm mt-2">Tezkor buyurtma va yozishma</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold mb-3">
                  Instagram
                </div>
                <a
                  href="https://instagram.com/carcass_classic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-black text-slate-900 hover:text-pink-600 transition"
                >
                  @carcass_classic
                </a>
                <p className="text-slate-500 text-sm mt-2">Mahsulotlar va yangiliklar</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold mb-3">
                  Telefon
                </div>
                <a
                  href="tel:+998901234567"
                  className="text-xl font-black text-slate-900 hover:text-blue-600 transition"
                >
                  +998 90 123 45 67
                </a>
                <p className="text-slate-500 text-sm mt-2">Savdo bo‘limi bilan aloqa</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400 font-bold mb-3">
                  Ish vaqti
                </div>
                <div className="text-xl font-black text-slate-900">09:00 – 20:00</div>
                <p className="text-slate-500 text-sm mt-2">Dushanba – Shanba</p>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            {!submitted ? (
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-slate-100 relative z-10">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-950 uppercase">
                    Tez buyurtma
                  </h3>
                  <p className="text-slate-500 mt-3 leading-7">
                    Ma’lumotingizni qoldiring, operatorimiz sizga aloqaga chiqadi.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                      Ism va Familya
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masalan: Ibrohim Xasanov"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                      Telefon raqam
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                      Qiziqqan mahsulot
                    </label>
                    <select
                      name="product"
                      value={form.product}
                      onChange={handleChange}
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    >
                      <option value="">Mahsulotni tanlang</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-[0.2em] text-slate-500 mb-3">
                      Izoh
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Masalan: 20 qop kerak, narxi va yetkazib berish haqida ma’lumot bering"
                      rows={4}
                      className="w-full p-5 bg-slate-50 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-slate-950 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-blue-700 transition-all uppercase text-sm tracking-[0.25em] disabled:opacity-70"
                  >
                    {loading ? "Yuborilmoqda..." : "So‘rov yuborish"}
                  </button>

                  <p className="text-xs text-slate-400 text-center pt-2">
                    Tugmani bosish orqali siz bilan bog‘lanishimizga rozilik bildirasiz.
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-blue-600 to-slate-900 p-12 md:p-16 rounded-[2.5rem] text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.25)]">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-8 text-4xl">
                  ✓
                </div>
                <h2 className="text-4xl font-black mb-4 uppercase">Rahmat!</h2>
                <p className="text-blue-100 text-lg leading-8 max-w-md mx-auto">
                  Arizangiz qabul qilindi. Tez orada siz bilan bog‘lanamiz.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-10 inline-block text-sm font-bold uppercase tracking-[0.2em] border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-slate-900 transition-all"
                >
                  Yangi ariza
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 bg-slate-950 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 border-b border-white/10 pb-14">
            <div className="md:col-span-2">
              <div className="text-3xl font-black mb-5 uppercase">
                CARCASS <span className="text-yellow-400">CLASSIC</span>
              </div>
              <p className="text-slate-400 leading-8 max-w-lg">
                Fasad, ichki pardozlash va plitka ishlari uchun sifatli qurilish
                qorishmalari. Ishonchli mahsulot, qulay buyurtma va professional
                yondashuv.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white mb-5">
                Sahifalar
              </h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="#home" className="hover:text-white transition">
                    Bosh sahifa
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-white transition">
                    Mahsulotlar
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    Nega biz
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    Bog‘lanish
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white mb-5">
                Aloqa
              </h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="tel:+998901234567" className="hover:text-white transition">
                    +998 90 123 45 67
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/iza_offf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    @iza_offf
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/carcass_classic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    @carcass_classic
                  </a>
                </li>
                <li>Toshkent, O‘zbekiston</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
            <div>© 2026 Carcass Classic. Barcha huquqlar himoyalangan.</div>
            <div>Premium construction materials landing page</div>
          </div>
        </div>
      </footer>

      {/* FLOATING CONTACT BUTTONS */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://t.me/iza_offf"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-xl"
          title="Telegram"
        >
          ✈
        </a>

        <a
          href="https://instagram.com/carcass_classic"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-pink-600 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-xl"
          title="Instagram"
        >
          ◎
        </a>

        <a
          href="tel:+998901234567"
          className="w-14 h-14 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all text-xl"
          title="Call"
        >
          ☎
        </a>
      </div>
    </div>
  );
}