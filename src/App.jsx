import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './pages/Portfolio/Portfolio';
import OnProcess from './components/OnProces/OnProcess';

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/portfolio' element={<OnProcess />}/>
                <Route path='/about' element={ <OnProcess />}/>
                <Route path='/skills' element={ <OnProcess />}/>
                <Route path='/contact' element={ <OnProcess />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
