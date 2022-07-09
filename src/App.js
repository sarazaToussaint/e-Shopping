import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact component={ProductListing}></Route>
        <Route path="/product/:productId" exact component={ProductDetail}></Route>
        <Route>404 not found</Route>
      </Router>
    </div>
  );
}

export default App;
