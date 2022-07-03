import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

import App from './App'
import {Catalogo,CatalogoDetalhado} from './pages/Catalogo'
import {Carrinho} from './pages/Carrinho'

export function AppRoutes(){
  return (
    <Router>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/Catalogo' element={<Catalogo />}/>
          <Route path='/Catalogo/:id' element={<CatalogoDetalhado/>}/>
          <Route path='/Carrinho' element={<Carrinho />}/>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>OPS! Nada foi encontrado</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </Router>
  )
}
