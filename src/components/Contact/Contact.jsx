// Contact.js
import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_985zkds', // Replace with your EmailJS service ID
        'template_7qjr6gf', // Replace with your EmailJS template ID
        formData,
        'JYSgZVDvKZWy6dMrF' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          setIsSent(true);
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (error) => {
          console.error('Email sending error:', error);
          toast.error("I am working on fixing the email sending feature");
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.8, 0.5, 1] }}
      className="flex justify-center items-center mt-[8rem]"
    >
      <div className="w-full max-w-5xl bg-white dark:bg-[#161b24] rounded-2xl shadow-xl p-8 md:p-6 border border-[#0000002a] dark:border-[#ffffff28]">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-[#F9F8F2] mb-4">Get in Touch by Dropping a Hi 😉</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'd love to hear from you! Fill out the form below, and I’ll get back to you as soon as possible.
          </p>
        </div>

        {isSent && <p className="text-green-600 dark:text-green-400 mb-4">Your message has been sent successfully!</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 dark:border-[#444] rounded-md py-3 px-4 bg-white dark:bg-[#1e2534] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-200"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
              className="w-full border border-gray-300 dark:border-[#444] rounded-md py-3 px-4 bg-white dark:bg-[#1e2534] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-200"
            />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className="w-full border border-gray-300 dark:border-[#444] rounded-md py-3 px-4 bg-white dark:bg-[#1e2534] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-200"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 dark:border-[#444] rounded-md py-3 px-4 h-40 bg-white dark:bg-[#1e2534] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition duration-200"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#342E37] dark:bg-[#FFD700] text-white dark:text-[#342E37] py-3 rounded-full font-semibold hover:bg-[#342E37] dark:hover:bg-white dark:hover:text-[#342E37] transition duration-200 border-2 border-transparent hover:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
          >
            Send Message
          </button>
        </form>

        {/* Toast container for notifications */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          className="dark:bg-white/10 dark:backdrop-blur-md dark:text-white rounded-xl text-sm"
        />
      </div>
    </motion.div>
  );
};

export default Contact;
