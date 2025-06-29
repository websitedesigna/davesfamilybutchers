import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Calendar, MapPin, Phone } from 'lucide-react'

const Hours: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getCurrentDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return days[new Date().getDay()]
  }

  const currentDay = getCurrentDay()

  const hours = [
    { day: 'Monday', time: '06:00 - 16:00', isOpen: true },
    { day: 'Tuesday', time: '06:00 - 16:00', isOpen: true },
    { day: 'Wednesday', time: 'Closed', isOpen: false },
    { day: 'Thursday', time: '06:00 - 16:00', isOpen: true },
    { day: 'Friday', time: '06:00 - 16:00', isOpen: true },
    { day: 'Saturday', time: '06:00 - 15:00', isOpen: true },
    { day: 'Sunday', time: 'Closed', isOpen: false },
  ]

  const isCurrentlyOpen = () => {
    const now = new Date()
    const currentHour = now.getHours()
    const currentMinute = now.getMinutes()
    const currentTime = currentHour * 60 + currentMinute
    
    const todayHours = hours.find(h => h.day === currentDay)
    if (!todayHours || !todayHours.isOpen) return false
    
    if (currentDay === 'Saturday') {
      return currentTime >= 360 && currentTime < 900 // 6:00 - 15:00
    } else {
      return currentTime >= 360 && currentTime < 960 // 6:00 - 16:00
    }
  }

  const currentlyOpen = isCurrentlyOpen()

  return (
    <section id="hours" className="py-24 bg-gradient-to-br from-gray-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23dc2626' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 mb-6 bg-red-100 text-red-600 rounded-full font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <Clock className="w-5 h-5 mr-2" />
            Opening Hours
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Visit Us{' '}
            <span className="gradient-text bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              During Our Hours
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We're open six days a week to serve you with the freshest selection of meats and pies
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Hours Table */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Status Banner */}
              <motion.div
                className={`px-8 py-6 text-center font-bold text-lg ${
                  currentlyOpen 
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
                    : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                }`}
                animate={{ 
                  scale: currentlyOpen ? [1, 1.02, 1] : [1, 0.98, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <motion.div
                    className={`w-3 h-3 rounded-full ${
                      currentlyOpen ? 'bg-green-200' : 'bg-red-200'
                    }`}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span>
                    {currentlyOpen ? 'Currently Open' : 'Currently Closed'}
                  </span>
                </div>
              </motion.div>

              {/* Hours List */}
              <div className="p-8">
                <div className="space-y-4">
                  {hours.map((hour, index) => (
                    <motion.div
                      key={hour.day}
                      className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
                        hour.day === currentDay
                          ? 'bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                      }`}
                      initial={{ opacity: 0, x: -30 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`w-3 h-3 rounded-full ${
                            hour.day === currentDay
                              ? 'bg-red-500 shadow-lg'
                              : hour.isOpen
                              ? 'bg-green-500'
                              : 'bg-gray-400'
                          }`}
                          animate={hour.day === currentDay ? {
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              '0 0 0 0 rgba(239, 68, 68, 0.7)',
                              '0 0 0 10px rgba(239, 68, 68, 0)',
                              '0 0 0 0 rgba(239, 68, 68, 0)'
                            ]
                          } : {}}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className={`font-semibold text-lg ${
                          hour.day === currentDay ? 'text-red-700' : 'text-gray-700'
                        }`}>
                          {hour.day}
                        </span>
                        {hour.day === currentDay && (
                          <motion.span
                            className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            TODAY
                          </motion.span>
                        )}
                      </div>
                      <span className={`font-mono text-lg ${
                        hour.isOpen 
                          ? hour.day === currentDay 
                            ? 'text-red-700 font-bold' 
                            : 'text-gray-700'
                          : 'text-gray-500 italic'
                      }`}>
                        {hour.time}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Best Time to Visit */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600 mb-4">
                For the freshest selection and personalized service, we recommend visiting us early in the morning.
              </p>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-700 font-semibold">🌅 Early Morning (6:00 - 9:00 AM)</p>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              className="bg-gradient-to-br from-red-600 to-red-700 p-6 rounded-2xl shadow-lg text-white"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Quick Contact</h3>
              </div>
              <motion.a
                href="tel:01329843438"
                className="block bg-white/20 backdrop-blur-sm p-4 rounded-xl hover:bg-white/30 transition-all duration-300 mb-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <span className="font-bold text-lg">01329 843438</span>
                </div>
              </motion.a>
              <p className="text-white/90 text-sm">
                Call us during opening hours for orders or inquiries
              </p>
            </motion.div>

            {/* Location Card */}
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Find Us</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold">119 Highlands Road</p>
                <p>Fareham PO15 6HZ</p>
              </div>
              <motion.button
                className="mt-4 w-full py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Get Directions
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hours