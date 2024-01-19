import ContactBanner from '@/Components/ContactPage/ContactBanner';
import ContactForm from '@/Components/ContactPage/ContactForm';
import ContactInfo from '@/Components/ContactPage/ContactInfo';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
                    <ContactBanner />
            <ContactInfo />
            <ContactForm />
        </div>
    );
};

export default ContactPage;