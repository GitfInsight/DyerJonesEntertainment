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
              Interdisciplinary.&nbsp;&nbsp;&nbsp;Accessible.&nbsp;&nbsp;&nbsp;Live Performances.
            </p>
          </div>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <Link
              href="/events"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              View Events
            </Link>
            <Link
              href="/connect#newsletter"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Mailing List
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
                Art Should Be For Everyone
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dyer-Jones Entertainment is an Interdisciplinary Arts Organization focused on providing accessible art and live performances to audiences across Houston. Sign up for our mailing list to keep up with upcoming events here!
              </p>
              <Link
                href="/connect#newsletter"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Join Our Mailing List
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

      {/* Next Up Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center mb-12 text-gray-900">
            Coming to a stage near you
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for event flyer */}
              <Image 
                src="/content/fliers/carretera.png" 
                alt="A Surreal Cabaret Experience" 
                width={450} 
                height={600} 
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                onError={() => handleImageError('/content/fliers/carretera.png')}
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-playfair font-bold text-gray-900">
                La Carretera
              </h3>
              <h4 className="text-xl font-inter text-gray-900">
                A Surreal Cabaret Experience
              </h4>
              <p className="text-xl text-gray-600">
                June 27 & 28
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
              La Carretera is a vibrant, heartwarming cabaret-style journey across Europe, where a young performer and a wandering traveler encounter dazzling circus artists, dancers, and musicians. Along the way, they form an eccentric troupe of friends who join their quest for love and meaning. From the streets of France to the rhythms of Spain, this magical show blends breathtaking performances with soul-stirring moments.

              <br></br>
              <br></br>
Come for the spectacle, stay for the connection - snacks, wine, and unforgettable memories included.






              </p>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                <Link
                  href="/events"
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  href="/events#tickets"
                  className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors"
                >
                  Get Tickets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Snippet */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold mb-6 text-gray-900">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We believe in breaking down barriers between art forms and audiences, creating immersive experiences that challenge, inspire, and unite our community through the power of live performance.
          </p>
          <Link
            href="/about"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
          >
            Read Our Full Story
          </Link>
        </div>
      </section>

      {/* Support Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Support the new wave of art
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Your support helps us continue creating accessible, boundary-pushing performances that bring our community together. Every contribution makes a difference in bringing art to life.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/support"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Donate Now
            </Link>
            <Link
              href="/support#volunteer"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
