import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Users, Award, Heart, Truck, Clock, Shield } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Users,
      title: 'Local Sourcing',
      description: 'Supporting local farmers and suppliers to bring you the freshest products while strengthening our community.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Expert Butchery',
      description: 'Traditional skills and techniques passed down through generations, ensuring every cut meets our high standards.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Heart,
      title: 'Fresh Daily',
      description: 'All products prepared fresh every morning, guaranteeing the highest quality and taste for our customers.',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Truck,
      title: 'Quality Delivery',
      description: 'From farm to shop, we maintain the cold chain and quality standards throughout our supply process.',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Time-Honored Recipes',
      description: 'Our homemade pies and sausages follow traditional recipes that have been perfected over decades.',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'We maintain the highest food safety standards and hygiene practices to ensure your peace of mind.',
      color: 'from-teal-500 to-teal-600',
    },
  ]

  const stats = [
    { number: '25+', label: 'Years of Experience', suffix: '' },
    { number: '1000+', label: 'Happy Customers', suffix: '' },
    { number: '100%', label: 'Local Sourcing', suffix: '' },
    { number: '7', label: 'Days a Week Fresh', suffix: '' },
  ]

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 via-transparent to-orange-50/50" />
      
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-red-100 rounded-full opacity-20 blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-48 h-48 bg-orange-100 rounded-full opacity-20 blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center px-6 py-3 mb-6 bg-red-100 text-red-600 rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-5 h-5 mr-2" />
              Our Story
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              About{' '}
              <span className="gradient-text bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Dave's Family Butchers
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Established in the heart of Fareham, Dave's Family Butchers has been a cornerstone of the community for over two decades. We're dedicated to providing the finest fresh meats and homemade pies, combining traditional butchery skills with modern quality standards.
            </motion.p>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Our friendly team offers expert advice and a warm welcome to all customers. We pride ourselves on quality, tradition, and supporting local suppliers, ensuring that every product meets our exacting standards.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-100"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-red-600 mb-2"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: 1 + index * 0.1 
                    }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm font-medium text-gray-700">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <span className="flex items-center">
                Visit Our Shop
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
            </motion.button>
          </motion.div>

          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl opacity-20 blur-xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <motion.img
                src="https://i.ibb.co/zpTLmYP/shp.jpg"
                alt="Dave's Family Butchers Shop Front"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              
              {/* Floating Badge */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-xl border-4 border-red-100"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
              >
                <Award className="w-8 h-8 text-red-600" />
              </motion.div>
              
              {/* Quality Badge */}
              <motion.div
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-full font-bold shadow-xl"
                animate={{ 
                  x: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
                whileHover={{ scale: 1.1 }}
              >
                Premium Quality
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
              />
              
              {/* Icon */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl mb-6 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              
              {/* Hover Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-red-700 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About