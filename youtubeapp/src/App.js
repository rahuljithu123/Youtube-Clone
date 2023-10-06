import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='app__mainpage'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header/>}/>
        </Routes>
   
        </BrowserRouter>

      </div>
     
    </div>
  );
}

export default App;
