import Image from "next/image";

const MeetOurTeam = () => {
    return (
        <div>
            <div className="bg-slate-50 py-10">
                <h3 className="font-bold text-3xl py-3 text-center mb-3 ">Meet Our Team</h3>
                <div className="grid grid-cols-2 md:grid-cols-4  p-5 gap-3 justify-center mx-auto rounded-md">
                    <div className="text-center space-y-1">
                        <Image
                            className="mx-auto rounded-full object-cover h-32 w-32"
                            src="https://i.ibb.co/WpqdFH7/istockphoto-1419898772-170667a.webp"
                            alt="My Image"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-xl font-semibold">John Smith</h2>
                        <p className="font-medium">Founder & CEO</p>
                    </div>
                    <div className="text-center space-y-1">
                        <Image
                            className="mx-auto rounded-full object-cover h-32 w-32"
                            src="https://i.ibb.co/0Gzpbr1/istockphoto-1342247162-170667a.jpg"
                            alt="My Image"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-xl font-semibold">Emily Davis</h2>
                        <p className="font-medium">Real Estate Agent</p>
                    </div>
                    <div className="text-center space-y-1">
                        <Image
                            className="mx-auto rounded-full object-cover h-32 w-32"
                            src="https://i.ibb.co/41YGGp1/motivated-young-manager-suit-looking-camera-office-headshot-portrait-smiling-businessman-teacher-for.webp"
                            alt="My Image"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-xl font-semibold">Michael Rodriguez</h2>
                        <p className="font-medium">Property Consultant</p>
                    </div>
                    <div className="text-center space-y-1">
                        <Image
                            className="mx-auto rounded-full object-cover h-32 w-32"
                            src="https://i.ibb.co/tXX8xqz/istockphoto-1148808852-612x612.jpg"
                            alt="My Image"
                            width={300}
                            height={300}
                        />
                        <h2 className="text-xl font-semibold">James Mitchell</h2>
                        <p className="font-medium">Legal Advisor</p>
                    </div>

                </div>
                <div data-aos="flip-up" className="bg-slate-50 p-2">
                    <p className="text-center">Meet the dedicated professionals behind <span className="tracking-widest font-semibold text-green-500">Expo Elite</span>, committed to guiding you through every step of your real estate journey. Whether you are buying, selling, or investing, our experienced team is here to turn your property dreams into reality. Your success is our priority.</p>
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;