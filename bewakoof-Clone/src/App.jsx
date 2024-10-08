import { Route,  Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from './pages/homePage'
import ProductPage from './pages/ProductPage'
import { CartPage } from './pages/cartPage'
import { NotFound } from './pages/notFound'
import LoginPage from './pages/LoginPage'
import AddToBagPage from './pages/AddToBagPage'
import NothingBag from './components/carts/NothingBag'
import Product from './pages/Product'

function App() {
 

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/CartPage" element={<CartPage />} />
        <Route path="/Bag" element={<AddToBagPage />} />
        <Route path="/Nothing" element={<NothingBag />} />
        {/* <Route path="/product/:id" element={<Product />}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App
