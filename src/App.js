import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import Feed from './Components/Feed'
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import {AuthProvider} from './Context/AuthContext.js';
import PrivateRoute from './Components/PrivateRoute';
import Profile from './Components/Profile'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' exact element={<PrivateRoute><Feed/></PrivateRoute>} ></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/profile/:id' element={<Profile/>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
