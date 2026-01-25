// src/App.jsx - Clean version using pages
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
// import Contact from './pages/Contact'  
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
       <Category />        {/* Home contains: Sidebar + Hero + Flashsale */}
      {/* <Contact /> */}  
     <BestProducts />
     <PromoBanner />
     <ExploreProducts />
     <NewArrival />
     <Services />
      <Footer />
      <ScrollToTop />

     
    </div>
    
  )
}

export default App