import { ContactForm } from "../ui/ContactForm";

export function Contact() {
    return (
        <section id="contacts">
            <div className="container min-h-screen m-auto p-5 place-content-center">
                <div className="grid-cols-1 gap-12 items-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 dark:text-slate-100 text-stone-800">
                        Get in touch
                    </h2>
                    <p className="text-xl lg:text-2xl dark:text-slate-400 text-stone-600 leading-relaxed mb-4">
                        I'm currently open to new opportunities and
                        collaborations. Feel free to reach out via form below —
                        I'll get back to you as soon as possible!
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 dark:text-slate-100 text-stone-800">
                        Contact via form
                    </h3>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
