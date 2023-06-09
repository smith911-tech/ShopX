import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Mainapp from './Mainapp';
import SearchPage from './Components/SearchPage';
import Details from './Components/Details';
import Cart from './Components/Cart';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUpA';
import ForgetPassword from './Components/ForgetPass';
function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
    
    <Route path='/' element={<SignIn />} />
    <Route path='/SignUp' element={<SignUp />} />
    <Route path="/Forgetpass" element={<ForgetPassword />} />
    <Route path='/Mainapp' element={<Mainapp />} />
    <Route path='/SearchPage' element={<SearchPage />}/>
    <Route path='/Details/:id' element={<Details />}/>
    <Route path='/Cart' element={<Cart />}/>
    
    </Routes>
    </BrowserRouter>   
  </>

  );
}

export default App;
