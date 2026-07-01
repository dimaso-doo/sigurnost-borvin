"use client";

import { FormEvent, useState } from "react";
import { Lock } from "lucide-react";

export function AdminLogin({ isConfigured }: { isConfigured: boolean }) {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setMessage("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password })
    });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setMessage(data.error || "Prijava nije uspela.");
      setIsLoading(false);
      return;
    }

    window.location.reload();
  }

  return (
    <section className="admin-login-panel">
      <Lock size={30} />
      <span>Zaštićeni admin</span>
      <h1>Prijava za uređivanje sajta</h1>
      <p>
        {isConfigured
          ? "Unesite admin lozinku da otvorite AI asistenta za sadržaj."
          : "Admin pristup još nije konfigurisan. Dodajte ADMIN_PASSWORD i ADMIN_SESSION_SECRET u environment varijable."}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Admin lozinka"
          disabled={!isConfigured || isLoading}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Lozinka"
          type="password"
          value={password}
        />
        <button className="button primary" disabled={!isConfigured || isLoading} type="submit">
          {isLoading ? "Provera..." : "Uđi u admin"}
        </button>
      </form>
      {message ? <p className="admin-error">{message}</p> : null}
    </section>
  );
}
