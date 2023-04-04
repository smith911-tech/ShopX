import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainapp from './Mainapp';
import SearchPage from './Components/SearchPage';
import Details from './Components/Details';
import Cart from './Components/Cart';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Mainapp />} />
    <Route path='/SearchPage' element={<SearchPage />}/>
    <Route path='/Details/:id' element={<Details />}/>
    <Route path='/Cart' element={<Cart />}/>
    </Routes>
    </BrowserRouter>   
  </>

  );
}

export default App;
