import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Platforms from './components/Platforms';
import Revenue from './components/Revenue';
import Trust from './components/Trust';
import Accordion from './components/Accordion';
import Seller from './components/Seller';
import Footer from './components/Footer';
import BackToTop from './components/common/BackToTop';

function App() {
  return (
    <div>
      <BackToTop/>
<Hero/>
<Platforms/>
<Revenue/>
<Trust/>
<Accordion/>
<Seller/>
<Footer/>
    </div>
  );
}

export default App;
