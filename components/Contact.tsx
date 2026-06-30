"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function send(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Une erreur est survenue.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Impossible d'envoyer le message. Réessayez plus tard."
      );
    }
  }

  return (
    <AnimatedSection id="contact">
      <div className="container-wrapper">
        <div className="max-w-3xl mx-auto card-container">
          <div className="text-center mb-12">
            <p className="section-label">Contact</p>
            <h2 className="section-heading">Entrons en contact</h2>
            <p className="section-description">
              N&apos;hésitez pas à envoyer un message pour discuter de votre
              prochain projet.
            </p>
          </div>

          <form onSubmit={send} className="grid gap-6">
            <input
              className="form-input"
              placeholder="Votre nom"
              type="text"
              name="name"
              required
              disabled={status === "loading"}
            />

            <input
              className="form-input"
              placeholder="Votre email"
              type="email"
              name="email"
              required
              disabled={status === "loading"}
            />

            <textarea
              className="form-input"
              placeholder="Votre message"
              rows={6}
              name="message"
              required
              disabled={status === "loading"}
            />

            <button
              type="submit"
              className="btn-primary w-full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
            </button>

            {status === "success" && (
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-300 text-center font-medium">
                Message envoyé avec succès ! Je vous répondrai rapidement.
              </div>
            )}

            {status === "error" && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-center font-medium">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
