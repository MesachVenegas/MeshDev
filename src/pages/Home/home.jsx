import { useSelector } from 'react-redux';
import './home.css';

function Home() {
    const lang = useSelector(state => state.language);
    const theme = useSelector(state => state.theme);

    return (
        <main>
            <main className='main_body'>
                <div className="hero_text">
                    <p>
                        {lang ? 'Hola!' : 'Hello!'} 👋🏼, <br />
                        {lang ? "Soy " : "I'am"} <h1 className="main_text">Mesach Venegas</h1>
                        {lang ? 'Desarrollador Full Stack' : 'Full Stack Developer'}
                    </p>
                    <a href="#" className="cv_btn">
                        <span>{lang ? 'Curriculum' : 'Resumen'}</span>
                        <img src="/assets/download.svg" alt="download_cloud" />
                    </a>
                </div>
                <div className="hero_view" style={{ backgroundImage: theme ? 'url(/assets/avatar_bg_pattern_light.png)' : 'url(/assets/avatar_bg_pattern.png)'}}>
                    <img src="/images/avatar.png" alt="myPicture" />
                    <hr className='hero_hr' />
                </div>
            </main>
        </main>
    )
}

export default Home;