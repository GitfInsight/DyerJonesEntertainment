'use client';

import { useState } from 'react';

export default function ConnectPage() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setNewsletterEmail('');
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again.');
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
            Connect With Us
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Let&apos;s start a conversation about art, collaboration, and community.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-3xl font-playfair font-bold text-gray-900">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">General Inquiries</h3>
                  <p className="text-gray-600 mb-4">Dyer-Jones Entertainmentartshtx@gmail.com</p>
                  <a
                    href="mailto:Dyer-Jones Entertainmentartshtx@gmail.com"
                    className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors text-lg"
                  >
                    Send Us an Email
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Our Journey</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/Dyer-Jones Entertainmentstudios_htx/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556104605076"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@Dyer-Jones Entertainment_Studios"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-8">
              <h2 className="text-3xl font-playfair font-bold mb-6">
                Stay in the Loop
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                Join our mailing list to be the first to know about upcoming performances, behind-the-scenes content, and special events.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="mb-8">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                    className="flex-1 px-4 py-3 rounded-md bg-gray-50 text-gray-900 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </div>
                
                {submitMessage && (
                  <div className={`mt-4 p-3 rounded-md ${
                    submitStatus === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
              
              <p className="text-sm text-gray-300 mb-6">
                We respect your privacy. Unsubscribe at any time.
              </p>
              
              {/* <div className="p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">
                  <strong>Powered by Beehiiv Newsletter Platform</strong>
                </p>
                <p className="text-xs text-gray-400">
                  Our newsletter is managed through Beehiiv, a professional newsletter platform that ensures reliable delivery and easy management of your subscription preferences.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Collaboration Opportunities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Artists & Performers</h3>
              <p className="text-gray-600 mb-6">
                Are you a dancer, musician, visual artist, performer, or any other type of artist interested in interdisciplinary collaboration? We&apos;re always looking for passionate artists to join our creative community.
              </p>
              <a
                href="mailto:Dyer-Jones Entertainmentartshtx@gmail.com"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Get in Touch
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Venues & Partners</h3>
              <p className="text-gray-600 mb-6">
                Interested in hosting a Dyer-Jones Entertainment performance or partnering with us on a community event? Let&apos;s explore how we can work together to bring art to new audiences.
              </p>
              <a
                href="mailto:Dyer-Jones Entertainmentartshtx@gmail.com"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                How can I volunteer with Dyer-Jones Entertainment?
              </h3>
              <p className="text-gray-600">
                We welcome volunteers for various roles including ushering, technical support, and event assistance. Contact us at Dyer-Jones Entertainmentartshtx@gmail.com to learn about current opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do you offer educational workshops or classes?
              </h3>
              <p className="text-gray-600">
                While most of our offerings are performances, we occasionally offer community workshops and artist talks. We are always looking for ways to serve our community, including artists. We have previously held some educational sessions regarding finances and photo shoots for artists. We look forward to hosting more educational events in the future for all parts of our audience. Subscribe to our newsletter to stay updated on educational opportunities.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Can I request Dyer-Jones Entertainment for a private event?
              </h3>
              <p className="text-gray-600">
                Part of Dyer-Jones Entertainment&apos;s mission is to create opportunities for artists to perform in a variety of settings. For private events, collaborations, or special performances, please reach out to us with details about your event, timeline, and budget. We&apos;ll work with you to create something unique.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are your performances accessible?
              </h3>
              <p className="text-gray-600">
                Accessibility is core to our mission. Whether you have never seen live art before, or have historically found live shows challenging due to a disability or neurodivergence, Dyer-Jones Entertainment is dedicated to making our work accessible and enjoyable for everyone. If you have any specific accessibility needs or concerns, please reach out to us and we will do our best to ensure you are properly accommodated.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 