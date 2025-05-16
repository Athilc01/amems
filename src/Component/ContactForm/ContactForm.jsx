import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, CheckCircle, Loader } from "lucide-react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [countdown, setCountdown] = useState(10);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch("https://formspree.io/f/xldbnkvv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          message
        }),
      });
      
      if (response.ok) {
        // Form submitted successfully
        setSubmitStatus('success');
        // Clear form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("");
        // Initialize countdown
        setCountdown(10);
      } else {
        // Handle error response
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // Handle network errors
      setSubmitStatus('error');
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Countdown effect
  useEffect(() => {
    let timer;
    
    if (submitStatus === 'success' && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
    } else if (submitStatus === 'success' && countdown === 0) {
      setSubmitStatus(null);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitStatus, countdown]);

  return (
    <div>
      <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information Column */}
            <div className="w-full scroll-smooth">
              <div className="mb-12">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Contact Us</span>
                <h2 className="font-nulshock text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 text-lg max-w-lg">
                  AMEMS, a leading American Middle East-based pharmaceutical provider, delivers premium medications ensuring optimal health outcomes worldwide.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-5">
                    <Mail className="text-blue-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Mail Us</h3>
                    <a href="mailto:info@amemsus.com" className="text-blue-700 font-medium mb-1">
                      info@amemsus.com
                    </a><br />
                  </div>
                </div>

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

                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-5">
                    <MapPin className="text-blue-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-black">Contact</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <MapPin className="mt-1 mr-2 text-black flex-shrink-0" size={16} />
                        <span className="text-black text-sm">Las Vegas, USA 9576 Trattoria Street, Las Vegas, 89178, Nevada, USA</span>
                      </li>
                      <li className="flex items-start">
                        <MapPin className="mt-1 mr-2 text-black flex-shrink-0" size={16} />
                        <span className="text-black text-sm">246-123, Al Habtoor Industrial Area, Al Qusais, Ind. Area 3, Dubai, UAE</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Column */}
            <div className="w-full">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="font-nulshock text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
                
                {submitStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-12 w-12 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h4>
                    <p className="text-green-700 mb-4">Thank you for contacting us. We'll get back to you soon.</p>
                    <p className="text-sm text-gray-500 mt-2">Form will reset in {countdown} seconds...</p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="text-red-700">{errorMessage || "An error occurred. Please try again."}</p>
                      </div>
                    )}
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          placeholder='Enter Your First Name'
                          name="firstName"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-gray-700 mb-2 font-medium">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          placeholder='Enter Your Last Name'
                          name="lastName"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email Here"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder='Enter your Message here'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows="5"
                        className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg flex justify-center items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="animate-spin mr-2 h-5 w-5" />
                          Sending...
                        </>
                      ) : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;