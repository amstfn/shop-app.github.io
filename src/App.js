import './App.css';
//rememeber to change BrowserRouter to HashRouter for github!
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from './containers/Header';
import MenAccessoriesProductListing from "./containers/productList/men/MenAccessoriesProductListing";
import ProductDetail from "./../src/containers/ProductDetail";
import MenShoesProductListing from './containers/productList/men/MenShoesProductListing';
import MenCategory from './containers/productList/men/MenCategory';
import WomenCategory from './containers/productList/women/WomenCategory';
import WomenAccessoriesProductListing from './containers/productList/women/WomenAccessoriesProductListing';
import WomenShoesProductListing from './containers/productList/women/WomenShoesProductListing';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={<Header />}
          />
          <Route 
            path="/men/category"
            element={<MenCategory />}
          />
          <Route
            path='/men/accessories'
            exact
            element={<MenAccessoriesProductListing />}
          />
          <Route
            path='/men/shoes'
            exact
            element={<MenShoesProductListing />}
          />
          <Route 
            path="/women/category"
            element={<WomenCategory />}
          />
          <Route
            path='/women/accessories'
            exact
            element={<WomenAccessoriesProductListing />}
          />
          <Route
            path='/women/shoes'
            exact
            element={<WomenShoesProductListing />}
          />
          <Route
            path='/product/:productId'
            element={<ProductDetail />}
          />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
