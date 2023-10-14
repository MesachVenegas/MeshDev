import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from './utils/motion';
import CustomTypeWritter from './components/CustomTypeWritter';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomParticles, Navbar } from './components';
import { homeWriter } from './utils/constants';
import { useSelector } from 'react-redux';
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/aboutme/AboutMe';
import Contact from './pages/contact/Contact';

function App() {
    const language = useSelector(state => state.language);

    return (
        <>
            <header>
                <Navbar />
                <CustomParticles />
            </header>
            <AnimatePresence>
                <motion.main  className='main_body'>

                    <motion.section id='home' className='hero_container' {...slideAnimation('down')}>
                        <motion.div className='hero_content' {...headContainerAnimation}>
                            <motion.div className="welcome" {...headContentAnimation}>
                                <motion.span>{language ? "Hola!" : "Hi!"} 👋🏼</motion.span>
                                <motion.h1>{language ? "Soy" : "I'am"} <motion.span className='main_text'>Mesach Venegas</motion.span></motion.h1>
                                <motion.h2>{language ? "Desarrollador Fullstack" : "FullStack Developer"}</motion.h2>
                                <CustomTypeWritter
                                    strings={homeWriter}
                                />
                            </motion.div>
                            <motion.ul className="social" {...headTextAnimation}>
                                <motion.li className='social_item'>
                                    <motion.a href="https://github.com/MesachVenegas" className='social_link' target='_blank'>
                                        <motion.i className="fa-brands fa-github"></motion.i>
                                    </motion.a>
                                </motion.li>
                                <motion.li className='social_item'>
                                    <motion.a href="https://www.linkedin.com/in/mesachvenegas/" className='social_link' target='_blank'>
                                        <motion.i className="fa-brands fa-linkedin"></motion.i>
                                    </motion.a>
                                </motion.li>
                                <motion.li className='social_item'>
                                    <motion.a href="https://api.whatsapp.com/send?phone=5216631662698&text=Quiero%20trabajar%20contigo" className='social_link' target='_blank'>
                                        <i className="fa-brands fa-whatsapp"></i>
                                    </motion.a>
                                </motion.li>
                            </motion.ul>
                            <motion.a {...slideAnimation('up')} href='#' className='btn btn-resume'>{language ? "Trabajemos Juntos" :"Let's Work Together"}</motion.a>
                        </motion.div>
                    </motion.section>

                    <motion.section className='container_section' id='portfolio' {...headContainerAnimation}>
                        <Portfolio />
                    </motion.section>

                    <motion.section className='container_section' id='about' {...headContainerAnimation}>
                        <AboutMe />
                    </motion.section>

                    <motion.section className='container_section' id='contact' {...headContainerAnimation}>
                        <Contact />
                    </motion.section>

                </motion.main>
            </AnimatePresence>
        </>
    );
}

export default App;
