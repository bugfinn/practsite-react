// src/App.jsx - Clean version using pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Category from './components/Category.jsx'
import BestProducts from './components/BestProducts.jsx'
import PromoBanner from './components/PromoBanner.jsx'
import ExploreProducts from './components/ExploreProducts.jsx'
import NewArrival from './components/NewArrival.jsx'
import Services from './components/Services.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Contact from './pages/Contact.jsx'
import SignUp from './pages/SignUp.jsx'
import About from './pages/About.jsx'
import Cart from './components/Cart.jsx'
import Wishlist from './components/Wishlist.jsx'
import MyAccount from './components/MyAccount.jsx'
import Checkout from './components/Checkout.jsx'
import Login from './components/Login.jsx'

import './styles/App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Category />
              <BestProducts />
              <PromoBanner />
              <ExploreProducts />
              <NewArrival />
              <Services />
            </>
          } />
          
          <Route path="/contact" element={<Contact />} />
          <Route path="/signUp" element={<SignUp />} />
           <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/account" element={<MyAccount />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
       
        </Routes>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App