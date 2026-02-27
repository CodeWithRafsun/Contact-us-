import { useState, useEffect } from 'react';
import { Mail, Phone, MessageSquare, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import SocialLinks from '@/components/SocialLinks';
import ContactCard from '@/components/ContactCard';
import SuccessPopup from '@/components/SuccessPopup';

/**
 * Contact Us Page - Glassmorphism Design with Neon Accents
 * 
 * Design Philosophy:
 * - Dark blue-to-black gradient background with neon blue (#0099FF) accents
 * - Glassmorphic cards with subtle blur and transparency
 * - Smooth animations and micro-interactions
 * - Professional tech aesthetic with minimal, clean layout
 * - Responsive two-column layout (stacks on mobile)
 */

interface FormData {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  message: string;
}

interface FieldFocus {
  name: boolean;
  email: boolean;
  phone: boolean;
  purpose: boolean;
  message: boolean;
}

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<keyof FieldFocus | null>(null);
  const [pageLoaded, setPageLoaded] = useState(false);

  // Trigger page load animations
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.purpose) {
      newErrors.purpose = 'Please select a purpose';
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

    setIsSubmitting(true);

    try {
      // Simulate form submission (in production, integrate with EmailJS or Formspree)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        purpose: '',
        message: '',
      });

      // Hide success popup after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handlePurposeChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      purpose: value,
    }));
    if (errors.purpose) {
      setErrors((prev) => ({
        ...prev,
        purpose: undefined,
      }));
    }
  };

  const handleFocus = (field: keyof FieldFocus) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-black relative overflow-hidden">
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663032201436/iiMzxQ644pajdfsZ75PAvS/contact-hero-gradient-G8QiR92Skbzn4HJgSEn4Fj.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated blob accent */}
      <div className="absolute top-20 right-10 w-96 h-96 opacity-10 pointer-events-none">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663032201436/iiMzxQ644pajdfsZ75PAvS/contact-accent-blob-TSzokQ5YXcVKN9sQBrMTUn.webp"
          alt=""
          className="w-full h-full animate-pulse"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-blue-500/20 backdrop-blur-sm">
          <div className="container py-6 md:py-8">
            <div className={pageLoaded ? 'animate-fade-in-up' : 'opacity-0'}>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Contact Us
              </h1>
              <p className="text-blue-200/80 text-lg">
                Get in touch with Code With Rafsun. We'd love to hear from you.
              </p>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left column - Contact Information */}
            <div className={`space-y-8 ${pageLoaded ? 'animate-slide-in-left' : 'opacity-0'}`}>
              {/* Business Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Business Inquiries
                </h2>
                <div className="space-y-4">
                  <ContactCard
                    icon={Mail}
                    title="Email"
                    details={['codewithrafsun@outlook.com', 'Business inquiries only']}
                    delay={0}
                  />
                  <ContactCard
                    icon={Phone}
                    title="Phone"
                    details={['+8801306654467', 'Direct call: 7:00 PM – 1:00 AM']}
                    delay={100}
                  />
                  <ContactCard
                    icon={MessageSquare}
                    title="WhatsApp"
                    details={['+8801306654467', 'Business communication only', 'Response: Within 3 hours']}
                    delay={200}
                  />
                </div>
              </div>

              {/* Personal Contact */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">
                  Personal Communication
                </h2>
                <div className="space-y-4">
                  <ContactCard
                    icon={Mail}
                    title="Email"
                    details={['codewithrafsun@gmail.com', 'Available 24/7', 'Response: Within 1 day']}
                    delay={300}
                  />
                </div>
              </div>

              {/* Direct Message Email */}
              <div className="glass-card neon-glow p-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <p className="text-blue-300 text-sm mb-2">Direct Message</p>
                <p className="text-white font-semibold text-lg">
                  codewithrafsun@aol.com
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h3>
                <SocialLinks />
              </div>
            </div>

            {/* Right column - Contact Form */}
            <div className={pageLoaded ? 'animate-slide-in-right' : 'opacity-0'}>
              <div className="glass-card neon-glow p-8 transition-all duration-300">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => handleFocus('name')}
                        onBlur={handleBlur}
                        className={`bg-slate-800/50 border-blue-500/30 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-blue-500/50 transition-all duration-300 ${
                          focusedField === 'name' ? 'border-blue-400 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1 animate-fade-in-up">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => handleFocus('email')}
                        onBlur={handleBlur}
                        className={`bg-slate-800/50 border-blue-500/30 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-blue-500/50 transition-all duration-300 ${
                          focusedField === 'email' ? 'border-blue-400 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 animate-fade-in-up">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2">
                      Phone / WhatsApp <span className="text-slate-500 text-xs">(Optional)</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+880 13 0665 4467"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => handleFocus('phone')}
                        onBlur={handleBlur}
                        className={`bg-slate-800/50 border-blue-500/30 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-blue-500/50 transition-all duration-300 ${
                          focusedField === 'phone' ? 'border-blue-400 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Purpose */}
                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-blue-200 mb-2">
                      Purpose <span className="text-red-400">*</span>
                    </label>
                    <Select value={formData.purpose} onValueChange={handlePurposeChange}>
                      <SelectTrigger className={`bg-slate-800/50 border-blue-500/30 text-white focus:border-blue-400 focus:ring-blue-500/50 transition-all duration-300 ${
                        focusedField === 'purpose' ? 'border-blue-400 shadow-lg shadow-blue-500/20' : ''
                      }`}>
                        <SelectValue placeholder="Select a purpose" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-blue-500/30">
                        <SelectItem value="business">Business Inquiry</SelectItem>
                        <SelectItem value="personal">Personal Communication</SelectItem>
                        <SelectItem value="collaboration">Collaboration</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.purpose && (
                      <p className="text-red-400 text-sm mt-1 animate-fade-in-up">{errors.purpose}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <div className="relative">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => handleFocus('message')}
                        onBlur={handleBlur}
                        className={`bg-slate-800/50 border-blue-500/30 text-white placeholder-slate-400 focus:border-blue-400 focus:ring-blue-500/50 resize-none transition-all duration-300 ${
                          focusedField === 'message' ? 'border-blue-400 shadow-lg shadow-blue-500/20' : ''
                        }`}
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-400 text-sm mt-1 animate-fade-in-up">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 active:scale-95"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin inline" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2 inline" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-blue-500/20 backdrop-blur-sm mt-16">
          <div className="container py-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Code With Rafsun
              </h3>
              <p className="text-blue-200/60 mb-1">
                Powered by Mahedi Hasan Rafsun
              </p>
              <p className="text-blue-200/40 text-sm">
                © {currentYear} Code With Rafsun. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>

      {/* Success Popup */}
      {showSuccess && <SuccessPopup />}
    </div>
  );
}
