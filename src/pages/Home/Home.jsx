import ExploreProperty from '@/Components/HomePage/ExploreByLocation/ExploreProperty';
import FAQ from '@/Components/HomePage/FQA/FAQ';
import Featured from '@/Components/HomePage/Featured';
import Count from '@/Components/HomePage/Statistics/Count';
import Review from '@/Components/HomePage/review/Review';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            
            <Featured />
            <Count />
            <Review />
            <ExploreProperty />
            <FAQ />
        </div>
    );
};

export default HomePage;