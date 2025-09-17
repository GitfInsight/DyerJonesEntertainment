'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function EventsPage() {
  const [visibleEvents, setVisibleEvents] = useState(3);

  const pastEvents = [
    {
      title: "Community Art Night",
      date: "May 25, 2025",
      description: "An opportunity for the full Dyer-Jones Entertainment community to come together and share their art, what they've been working on, and maybe learn a thing or two about a new field like crochet or finance",
      image: "/content/fliers/commyartnight.png",
      galleryLink: "/media#community-art-night"
    },
    {
      title: "How the Viola Gained its Voice",
      date: "May 23rd, 2025",
      description: "The viola usually plays second fiddle, but this time it's the star of the show. Join us for a special performance of the viola to understand the instrument's unique voice.",
      image: "/content/fliers/violavoices.png",
      galleryLink: "/media#viola-voice"
    },

    {
      title: "Songs of Spring",
      date: "April 27, 2025",
      description: "A set of works by local composer Mark Buller, joined by Julie Hoetzel as a vocalist and George Heathco on the Guitar",
      image: "/content/fliers/songsofspring.png",
      galleryLink: "/media#songs-of-spring"
    },

    {
      title: "Music Meets Art",
      date: "March 23, 2025",
      description: "A special collaboration between Dyer-Jones Entertainment and Becky Soria, a performance exploring themes of womanhood and loss, attempting to capture the essence of the visual art through music",
      image: "/content/fliers/mar2025gallery.png",
      galleryLink: "/media#music-meditations"
    },
    {
        title: "Movement and Meditation",
        date: "March 1, 2025",
        description: "Live music and a guided meditation to help you connect with your body and mind. Do some yoga while experiencing a guided meditation and marimba music.",
        image: "/content/fliers/mar2025movementmeditation.png",
        galleryLink: "/media#music-meditations"
      },
      {
        title: "Outdoor Holiday Concert",
        date: "December 21, 2024",
        description: "A holiday concert featuring a set list of holiday favorites, including traditional carols, jazz standards, and Dyer-Jones Entertainmentrary classics, in addition to caroling along, the audience will be invited to explore the interesting arrangement of percussion instruments.",
        image: "/content/fliers/holidayconcert.png",
        galleryLink: "/media#music-meditations"
      },
      {
        title: "Gallery Concert",
        date: "December 20, 2024",
        description: "A fusion of opera, viola, and flute music in a set list created to meld with the current exhibition at the Archway Gallery.",
        image: "/content/fliers/dec2024gallery.png",
        galleryLink: "/media#music-meditations"
      },
      {
        title: "Cabaret",
        date: "June 20, 2024",
        description: "Our debut performance, blending circus, opera classics, jazz music, and interactive installation to capture the energy and rhythm of city life.",
        image: "/content/fliers/cabaret.jpg",
        galleryLink: "/media#music-meditations"
      },
  ];

  const showMoreEvents = () => {
    setVisibleEvents(prev => Math.min(prev + 3, pastEvents.length));
  };

  const displayedEvents = pastEvents.slice(0, visibleEvents);
  const hasMoreEvents = visibleEvents < pastEvents.length;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
            Events & Performances
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Experience the magic of live interdisciplinary performance art.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Upcoming Events
          </h2>
          
          {/* Featured Event - Carretera */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Event Image */}
              <div className="relative h-96 lg:h-auto bg-gray-200">
                <Image src="/content/fliers/carretera.png" alt="Carretera" fill className="object-contain" />
                {/* <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <div className="text-center">
                    <p className="text-2xl font-bold mb-2">Carretera</p>
                    <p className="text-lg">June 27 & 28</p>
                    <p className="text-sm mt-4">Event Flyer</p>
                  </div>
                </div> */}
              </div>
              
              {/* Event Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured Performance
                  </span>
                </div>
                
                <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                  La Carretera
                </h3>
                
                <div className="space-y-3 mb-6">
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Dates:</span>
                    June 27 & 28, 2025
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Time:</span>
                    7:30 PM (both nights)
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Location:</span>
                    Lambert Hall, 1703 Heights Blvd.
                  </p>
                  <p className="flex items-center text-gray-600">
                    <span className="font-semibold mr-2">Duration:</span>
                    Approximately 90 minute including a brief intermission
                  </p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  An interdisciplinary performance exploring themes of journey and transformation through movement, music, and visual storytelling. <em>Carretera</em> weaves together Dyer-Jones Entertainmentrary dance, live music, and multimedia elements to create an immersive experience that examines our shared paths through life&apos;s transitions.
                  <br></br><br></br>
                  Drinks included in ticket price for those with valid ID.
                </p>
                
                <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
                  <Link 
                    href="https://www.simpletix.com/e/la-carretera-a-surreal-cabaret-experience-tickets-220811"
                    className="w-full sm:w-auto bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Get Tickets - $35
                  </Link>
                  {/* <button className="w-full sm:w-auto border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                    Learn More
                  </button> */}
                </div>
                
                <p className="text-sm text-gray-500 mt-4">
                  * Discounted tickets available for students and children
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional Upcoming Events */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">
              More performances coming soon!
            </p>
            <Link
              href="/connect#newsletter"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Join Our Mailing List for Updates
            </Link>
          </div>
        </div>
      </section>

      {/* Past Events Archive */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Past Performances
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Link href={event.image} className="block">
                  <div className="relative h-48 bg-gray-200 overflow-hidden">
                    <Image 
                      src={event.image} 
                      alt={`${event.title} performance`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{event.date}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>
                  {/* <Link 
                    href={event.galleryLink}
                    className="text-gray-900 font-semibold hover:text-gray-700 transition-colors"
                  >
                    View Gallery →
                  </Link> */}
                </div>
              </div>
            ))}
          </div>

          {hasMoreEvents && (
            <div className="text-center mt-8">
              <button
                onClick={showMoreEvents}
                className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Show More Events
              </button>
            </div>
          )}

          {/* <div className="text-center mt-12">
            <Link
              href="/media"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              View Full Media Gallery
            </Link>
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Stay Connected
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Be the first to know about upcoming performances, behind-the-scenes content, and special events.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/connect#newsletter"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              Join Our Newsletter
            </Link>
            <Link
              href="/connect"
              className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 