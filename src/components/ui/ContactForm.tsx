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
            className="mx-5 rounded-2xl my-auto mt-15 p-10 flex flex-col items-center justify-around border-dashed border-2 border-neutral-800 dark:border-slate-100 dark:bg-slate-800 bg-white"
        >
            <label className="text-lg lg:text-xl p-10 dark:text-slate-100 text-stone-800">
                Email address:
            </label>
            <input
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="dark:bg-slate-900 bg-neutral-100 h-12 w-70 md:w-100 rounded-2xl hover:ring-1 dark:hover:ring-sky-300 hover:ring-amber-500/50 text-center dark:text-slate-400 text-stone-600 focus:shadow-2xl dark:focus:shadow-sky-500 focus:shadow-amber-500/50 duration-500"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label className="text-lg lg:text-xl p-10 dark:text-slate-100 text-stone-800">
                Message:
            </label>
            <textarea
                id="message"
                name="message"
                className="dark:bg-slate-900 bg-neutral-100 h-60 w-70 md:w-3/5 text-start p-2 dark:text-slate-400 text-stone-600 rounded-2xl hover:ring-1 dark:hover:ring-sky-500 hover:ring-amber-500/50 focus:ring-amber-500/50 focus:shadow-2xl dark:focus:shadow-sky-500 focus:shadow-amber-500/50  duration-500"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="w-20 md:w-35 h-8 md:h-15 rounded-xl font-semibold inline-flex items-center justify-center text-neutral-200  dark:bg-sky-500 bg-amber-500 dark:hover:bg-sky-700 hover:bg-amber-700 hover:cursor-pointer transition-color duration-500 ease-in-out text-md lg:text-xl mt-15"
            >
                Send
            </button>
        </form>
    );
}
