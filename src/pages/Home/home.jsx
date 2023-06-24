import { useSelector } from 'react-redux';
import './home.css';

function Home() {
    const lang = useSelector(state => state.language);

    return (
        <main>
            <main>
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
                <div className='hero_img' style={ {backgroundImage: '/assets/avatar_bg_pattern.png'}}>
                    <img src='/images/kindpng_1600378.png' width={900} height={600} alt='avatar_img' />
                </div>
            </main>
        </main>
    )
}

export default Home;