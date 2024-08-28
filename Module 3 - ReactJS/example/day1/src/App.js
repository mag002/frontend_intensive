import './App.css';
import {
  createBrowserRouter,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import Navbar from './components/ecommerce/Navbar';
import ProductDetailPage from './pages/ProductDetailPage';
import { useState, createContext, useContext } from "react";
import { CartContext, CartProvider } from './hooks/cartContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/product",
    element: <ProductListPage />
  },
  {
    path: "/cart",
    element: <CartPage />
  },
]);

// HomePage (/) / ProductListPage (/product) / CartPage / (cart) 17:40

function App() {
  // ProductListPage
  // ProductDetailPage
  // CartPage
  return (
    <div>
      <CartProvider>
        {/* <RouterProvider router={router} /> */}
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductListPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>

    </div>
    // Add cart button with total number
  );
}
export default App;


// [43: complete cart project - learn useContext]
// [44: Start chat app - Typescript]
// [45: Start chat app - Typescript]
// [46: Start chat app - Typescript]
// [47: Start chat app - unit test]
// [48,49 legacy]
// [50: Advanced knowledge: Code splitting, Performance, Test accessibility, Deployment]
// [1b: FE mindset (Layout, unit testing, ...)]