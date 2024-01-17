import Count from '@/Components/HomePage/CountData/Count';
import FAQ from '@/Components/HomePage/FQA/FAQ';
import Featured from '@/Components/HomePage/Featured';
import Review from '@/Components/HomePage/review/Review';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <Featured />
            <Count />
            <Review />
            <FAQ />

        </div>
    );
};

export default HomePage;