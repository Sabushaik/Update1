
import './App.css';
import HomeMain from './Components/HomeMain';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route   } from 'react-router-dom';
function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
<Router>
  <Routes>
  <Route path="/" element={ <HomeMain/>} />
  <Route path="/home" element ={<Home/>}/>
  </Routes>
</Router>


       
         </header>

  
    </div>
    </> );
}

export default App;
