
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../../store/features/language';
import { setTheme } from '../../store/features/theme';
import { Link } from 'react-router-dom'
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
        <>
            <nav className="nav_container">
                <Link href='/' className="brand_container">
                    <img className="brand_logo" src='/assets/logo_rose.svg' height={48} width={48} alt="brand_logo" />
                    <img className="brand_text" src='/assets/text_logo.svg' height={60} width={120} alt="brand_logo" />
                </Link>

                <ul className="nav_menu">
                    <li className="menu_item">
                        <Link href='/' className="menu_link">
                            <img src='/assets/home.png' height={40} width={40} alt="home-icon" />
                            <span>{ language ? 'Inicio' :'Home'}</span>
                        </Link>
                    </li>
                    <li className="menu_item">
                        <Link href='/portfolio' className="menu_link">
                            <img src='/assets/maleting.png' height={40} width={40} alt="portfolio-icon" />
                            <span>{language ? 'Proyectos' : 'Portfolio'}</span>
                        </Link>
                    </li>
                    <li className="menu_item">
                        <Link href='/about' className="menu_link">
                            <img src='/assets/me_avatar.png' height={40} width={40} alt="about-icon" />
                            <span>{language ? 'Sobre Mí' : 'About Me'}</span>
                        </Link>
                    </li>
                    <li className="menu_item">
                        <Link href='/skills' className="menu_link">
                            <img src='/assets/skills.png' height={40} width={40} alt="skills-icon" />
                            <span>{language ? 'Habilidades' : 'Skills'}</span>
                        </Link>
                    </li>
                    <li className="menu_item">
                        <Link href='/contact' className="menu_link">
                            <img src='/assets/contact_2.png' height={40} width={40} alt="contact-icon" />
                            <span>{language ? 'Contácteme' : 'Contact Me'}</span>
                        </Link>
                    </li>
                </ul>

                <div className="config_menu">
                    <div className="config_item" onClick={() => dispatch(setLanguage(!language))}>
                        <img src='/assets/language.png' height={32} width={32} alt="language-icon" />
                        <span className="config_text-language">{language ? 'es' : 'en'}</span>
                    </div>
                    <div className="config_item" onClick={() => dispatch(setTheme(!theme))}>
                        <img src={theme ? '/assets/sun.png' : '/assets/moon.png'} height={32} width={32} alt="theme-icon" />
                        <span className="config_text">{theme ? 'Light' : 'Dark'}</span>
                    </div>
                </div>
            </nav>
            <div className="layer">
            </div>
        </>
    );
};

export default Navbar;