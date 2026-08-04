import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import logo from '../assets/logo/bstt logo footer.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const exploreLinks = ['Home', 'About', 'Excursions', 'Activities', 'Contact Us']
  const trailLinks = ['Ella Private Day Trip', 'Sinharaja Rainforest Trekking Private Day Trip', 'Galle & Benthota Full Day Tour From Colombo', 'Kandy Full Day Tour Private All Inclusive']

  return (
    <footer className="relative bg-forest-dark text-gray-300 overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0">
        <img src="/footer-bg.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-forest-dark/85 via-forest-dark/90 to-forest-dark" />
      </div>

      {/* Signature: topographic contour lines, like elevation lines on a trail map */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1000 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M ${-100 + i * 20} 0 C ${150 + i * 30} ${100 + i * 15}, ${350 - i * 20} ${200 + i * 10}, ${600 + i * 25} ${150 + i * 20} S ${900 + i * 15} ${300 + i * 10}, 1200 ${250 + i * 15}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-forest-accent"
          />
        ))}
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-8">
        {/* Top: Brand + Newsletter signpost */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Logo" className="w-96 object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Guided excursions and wild places, run by people who know the trails.
              Every trip is scouted, every guide is local.
            </p>

            <div className="flex gap-3 mt-6">
              {[
                { Icon: FaInstagram, label: 'Instagram' },
                { Icon: FaFacebookF, label: 'Facebook' },
                { Icon: FaYoutube, label: 'YouTube' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-gray-400 hover:text-forest-dark hover:bg-forest-primary-light hover:border-forest-primary-light transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Middle: link columns + contact + map */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-forest-primary-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Popular Trips</h4>
            <ul className="space-y-3">
              {trailLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-forest-primary-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 mt-0.5 text-forest-primary shrink-0" strokeWidth={1.5} />
                <span>Galle Road, Bentota,<br />Sri Lanka, 80500</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-forest-primary shrink-0" strokeWidth={1.5} />
                <a href="tel:+94772408371" className="hover:text-forest-primary-light transition-colors">
                  +94 77 240 8371
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-forest-primary shrink-0" strokeWidth={1.5} />
                <a href="mailto:contact.samantha@gmail.com" className="hover:text-forest-primary-light transition-colors">
                  contact.samantha@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Find Us</h4>
            <div className="relative rounded-lg overflow-hidden h-32 border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) contrast(0.9)' }}
                loading="lazy"
                title="Our Location"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Galle+Road+Bentota+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-forest-primary hover:text-forest-primary-light mt-2 transition-colors"
            >
              Get directions <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Bentota Samantha Tours & Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}