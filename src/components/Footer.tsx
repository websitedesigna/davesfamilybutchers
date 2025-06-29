import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Heart, Star, Award } from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Dave's Family Butchers",
      content: "Traditional butchery serving Fareham with premium fresh meats and homemade pies for over two decades.",
      type: 'description'
    },
    {
      title: 'Quick Links',
      content: [
        { label: 'Our Products', href: '#products' },
        { label: 'About Us', href: '#about' },
        { label: 'Opening Hours', href: '#hours' },
        { label: 'Contact Us', href: '#contact' },
      ],
      type: 'links'
    },
    {
      title: 'Contact Info',
      content: [
        { icon: MapPin, text: '119 Highlands Road, Fareham PO15 6HZ' },
        { icon: Phone, text: '01329 843438', href: 'tel:01329843438' },
        { icon: Clock, text: 'Mon-Sat: 6AM-4PM (Wed Closed)' },
      ],
      type: 'contact'
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-20 left-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 bg-orange-600/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Border */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-2xl font-display font-bold text-red-400 mb-6 relative"
                whileHover={{ scale: 1.05 }}
              >
                {section.title}
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-red-600 to-transparent"
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                />
              </motion.h3>

              {section.type === 'description' && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {section.content}
                  </p>
                  
                  {/* Quality Badges */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {[
                      { icon: Star, label: 'Premium Quality' },
                      { icon: Award, label: 'Expert Service' },
                      { icon: Heart, label: 'Family Business' },
                    ].map((badge, badgeIndex) => (
                      <motion.div
                        key={badge.label}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 + badgeIndex * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                      >
                        <badge.icon className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-medium text-gray-300">{badge.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {section.type === 'links' && (
                <motion.ul
                  className="space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {(section.content as Array<{ label: string; href: string }>).map((link, linkIndex) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + linkIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.button
                        onClick={() => scrollToSection(link.href)}
                        className="group flex items-center text-gray-300 hover:text-red-400 transition-all duration-300 text-lg"
                        whileHover={{ x: 10 }}
                      >
                        <motion.span
                          className="w-2 h-2 bg-red-600 rounded-full mr-4 group-hover:bg-red-400"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: linkIndex * 0.3 }}
                        />
                        {link.label}
                        <motion.span
                          className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </motion.li>
                  ))}
                </motion.ul>
              )}

              {section.type === 'contact' && (
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {(section.content as Array<{ icon: any; text: string; href?: string }>).map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {item.href ? (
                        <motion.a
                          href={item.href}
                          className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-red-400/30"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <motion.div
                            className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <item.icon className="w-5 h-5 text-white" />
                          </motion.div>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300 text-lg font-medium">
                            {item.text}
                          </span>
                        </motion.a>
                      ) : (
                        <div className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl border border-white/10">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-gray-300 text-lg">{item.text}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8 pb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src="/images/bros.jpg"
                alt="Dave's Family Butchers"
                className="w-12 h-12 rounded-full border-2 border-red-600"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              />
              <div>
                <h4 className="font-bold text-red-400">Dave's Family Butchers</h4>
                <p className="text-sm text-gray-400">Est. Fareham</p>
              </div>
            </motion.div>

            <motion.p
              className="text-gray-400 text-center md:text-right"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              © {currentYear} Dave's Family Butchers. All rights reserved.
              <br />
              <span className="text-sm">Website created and published by Riley Oliver.</span>
            </motion.p>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-10 right-10 w-4 h-4 bg-red-600/30 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-10 left-10 w-3 h-3 bg-orange-600/40 rounded-full"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.9, 0.4]
          }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </footer>
  )
}

export default Footer