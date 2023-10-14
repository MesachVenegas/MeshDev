import { useSelector } from 'react-redux';
import './foot.css'

const Footer = () => {
    const language = useSelector(state => state.language);

    return (
        <footer>
            <div className="head_foot">
                {/* brand */}
                <figure className='foot_brand'>
                    <img src="/assets/logo_rose.svg" alt="" />
                    <img className="brand_text" src='/assets/text_logo.svg' alt="brand_logo" />
                </figure>
                {/* social links */}
                <ul className='social'>
                    <li className='social_item'>
                        <a className='social_link' href="https://github.com/MesachVenegas">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className='social_item'>
                        <a className='social_link' href="https://www.linkedin.com/in/mesachvenegas/">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </li>
                    <li className='social_item'>
                        <a className='social_link' href="https://api.whatsapp.com/send?phone=5216631662698&text=Quiero%20trabajar%20contigo">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                </ul>
            </div>
            {/* copyright */}
            <div>
                <small>{language ? "Hecho con":"Made with"} <i className="fa-solid fa-heart heart"></i> | MeshDev © 2023</small>
            </div>
        </footer>
    );
};

export default Footer;