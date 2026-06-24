export default function About() {
    return (
        <section className="py-24 px-6 max-w-6xl mx-auto">
            <><h2 className="text-5xl font-black text-center">
                À propos de moi
            </h2><div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
                    <div>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Je suis OUFFOUET DEXQUIS JUNIOR, développeur Full Stack passionné
                            par la création d'applications web modernes, performantes et
                            orientées utilisateur.
                        </p>

                        <p className="mt-6 text-gray-400 leading-relaxed">
                            Mon domaine d'expertise couvre le développement Frontend avec
                            React/Next.js, le Backend avec Node.js, Java, Spring Boot ainsi que
                            l'intégration des solutions d'intelligence artificielle.
                        </p>

                        <a
                            href="/CV_OUFFOUET_JUNIOR.pdf"
                            className="inline-block mt-8 bg-yellow-600 px-8 py-4 rounded-lg font-bold"
                        >
                            Télécharger mon CV
                        </a>
                    </div>

                    <div className="bg-slate-900 p-8 rounded-2xl border border-yellow-600/30">
                        <h3 className="text-2xl font-bold text-yellow-500">
                            Mon objectif
                        </h3>

                        <p className="mt-4 text-gray-300">
                            Créer des solutions numériques innovantes qui répondent à de vrais
                            besoins métiers.
                        </p>
                    </div>
                </div></>
        </section>
    );
}