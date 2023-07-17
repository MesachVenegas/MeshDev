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
            className='tsparticles'
            init={particlesInit}
            style={{
                width: '100%',
                height: '100px'
            }}
            options={ presets }
        />
    );
};

export default CustomParticles;