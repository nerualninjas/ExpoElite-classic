import SuccessfulStory from '@/Components/AboutPage/SuccessfulStory/SuccessfulStory';
import MeetOurTeam from '@/Components/AboutPage/Values/MeetOurTeam';
import Values from '@/Components/AboutPage/Values/Values';
import OurMission from '@/Components/AboutPage/ourMission/OurMission';
import React from 'react';

const AboutPage = () => {
    return (
        <div>

         
            <OurMission />
            <Values/>
            <MeetOurTeam />
            <SuccessfulStory/>

        </div>
    );
};

export default AboutPage;