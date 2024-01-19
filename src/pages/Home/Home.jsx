import SuccessfulStory from '@/Components/AboutPage/SuccessfulStory/SuccessfulStory';
import ExploreProperty from '@/Components/HomePage/ExploreByLocation/ExploreProperty';
import PropertyCard from '@/Components/HomePage/ExploreByLocation/PropertyCard';
import FAQ from '@/Components/HomePage/FQA/FAQ';
import Featured from '@/Components/HomePage/Featured';
import Count from '@/Components/HomePage/Statistics/Count';
import Membership from '@/Components/HomePage/membership/Membership';
import Review from '@/Components/HomePage/review/Review';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            
            <Featured />
            <Count />
            <Review />
            <FAQ />
            <ExploreProperty />
            <Membership />
        </div>
    );
};

export default HomePage;