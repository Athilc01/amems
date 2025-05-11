import React, { useState } from 'react';
import { Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <section className="py-24 bg-gradient-to-b from-white to-blue-50" id="contact-form">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information Column */}
            <div className="w-full">
              <div className="mb-12">
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Contact Us</span>
                <h2 className="font-nulshock text-3xl md:text-5xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                <p className="text-gray-600 text-lg max-w-lg">
                  Innovative, a leading American Middle East-based pharmaceutical provider, delivers premium medications ensuring optimal health outcomes worldwide.
                </p>
              </div>

              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-full mr-5">
                    <Mail className="text-blue-700 h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Mail Us</h3>
                        <a href="mailto:innovativeus@mail.com" className="text-blue-700 font-medium mb-1">
                        innovativeus@mail.com
                        </a><br />
                        <a href="mailto:info@innovativeamems.com" className="text-gray-600">
                        info@innovativeamems.com
                        </a>
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
                
                <form
                  action="https://formspree.io/f/xldbnkvv"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-gray-700 mb-2 font-medium">First Name</label>
                      <input
                        type="text"
                        id="firstName"
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
                      placeholder="your@email.com"
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows="5"
                      className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-4 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
