# React Router - Rutas Protegida

- Creamos el Provider ✔
- Creamos el componte las Rutas Protegidas ✔
- Modificando las Router

** En App.js**
``` js

    import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
    
    <BrowserRouter>
        <nav>
          <ul>
            <li> <Link to="/"> Inicio  </Link></li>
            <li> <Link to="/products"> Productos</Link></li>
            <li> <Link to="/contact"> Contactos</Link></li>
          </ul>
        </nav>
      </BrowserRouter>

       {/* Es el área donde se va a mostrar los componentes  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={ <Products />} />
          <Route path='/contact' element={ <Contact />} />
        </Routes>
```
