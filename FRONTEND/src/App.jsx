import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import NoFound from './components/NotFound';
import Details from './components/Details';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Private from './components/Private';
import { AuthProvider } from './contexts/AuthContext';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Rotuer DOM</h1>
      <AuthProvider>
        <BrowserRouter>
          <nav>
            <ul>
              <li> <Link to="/"> Inicio  </Link></li>
              <li> <Link to="/products"> Productos</Link></li>
              <li> <Link to="/contact"> Contactos</Link></li>
              <li> <Link to="/protected"> Privada </Link></li>
              <li> <Link to="/admin"> Admin </Link></li>
              <li> <Link to="/login"> Login </Link></li>
              <li> <Link to="/register"> Registro </Link></li>


            </ul>
          </nav>
          {/* Es el área donde se va a mostrar los componentes  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={ <Products />} />
            <Route path='products/:id' element={ <Details />} />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/login' element={ <Login />} />
            <Route path='/register' element={ <Register />} />

            <Route path='/protected' element={ <ProtectedRoute element={Private} /> } />
            <Route path='*' element={ <NoFound /> } />
          </Routes>

        </BrowserRouter>
      </AuthProvider>

      <p className="read-the-docs">
        Aplicaciones Híbridas 2024
      </p>
    </>
  )
}

export default App
