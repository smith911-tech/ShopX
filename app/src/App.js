import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainapp from './Mainapp';
import SearchPage from './Components/SearchPage';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Mainapp />} />
    <Route path='/SearchPage' element={<SearchPage />}/>
    </Routes>
    </BrowserRouter>   
  </>

  );
}

export default App;
