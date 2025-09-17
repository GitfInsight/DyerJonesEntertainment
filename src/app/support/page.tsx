import Link from 'next/link';
// import Image from 'next/image';

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold mb-6">
            Support the New Wave of Art
          </h1>
          <p className="text-xl leading-relaxed mb-8">
            Your contribution helps us break boundaries, challenge conventions, and create transformative experiences that bring our community together through the power of live performance art.
          </p>
          <p className="text-lg text-gray-300">
            Every donation, no matter the size, makes a direct impact on our ability to create accessible, innovative art for all.
          </p>
          <p className="text-sm text-gray-300">
            ConTempo Studios is a 501(c)3 designated institution, so donations are tax deductible.
          </p>
        </div>
      </section>

      {/* Main Appeal */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Why Your Support Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accessibility</h3>
              <p className="text-gray-600">
                We offer many free performances and work to remove barriers so everyone can experience transformative art.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Innovation</h3>
              <p className="text-gray-600">
                Your support funds experimental work that pushes the boundaries of what performance art can be.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Community</h3>
              <p className="text-gray-600">
                We invest in local artists and create opportunities for collaboration within Houston&apos;s creative community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Ways to Support 
          </h2>
          <h3 className="text-l font-playfair font-bold text-center text-gray-900 mb-12">
          Payment Processing still under construction as of June 10, 2025 - expected to be available via web starting July 2025. 
          In the meantime, please contact us directly to donate.
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Friend of the Studio */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Friend of the Studio
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$50+</div>
              <p className="text-gray-600 mb-6">Annually or one-time donation</p>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Recognition in performance programs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Quarterly newsletter with behind-the-scenes content</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Early access to ticket sales</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Support Yearly
              </button>
            </div>

            {/* Patron */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center border-2 border-gray-900 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Patron
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$500+</div>
              <p className="text-gray-600 mb-6">Annually or One-Time Donation</p>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">All Friend benefits</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Invitation to annual patron reception</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Complimentary tickets to select performances</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Behind-the-scenes studio visits</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Become a Patron
              </button>
            </div>

            {/* Sponsor */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Sponsor
              </h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">$1000+</div>
              <p className="text-gray-600 mb-6">Annual commitment</p>
              
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">All Patron benefits</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Logo recognition in programs and website</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">VIP seating at all performances</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Private artistic director meet & greet</span>
                </li>
              </ul>
              
              <button className="w-full bg-gray-900 text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
                Sponsor Us
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Prefer a custom sponsorship package or have questions? 
            </p>
            <Link
              href="/connect"
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Other Ways to Support */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Other Ways to Help
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6">
                Join our team of dedicated volunteers who help make each performance possible. From ushering to technical support, there are many ways to get involved.
              </p>
              <Link
                href="https://forms.gle/5S2iQBxGemFQtJf98"
                className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Volunteer Sign-Up
              </Link>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600 mb-6">
                Follow us on social media, share our posts, and tell your friends about ConTempo Studios. Word-of-mouth is invaluable for growing our community.
              </p>
              <div className="space-x-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61556104605076"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Link>
                <Link
                  href="https://www.youtube.com/@Contempo_Studios"
                  className="bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            What People Are Saying
          </h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-gray-600 italic mb-4">
                &quot;I absolutely loved the ConTempo yoga event! It was such a refreshing way to ease into a Saturday, and the combination of beautiful music with mindful movement offered a new perspective on the connection between art, the body, and the natural world. It left me feeling inspired to explore how music can be woven into everyday experiences in more intentional ways.&quot;
              </p>
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <Image src="/content/people/keri.jpg" alt="Keri Wolfe" fill className="object-cover object-[center_-0px] scale-100" />
                </div> */}
                <div>
                  <p className="font-semibold text-gray-900">Keri Wolfe</p>
                  <p className="text-gray-600 text-sm">Houston Resident</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-gray-600 italic mb-4">
                &quot;ConTempo is the future of performing arts. They create a space in which people from all backgrounds and all level of arts exposure feel safe to listen, respond, and become. The innovative and exciting use of multiple disciplines engages the audience in new and fresh ways, and yet it is all performed with a Classical elegance to impress the most discerning arts goer. Patrons at my venue have expressed delight and have been deeply moved - often within the same performance. ConTempo os wjat the first-time arts patron and the seasoned patron each need - performed seemingly effortlessly by the talented and joyful artists who are welcoming to all who come.&quot;
              </p>
              <div className="flex items-center">
                {/* <div className="w-12 h-12 bg-gray-200 rounded-full mr-4">
                  <Image src="/content/people/eddie.jpg" alt="Eddie Crowell" fill className="object-cover object-[center_-0px] scale-100" />
                </div> */}
                <div>
                  <p className="font-semibold text-gray-900">Edward Crowell</p>
                  <p className="text-gray-600 text-sm">Executive Director and Director of Music</p>
                  <p className="text-gray-600 text-sm">Heights Church, Houston</p>
                </div>
              </div>
            </div>
            
            {/* <div className="bg-white rounded-lg p-8 shadow-md">
              <p className="text-lg text-gray-600 italic mb-4">
                &quot;I&apos;ve been supporting ConTempo Studios since their first performance. Watching them grow and continue to challenge artistic boundaries has been incredibly rewarding.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-gray-900">Janet Williams</p>
                  <p className="text-gray-600 text-sm">Patron & Community Member</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Ready to Join Our Movement?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Whether you contribute $5 or $500, volunteer your time, or simply share our work with others, you become part of something bigger—a community dedicated to pushing the boundaries of what art can be.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Donate Now
            </button>
            <Link
              href="/connect"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 