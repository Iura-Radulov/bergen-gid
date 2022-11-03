// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'pages/Home';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

import Navigation from './components/Navigation';
import Excursion from 'pages/Excursion';
import Contact from 'pages/Contact';
import PrivateTour from 'pages/PrivateTour';
import Services from 'pages/Services';
import Transfer from 'pages/Transfer';
import Farm from 'pages/Farm';
import Waterfalls from 'pages/Waterfalls';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <div style={{ height: '100vh' }}>
      <Navigation />
      {/* <About title="About" dark={true} id="about" />
      <Experience title="Experience" dark={true} id="experience" />
      <Work title="Work" dark={true} id="work" />
      <Contact title="Contact" dark={true} id="contact" /> */}

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/about"
            element={
              <>
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/excursion"
            element={
              <>
                <Excursion />
                <Footer />
              </>
            }
          />
          <Route
            path="/private-tour"
            element={
              <>
                <PrivateTour />
                <Footer />
              </>
            }
          />
          <Route
            path="/farm"
            element={
              <>
                <Farm />
                <Footer />
              </>
            }
          />
          <Route
            path="/waterfalls"
            element={
              <>
                <Waterfalls />
                <Footer />
              </>
            }
          />

          <Route
            path="/services"
            element={
              <>
                <Services />
                <Footer />
              </>
            }
          />
          <Route
            path="/transfer"
            element={
              <>
                <Transfer />
                <Footer />
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      {/* <Footer /> */}
    </div>
  );
};
