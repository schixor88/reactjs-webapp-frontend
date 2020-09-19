import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne,homeObjTwo, homeObjThree, homeObjFour} from './Data'
function Service() {
    return (
        <>
        
        <HeroSection {... homeObjTwo}/>
        <HeroSection {... homeObjThree}/>
        
        </>
    )
}

export default Service;
