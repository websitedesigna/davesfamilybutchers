import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sparkles, Award, Heart, ChefHat } from 'lucide-react'

const Products: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const products = [
    {
      id: 1,
      title: 'Premium Bacon',
      description: 'Locally sourced, thick-cut bacon with rich flavor perfect for breakfast or gourmet sandwiches.',
      image: 'https://images.pexels.com/photos/4110378/pexels-photo-4110378.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Award,
      features: ['Locally Sourced', 'Thick Cut', 'Rich Flavor'],
      gradient: 'from-red-500 to-red-700',
    },
    {
      id: 2,
      title: 'Artisan Sausages',
      description: 'Handmade traditional pork sausages, crafted with secret spices and perfect for any occasion.',
      image: 'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Heart,
      features: ['Handmade', 'Secret Recipe', 'Premium Pork'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 3,
      title: 'Prime Beef Cuts',
      description: 'Premium cuts of beef including steaks, roasting joints, and fresh mince, expertly prepared.',
      image: 'https://images.pexels.com/photos/8477074/pexels-photo-8477074.jpeg?auto=compress&cs=tinysrgb&w=800',
      icon: Sparkles,
      features: ['Prime Cuts', 'Expert Preparation', 'Fresh Daily'],
      gradient: 'from-red-600 to-red-800',
    },
    {
      id: 4,
      title: 'Homemade Pies',
      description: 'Traditional homemade pies with various fillings, baked fresh daily for the perfect meal.',
      image: './images/pie.jpg',
      icon: ChefHat,
      features: ['Homemade', 'Fresh Daily', 'Various Fillings'],
      gradient: 'from-amber-500 to-red-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <section id="products" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23dc2626' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 bg-red-100 text-red-600 rounded-full font-medium text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Our Premium Selection
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-4 sm:mb-6 px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent">
              Exceptional
            </span>{' '}
            Products
          </motion.h2>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our carefully curated selection of premium fresh meats and homemade pies, 
            all sourced locally and prepared with traditional craftsmanship.
          </motion.p>
        </motion.div>

        {/* Products Grid - Mobile Responsive */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                {/* Image Container - Mobile Optimized */}
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }}
                    loading="lazy"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Icon Badge - Mobile Responsive */}
                  <motion.div
                    className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                  </motion.div>
                  
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    style={{ transform: 'skewX(-20deg)' }}
                  />
                </div>

                {/* Content - Mobile Optimized */}
                <div className="p-6 sm:p-8">
                  <motion.h3
                    className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-red-600 transition-colors duration-300"
                    layoutId={`title-${product.id}`}
                  >
                    {product.title}
                  </motion.h3>
                  
                  <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>
                  
                  {/* Features - Mobile Responsive */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <motion.span
                        key={feature}
                        className="px-2 sm:px-3 py-1 bg-red-50 text-red-600 text-xs sm:text-sm font-medium rounded-full border border-red-100"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + featureIndex * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* CTA Button - Mobile Optimized */}
                  <motion.button
                    className="group/btn relative w-full py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 text-sm sm:text-base">Learn More</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </motion.button>
                </div>
              </div>
              
              {/* Floating Elements - Hidden on mobile for performance */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full opacity-20 hidden sm:block"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  delay: index * 0.5 
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Mobile Optimized */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer touch-manipulation"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('contact')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span>Visit Our Shop Today</span>
            <motion.div
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
