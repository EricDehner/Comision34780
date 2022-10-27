import "./App.css"
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className='fondo'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer tittleItemList={"¡Nuestros productos!"} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path='/detail/:productId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1 className='error'>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
