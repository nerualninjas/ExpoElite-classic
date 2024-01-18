

const ContactForm = () => {
    return (
        <div className="max-w-2xl my-10 mx-auto">

            <div className="text-center">
                <h3 className="text-4xl font-extrabold">Get in Touch</h3>
                <p>Trage agile frameworks to provide a robust synopsis for high level overviews Iterative approaches to corporate strategy foster collabo</p>
            </div>
            <form className="p-6 flex flex-col justify-center">
                <div className="flex flex-col">
                    <label className="hidden">Full Name</label>
                    <input type="name" name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                </div>

                <div className="flex flex-col mt-2">
                    <label className="hidden">Email</label>
                    <input type="email" name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                </div>

                <div className="flex flex-col mt-2">
                    <label className="hidden">Number</label>
                    <input type="tel" name="tel" id="tel" placeholder="Mobile Number" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="hidden">Number</label>
                    <textarea placeholder="Message" className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none" />

                </div>

                <button type="submit" className="w-full bg-[#0c7e5c] hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
                    Submit
                </button>
            </form>

        </div>
    );
};

export default ContactForm;