import { Navbar } from './components';
import CustomParticles from './components/CustomParticles';

function App() {

    return (
        <>
            <Navbar />
            <main>
                <section className='hero_container'>
                    <CustomParticles />
                </section>
            </main>
        </>
    );
}

export default App;
