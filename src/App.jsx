import { Product } from './pages/Product';
import Home from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { Navigate, Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';

const App = () => {
  let user = useSelector((state) => state?.auth?.currentUser);
  return (
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to={'/login'} />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={user ? <Navigate to={'/'} /> : <Login />} />
      <Route path="/register" element={user ? <Navigate to={'/'} /> : <Register />} />
    </Routes>
  );
};

export default App;
