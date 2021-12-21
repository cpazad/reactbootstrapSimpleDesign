
import './App.css';
import Header from './components/Header';
import Accordions from './components/Accordions';
import Middlesection from './components/Middlesection';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Datatable from './components/Datatable';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Hero></Hero>
     <Middlesection></Middlesection>
     <Datatable></Datatable>
     <Accordions></Accordions>
     <Footer></Footer>
    </div>
  );
}

export default App;
