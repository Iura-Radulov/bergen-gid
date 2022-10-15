// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from 'pages/Home';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';

// import Contact from './Contact';
// import Experience from './Experience';
// import Work from './Work';
import Navigation from './components/Navigation';
import Excursion from 'pages/Excursion';
import Contact from 'pages/Contact';
import PrivateTour from 'components/PrivateTour';

export const App = () => {
  return (
    <>
      <Navigation />
      {/* <About title="About" dark={true} id="about" />
      <Experience title="Experience" dark={true} id="experience" />
      <Work title="Work" dark={true} id="work" />
      <Contact title="Contact" dark={true} id="contact" /> */}

      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/excursion" element={<Excursion />}>
            <Route path="private-tour" element={<PrivateTour />} />
            <Route path="farm" element={<Excursion />} />
            <Route path="waterfalls" element={<Excursion />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </>
  );
};
