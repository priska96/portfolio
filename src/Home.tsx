import './App.css';
import {useEffect} from 'react';
import {Container} from 'react-bootstrap';

class TypeWriter {
    private text = '';
    private isDeleting = false;
    private timeoutId?: number;

    constructor(
        private readonly element: HTMLElement,
        private readonly batches: string[][],
        private readonly period = 2000,
    ) {
        this.tick();
    }

    stop() {
        if (this.timeoutId !== undefined) window.clearTimeout(this.timeoutId);
    }

    private tick = () => {
        const fullText = this.batches[0].join('<br/>');

        if (this.isDeleting) {
            this.text = '';
        } else if (this.text.length === 13) {
            const end = fullText.lastIndexOf('$');
            this.text = fullText.substring(0, end + 2);
        } else {
            this.text = fullText.substring(0, this.text.length + 1);
        }

        this.element.innerHTML = `<span class="wrap">${this.text}</span>`;
        let delay = 200 - Math.random() * 100;
        if (this.isDeleting) delay /= 2;
        if (!this.isDeleting && this.text === fullText) {
            delay = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === '') {
            this.isDeleting = false;
            delay = 500;
        }
        if (this.text.length === 190) delay = 700;
        this.timeoutId = window.setTimeout(this.tick, delay);
    };
}

function Home() {
    useEffect(() => {
        const writers = Array.from(document.querySelectorAll<HTMLElement>('.typewrite')).flatMap((element) => {
            const value = element.dataset.type;
            if (!value) return [];
            const batches = JSON.parse(value) as string[][];
            batches[0].push('<span><span style="color:lawngreen;">priska</span>:<span style="color:mediumslateblue;">~</span>$ clear');
            return [new TypeWriter(element, batches, Number(element.dataset.period) || 2000)];
        });

        const style = document.createElement('style');
        style.textContent = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
        document.body.appendChild(style);
        return () => {
            writers.forEach((writer) => writer.stop());
            style.remove();
        };
    }, []);

    return (
        <div className="Home d-flex flex-column justify-content-center">
            <Container fluid className="shell">
                <h1><span className="cl"><span className="green">priska</span>:<span className="blue">~</span>$ </span>
                    <a href="/" className="typewrite" data-period="2000"
                       data-type='[["node hello.js", "Hello, World!", "I am Priska Kohnen.", "A full-stack Web Developer."]]'
                       aria-label="node hello.js Hello, World! I am Priska Kohnen. A full-stack Web Developer. clear">
                        <span className="wrap" aria-hidden="true"/>
                    </a>
                </h1>
            </Container>
        </div>
    );
}

export default Home;
