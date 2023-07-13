import { useSelector, useDispatch } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { headContainerAnimation, slideAnimation } from '../../utils/motion';
import { useEffect } from 'react';
import { setLanguage } from '../../store/features/language';
import { setTheme } from '../../store/features/theme';
import './styles.css'

const Navbar = () => {
    const dispatch = useDispatch();
    const language = useSelector(state => state.language);
    const theme = useSelector(state => state.theme);

    useEffect(() => {
        if (!theme) {
            document.body.classList.remove('dark')
        }
        else {
            document.body.classList.add('dark');
        }
    }, [theme])

    useEffect(() => {

    },[language])

    return (
        <AnimatePresence>
            <motion.nav className='nav_container' {...slideAnimation('left')}>
                <motion.div className='brand_container' {...headContainerAnimation}>
                    <motion.a href="/" className='menu_link'>
                        <motion.img className="brand_logo" src='/assets/logo_rose.svg' height={48} width={48} alt="brand_logo" />
                        <motion.img className="brand_text" src='/assets/text_logo.svg' height={60} width={120} alt="brand_logo" />
                    </motion.a>
                </motion.div>
                {/* navigation menu */}
                <motion.ul className="nav_menu">
                    <motion.li className="menu_item">
                        <motion.a href='#home' className="menu_link">
                            <img src='/assets/home.png' height={40} width={40} alt="home-icon" />
                            <span>{language ? 'Inicio' : 'Home'}</span>
                        </motion.a>
                    </motion.li>
                    <motion.li className="menu_item">
                        <motion.a href='#portfolio' className="menu_link">
                            <img src='/assets/maleting.png' height={40} width={40} alt="portfolio-icon" />
                            <span>{language ? 'Proyectos' : 'Portfolio'}</span>
                        </motion.a>
                    </motion.li>
                    <motion.li className="menu_item">
                        <motion.a href='#about' className="menu_link">
                            <img src='/assets/me_avatar.png' height={40} width={40} alt="about-icon" />
                            <span>{language ? 'Sobre Mí' : 'About Me'}</span>
                        </motion.a>
                    </motion.li>
                    <motion.li className="menu_item">
                        <motion.a href='#skills' className="menu_link">
                            <img src='/assets/skills.png' height={40} width={40} alt="skills-icon" />
                            <span>{language ? 'Habilidades' : 'Skills'}</span>
                        </motion.a>
                    </motion.li>
                    <motion.li className="menu_item">
                        <motion.a href='#contact' className="menu_link">
                            <img src='/assets/contact_2.png' height={40} width={40} alt="contact-icon" />
                            <span>{language ? 'Contácteme' : 'Contact Me'}</span>
                        </motion.a>
                    </motion.li>
                </motion.ul>
                {/* Language and theme menu */}
                <motion.div className="config_menu">
                    <motion.div className="config_item" onClick={() => dispatch(setLanguage(!language))}>
                        <img src='/assets/language.png' height={32} width={32} alt="language-icon" />
                        <span className="config_text-language">{language ? 'es' : 'en'}</span>
                    </motion.div>
                    <motion.div className="config_item" onClick={() => dispatch(setTheme(!theme))}>
                        <img src={theme ? '/assets/sun.png' : '/assets/moon.png'} height={32} width={32} alt="theme-icon" />
                        <span className="config_text">{theme ? 'Light' : 'Dark'}</span>
                    </motion.div>
                </motion.div>
            </motion.nav>
            {/* layer outfocus effect */}
            <motion.div className="layer"></motion.div>
        </AnimatePresence>
    );
};

export default Navbar;