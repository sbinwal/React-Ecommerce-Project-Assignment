import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Product from './pages/Product';
import ProductDescription from './components/Product/ProductDescription';
import ShoppingCart from './pages/ShoppingCart';
import Login from './pages/Login';
import PrivateRoute from './components/routes/privateroutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PrivateRoute Component={Product} />} />
          <Route path="/login" element={<PrivateRoute Component={Login} />} />
          <Route path="/product/:productSlug" element={<PrivateRoute Component={ProductDescription} />} />
      <Route path="/products" element={<PrivateRoute Component={Product} />} />
      <Route path="/viewcart" element={<PrivateRoute Component={ShoppingCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
