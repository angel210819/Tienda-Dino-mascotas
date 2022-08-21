import CarInst from "./components/CarInst"
import Detalle from './components/Detalle';
import Footer from './components/Footer';
import MarcasDestacada from './components/MarcasDestacadas'
import Header from './components/Header'
import CallActions from "./components/CallActions";



function App() {
  return (
    <div className="App">
      <Header />   
      <Detalle />   
      <CallActions/>
      <MarcasDestacada />
      <CarInst/>
      <Footer/>
    </div>
  );
}

export default App;
