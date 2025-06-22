import React, { useState, useEffect, useRef } from 'react';
import { Mail, MessageCircle, Phone, Send, CheckCircle, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // Add Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add visible class to all fade-up elements in this section
            const elements = entry.target.querySelectorAll('.fade-up-element');
            elements.forEach((element) => {
              element.classList.add('visible');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setFormStatus('sending');
    
    try {
      // EmailJS configuration - Replace these with your actual values
      const serviceId = 'service_bpwk6u9'; // Replace with your EmailJS Service ID
      const templateId = 'template_kzvd2nd'; // Replace with your EmailJS Template ID
      const publicKey = 'gegier-Yoscu9d5Cj'; // Replace with your EmailJS Public Key
      
      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        to_email: 'aatreyeechatterjeee@gmail.com', // Your email address
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      if (response.status === 200) {
        setFormStatus('success');
        setFormData({ fullName: '', email: '', message: '' });
        
        // Show thank you modal
        setShowThankYouModal(true);
        
        // Reset status after showing success message
        setTimeout(() => {
          setFormStatus('idle');
        }, 2000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }
  };

  const closeThankYouModal = () => {
    setShowThankYouModal(false);
  };

  const contactMethods = [
    {
      id: 'email',
      title: 'Email',
      info: 'aatreyeechatterjeee@gmail.com',
      icon: Mail,
      action: 'Write Me',
      link: 'mailto:aatreyeechatterjeee@gmail.com',
      color: '#D4B896'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp',
      info: '+44 74441 63880',
      icon: MessageCircle,
      action: 'Text Me',
      link: 'https://wa.me/447444163880',
      color: '#D4B896' // Changed from green to gold
    },
    {
      id: 'phone',
      title: 'Phone',
      info: '+44 74441 63880',
      icon: Phone,
      action: 'Call Me',
      link: 'tel:+447444163880',
      color: '#D4B896'
    }
  ];

  return (
    <>
      <section 
        ref={sectionRef}
        className="min-h-screen relative overflow-hidden py-20 section-background" 
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(84, 81, 74, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(84, 81, 74, 0.1) 0%, transparent 50%),
            linear-gradient(135deg, #000000 0%, #000000 50%, #54514a 100%)
          `
        }}
      >
        {/* Background textures - same as other sections */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 2%),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,0.05) 0%, transparent 1%),
            linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.02) 49%, rgba(255,255,255,0.02) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(255,255,255,0.01) 49%, rgba(255,255,255,0.01) 51%, transparent 52%)
          `,
          backgroundSize: '60px 60px, 40px 40px, 20px 20px, 20px 20px'
        }}></div>
        
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '180px 180px'
        }}></div>

        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }}></div>

        <div className="max-w-6xl mx-auto px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-12 fade-up-element">
            {/* Small grey text above heading */}
            <p 
              className="text-white/50 text-sm font-light tracking-[0.25em] mb-4 uppercase"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              GET IN TOUCH
            </p>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-white tracking-tight mb-8">
              Contact Me
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            
            {/* Left Column - Talk to me */}
            <div className="space-y-6 fade-up-element fade-up-delay-2">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 text-center">
                Talk to me
              </h3>
              
              {/* Contact Cards */}
              <div className="space-y-4 flex flex-col items-center">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  
                  return (
                    <div
                      key={method.id}
                      className="group bg-white/5 backdrop-blur-sm border border-[#D4B896]/30 rounded-xl p-4 hover:bg-white/10 hover:border-[#D4B896]/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/5 w-full max-w-xs text-center"
                    >
                      {/* Icon */}
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg mb-3 mx-auto" style={{
                        backgroundColor: `${method.color}20`,
                        border: `1px solid ${method.color}40`
                      }}>
                        <IconComponent 
                          className="w-5 h-5 transition-all duration-300 group-hover:scale-110" 
                          style={{ color: method.color }}
                        />
                      </div>
                      
                      {/* Method Title */}
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">
                        {method.title}
                      </h4>
                      
                      {/* Contact Info */}
                      <p className="text-white/70 font-light mb-3 text-sm break-all">
                        {method.info}
                      </p>
                      
                      {/* Action Link */}
                      <a
                        href={method.link}
                        target={method.id === 'whatsapp' ? '_blank' : undefined}
                        rel={method.id === 'whatsapp' ? 'noopener noreferrer' : undefined}
                        className="group/link inline-flex items-center gap-2 text-[#D4B896] hover:text-white transition-all duration-300 font-light text-sm"
                      >
                        <span>{method.action}</span>
                        <svg 
                          className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="space-y-6 fade-up-element fade-up-delay-3">
              <h3 className="text-2xl md:text-3xl font-light text-white mb-6 text-center">
                Write to me about your project
              </h3>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                {/* Full Name Field */}
                <div className="space-y-1">
                  <label htmlFor="fullName" className="block text-white/80 font-light text-sm">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Insert your name"
                    className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/40 font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896]/50 focus:border-[#D4B896]/60 transition-all duration-300 ${
                      errors.fullName ? 'border-red-400/60' : 'border-[#D4B896]/30'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-400 text-xs font-light flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-white/80 font-light text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Insert your email"
                    className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/40 font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896]/50 focus:border-[#D4B896]/60 transition-all duration-300 ${
                      errors.email ? 'border-red-400/60' : 'border-[#D4B896]/30'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs font-light flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-1">
                  <label htmlFor="message" className="block text-white/80 font-light text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your project"
                    rows={4}
                    className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-sm border rounded-lg text-white placeholder-white/40 font-light text-sm focus:outline-none focus:ring-2 focus:ring-[#D4B896]/50 focus:border-[#D4B896]/60 transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-400/60' : 'border-[#D4B896]/30'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs font-light flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-[#D4B896] hover:bg-[#CAA77D] disabled:bg-[#D4B896]/50 text-black font-semibold py-2.5 px-6 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#D4B896]/20 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm"
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      <span>Message Sent!</span>
                    </>
                  ) : formStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4" />
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Error Message */}
                {formStatus === 'error' && (
                  <div className="text-center p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                    <p className="text-red-400 text-sm font-light">
                      ❌ Failed to send message. Please try again or contact me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
          <div className="bg-white/10 backdrop-blur-md border border-[#D4B896]/30 rounded-2xl p-8 max-w-md w-full mx-4 relative animate-in fade-in zoom-in duration-300">
            {/* Close Button */}
            <button
              onClick={closeThankYouModal}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            >
              <X className="w-5 h-5 text-white/60 hover:text-white" />
            </button>

            {/* Modal Content */}
            <div className="text-center space-y-6">
              {/* Success Icon */}
              <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>

              {/* Thank You Message */}
              <div className="space-y-3">
                <h3 className="text-2xl font-light text-white">
                  Thank You!
                </h3>
                <p className="text-white/70 font-light leading-relaxed">
                  Your message has been sent successfully! I appreciate you reaching out and will get back to you as soon as possible.
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={closeThankYouModal}
                className="w-full bg-[#D4B896] hover:bg-[#CAA77D] text-black font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactSection;