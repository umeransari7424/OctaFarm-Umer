import './App.scss';
// import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import Footer from './Components/Layout/Footer';
// import Faqs from './Components/Utils/Faqs';
// import Tokenvalue from './Components/Elements/Tokenvalue';
// import Tokenallocation from './Components/Elements/Tokenallocation';
// import Private from './Components/Elements/Private';
// import Hero from './Components/Elements/Hero';
// import Invest from './Components/Elements/Invest';
// import Digital from './Components/Elements/Digital';
// import Crosschain from './Components/Elements/Crosschain';
// import Roadmap from './Components/Elements/Roadmap';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from './Components/Layout/Base';
import Home from './Pages/Home';


function App() {
  return (
    <>
    <BrowserRouter>
      <Base>
        <Routes>
          <Route index path="/" element={<Home />} />
          {/* <Route index path="/" element={<Hero />} />
          <Route index path="/digital" element={<Digital />} />
          <Route index path="/invest" element={<Invest />} />
          <Route index path="/crosschain" element={<Crosschain />} />
          <Route index path="/private" element={<Private />} />
          <Route index path="/tokenallocation" element={<Tokenallocation />} />
          <Route index path="/tokenvalue" element={<Tokenvalue />} />
          <Route index path="/roadmap" element={<Roadmap />} />
          <Route index path="/faq" element={<Faqs />} /> */}
        </Routes>
      </Base>
    </BrowserRouter>
  </>
  );
}

export default App;
