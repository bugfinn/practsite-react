
import Sidebar from '../components/Sidebar'
import Hero from '../components/Hero'
import Flashsale from '../components/Flashsale'
import '../styles/Home.css'

function Home() {
  return (
    <main className='home-content'>
      <section className='hero'>              
        <div className='hero-container'>      
          <Sidebar />
          <Hero />
        </div>
      </section>
      
      <Flashsale />
     
    </main>
  )
}

export default Home