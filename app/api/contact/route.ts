import { siteConfig } from "@/lib/site";

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = data.name?.trim();
    const email = data.email?.trim();
    const message = data.message?.trim();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Adresse email invalide." },
        { status: 400 }
      );
    }

    console.log("[Contact]", { name, email, message, to: siteConfig.email });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "Requête invalide." },
      { status: 400 }
    );
  }
}
