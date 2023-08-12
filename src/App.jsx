import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from './utils/motion';
import CustomTypeWritter from './components/CustomTypeWritter';
import { AnimatePresence, motion } from 'framer-motion';
import { CustomParticles, Navbar } from './components';
import { homeWriter } from './utils/constants';
import { useSelector } from 'react-redux';

function App() {
    const language = useSelector(state => state.language);

    return (
        <>
            <header>
                <Navbar />
                <CustomParticles />
            </header>
            <AnimatePresence>
                <motion.main >
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
                                    <motion.a href="https://www.instagram.com/mesh_dev/" className='social_link' target='_blank'>
                                        <motion.i class="fa-brands fa-instagram"></motion.i>
                                    </motion.a>
                                </motion.li>
                            </motion.ul>
                            <motion.a {...slideAnimation('up')} href='#' className='resume_btn'>{language ? "Trabajemos Juntos" :"Let's Work Together"}</motion.a>
                        </motion.div>
                    </motion.section>
                </motion.main>
            </AnimatePresence>
        </>
    );
}

export default App;
