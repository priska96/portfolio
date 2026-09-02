function Contact() {
    return (
        <section className="contact-section" id="contact" aria-labelledby="contact-title">
            <div className="page-width contact-grid">
                <div><p className="eyebrow">Contact</p><h2 id="contact-title">Let’s build something meaningful.</h2></div>
                <div className="contact-copy">
                    <p>Have a product challenge, a frontend architecture question or a role that sounds like a good fit? I’d be happy to hear from you.</p>
                    <a className="contact-email" href="mailto:priskakohnen@gmail.com">priskakohnen@gmail.com <span>↗</span></a>
                    <div className="contact-links"><a href="https://www.linkedin.com/in/priska-kohnen" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="https://github.com/priska96" target="_blank" rel="noopener noreferrer">GitHub</a></div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
