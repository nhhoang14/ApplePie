import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import './css/App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <div className="app-container">
          <NavBar />
          <div className="app-content">
              <Routes>
                {/* Your routes will go here */}
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </>
  )
}

export default App
