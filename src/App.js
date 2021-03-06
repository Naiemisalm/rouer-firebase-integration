import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Oders from './components/Oders/Oders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register'element={<Register></Register>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
        <Route path='/oders' element={
          <RequireAuth>
            <Oders></Oders>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
