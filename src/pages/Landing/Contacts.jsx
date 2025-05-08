import React, { useState } from "react";
import { Send, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const Contacts = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  
  const faqItems = [
    {
      question: "What pharmaceutical products does Innovative offer?",
      answer: "Innovative offers a wide range of pharmaceutical products, including prescription medications, over-the-counter drugs, specialty medicines, and innovative treatments for various health conditions."
    },
    {
      question: "Are Innovative's products FDA-approved?",
      answer: "Yes, all of our products have passed rigorous testing and received full FDA approval. We maintain the highest standards of quality and compliance across our entire product line."
    },
    {
      question: "What if I have a question about a specific product or need assistance?",
      answer: "Our dedicated customer support team is available 24/7. Feel free to contact us through email, phone, or the contact form on our website. We aim to respond to all inquiries within 24 hours."
    },
    {
      question: "Does Innovative offer discounts for bulk orders?",
      answer: "Yes, we offer tiered pricing for bulk orders. The larger your order, the greater your savings. Please contact our sales team directly to discuss your specific requirements and receive a customized quote."
    }
  ];

  const toggleItem = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted", { firstName, lastName, email, message });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log("Newsletter subscription:", newsletterEmail);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Enhanced Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 "></div>
        
        <div className="container mx-auto py-40 px-6 relative">
          <div className="text-center max-w-4xl mx-auto font-Satoshi" >
            <h1 className="font-nulshock text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Get In Touch
            </h1>
            <p className="text-blue-100 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have a question, need support, or just want to say hello, reach out and we'll respond promptly.
            </p>
            <div className="mt-12">
              <a href="#contact-form" className="inline-flex items-center px-8 py-4 bg-white text-blue-800 rounded-full font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl">
                Contact Us
                <Send className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Improved Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className="w-full h-auto">
            <path fill="#ffffff" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,133.3C672,139,768,117,864,101.3C960,85,1056,75,1152,80C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* FAQ Section with Enhanced Styling */}
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Frequently Asked Questions</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Have Questions? We're Here to Help
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our products and services.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className={`w-full flex justify-between items-center p-6 text-left text-lg font-medium transition-colors duration-300 ${
                  expandedIndex === index
                    ? 'bg-blue-700 text-white'
                    : 'bg-white text-gray-800 hover:bg-blue-50'
                }`}
              >
                {item.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedIndex === index ? 'max-h-64' : 'max-h-0'}`}
              >
                <div className="p-6 bg-white text-gray-700">
                  <p className="leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Information Section with Modern Design */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information Column */}
            <div className="w-full">
              <div className="mb-12">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Contact Us</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 text-lg max-w-lg">
                  Innovative, a leading American Middle East-based pharmaceutical provider, delivers premium medications ensuring optimal health outcomes worldwide.
                </p>
              </div>

              <div className="space-y-10">
                {/* Mail Address */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-5">
                    <Mail className="text-blue-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Mail Us</h3>
                    <p className="text-blue-700 font-medium mb-1">innovativeus@mail.com</p>
                    <p className="text-gray-600">info@innovativeamems.com</p>
                  </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-5">
                    <Phone className="text-blue-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Call Us</h3>
                    <p className="text-gray-600 mb-1">+1 702 595 3772</p>
                    <p className="text-gray-600">+971 56 2272323</p>
                  </div>
                </div>

                {/* Our Address */}
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-5">
                    <MapPin className="text-blue-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      246-123, Al Habtoor Industrial Area, Al Qusais, Ind. Area 3, Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="w-full">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="5"
                    className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section with Enhanced Design */}
      <div className="max-w-6xl mx-auto my-24 px-6">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl px-8 py-16 text-center shadow-xl relative overflow-hidden">
          {/* Abstract shapes for visual interest */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500 opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-600 opacity-10"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-blue-800 bg-opacity-50 text-blue-100 rounded-full text-sm font-semibold mb-4">Stay Updated</span>
            <h2 className="text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 text-lg mb-10 opacity-90">
              Get the latest updates on new products, special offers, and industry insights delivered straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 py-4 px-6 rounded-l-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-300 border-0"
              />
              <button 
                onClick={handleNewsletterSubmit}
                className="bg-white text-blue-800 py-4 px-8 rounded-r-lg font-medium transition-colors duration-300 hover:bg-blue-50 border-0"
              >
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contacts;