import { CustomParticles, Navbar } from './components';
import CustomTypeWritter from './components/CustomTypeWritter';

function App() {

    return (
        <>
            <header>
                <Navbar />
                <CustomParticles />
            </header>
            <main>
                <section id='home' className='hero_container'>
                    <div className='hero_content'>
                        <div className="welcome">
                            <span>Hi! 👋🏼</span>
                            <h1>I'am <span className='main_text'>Mesach Venegas</span></h1>
                            <h2>FullStack Developer</h2>
                            <CustomTypeWritter
                                strings={["React", "NodeJs", "Redux", "Express", "PostgreSQL"]}
                            />
                        </div>
                        <ul className="social">
                            <li className='social_item'>
                                <a href="#" className='social_link'>
                                    <i className="fa-brands fa-github"></i>
                                </a>
                            </li>
                            <li className='social_item'>
                                <a href="#" className='social_link'>
                                    <i className="fa-brands fa-linkedin"></i>
                                </a>
                            </li>
                            <li className='social_item'>
                                <a href="#" className='social_link'>
                                    <i class="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    );
}

export default App;
