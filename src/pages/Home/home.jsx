import { useSelector } from 'react-redux';
import './home.css';

function Home() {
    const lang = useSelector(state => state.language);
    const theme = useSelector(state => state.theme);

    return (
        <main>
            <main className='main_body'>
                <div className='hero_container'>
                    <div className='hero_text'>
                        <p>{lang ? 'Hola!' : 'Hello!'}</p>
                        <p>{lang ? 'Soy ' : "I'm "}<span className='main_text'>Mesach Venegas</span></p>
                        <p>{lang ? 'Desarrollador Full Stack' : 'Full Stack Developer'}</p>
                    </div>
                    <button className='hero_btn'>
                        {lang ? 'Descargar CV' : 'Download CV'}
                        <span>
                            <img src='/assets/download.png' width={40} height={40} alt='arrow-icon' />
                        </span>
                    </button>
                </div>
                <div className='hero_img'
                    style={{
                        backgroundImage: theme ? 'url(/assets/avatar_bg_pattern_light.png)' : 'url(/assets/avatar_bg_pattern.png)',
                    }
                }>
                    <img src='/images/kindpng_1600378.png' alt='avatar_img' />
                </div>
            </main>
        </main>
    )
}

export default Home;