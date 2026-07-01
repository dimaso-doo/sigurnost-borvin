"use client";

import { FormEvent, useState } from "react";
import { Bot, LogOut, Send, Sparkles } from "lucide-react";

type ChatMessage = {
  role: "user" | "assistant";
  text: string;
};

export function AdminAiChat({ collections }: { collections: string[] }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Spreman sam. Napišite šta želite da promenimo na sajtu: naslov, opis, katalog, usluge, SEO ili blog savet."
    }
  ]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextMessage = message.trim();

    if (!nextMessage) {
      return;
    }

    setMessage("");
    setMessages((current) => [...current, { role: "user", text: nextMessage }]);
    setIsLoading(true);

    const response = await fetch("/api/admin/ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: nextMessage })
    });
    const data = await response.json().catch(() => ({}));

    setMessages((current) => [
      ...current,
      {
        role: "assistant",
        text: data.answer || data.error || "Nisam uspeo da dobijem odgovor."
      }
    ]);
    setIsLoading(false);
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.reload();
  }

  return (
    <section className="admin-console">
      <div className="admin-console-header">
        <div>
          <span>AI CMS</span>
          <h1>Uređivanje sadržaja uz asistenta</h1>
          <p>Chat predlaže izmene i čuva draft u Supabase kada su ključevi podešeni.</p>
        </div>
        <button className="button ghost" onClick={handleLogout} type="button">
          <LogOut size={17} />
          Izloguj se
        </button>
      </div>

      <div className="admin-console-layout">
        <aside className="admin-sidebar">
          <Sparkles size={22} />
          <h2>Sadržaj</h2>
          {collections.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </aside>

        <div className="admin-chat">
          <div className="admin-chat-messages">
            {messages.map((item, index) => (
              <div className={`admin-message ${item.role}`} key={`${item.role}-${index}`}>
                {item.role === "assistant" ? <Bot size={18} /> : null}
                <p>{item.text}</p>
              </div>
            ))}
            {isLoading ? (
              <div className="admin-message assistant">
                <Bot size={18} />
                <p>Pišem predlog...</p>
              </div>
            ) : null}
          </div>

          <form className="admin-chat-form" onSubmit={handleSubmit}>
            <textarea
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Npr. Napiši bolji tekst za hero sekciju ili predloži SEO opis za katalog."
              value={message}
            />
            <button className="button primary" disabled={isLoading} type="submit">
              <Send size={17} />
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
