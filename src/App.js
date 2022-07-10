import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
