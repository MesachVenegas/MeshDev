import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from './utils/motion';
import { AnimatePresence, motion } from 'framer-motion';
import { homeWriter } from './utils/constants';
import { CustomParticles } from './components';
import { useSelector } from 'react-redux';
import { Suspense, lazy } from 'react';

const Navbar = lazy(() => import('./components/Navbar'));
const CustomTypeWritter =  lazy(() => import('./components/CustomTypeWritter'));
const AboutMe = lazy(() => import('./pages/aboutme/AboutMe'));
const Contact = lazy(() => import('./components/contact/Contact'));
const Portfolio = lazy( () => import('./pages/Portfolio'));
const Footer = lazy(() => import('./components/footer/Footer'));


function App() {
    const language = useSelector(state => state.language);

    return (
        <Suspense>
            <header>
                <Navbar />
                <CustomParticles />
            </header>
            <AnimatePresence>
                <motion.main className='main_body'>

                    <motion.section id='home' className='hero_container' {...slideAnimation('down')}>
                        {/* hero section */}
                        <motion.div className='hero_content' {...headContainerAnimation}>
                            <motion.div className="welcome" {...headContentAnimation}>
                                <motion.span>{language ? "Hola!" : "Hi!"} 👋🏼</motion.span>
                                <motion.h1>{language ? "Soy" : "I'am"} <motion.span className='main_text'>Mesach Venegas</motion.span></motion.h1>
                                <motion.h2>{language ? "Desarrollador Fullstack" : "FullStack Developer"}</motion.h2>
                                <CustomTypeWritter strings={homeWriter} />
                            </motion.div>
                            {/* social links */}
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
                            {/* call to action buttons */}
                            <motion.div className="btn_wrapper" {...headTextAnimation}>
                                <motion.a {...slideAnimation('up')} href='#' className='btn btn_resume'>{language ? "Descargar CV" : "Download Resume"}</motion.a>
                                <motion.a {...slideAnimation('up')} href='#contact' className='btn btn_cv'>{language ? "Trabajemos Juntos" : "Work Together"}</motion.a>
                            </motion.div>
                        </motion.div>
                    </motion.section>
                    {/* project */}
                    <motion.section className='container_section' id='portfolio' {...headContainerAnimation}>
                        <Portfolio />
                    </motion.section>
                    {/* about me */}
                    <motion.section className='container_section' id='about' {...headContainerAnimation}>
                        <AboutMe />
                    </motion.section>
                    {/* contact form */}
                    <motion.section className='container_section' id='contact' {...headContainerAnimation}>
                        <Contact />
                    </motion.section>
                </motion.main>
                {/* footer */}
                <Footer />
            </AnimatePresence>
        </Suspense>
    );
}

export default App;
