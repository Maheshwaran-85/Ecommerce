
import './App.css';
import Login from './Components/Login';
import '../src/'
import './Components/Login.css'
import Signup from './Components/Signup';
import './Components/Signup.css'
import './Components/Login.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import View from './Components/View';


function App() {
  return (
   <>

 <BrowserRouter>
 <Routes>
 <Route path='/'element={ <Login/>}> </Route>
 <Route path='/Signup'element={   <Signup/>}> </Route>
 
 <Route path='/Dashboard'element={ <Dashboard/>}> </Route>
 <Route path='/view'element={ <View/>}> </Route>
  

  
   </Routes>
   </BrowserRouter>
   
   
   </>
  );
}

export default App;
