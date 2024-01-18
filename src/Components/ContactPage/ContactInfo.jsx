import { FaLocationArrow } from "react-icons/fa6";


const ContactInfo = () => {
    return (
        <div >
            <div className='container mx-auto'>
                <div className="grid grid-cols-1 my-20  md:grid-cols-3">
                    <div>
                        <div className="p-8  mr-2 text-center bg-gray-100 mt-10 dark:bg-gray-800 sm:rounded-lg">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-[#0c7e5c] mx-auto">
                                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <h1 className="text-2xl sm:text-xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                Any Question
                            </h1>

                            <div className="text-md tracking-wide text-white font-semibold">
                                +8801600-000000
                            </div>




                        </div>
                    </div>
                    <div>

                        <div className="p-8 mr-2 text-center bg-gray-100 mt-10 dark:bg-gray-800 sm:rounded-lg">
                            <div>
                                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 text-[#0c7e5c] mx-auto text-center">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h1 className="text-2xl sm:text-xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                E-Mail
                            </h1>


                            <p className="text-white"
                            >info@expoelite.com</p>

                        </div>

                    </div>
                    <div>

                        <div className="p-8 mr-2 text-center bg-gray-100 mt-10 dark:bg-gray-800 sm:rounded-lg">

                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-8 h-8 mx-auto text-[#0c7e5c]">
                                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>


                            <h1 className="text-2xl sm:text-xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                                Address
                            </h1>
                            <div className="text-md tracking-wide text-white font-semibold">
                                Dhaka,Bangladesh
                            </div>





                        </div>
                    </div>


                </div>
            </div>

            {/* map  */}
            <div className="my-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14610.27308423812!2d90.38425380000001!3d23.72710665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1705584403245!5m2!1sen!2sbd" className="w-full min-h-96 rounded-2xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default ContactInfo;