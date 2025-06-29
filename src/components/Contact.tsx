import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react'

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '119 Highlands Road, Fareham PO15 6HZ',
      action: 'Get Directions',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '01329 843438',
      action: 'Call Now',
      color: 'from-green-500 to-green-600',
      href: 'tel:01329843438',
    },
    {
      icon: Clock,
      title: 'Best Time to Visit',
      content: 'Early morning for the freshest selection',
      action: 'View Hours',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const features = [
    'Expert butchery advice',
    'Custom cuts available',
    'Local sourcing',
    'Fresh daily preparation',
    'Traditional recipes',
    'Friendly service',
  ]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-red-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 sm:w-96 h-64 sm:h-96 bg-red-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-48 sm:w-80 h-48 sm:h-80 bg-orange-600/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium border border-white/20 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
          >
            <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Find & Contact Us
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit Our{' '}
            <span className="gradient-text bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Fareham Shop
            </span>
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Located in the heart of Fareham, we're ready to serve you with premium quality meats, 
            expert advice, and traditional butchery services.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Contact Information - Mobile Optimized */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <motion.div
                      className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <info.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-red-400 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-white/80 text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed break-words">
                        {info.content}
                      </p>
                      
                      {info.href ? (
                        <motion.a
                          href={info.href}
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${info.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base touch-manipulation`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {info.action}
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </motion.a>
                      ) : (
                        <motion.button
                          className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r ${info.color} text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base touch-manipulation`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            if (info.title === 'Best Time to Visit') {
                              const element = document.getElementById('hours')
                              if (element) element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }}
                        >
                          {info.action}
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.div>
                        </motion.button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Map and Features - Mobile Optimized */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Map Placeholder - Mobile Responsive */}
            <motion.div
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                />
                
                <div className="text-center z-10 px-4">
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 360, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Find Us in Fareham</h3>
                  <p className="text-white/80 mb-4 text-sm sm:text-base">Located on Highlands Road</p>
                  <motion.button
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl border border-white/30 hover:bg-white/30 transition-all duration-300 text-sm sm:text-base touch-manipulation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Directions
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Features List - Mobile Optimized */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
                  <Star className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">Why Choose Us</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-red-400 rounded-full flex-shrink-0"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <span className="text-white/90 font-medium text-sm sm:text-base">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action - Mobile Optimized */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <motion.a
                href="tel:01329843438"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 touch-manipulation"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 mr-3" />
                Call Us Today
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact