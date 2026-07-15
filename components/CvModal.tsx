"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "@/lib/site";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function CvModal({ open, onClose }: Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!open) return;

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open || !mounted) return null;

    return createPortal(
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/60 z-10" onClick={onClose} aria-hidden />

            <div className="relative z-20 w-full max-w-5xl h-[calc(100vh-3rem)] bg-slate-900 rounded-xl overflow-hidden border border-yellow-600/20 shadow-2xl">
                <div className="flex items-center justify-between p-4 border-b border-yellow-600/20 bg-slate-950/90 backdrop-blur-sm">
                    <h3 className="text-lg font-semibold">Mon CV</h3>
                    <div className="flex gap-2">
                        <a href={siteConfig.cvPath} download className="btn-primary px-4 py-2 text-sm">
                            Télécharger
                        </a>
                        <button onClick={onClose} className="px-3 py-2 text-sm text-gray-200 hover:text-accent">
                            Fermer
                        </button>
                    </div>
                </div>

                <div className="h-full overflow-hidden p-4">
                    <div className="flex h-full flex-col gap-3">
                        <div className="text-sm text-muted">Prévisualisation</div>
                        <div className="flex-1 bg-slate-800 rounded-lg overflow-hidden">
                            <object
                                data={siteConfig.cvPath}
                                type="application/pdf"
                                className="w-full h-full"
                            >
                                <div className="flex h-full flex-col items-center justify-center p-6 text-center text-sm text-gray-300">
                                    Le navigateur n'arrive pas à afficher le PDF.
                                    <div className="mt-3 flex flex-col gap-2">
                                        <a
                                            href={siteConfig.cvPath}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-accent underline"
                                        >
                                            Ouvrir le CV dans un nouvel onglet
                                        </a>
                                        <a
                                            href={siteConfig.cvPath}
                                            download
                                            className="text-accent underline"
                                        >
                                            Télécharger le CV
                                        </a>
                                    </div>
                                </div>
                            </object>
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
