import React from 'react';

const ContactBanner = () => {
    return (
        <div>
            <div className="hero min-h-96 " style={{ backgroundImage: 'url(https://i.postimg.cc/kMH13pQc/ht1.jpg)' }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-white text-5xl font-bold">Contact Us</h1>
                        <div className="text-sm text-center breadcrumbs">
                            <ul>
                                <li><a>ExpoElite</a></li>
                                <li><a>Contact US</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBanner;