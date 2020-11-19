import React from 'react';
import FirstCard from './UploadResume';
import SecondCard from './PersonalDetails';
import ThirdCard from './WorkExperience';
import FourthCard from './Education/GTSEducationDetails';
import FifthCard from './Project/GTSProjectDetails';
import SixthCard from './LanguagesKnown';

const Profile = () => {

    return(
        <div>
            <hr className =" border-dark-100 mx-auto " />
            <FirstCard/>
            <hr className ="border-dark-100 mx-auto" />
            <SecondCard/>
            <hr className ="border-dark-100 mx-auto" />
            <ThirdCard/>
            <hr className ="border-dark-100 mx-auto" />
            <FourthCard/>
            <hr className ="border-dark-100 mx-auto" />
            <FifthCard/>
            <hr className ="border-dark-100 mx-auto" />
            <SixthCard/>
        </div>
    );

};

export default Profile;