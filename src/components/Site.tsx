import React from "react";
import '../styles/global.css';

import tangledWeb from '../images/tangled-web.png';

const Site = () => {
    return (
        <div className="container mx-auto p-6 bg-base-200 shadow-xl rounded-lg mt-2 bg-containerBackground" >
            <div className="container mx-auto rounded-lg text-textPrimary font-sans">
                <h1 className="text-3xl font-bold mb-4 font-headings text-primary text-center">About This Site</h1>
                <p>
                    Let's talk about the labyrinthine world of modern web development. Today's landscape feels like a maze where the walls are constantly shifting. For instance, create-react-app: widely used one day, then deprecated the next (don't get me wrong, I was never a fan). The paradox of choice in web development is real. The abundance of options, while theoretically advantageous, often turns starting a new project into a daunting task. The amount of work required to get even a basic website running with frameworks, transpilers, bundlers, and CI/CD is so onerous that most developers I know simply clone one project to get another one started.
                </p>
                <p>
                    Despite these challenges, you have to plant your flag somewhere so here's what I chose:
                </p>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <div className="font-sans text-textPrimary">
                    <h2 className="heading-secondary">TypeScript</h2>
                        <p>In my professional journey, I’ve learned that all code, no matter how elegantly crafted, inevitably erodes with time. This becomes particularly evident as codebases undergo gradual refactoring, often transforming into something barely recognizable. It’s in these phases of evolution that TypeScript truly demonstrates its value. The robust type system serves not just as a tool for error prevention, but as a living documentation of the developer’s original intent. This becomes crucial in mitigating bugs, ensuring that the code’s evolution doesn’t stray from its original principles. TypeScript isn't just a preference for me, it's a cornerstone of my web development.</p>
                        <h2 className="heading-secondary">React</h2>
                        <p>React, for me, is less about passion and more about practicality. It's a framework that gets the job done, has a large community, and a wealth of resources. It doesn't light my fire like TypeScript does, but it works.</p>
                        <p>It doesn't hurt that there is a high demand for React skills in the job market. 😉</p>
                        <h2 className="heading-secondary">Tailwind</h2>
                        <p>I'm using this site to explore Tailwind CSS, mainly to form my own opinion about its utility-first approach. Despite its popularity and the efficiency it <i>promises</i> in styling, I remain somewhat skeptical. Coming from a background of traditional CSS, I'm used to a different way of doing things. Tailwind's system of utility classes, although interesting, seems like an extra layer atop what can be done with regular CSS classes and variables. I'm giving it a fair shot, learning its nuances, but the jury's still out on whether it truly enhances my workflow or simply complicates it. In the end, I'm all for tools that make development smoother, but I'm not one to jump on a bandwagon without seeing real, tangible benefits.</p>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center items-center">
                    <img src={tangledWeb} alt="Tangled Web" className="max-w-1/2 h-auto rounded-lg shadow-lg" />
                </div>
            </div>
        </div>
    );
};

export default Site;
