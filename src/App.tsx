import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Products from './components/Products'
import About from './components/About'
import Hours from './components/Hours'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import LoadingScreen from './components/LoadingScreen'
import { useLoadingState } from './hooks/useLoadingState'

function App() {
  const { isLoading } = useLoadingState()

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Products />
          <About />
          <Hours />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App