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
                        <h3 className="heading-secondary">React</h3>
                        <p>React's popularity and rich ecosystem make it an indispensable tool...</p>
                        <h3 className="heading-secondary">TypeScript</h3>
                        <p>Strongly typed languages offer a robust foundation for building complex applications...</p>
                        {/* ...and so on for each point */}
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