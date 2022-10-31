import "./App.css"
import NavBar from './components/NavBar/NavBar';
import Cart from "./components/Cart/Cart";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import Checkout from "./components/Checkout/Checkout";

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
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1 className='error'>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
