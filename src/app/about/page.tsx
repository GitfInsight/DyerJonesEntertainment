import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
            About Dyer-Jones Entertainment
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Bringing world-class talent to Houston&rsquo;s doorstep through curated, intimate, and unforgettable musical experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                About Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dyer-Jones Entertainment was born from a passion for sharing extraordinary music in the most meaningful and intimate ways. Founded by internationally acclaimed classical singer Sarah Dyer-Jones, our mission is to connect Houston&rsquo;s vibrant community with world-class artists through curated live performances.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We coordinate everything from solo singers and intimate chamber groups to full orchestras or anything in between. Whether you need a string quartet for your wedding, an opera singer for a corporate gala, a jazz ensemble for your anniversary, or full event planning with musical entertainment, we handle every detail.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our network includes classically trained vocalists, instrumentalists of every type, dancers, theatrical performers, and event coordination specialists. No matter the size or style of your vision, we make world-class music accessible, personal, and unforgettable.
              </p>
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <Image src="/content/eventphotos/groupwithbeckysoria.jpg" alt="Dyer-Jones Entertainment Team" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden order-2 lg:order-1">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <Image src="/content/eventphotos/musicandmeditations.jpg" alt="Performance Moment" fill className="object-cover" />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                Why Choose Us?
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Global talent, local charm</h3>
                  <p className="text-lg text-gray-600">Our artists have graced stages across the world and are now bringing that excellence to Houston.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailored experiences</h3>
                  <p className="text-lg text-gray-600">Every performance is curated with care, to suit the event, the space, and the audience.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal connection</h3>
                  <p className="text-lg text-gray-600">Music is personal, and so are we. You&rsquo;ll feel it from the first note.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">🎤 Private In-Home Concerts</h3>
              <p className="text-gray-600 mb-4">
                Elegant. Intimate. Unforgettable. Turn your living room into a world-class recital hall with performances featuring opera singers, string quartets, and custom repertoire designed with you.
              </p>
              <p className="text-gray-600 text-sm">Perfect for anniversaries, birthdays, cultural gatherings, or just a magical evening with friends.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">🏢 Corporate Experiences</h3>
              <p className="text-gray-600 mb-4">
                Boost morale, celebrate milestones, or simply bring beauty into the workday. From lunchtime mini-concerts to gala performances, we tailor experiences to inspire your team.
              </p>
              <p className="text-gray-600 text-sm">Available for retreats, annual meetings, customer areas, and special celebrations.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">🧘🏻‍♀️ Community & Wellness Concerts</h3>
              <p className="text-gray-600 mb-4">
                Serving retirement homes, rehab centers, and community groups with performances designed to uplift and engage through opera favorites, musical theater, and mini-productions.
              </p>
              <p className="text-gray-600 text-sm">Available as one-time events or recurring weekly/monthly engagements.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">🌟 Custom Curated Events</h3>
              <p className="text-gray-600 mb-4">
                If you can dream it, we can stage it. From celebration grams to wine pairings, elevated karaoke to signature performances—we specialize in tailor-made musical experiences.
              </p>
              <p className="text-gray-600 text-sm">Perfect for private events, festivals, and cultural institutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Meet Our Founder
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
                <Image src="/content/people/sarahdyer.png" alt="Sarah Dyer-Jones" fill className="object-cover object-top" />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-gray-900">Sarah Dyer-Jones</h3>
                  <p className="text-xl text-gray-600 mb-4">Founder & Artistic Director</p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  An internationally acclaimed classical singer, Sarah founded Dyer-Jones Entertainment with a vision to make world-class music accessible and personal. Her passion for connecting artists with audiences in intimate settings drives every performance we curate.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With her network of globally trained performers and commitment to excellence, Sarah ensures that every Dyer-Jones Entertainment experience is not just a performance, but a moment that lingers in the heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8">
            Let&rsquo;s Bring Your Event to Life
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Whether you&rsquo;re looking for elegance, energy, or emotional resonance, Dyer-Jones Entertainment is here to deliver unforgettable performances, wherever you are in Houston.
          </p>
          <Link
            href="/connect"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Start Planning Your Event
          </Link>
        </div>
      </section>
    </div>
  );
}