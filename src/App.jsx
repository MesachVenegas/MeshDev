import { CustomParticles, Navbar } from './components';

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
                            <h2>Full Stack Developer</h2>
                            <span>React</span>
                        </div>
                        <ul className="social">
                            <li className='social_item'>
                                <a href="#" className='social_link'>
                                    <img src="/assets/github_icon.png" alt="github_icon" />
                                </a>
                            </li>
                            <li className='social_item'>
                                <a href="#" className='social_link'>
                                    <img src="/assets/linkedin.png" alt="linkedin_icon" />
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
