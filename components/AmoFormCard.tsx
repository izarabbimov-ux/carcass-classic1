"use client";
import React, { useState } from "react";

export default function AmoFormCard() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
    };

    try {
      const res = await fetch("/api/send-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        alert("Xatolik yuz berdi. Terminalni tekshiring.");
      }
    } catch (error) {
      alert("Internet aloqasini tekshiring.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl text-center border-t-8 border-green-500 max-w-2xl mx-auto my-10">
        <h2 className="text-3xl font-black text-slate-900 mb-4 uppercase">Rahmat! ✅</h2>
        <p className="text-slate-500 font-bold">Buyurtmangiz guruhga yuborildi.</p>
        <button onClick={() => setSuccess(false)} className="mt-8 text-blue-600 font-black">YANA YUBORISH</button>
      </div>
    );
  }

  return (
    <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 max-w-2xl mx-auto my-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-3 bg-[#FFCC00]"></div>
      <h2 className="text-3xl font-black text-center mb-10 uppercase tracking-tighter text-slate-950">
        BUYURTMA BERISH
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <input 
          name="name" 
          placeholder="Ismingiz" 
          required 
          className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:outline-none font-bold text-slate-800 shadow-inner" 
        />
        <input 
          name="phone" 
          placeholder="Telefon raqamingiz" 
          required 
          className="w-full p-6 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-yellow-400 focus:outline-none font-bold text-slate-800 shadow-inner" 
        />
        <button 
          disabled={loading} 
          className="w-full bg-slate-950 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-blue-800 transition-all shadow-xl active:scale-95 disabled:opacity-50"
        >
          {loading ? "YUBORILMOQDA..." : "BUYURTMA BERISH"}
        </button>
      </form>
    </div>
  );
}