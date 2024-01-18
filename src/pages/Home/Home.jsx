import Featured from '@/Components/HomePage/Featured';
import Membership from '@/Components/HomePage/membershipSection/Membership';
import Review from '@/Components/HomePage/review/Review';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Featured />
            <Membership />
            <Review />
           

        </div>
    );
};

export default HomePage;