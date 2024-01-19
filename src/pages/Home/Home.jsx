import Banner from '@/Components/HomePage/Banner/Banner';
import ExploreProperty from '@/Components/HomePage/ExploreByLocation/ExploreProperty';
import FAQ from '@/Components/HomePage/FQA/FAQ';
import Featured from '@/Components/HomePage/Featured';
import Count from '@/Components/HomePage/Statistics/Count';
import Membership from '@/Components/HomePage/membership/Membership';
import Review from '@/Components/HomePage/review/Review';
import React from 'react';


const HomePage = () => {
    return (
        <div>
            <Banner />
            <Featured />
            <Count />
            <Review />
            <ExploreProperty />
            <FAQ />
            <Membership />
        </div>
    );
};

export default HomePage;