import {useEffect, useState} from 'react';

const commands = [
    'python manage.py runserver',
    'npm run build',
    'npx expo start',
    'git commit -m "keep growing"',
];

function Home() {
    const [command, setCommand] = useState('');
    const [commandIndex, setCommandIndex] = useState(0);

    useEffect(() => {
        const fullCommand = commands[commandIndex];
        if (command.length < fullCommand.length) {
            const timeout = window.setTimeout(() => setCommand(fullCommand.slice(0, command.length + 1)), 55);
            return () => window.clearTimeout(timeout);
        }
        const timeout = window.setTimeout(() => {
            setCommand('');
            setCommandIndex((index) => (index + 1) % commands.length);
        }, 1600);
        return () => window.clearTimeout(timeout);
    }, [command, commandIndex]);

    return (
        <section className="hero" id="home" aria-labelledby="hero-title">
            <div className="hero-image" role="img" aria-label="A child looking up a long flight of stairs"/>
            <div className="hero-shade"/>
            <div className="hero-content page-width">
                <p className="eyebrow light">Senior Frontend Developer · Frontend Team Lead</p>
                <h1 id="hero-title">Building thoughtful products.<br/><em>Still climbing.</em></h1>
                <p className="hero-intro">I’m Priska, a software engineer with 8+ years of experience across healthcare, AI, autonomous mobility and SaaS — from Python and Django to React Native, TypeScript and native mobile development.</p>
                <div className="hero-actions">
                    <a className="button button-primary" href="#work">Explore selected work</a>
                    <a className="text-link light" href="#contact">Let’s work together <span>↗</span></a>
                </div>
                <div className="terminal" aria-label={`Terminal command: ${commands[commandIndex]}`}>
                    <div className="terminal-bar"><i/><i/><i/><span>priska — journey</span></div>
                    <div className="terminal-body"><span className="prompt">priska@portfolio:~$</span> {command}<span className="cursor"/></div>
                </div>
            </div>
        </section>
    );
}

export default Home;
