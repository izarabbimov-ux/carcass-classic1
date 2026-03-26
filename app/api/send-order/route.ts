import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, product, message } = body;

    // 1. Google Sheets-ga yuborish
    const googleUrl = process.env.NEXT_PUBLIC_SCRIPT_URL!;
    fetch(googleUrl, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ ...body, source: "Carcass Website", createdAt: new Date().toLocaleString() }),
    });

    // 2. Telegram-ga yuborish
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

// O'zbekiston vaqtini olish (GMT+5)
const hozirgiVaqt = new Intl.DateTimeFormat("uz-UZ", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Tashkent",
}).format(new Date());

const telegramText = `🚀 *YANGI BUYURTMA!*

👤 *Ism:* ${name}
📞 *Tel:* ${phone}
📦 *Mahsulot:* ${product}
💬 *Izoh:* ${message || "Yo'q"}

--------------------------
⏰ *Vaqt:* ${hozirgiVaqt}`;

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
    await fetch(telegramUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramText,
        parse_mode: "Markdown",
      }),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}