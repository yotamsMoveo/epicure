
import './App.scss';
import ReactDOM from "react-dom/client";
import Navbar from './components/navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import HomePage from './pages/homePage';
import Restaurants from './pages/restaurants';
import Orders from './pages/orders';
import Layout from './pages/layout';


function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="orders" element={<Orders />} />
                <Route path="restaurants" element={<Restaurants />} />
                </Route>
            </Routes>
        </Router>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
