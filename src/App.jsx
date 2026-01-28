// src/App.jsx - Clean version using pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Category from './components/Category'
import BestProducts from './components/BestProducts'
import PromoBanner from './components/PromoBanner'
import ExploreProducts from './components/ExploreProducts'
import NewArrival from './components/NewArrival'
import Services from './components/Services'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import About from './pages/About'  
import Cart from './components/Cart'
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
        </Routes>
        
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App