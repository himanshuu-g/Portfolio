import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Sparkles, MapPin, Clock, Loader2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: '7b491326-3f78-4364-8466-c18ca8714cc0',
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact from ${formData.name} [${formData.projectType}]`,
          message: formData.message,
          from_name: `${formData.name} via Himanshu Portfolio`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Full Stack Web App',
          message: '',
        });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.8 },
          colors: ['#111111', '#52525b', '#a1a1aa', '#38bdf8'],
        });
      } else {
        setErrorMessage(result.message || 'Unable to deliver message. Please try again or email directly.');
      }
    } catch {
      setErrorMessage('Network connection error. Please try again or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-zinc-200/80">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Direct Inquiries & Bio Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="px-3.5 py-1 rounded-full bg-zinc-200/80 text-zinc-700 text-xs font-semibold tracking-wide uppercase inline-flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>Get in touch</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 leading-tight">
            Let's create something <span className="font-serif italic font-normal text-zinc-800">extraordinary</span> together.
          </h2>

          <p className="text-zinc-600 text-base leading-relaxed">
            Whether you have an upcoming project, architecture questions, or a full-time engineering opportunity, my inbox is always open.
          </p>

          {/* Quick Contact Card with Copy Email */}
          <div className="p-6 bg-white rounded-3xl border border-zinc-200/90 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-zinc-500">Direct Email</span>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-zinc-950 transition-colors"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy to clipboard</span>
                  </>
                )}
              </button>
            </div>

            <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-900 break-all">
              {portfolioData.profile.email}
            </div>

            {portfolioData.profile.phone && (
              <div className="text-sm font-mono text-zinc-600">
                📞 {portfolioData.profile.phone}
              </div>
            )}

            <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={13} />
                {portfolioData.profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                Response within 24h
              </span>
            </div>
          </div>

          {/* Availability Card */}
          <div className="p-4 rounded-2xl bg-zinc-100/80 border border-zinc-200/70 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div className="text-xs text-zinc-700">
              <span className="font-semibold block">Currently Available</span>
              {portfolioData.profile.status.text}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Message Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 bg-white rounded-3xl border border-zinc-200/90 shadow-lg">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900">Message Delivered!</h3>
                <p className="text-zinc-600 text-sm max-w-md mx-auto">
                  Thank you! Your message was sent directly to Himanshu's Gmail inbox (<span className="font-semibold text-zinc-900">{portfolioData.profile.email}</span>). I'll reply to your email shortly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-zinc-900 text-white rounded-full text-xs font-semibold hover:bg-black transition-colors shadow-md"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMessage && (
                  <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle size={16} className="text-rose-600 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-zinc-600 tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 text-sm transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase text-zinc-600 tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Project Category */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-zinc-600 tracking-wider">
                    Inquiry Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 text-sm transition-all text-zinc-800"
                  >
                    <option>Full Stack Web App</option>
                    <option>Frontend & UI Engineering</option>
                    <option>AI / Machine Learning Project</option>
                    <option>Full-Time Software Engineering Role</option>
                    <option>Technical Consultation / Freelance</option>
                  </select>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase text-zinc-600 tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-zinc-50 border border-zinc-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-zinc-900/10 focus:border-zinc-900 text-sm transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-zinc-900 hover:bg-black disabled:bg-zinc-700 text-white rounded-full font-semibold text-sm shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending directly to Himanshu...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
