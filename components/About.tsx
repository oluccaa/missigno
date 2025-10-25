import React from 'react';

interface AboutContent {
    headline: string;
    paragraph1: string;
    paragraph2: string;
    buttonText: string;
    imageUrl: string;
}

interface AboutProps {
    content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
    return (
        <section id="sobre" className="py-20 sm:py-28 bg-white dark:bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <img 
                            src={content.imageUrl} 
                            alt="Equipe MissigNo em colaboração" 
                            className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                        />
                    </div>
                    <div>
                        <h2 
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-light mb-6"
                            dangerouslySetInnerHTML={{ __html: content.headline }}
                        >
                        </h2>
                        <p className="text-slate-500 dark:text-muted text-lg mb-4">
                            {content.paragraph1}
                        </p>
                        <p className="text-slate-500 dark:text-muted text-lg mb-8">
                            {content.paragraph2}
                        </p>
                        <a href="#contato" onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block bg-accent hover:bg-accent-hover text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                            {content.buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
