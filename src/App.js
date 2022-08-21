import CarInst from "./components/CarInst"
import Detalle from './components/Detalle';
import Footer from './components/Footer';
import MarcasDestacada from './components/MarcasDestacadas'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
    <Detalle />
      <MarcasDestacada />
      <CarInst/>
      <Footer/>
    </div>
  );
}

export default App;
