import React, { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import ContactForm from "../../Component/ContactForm/ContactForm";

const Contacts = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleNewsletterSubmit = async () => {
    if (!newsletterEmail) {
      setSubmitError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("https://formspree.io/f/xldbnkvv", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: newsletterEmail })
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setNewsletterEmail("");
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000); // Reset after 5s
      } else {
        setSubmitError(data?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setSubmitError("Error submitting form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <div className="bg-white">
      {/* Hero Section with Enhanced Gradient */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-indigo-900 opacity-90"></div>
        <div className="absolute inset-0 opacity-20 "></div>
        
        <div className="container mx-auto py-40 px-6 relative">
          <div className="text-center max-w-4xl mx-auto font-Satoshi">
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
          <span className=" inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">Frequently Asked Questions</span>
          <h2 className="font-nulshock text-2xl md:text-5xl font-bold text-gray-900 mb-6">
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
      <ContactForm />
      {/* Newsletter Section with Enhanced Design */}
      <div className="max-w-6xl mx-auto my-24 px-6">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-2xl px-8 py-16 text-center shadow-xl relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-500 opacity-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-600 opacity-10"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 bg-blue-800 bg-opacity-50 text-blue-100 rounded-full text-sm font-semibold mb-4">
              Stay Updated
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-blue-100 text-lg mb-10 opacity-90">
              Get the latest updates on new products, special offers, and industry insights delivered straight to your inbox.
            </p>

            {!isSubmitted ? (
              <>
                <div className="flex flex-col gap-2 sm:flex-row max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 py-4 px-6 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-blue-300 border-0"
                    required
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    disabled={isSubmitting}
                    className="bg-white text-blue-800 py-4 px-8 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-50 border-0"
                  >
                    {isSubmitting ? "Submitting..." : "Subscribe"}
                  </button>
                </div>
                {submitError && (
                  <p className="text-red-200 text-sm mt-4">{submitError}</p>
                )}
                <p className="text-blue-200 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="text-green-100 text-lg font-semibold mt-4">
                ✅ You’ve successfully subscribed!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
