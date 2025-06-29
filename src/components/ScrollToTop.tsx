import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center group touch-manipulation"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          whileHover={{ 
            scale: 1.1, 
            y: -5,
            boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.div>
          
          {/* Ripple Effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-red-400/20"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop