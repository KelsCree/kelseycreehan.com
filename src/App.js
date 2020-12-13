import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';

function App() {
  return (
    <div className="App">
        <Header className="header"/>
        <About className="about"/>
    </div>
  );
}

export default App;
