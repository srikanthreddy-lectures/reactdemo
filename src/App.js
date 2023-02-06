import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <>
    <Navbar/>
    <Sidebar/>
    <Main/>
    <div className="App">
      <button className='btn btn-success'>My Button</button>
    </div>

    </>
  );
}

export default App;
