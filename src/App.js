import logo from './logo.svg';
import './App.css';
import Qrcode from './components/Qrcode';
import Navbar from './components/Navabar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    
    <Navbar />
      <Qrcode/>
        <Footer />

    </div>

  );
}

export default App;
