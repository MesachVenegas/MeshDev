import React from 'react';
import TypewriterComponent from 'typewriter-effect';

const CustomTypeWritter = ({ strings }) => {
    return (
        <TypewriterComponent
            options={{
                strings: strings,
                autoStart: true,
                loop: true,
            }}
        />
    );
}

export default CustomTypeWritter;