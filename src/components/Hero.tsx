import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/85 to-red-700/80 z-10" />
        <motion.img
          src="https://i.ibb.co/zpTLmYP/shp.jpg"
          alt="Dave's Family Butchers Shop"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        
        {/* Subtle Animated Overlay Pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 z-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
          animate={{ x: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* Content - Mobile Optimized */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Badge - Mobile Responsive */}
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mr-2" />
            <span className="text-white font-medium text-sm sm:text-base">Premium Quality Since Establishment</span>
          </motion.div>

          {/* Main Heading - Mobile Responsive Typography */}
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white mb-6 sm:mb-8 leading-tight px-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <motion.span
              className="block"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Premium Fresh
            </motion.span>
            <motion.span
              className="block gradient-text bg-gradient-to-r from-white via-red-100 to-white bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
            >
              Meats & Pies
            </motion.span>
          </motion.h1>

          {/* Subtitle - Mobile Responsive */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Serving Fareham with the finest quality meats and traditional butchery expertise for generations
          </motion.p>

          {/* CTA Buttons - Mobile Optimized */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.button
              onClick={scrollToProducts}
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-red-600 font-bold text-base sm:text-lg rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 overflow-hidden touch-manipulation"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                Explore Our Products
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.1 }}
              />
            </motion.button>

            <motion.button
              onClick={scrollToContact}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold text-base sm:text-lg rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 backdrop-blur-sm touch-manipulation"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                Find Us
                <motion.div
                  className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden sm:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero