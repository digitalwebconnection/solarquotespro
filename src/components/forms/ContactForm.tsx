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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

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
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden">
      
      {errorMessage && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm rounded-2xl flex items-center gap-2.5 shadow-xs">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
          <span>{errorMessage}</span>
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
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-orange-500 bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 focus:ring-orange-500/15 placeholder:text-slate-400"
            placeholder="Sarah Jenkins"
          />
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
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-orange-500 bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 focus:ring-orange-500/15 placeholder:text-slate-400"
            placeholder="sarah@example.com.au"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-5">
        <div>
          <label htmlFor="contact_phone" className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="contact_phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-orange-500 bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 focus:ring-orange-500/15 placeholder:text-slate-400"
            placeholder="0400 000 000"
          />
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
          className="w-full px-4 py-3.5 rounded-2xl border-2 border-slate-200 focus:border-orange-500 bg-slate-50 focus:bg-white text-slate-900 font-semibold text-sm outline-none transition-all focus:ring-4 focus:ring-orange-500/15 resize-none placeholder:text-slate-400"
          placeholder="Tell us about your property, energy requirements, or question..."
        />
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
