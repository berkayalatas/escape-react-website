import "./App.css";
import Portfolio from "./components/Portfolio";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from './components/About';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Navbar />

      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our World</div>
          <div className="masthead-heading text-uppercase">
            Nice To Meet You
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#services"
          >
            Explore More
          </a>
        </div>
      </header>

      <Services />

      <Portfolio />

      <About />

      <Team />

      <Contact />

      <Footer />
      
    </div>
  );
}

export default App;
