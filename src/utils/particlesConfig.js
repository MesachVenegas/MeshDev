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
                distance: 40,
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
            opacity: 0.7,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 3,
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

export const fadeBubbles ={
    fpsLimit: 60,
        background: {
        color: "transparent",
    },
    interactivity: {
        events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
                enable: true,
                    mode: "repulse",
                        parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
        },
        modes: {
            push: { quantity: 4 },
            repulse: { distance: 200, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#ee3a6d" },
        move: {
            direction: "none",
                enable: true,
                    outModes: "out",
                        random: false,
                            speed: 2,
                                straight: false
        },
        number: {
            density: {
                enable: true,
                    area: 800
            },
            value: 80
        },
        opacity: {
            animation: {
                enable: true,
                    speed: 0.05,
                        sync: true,
                            startValue: "max",
                                count: 1,
                                    destroy: "min"
            },
            value: {
                min: 0,
                    max: 0.5
            }
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 5 }
        }
    }
}
