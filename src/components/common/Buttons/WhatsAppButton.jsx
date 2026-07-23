import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919629621359"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, type: 'spring' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} color="#fff" />
    </motion.a>
  )
}
