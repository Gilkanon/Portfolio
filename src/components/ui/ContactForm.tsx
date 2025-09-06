import { useForm, ValidationError } from "@formspree/react";

export function ContactForm() {
    const [state, handleSubmit] = useForm("mgvlpbbo");
    if (state.succeeded) {
        return (
            <p className="text-xl lg:text-2xl text-gray-400 leading-relaxed mb-4">
                Thanks for contacting us!
            </p>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="w-72 md:w-150 rounded-2xl m-auto mt-15 p-10 flex flex-col items-center justify-around border-dashed border-2  border-neutral-800 "
        >
            <label className="text-lg lg:text-xl p-10">Email address</label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="bg-neutral-900 h-12 w-70 md:w-80 rounded-2xl hover:ring-1 hover:ring-blue-300 text-center focus:shadow-2xl focus:shadow-blue-300"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label className="text-lg lg:text-xl p-10">Message</label>
            <textarea
                id="message"
                name="message"
                className="bg-neutral-900 h-60 w-70 md:w-80 p-2 rounded-2xl hover:ring-1 hover:ring-blue-300 text-center focus:shadow-2xl focus:shadow-blue-300"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="w-35 h-15 rounded-xl font-semibold inline-flex items-center justify-center text-neutral-200 bg-blue-500 hover:ring-2 hover:ring-white transition-colors duration-500 ease-in-out text-md lg:text-xl mt-15"
            >
                Send
            </button>
        </form>
    );
}
