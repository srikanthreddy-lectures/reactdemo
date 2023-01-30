import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Browser from './Components/Browser';

function App() {
  return (
    <>
    <Navbar/>
    <div className="App">
      <button className='btn btn-success'>My Button</button>
    </div>
    <Browser/>
    </>
  );
}

export default App;
