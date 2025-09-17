'use client';

import { useState } from 'react';

export default function ConnectPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    eventDate: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you for your inquiry! We will be in touch within 24 hours to discuss your event.');
        setContactForm({
          name: '',
          email: '',
          phone: '',
          eventType: '',
          eventDate: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to send message. Please try again or contact us directly.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again, or contact us directly at sarahdyermezzo@gmail.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
            Let&rsquo;s Plan Your Event
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Ready to book or brainstorm? Let&rsquo;s talk about bringing world-class music to your event.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-center">
              Tell Us About Your Event
            </h2>

            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={contactForm.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={contactForm.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactForm.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type *
                  </label>
                  <select
                    id="eventType"
                    name="eventType"
                    required
                    value={contactForm.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                  >
                    <option value="">Select event type</option>
                    <option value="private-home">Private In-Home Concert</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="community">Community/Wellness Concert</option>
                    <option value="celebration-gram">Celebration Gram</option>
                    <option value="wine-pairing">Music & Wine Pairing</option>
                    <option value="elevated-karaoke">Elevated Karaoke</option>
                    <option value="signature-performance">Signature Performance</option>
                    <option value="custom">Custom Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={contactForm.eventDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your vision
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={contactForm.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent text-gray-900"
                  placeholder="Describe your event, venue, guest count, budget range, musical preferences, and any special requests..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
              </div>

              {submitMessage && (
                <div className={`mt-6 p-4 rounded-md ${
                  submitStatus === 'success'
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
      {/* Direct Contact Info */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Prefer to Call or Email?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We&rsquo;d love to hear from you directly to discuss your vision and answer any questions.
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a
              href="mailto:sarahdyermezzo@gmail.com"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Send Us an Email
            </a>
            <a
              href="tel:+14029266577"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors text-lg"
            >
              Give us a Call
            </a>
          </div>
        </div>
      </section>
      {/* Services Quick Reference */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Our Performance Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎤 Private In-Home Concerts</h3>
              <p className="text-gray-600 text-sm mb-4">Opera singer + pianist, string quartets, custom repertoire</p>
              <p className="text-gray-500 text-xs">Perfect for anniversaries, birthdays, intimate gatherings</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🏢 Corporate Experiences</h3>
              <p className="text-gray-600 text-sm mb-4">Lunchtime concerts, gala performances, team inspiration</p>
              <p className="text-gray-500 text-xs">Available for retreats, meetings, client events</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🧘🏻‍♀️ Community & Wellness</h3>
              <p className="text-gray-600 text-sm mb-4">Retirement homes, rehab centers, uplifting programs</p>
              <p className="text-gray-500 text-xs">One-time or recurring engagements available</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎁 Celebration Grams</h3>
              <p className="text-gray-600 text-sm mb-4">Pop-up performances for birthdays, hospitals, surprises</p>
              <p className="text-gray-500 text-xs">Show-stopping moments delivered anywhere</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🍷 Music & Wine Pairing</h3>
              <p className="text-gray-600 text-sm mb-4">Sensory journey pairing fine wines with live music</p>
              <p className="text-gray-500 text-xs">Intimate dinners to luxury client events</p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">🎹 Elevated Karaoke</h3>
              <p className="text-gray-600 text-sm mb-4">Live pianist accompaniment, professional singers</p>
              <p className="text-gray-500 text-xs">Turn your piano into the star of the evening</p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}