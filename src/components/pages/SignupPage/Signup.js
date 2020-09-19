import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjTwo, homeObjThree, homeObjFour} from './Data'
function Service() {
    return (
        <>
        
        <HeroSection {... homeObjThree}/>
        <HeroSection {... homeObjOne}/>
        
        </>
    )
}

export default Service;
