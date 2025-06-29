import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = ['home', 'products', 'about', 'hours', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'hours', label: 'Hours' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border-b border-red-100'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section - Optimized for mobile */}
            <motion.div
              className="flex items-center space-x-2 sm:space-x-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.img
                src="/images/bros.jpg"
                alt="Dave's Family Butchers"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-red-600 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <h1 className={`text-lg sm:text-xl font-display font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-red-600' : 'text-white'
                }`}>
                  Dave's Family Butchers
                </h1>
                <p className={`text-xs sm:text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-gray-600' : 'text-white/80'
                }`}>
                  Est. Fareham
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? isScrolled
                        ? 'text-red-600'
                        : 'text-white'
                      : isScrolled
                      ? 'text-gray-700 hover:text-red-600'
                      : 'text-white/80 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Contact Info - Desktop */}
            <div className="hidden xl:flex items-center space-x-6">
              <motion.a
                href="tel:01329843438"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">01329 843438</span>
              </motion.a>
            </div>

            {/* Mobile Menu Button - Enhanced for touch */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-3 rounded-lg transition-colors duration-300 touch-manipulation ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Enhanced for mobile usability */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.div
              className="absolute top-16 sm:top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-4 py-4 rounded-lg font-medium transition-colors duration-300 touch-manipulation ${
                        activeSection === item.id
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-red-50 hover:text-red-600'
                      }`}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-lg">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                  <motion.a
                    href="tel:01329843438"
                    className="flex items-center space-x-3 px-4 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 touch-manipulation"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium text-lg">01329 843438</span>
                  </motion.a>
                  
                  <motion.div
                    className="flex items-center space-x-3 px-4 py-4 bg-gray-50 rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <MapPin className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">119 Highlands Road, Fareham</span>
                  </motion.div>
                  
                  <motion.div
                    className="flex items-center space-x-3 px-4 py-4 bg-gray-50 rounded-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Clock className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">Mon-Sat: 6AM-4PM</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header