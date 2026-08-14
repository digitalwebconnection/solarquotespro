import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { WEB3FORMS_ACCESS_KEY } from '../../config/web3forms';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email.trim());
  };

  const formatAustralianPhone = (raw: string) => {
    const digits = raw.replace(/\D/g, '').slice(0, 10);
    if (digits.length <= 4) return digits;
    if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
    return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
  };

  const validatePhone = (phone: string) => {
    if (!phone.trim()) return true; // Optional on contact form unless entered
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10 || (digits.length === 11 && digits.startsWith('61'));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formatted = formatAustralianPhone(value);
      const rawDigits = formatted.replace(/\D/g, '');
      setFormData(prev => ({ ...prev, phone: formatted }));
      
      if (rawDigits.length > 0 && rawDigits.length < 10) {
        setFieldErrors(prev => ({ ...prev, phone: `Must be a 10-digit number (${rawDigits.length}/10 digits)` }));
      } else {
        setFieldErrors(prev => {
          const next = { ...prev };
          delete next.phone;
          return next;
        });
      }
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));

    if (fieldErrors[name]) {
      setFieldErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    
    // Validate fields
    const errors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Please enter your full name (minimum 2 characters)';
    }

    if (!formData.email.trim() || !validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address (e.g. name@example.com.au)';
    }

    if (formData.phone.trim() && !validatePhone(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits (e.g. 0400 123 456)';
    }

    if (!formData.message.trim() || formData.message.trim().length < 5) {
      errors.message = 'Please provide a message with at least 5 characters';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setErrorMessage('Please fix the errors highlighted below before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      const getSubjectLabel = (subj: string) => {
        switch (subj) {
          case 'general': return 'General Solar Inquiry';
          case 'quote': return 'Installer Matching Help';
          case 'installer_network': return 'Join Installer Network (CEC Pros)';
          case 'feedback': return 'Feedback & Support';
          default: return subj;
        }
      };

      const topicLabel = getSubjectLabel(formData.subject);

      const data = new FormData();
      data.append("access_key", WEB3FORMS_ACCESS_KEY);
      data.append("from_name", "Solar Quotes Pro Inquiries");
      data.append("subject", `💬 Customer Inquiry: ${formData.name} • ${topicLabel}`);
      data.append("replyto", formData.email);

      data.append("INQUIRY CATEGORY", topicLabel);

      data.append("1. SENDER CONTACT", [
        `• Full Name: ${formData.name}`,
        `• Email: ${formData.email}`,
        `• Phone: ${formData.phone || 'Not Provided'}`
      ].join('\n'));

      data.append("2. CUSTOMER MESSAGE", formData.message);

      data.append("3. SUBMISSION STATUS", "Received via Website Contact Form • 24-Hour SLA");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: ''
        });
        setFieldErrors({});
      } else {
        setIsSubmitting(false);
        setErrorMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Web3Forms submission error:", error);
      setIsSubmitting(false);
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-3xl text-center shadow-md">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-serif font-black text-slate-900 mb-2">Message Sent Successfully!</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          Thank you for reaching out to Solar Quotes Pro. A solar advisor will review your message and respond within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider py-3 px-6 rounded-xl transition-all cursor-pointer shadow-sm hover:shadow-md"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm rounded-2xl flex items-center gap-2.5 shadow-xs">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span className="font-semibold">{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">
        <div>
          <label htmlFor="contact_name" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Full Name <span className="text-orange-500">*</span>
          </label>
          <input
            type="text"
            id="contact_name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.name.trim()) {
                setFieldErrors(prev => ({ ...prev, name: 'Full name is required' }));
              } else if (formData.name.trim().length < 2) {
                setFieldErrors(prev => ({ ...prev, name: 'Full name must be at least 2 characters' }));
              }
            }}
            className={`w-full px-4 py-3.5 rounded-2xl border-2 ${
              fieldErrors.name 
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15' 
                : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/15'
            } bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
            placeholder="Sarah Jenkins"
          />
          {fieldErrors.name && (
            <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{fieldErrors.name}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact_email" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Email Address <span className="text-orange-500">*</span>
          </label>
          <input
            type="email"
            id="contact_email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            onBlur={() => {
              if (!formData.email.trim()) {
                setFieldErrors(prev => ({ ...prev, email: 'Email address is required' }));
              } else if (!validateEmail(formData.email)) {
                setFieldErrors(prev => ({ ...prev, email: 'Please enter a valid email address (e.g. name@example.com.au)' }));
              }
            }}
            className={`w-full px-4 py-3.5 rounded-2xl border-2 ${
              fieldErrors.email 
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15' 
                : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/15'
            } bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
            placeholder="sarah@example.com.au"
          />
          {fieldErrors.email && (
            <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{fieldErrors.email}</span>
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">
        <div>
          <label htmlFor="contact_phone" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Phone Number (10 Digits)
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="phone"
            inputMode="numeric"
            value={formData.phone}
            onChange={handleChange}
            onBlur={() => {
              const digits = formData.phone.replace(/\D/g, '');
              if (digits.length > 0 && digits.length !== 10) {
                setFieldErrors(prev => ({ ...prev, phone: 'Phone number must be exactly 10 digits (e.g. 0400 123 456)' }));
              }
            }}
            maxLength={12}
            className={`w-full px-4 py-3.5 rounded-2xl border-2 ${
              fieldErrors.phone 
                ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15' 
                : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/15'
            } bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 placeholder:text-slate-400`}
            placeholder="0400 123 456"
          />
          {fieldErrors.phone && (
            <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{fieldErrors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact_subject" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Inquiry Subject
          </label>
          <select
            id="contact_subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-orange-500 bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 focus:ring-orange-500/15 cursor-pointer"
          >
            <option value="general">General Solar Inquiry</option>
            <option value="quote">Installer Matching Help</option>
            <option value="installer_network">Join Installer Network (CEC Pros)</option>
            <option value="feedback">Feedback & Support</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="contact_message" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
          Your Message <span className="text-orange-500">*</span>
        </label>
        <textarea
          id="contact_message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          onBlur={() => {
            if (!formData.message.trim()) {
              setFieldErrors(prev => ({ ...prev, message: 'Message cannot be empty' }));
            } else if (formData.message.trim().length < 5) {
              setFieldErrors(prev => ({ ...prev, message: 'Please provide at least 5 characters' }));
            }
          }}
          className={`w-full px-4 py-3.5 rounded-2xl border-2 ${
            fieldErrors.message 
              ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/15' 
              : 'border-slate-200 focus:border-orange-500 focus:ring-orange-500/15'
          } bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 resize-none placeholder:text-slate-400`}
          placeholder="Tell us about your property, energy requirements, or question..."
        />
        {fieldErrors.message && (
          <p className="text-xs text-rose-600 font-semibold mt-1.5 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>{fieldErrors.message}</span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-linear-to-r from-amber-400 via-orange-500 to-amber-500 hover:from-amber-300 hover:via-orange-400 hover:to-amber-400 text-slate-950 font-black text-base py-4 px-6 rounded-2xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="inline-flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
            Sending Message...
          </span>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
