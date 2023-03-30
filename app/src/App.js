import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainapp from './Mainapp';
import SearchPage from './Components/SearchPage';
import Details from './Components/Details';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Mainapp />} />
    <Route path='/SearchPage' element={<SearchPage />}/>
    <Route path='/Details/:id' element={<Details />}/>
    </Routes>
    </BrowserRouter>   
  </>

  );
}

export default App;
