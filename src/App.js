import './styles/App.scss';
import Navbar from './pages/Home/01_Navbar.js';
import Main from './pages/Home/02_Main.js';
import Services from './pages/Home/03_Services.js';
import Faq from './pages/Home/04_Faq.js';
import Footer from './pages/Home/05_Footer.js';

let config = {
  Navbar: true,
  Main: true,
  Services: true,
  Faq: true,
  Footer: true,
};

function App() {
  return (
    <>
      {config.Navbar ? <Navbar /> : null}
      {config.Main ? <Main /> : null}
      {config.Services ? <Services /> : null}
      {config.Faq ? <Faq /> : null}
      {config.Footer ? <Footer /> : null}
    </>
  );
}

export default App;
