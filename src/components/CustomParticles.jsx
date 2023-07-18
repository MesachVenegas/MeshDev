import React, { useCallback, useEffect } from 'react';
import { presets } from './../utils/particlesConfig';
import Particles from 'react-tsparticles';
import { useSelector } from 'react-redux';
import { loadFull } from 'tsparticles';

const CustomParticles = () => {
    const theme = useSelector(state => state.theme);

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    });

    useEffect( () => {

    },[theme])

    return (
        <Particles
            id='tsparticles'
            init={particlesInit}
            className='particles'
            options={ presets }
        />
    );
};

export default CustomParticles;