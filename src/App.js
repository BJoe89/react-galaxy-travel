import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Prices from './pages/Prices'
import Training from './pages/Training'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/prices' element={<Prices />}></Route>
        <Route path='/training' element={<Training />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
