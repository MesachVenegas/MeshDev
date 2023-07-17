export const presets = {
    background: {
        color: {
            value: 'transparent',
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 2,
            },
            repulse: {
                distance: 30,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ee3a6d",
        },
        links: {
            color: "#ee3a6d",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}