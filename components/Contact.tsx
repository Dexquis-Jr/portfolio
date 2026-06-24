"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [sent, setSent] = useState<boolean>(false);

  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSent(true);
  }

  return (
    <section className="py-24 px-6 max-w-3xl mx-auto">
      <h2 className="text-5xl font-black text-center">
        Contact
      </h2>

      <form onSubmit={send} className="mt-12 space-y-5">
        <input
          className="w-full bg-slate-900 p-4 rounded-lg"
          placeholder="Nom"
          type="text"
        />

        <input
          className="w-full bg-slate-900 p-4 rounded-lg"
          placeholder="Email"
          type="email"
        />

        <textarea
          className="w-full bg-slate-900 p-4 rounded-lg h-40"
          placeholder="Votre message"
        />

        <button
          type="submit"
          className="bg-yellow-600 px-8 py-4 rounded-lg font-bold"
        >
          Envoyer
        </button>

        {sent && (
          <p className="text-green-400">
            Message envoyé !
          </p>
        )}
      </form>
    </section>
  );
}