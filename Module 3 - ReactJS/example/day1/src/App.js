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
import { useState, createContext, useContext, useEffect } from "react";
import { CartContext, CartProvider } from './hooks/cartContext';
import Login from './components/ecommerce/Login/Login';
import UserProfile from './components/ecommerce/UserProfile';


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
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsLoggedIn(true)
    }
  }, [])
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
            <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/product" element={<ProductListPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            {isLoggedIn && <Route path="/me" element={<UserProfile />} />}
            <Route path="*" element={<h1>404 not found</h1>} />

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
// [47: Start chat app - jwt, unit test with ecommerce]
// [48: Advanced knowledge: Code splitting, Performance, Test accessibility, Deployment]
// [49,50 legacy]

// [1b: FE mindset (Layout, unit testing, ...)]