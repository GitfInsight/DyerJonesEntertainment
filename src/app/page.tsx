'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  const handleImageError = (imageName: string) => {
    console.error(`Failed to load image: ${imageName}`);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
          <div className="absolute inset-0 bg-black/30">
            {/* <Image src="/logos/NoTextNoBG.png" alt="Dyer-Jones Entertainment Splash Art" fill className="object-cover" /> */}
            <Image
              src="/logos/blackbg.png"
              alt="Dyer-Jones Entertainment Splash Art"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              onError={() => handleImageError('/logos/blackbg.png')}
            />
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-6 sm:px-8 py-6 mb-8 mx-4 sm:mx-8 max-w-5xl inline-block">
            <h1 className="text-5xl md:text-9xl font-playfair font-bold mb-6 text-gray-200">
              Dyer-Jones Entertainment
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl font-bold mx-auto leading-relaxed text-gray-200">
              Bringing World-Class Talent to Houston&rsquo;s Doorstep
            </p>
          </div>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link
              href="/connect"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Event
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>

          </div>
        </div>
      </section>

      {/* Alternative Hero Section (Half-width with description) */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                From Intimate to Grand
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dyer-Jones Entertainment connects Houston&rsquo;s community with world-class artists through curated live performances. From intimate home concerts to corporate galas, we bring exceptional musical experiences directly to you&mdash;making world-class music accessible, personal, and unforgettable.
              </p>
              <Link
                href="/connect"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Plan Your Event
              </Link>
            </div>
            <div className="relative h-96 bg-gray-300 rounded-lg overflow-hidden">
              {/* Placeholder for hero image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <p className="text-center">
                  <Image
                    src="/content/eventphotos/groupatarchway.jpg"
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={() => handleImageError('/content/eventphotos/groupatarchway.jpg')}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-gray-900">
            Our Performance Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Private In-Home Concerts</h3>
              <p className="text-gray-600">Transform your living room into a world-class recital hall with intimate performances featuring opera singers, string quartets, and custom repertoire.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Corporate Experiences</h3>
              <p className="text-gray-600">Elevate your business events with curated performances that inspire teams and create memorable client experiences.</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 space-y-4">
              <h3 className="text-2xl font-playfair font-bold text-gray-900">Custom Events</h3>
              <p className="text-gray-600">From celebration grams to wine pairings to signature performances, we create bespoke musical experiences for any occasion.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors text-lg"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Brief About Snippet */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900">
            Our Unique Value
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We connect Houston&rsquo;s vibrant community with world-class artists&mdash;from opera singers and instrumentalists to dancers and theatrical performers&mdash;curating unforgettable experiences that celebrate the power of live performance.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Ready to Bring World-Class Music to Your Event?
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Whether you&rsquo;re seeking a one-of-a-kind recital in your home, a special performance at your corporate event, or a dynamic concert series for your community, let&rsquo;s create something unforgettable together.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/connect"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}