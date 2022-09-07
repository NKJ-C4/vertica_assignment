import './App.css';
import Footer from './components/Footer';
import MoveableArea from './components/MoveableArea';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MoveableArea />
      <Footer />
    </div>
  );
}

export default App;
