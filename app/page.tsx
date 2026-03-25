"use client";

import React, { useState } from 'react';

// Mahsulotlar ro'yxati (o'zgarishsiz qoldi, faqat ID'lar va rasm havolalari biroz to'g'rilandi)
const products = [
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // ASOSIY FON: gradient va tekstura bilan yangilandi
    <div className="min-h-screen text-slate-900 scroll-smooth relative bg-slate-50 overflow-hidden">
      {/* FON EFFEKTLARI: Murakkab gradient va naqsh qatlami */}
      <div className="absolute inset-0 z-0">
        {/* Asosiy yumshoq gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-100 to-slate-200"></div>
        {/* "Abstract" geometrik naqsh (Pattern) */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuNCI+PHBhdGggZD0iTTAgMGg4MHY4MEgwVjB6bTQwIDQwSDB2NDBoNDBWNDB6bTAgMEg4MFYwSDQwVjQwek0wIDQwSDQwVjBIMFY0MHoiLz48L2c+PC9zdmc+')]"></div>
        {/* Atmosferik yorug'lik dog'lari */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/30 rounded-full blur-[100px]"></div>
      </div>

      {/* NAV BAR: shaffofroq va nozikroq */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 py-4 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter text-blue-900 italic">
            CARCASS <span className="text-yellow-500">CLASSIC</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-xs uppercase tracking-widest text-slate-700">
            <a href="#products" className="hover:text-blue-600 transition-colors">Mahsulotlar</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Buyurtma</a>
          </div>
        </div>
      </nav>

      {/* REKLAMA BANNERI: Fon tasviri va effektlari kuchaytirildi */}
      <section className="relative h-[650px] flex items-center justify-center text-white overflow-hidden pt-16 mt-16">
        <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=1600')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/90 to-slate-950"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 animate-fade-in">
          <h2 className="text-yellow-400 font-bold tracking-[0.4em] mb-4 uppercase text-sm">Sifat va Ishonch</h2>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            CARCASS CLASSIC
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto opacity-90 leading-relaxed text-slate-100">
            O'zbekiston bozoridagi eng mustahkam va sifatli qurilish qorishmalari. 
            Sizning loyihangiz asrlar davomida xizmat qiladi!
          </p>
          <div className="mt-14 flex gap-5 justify-center">
            <a href="#products" className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-14 rounded-2xl transition-all shadow-xl hover:scale-105">Katalog</a>
            <a href="#contact" className="bg-white/10 text-white font-bold py-4 px-14 rounded-2xl transition-all hover:bg-white/20 italic backdrop-blur-sm border border-white/20">Bog'lanish</a>
          </div>
        </div>
      </section>

      {/* MAHSULOTLAR: Kartalar fon ustida "suzib yurishi" uchun dizayn o'zgardi */}
      <section id="products" className="relative z-10 py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-4 border-b-2 border-slate-200 pb-10">
          <div>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">Mahsulotlarimiz</h2>
            <p className="text-slate-600 mt-2 italic">Har bir loyiha uchun mukammal yechim</p>
          </div>
          <p className="text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-100 px-4 py-1.5 rounded-full">Carcass 2026 Collection</p>
        </div>

        {/* KARTALAR GRIDI: Gap (oraliq) va o'lchamlar to'g'rilandi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          {products.map((p) => (
            // KARTA: Fon oq bo'lib qoldi, lekin soyalar va aylanishlar yanada chuqurlashdi
            <div key={p.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-700 border border-slate-100 flex flex-col h-full transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden border-b border-slate-100">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute bottom-5 left-5 bg-blue-600 text-white px-5 py-2 rounded-xl text-sm font-bold shadow-lg">
                  {p.price} UZS
                </div>
              </div>
              <div className="p-9 flex-grow flex flex-col">
                <h3 className="text-xl font-black mb-3 text-slate-800 tracking-tight">{p.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">{p.desc}</p>
                <div className="mt-auto">
                  <a href="#contact" className="block text-center py-4 bg-slate-100 text-slate-500 group-hover:bg-yellow-500 group-hover:text-slate-900 rounded-2xl font-black text-xs uppercase tracking-tighter transition-all shadow-inner">
                    Buyurtma berish
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARIZA TOPSHIRISH: Fon bilan uyg'unlashgan yumshoqroq qism */}
      <section id="contact" className="relative z-10 py-32 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black text-slate-950 mb-8 tracking-tighter leading-tight">MUTAXASSIS BILAN BOG'LANING</h2>
            <p className="text-slate-700 text-lg mb-10 italic leading-relaxed">
              "Carcass Classic" mutaxassislari sizga to'g'ri mahsulotni va hajmni tanlashda yordam berishadi. 
              Ma'lumotlaringizni qoldiring, biz 15 daqiqada bog'lanamiz!
            </p>
            <div className="space-y-5">
              <div className="flex items-center gap-5 text-blue-700 font-bold bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <span className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shadow-inner text-2xl">📞</span>
                +998 90 123 45 67
              </div>
            </div>
          </div>

          <div className="relative">
            {!submitted ? (
              // FORMA: O'ta yumshoq burchaklar va "chuqur" kirish maydonlari
              <div className="bg-white p-12 rounded-[3.5rem] shadow-card border border-slate-100 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-7">
                  <input type="text" placeholder="Ism va Familya" className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition-all font-medium placeholder-slate-400" required />
                  <input type="tel" placeholder="+998" className="w-full p-6 bg-slate-50 rounded-2xl border border-slate-100 focus:ring-2 focus:ring-blue-400 outline-none transition-all font-medium placeholder-slate-400" required />
                  <button type="submit" className="w-full bg-slate-950 text-white font-black py-6 rounded-2xl shadow-xl hover:bg-blue-900 transition-all active:scale-95 uppercase tracking-widest text-sm">
                    Yuborish
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-blue-600 p-20 rounded-[3.5rem] text-center text-white shadow-card animate-bounce-in">
                <h2 className="text-4xl font-black mb-5 uppercase tracking-tight">Rahmat!</h2>
                <p className="text-blue-100 italic text-lg leading-relaxed">Arizangiz qabul qilindi. Tez orada bog'lanamiz.</p>
                <button onClick={() => setSubmitted(false)} className="mt-10 text-xs font-bold uppercase tracking-widest border-b border-white pb-1">Yangi ariza</button>
              </div>
            )}
            {/* Formaning orqasidagi dekorativ yorug'lik */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-300 rounded-full -z-0 opacity-40 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* FOOTER: Saf-sariq "Carcass Classic" rangida */}
      <footer className="relative z-10 py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-3xl font-black text-slate-900 mb-8 italic">
            CARCASS <span className="text-yellow-500">CLASSIC</span>
          </div>
          <p className="text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
            Sifatli qurilish mollari ishlab chiqarish va yetkazib berish bo'yicha O'zbekistondagi ishonchli hamkoringiz.
          </p>
          <div className="mt-12 pt-12 border-t border-slate-100 text-slate-400 text-xs uppercase tracking-[0.25em]">
            © 2026 Carcass Classic. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </footer>

      {/* MAXSUS ANIMATSIYALAR VA SOYALAR (Tailwind Config'ga qo'shish o'rniga, shu yerda yozdik) */}
      <style jsx global>{`
        /* Soya effektlari (Chuqur va zamonaviy) */
        .shadow-card {
          box-shadow: 0 10px 40px -10px rgba(15, 23, 42, 0.05);
        }
        .shadow-card-hover {
          box-shadow: 0 30px 60px -15px rgba(15, 23, 42, 0.1);
        }

        /* Animatsiyalar */
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(25px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out forwards;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.7); opacity: 0; }
          60% { transform: scale(1.03); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.7s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }
        
        /* Smooth scroll */
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}