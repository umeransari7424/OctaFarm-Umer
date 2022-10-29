import './App.scss';
import Header from './Components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Layout/Footer';
import Faqs from './Components/Utils/Faqs';
import Tokenvalue from './Components/Elements/Tokenvalue';
import Tokenallocation from './Components/Elements/Tokenallocation';
import Private from './Components/Elements/Private';
import Hero from './Components/Elements/Hero';
import Invest from './Components/Elements/Invest';
import Digital from './Components/Elements/Digital';
import Crosschain from './Components/Elements/Crosschain';





function App() {
  return (
    <div >
        <Header/>
        <Hero/>
        <Digital/>
        <Invest/>
        <Crosschain/>
        <Private/>
        <Tokenallocation/>
        <Tokenvalue/>
        <Faqs/>
        <Footer/>
        
      
    </div>
  );
}

export default App;
