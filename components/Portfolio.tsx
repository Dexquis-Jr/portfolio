"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Github = ({ size }: { size?: number }) => (
    <span style={{ fontSize: size ?? 24, display: "inline-block" }}>
        🐙
    </span>
);

const Linkedin = ({ size }: { size?: number }) => (
    <span style={{ fontSize: size ?? 24, display: "inline-block" }}>
        🔗
    </span>
);

const Mail = ({ size }: { size?: number }) => (
    <span style={{ fontSize: size ?? 24, display: "inline-block" }}>
        ✉️
    </span>
);

export default function Portfolio() {


    const [displayText, setDisplayText] = useState("");

    const [isDeleting, setIsDeleting] = useState(false);

    const [loopNum, setLoopNum] = useState(0);

    const [typingSpeed, setTypingSpeed] = useState(80);

    const [hoveredSkill, setHoveredSkill] = useState(null);

    const [photoHovered, setPhotoHovered] = useState(false);



    const fullName = "OUFFOUET DEXQUIS JUNIOR";


    const roles = [
        "Développeur Full Stack",
        "Créateur de Solutions Web",
        "Ingénieur JavaScript/React"
    ];


    const currentRole =
        roles[loopNum % roles.length];



    useEffect(() => {


        const text =
            loopNum === 0
                ? fullName
                : currentRole;



        const timer = setTimeout(() => {


            const updated =
                isDeleting
                    ?
                    text.substring(0, displayText.length - 1)
                    :
                    text.substring(0, displayText.length + 1);



            setDisplayText(updated);



            if (!isDeleting && updated === text) {


                setTimeout(() => {

                    setIsDeleting(true)

                }, 2000);


                setTypingSpeed(50);



            }


            else if (isDeleting && updated === "") {


                setIsDeleting(false);

                setLoopNum(loopNum + 1);

                setTypingSpeed(80);


            }


        }, typingSpeed);



        return () => clearTimeout(timer);



    }, [
        displayText,
        isDeleting,
        loopNum,
        typingSpeed,
        currentRole
    ]);




    const skills = {


        Frontend: [
            "React",
            "Next.js",
            "Vue.js",
            "Tailwind CSS"
        ],


        Backend: [
            "Node.js",
            "Express",
            "Python",
            "FastAPI"
        ],


        Tools: [
            "Git",
            "Docker",
            "AWS",
            "PostgreSQL"
        ]


    };




    const projects = [


        {
            title: "E-Commerce Platform",
            description: "Plateforme e-commerce complète",
            tags: [
                "React",
                "Node.js",
                "MongoDB"
            ],
            icon: "🛒"

        },


        {
            title: "AI Chat Application",
            description: "Chatbot IA intelligent",
            tags: [
                "Next.js",
                "Python",
                "FastAPI"
            ],
            icon: "🤖"

        },


        {
            title: "Task Management",
            description: "Application collaborative",
            tags: [
                "Supabase",
                "Next.js"
            ],
            icon: "✅"

        }


    ];




    return (


        <div className="
min-h-screen
bg-gradient-to-br
from-slate-950
via-slate-900
to-black
text-white
overflow-hidden
">


            <header className="
min-h-screen
flex
items-center
px-6
">


                <div className="
max-w-7xl
mx-auto
grid
md:grid-cols-2
gap-10
items-center
w-full
">


                    <div>


                        <h1 className="
text-5xl
md:text-8xl
font-black
">

                            {displayText}

                            <span className="text-yellow-500">
                                |
                            </span>


                        </h1>



                        <p className="
text-gray-400
text-xl
mt-6
">


                            Créateur de solutions web modernes


                        </p>




                        <div className="
mt-10
flex
gap-5
">


                            <a
                                href="#projects"
                                className="
bg-yellow-600
px-8
py-4
rounded-lg
font-bold
"
                            >

                                Voir mes projets

                            </a>



                            <a
                                href="#contact"
                                className="
border
border-yellow-600
px-8
py-4
rounded-lg
"
                            >

                                Contact

                            </a>


                        </div>



                    </div>






                    <div
                        className="
relative
w-80
h-96
md:w-96
md:h-[500px]
"
                        onMouseEnter={() => setPhotoHovered(true)}
                        onMouseLeave={() => setPhotoHovered(false)}

                    >


                        <Image

                            src="/ph-pro2.png"

                            alt="photo"

                            fill

                            className={`
object-cover
rounded-2xl
transition duration-700

${photoHovered
                                    ?
                                    "opacity-0 scale-110"
                                    :
                                    "opacity-100"
                                }

`}

                        />



                        <Image

                            src="/ph-pro1.png"

                            alt="photo"

                            fill

                            className={`
object-cover
rounded-2xl
transition duration-700

${photoHovered
                                    ?
                                    "opacity-100"
                                    :
                                    "opacity-0 scale-90"
                                }

`}

                        />



                    </div>


                </div>


            </header>







            <section className="
py-20
px-6
max-w-6xl
mx-auto
">


                <h2 className="
text-6xl
font-black
text-center
">

                    Compétences

                </h2>



                <div className="
grid
md:grid-cols-3
gap-8
mt-12
">


                    {
                        Object.entries(skills)
                            .map(([key, value]) => (


                                <div

                                    key={key}

                                    className="
bg-slate-800
p-8
rounded-xl
border
border-yellow-600/30
"

                                >


                                    <h3 className="
text-yellow-500
text-2xl
font-bold
">

                                        {key}

                                    </h3>



                                    <div className="
flex
flex-wrap
gap-3
mt-5
">


                                        {
                                            value.map(skill => (


                                                <span
                                                    key={skill}
                                                    className="
bg-yellow-600/20
px-4
py-2
rounded
"
                                                >

                                                    {skill}

                                                </span>


                                            ))

                                        }


                                    </div>


                                </div>


                            ))

                    }



                </div>


            </section>







            <section
                id="projects"
                className="
py-20
px-6
max-w-6xl
mx-auto
">


                <h2 className="
text-6xl
font-black
text-center
">

                    Projets

                </h2>




                <div className="
grid
md:grid-cols-3
gap-8
mt-12
">


                    {
                        projects.map(project => (


                            <div

                                key={project.title}

                                className="
bg-slate-800
p-8
rounded-xl
border
border-yellow-600/30
"

                            >


                                <div className="text-5xl">

                                    {project.icon}

                                </div>



                                <h3 className="
text-2xl
font-bold
mt-5
">

                                    {project.title}

                                </h3>


                                <p className="
text-gray-400
mt-3
">

                                    {project.description}

                                </p>


                                <div className="
flex
gap-2
mt-5
flex-wrap
">


                                    {
                                        project.tags.map(tag => (

                                            <span
                                                key={tag}
                                                className="
bg-yellow-600/20
px-3
py-1
rounded
"
                                            >

                                                {tag}

                                            </span>


                                        ))

                                    }


                                </div>


                            </div>


                        ))

                    }



                </div>


            </section>







            <footer
                id="contact"
                className="
text-center
py-20
border-t
border-yellow-600/20
">


                <h2 className="
text-5xl
font-black
">

                    Contact

                </h2>



                <div className="
flex
justify-center
gap-6
mt-10
">


                    <Github size={40} />

                    <Linkedin size={40} />

                    <Mail size={40} />


                </div>



            </footer>



        </div>



    )

}