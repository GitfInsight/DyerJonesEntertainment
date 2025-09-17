import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
            About ConTempo Studios
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We are storytellers, dreamers, and boundary-breakers creating art designed to be accessible to all demographics.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are an interdisciplinary arts organization based in Houston creating high-caliber, boundary-breaking performances that fuse live music with diverse artistic disciplines. In a world
                overflowing with entertainment options, we believe live art must evolve to remain meaningful
                and magnetic. Through collaborations with local artists—like yoga with live music, gallery
                concerts, and circus cabarets—we design experiences that invite audiences who may otherwise find the arts inaccessible or out-of-reach to think, feel, express, and connect with the art.
                Our mission is to make art accessible, inclusive, and engaging while giving artists a platform to
                experiment, grow, and step outside the confines of their traditional roles. We aim to unite
                communities and creatives through performances that are as surprising as they are soulful.
              </p>
              {/* <p className="text-lg text-gray-600 leading-relaxed">
                ConTempo Studios exists to create interdisciplinary, accessible, and transformative live performance art that challenges conventional boundaries and brings diverse communities together. We believe that art should be a bridge, not a barrier, and that every voice deserves to be heard and celebrated.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through innovative collaborations between artists of different disciplines, we craft experiences that speak to the human condition while pushing the envelope of what performance art can be. Our commitment to accessibility ensures that financial limitations never prevent someone from experiencing the power of live art.
              </p> */}
            </div>
            <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <Image src="/content/eventphotos/groupwithbeckysoria.jpg" alt="ConTempo Partnering with Visual Artist Becky Soria" fill className="object-cover" />
                <p className="text-center">
                  Mission Photo<br />
                  <span className="text-sm">Team in Creative Process</span>
                </p>
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
                <Image src="/content/eventphotos/musicandmeditations.jpg" alt="ConTempo Studios Logo" fill className="object-cover" />
                <p className="text-center">
                  Vision Photo<br />
                  <span className="text-sm">Performance Moment</span>
                </p>
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
              We envision a world where live art is a vibrant, essential part of everyday life—accessible to all,
reflective of diverse voices, and deeply rooted in community. We believe in performances that
awaken curiosity, dissolve boundaries between disciplines and people, and inspire both artists
and audiences to imagine new possibilities. By redefining how classical and interdisciplinary art
is shared, we aim to create a cultural space where connection, creativity, and joy are limitless.
              </p>
              {/* <p className="text-lg text-gray-600 leading-relaxed">
                We envision a Houston where interdisciplinary art is not just accepted but celebrated as an essential part of our cultural landscape. Our goal is to become a leading force in the evolution of performance art, inspiring other organizations to embrace bold, inclusive, and accessible approaches to creativity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In the next five years, we aim to establish ConTempo Studios as a cornerstone institution that nurtures emerging artists, presents groundbreaking work, and serves as a model for how art organizations can truly serve their entire community.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Interdisciplinary</h3>
              <p className="text-gray-600">
                We break down silos between art forms, believing that the most powerful work emerges when different creative disciplines converge and collaborate.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Accessible</h3>
              <p className="text-gray-600">
                Art should be for everyone. We remove barriers— cultural, physical, and financial—to ensure our work reaches and resonates with all members of our community.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Live</h3>
              <p className="text-gray-600">
                There&apos;s magic in shared presence. We create experiences that can only exist in the moment, fostering genuine human connection through live performances and events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Meet Our Executive Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="text-center space-y-4">
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image src="/content/people/sarahdyer.png" alt="Sarah Dyer-Jones" fill className="object-cover object-top " />
                </div>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Sarah Dyer-Jones</h2>
              <h3 className="text-xl font-semibold text-gray-900">Artistic Director</h3>
              <p className="text-gray-600">Leading creative vision and artistic excellence</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <Image src="/content/people/juliussanchez.png" alt="Julius Sanchez" fill className="object-cover object-[center_-0px] scale-150" />
                </div>
              </div>
              <h2 className="text-2xl font-playfair font-bold text-gray-900">Julius Sanchez</h2>
              <h3 className="text-xl font-semibold text-gray-900">Executive Director</h3>
              <p className="text-gray-600">Operations and Production</p>
            </div>
          </div>
          
          {/* Board of Directors Section */}
          {/* <div className="mt-16">
            <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
              Board of Directors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center space-y-4">
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p className="text-sm">Board Member Photo</p>
                  </div>
                </div>
                <h2 className="text-2xl font-playfair font-bold text-gray-900">Board Member Name</h2>
                <h3 className="text-xl font-semibold text-gray-900">Board Position</h3>
                <p className="text-gray-600">Brief description or background</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p className="text-sm">Board Member Photo</p>
                  </div>
                </div>
                <h2 className="text-2xl font-playfair font-bold text-gray-900">Board Member Name</h2>
                <h3 className="text-xl font-semibold text-gray-900">Board Position</h3>
                <p className="text-gray-600">Brief description or background</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <p className="text-sm">Board Member Photo</p>
                  </div>
                </div>
                <h2 className="text-2xl font-playfair font-bold text-gray-900">Dylan Dyer-Jones</h2>
                <h3 className="text-xl font-semibold text-gray-900">Board Member, Treasurer</h3>
                <p className="text-gray-600">Coming from a background in corporate finance and tech entrepreneurship, Dylan is a passionate advocate for the arts and believes in the power of live performance to connect people and inspire creativity.</p>
              </div>
            </div>
          </div> */}
          
          {/* Team Members Section */}
          <div className="mt-16">
            <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
              The ConTempo Support Team
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <Image src="/content/people/RemmingtonSemmel.JPG" alt="Remmington Semmel" fill className="object-cover object-[center_-0px] scale-100" />
                  </div>
                </div>
                <h2 className="text-2xl font-playfair font-bold text-gray-900">Remmington Semmel</h2>
                <h3 className="text-xl font-semibold text-gray-900">Media Director</h3>
                <p className="text-gray-600">Photography and Videography</p>
              </div>
              <div className="text-center space-y-4">
                <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                  {/* Mobile version - Image component */}
                  <Image 
                    src="/content/people/marinaelizondo.JPEG" 
                    alt="Marina Elizondo-Collado" 
                    fill 
                    className="object-cover object-[center_-0px] scale-100 md:hidden" 
                  />
                  {/* Desktop version - Background div */}
                  <div 
                    className="hidden md:block absolute inset-0 bg-cover bg-[center_-60px]" 
                    style={{
                      backgroundImage: "url('/content/people/marinaelizondo.JPEG')",
                      backgroundSize: "75%",
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                </div> 
                <h2 className="text-2xl font-playfair font-bold text-gray-900">Marina Elizondo-Collado</h2>
                <h3 className="text-xl font-semibold text-gray-900">Marketing Manager</h3>
                <p className="text-gray-600">Marketing and Social Media</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process Section */}
      {/* <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-8">
            Our Creative Process
          </h2>
          <div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              <p className="text-center">
                Creative Process Photo<br />
                <span className="text-sm">Behind-the-Scenes Collaboration</span>
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            Every ConTempo Studios production begins with conversation—between artists, between disciplines, and between our work and the community it serves. We believe that the most authentic art emerges from genuine collaboration and deep listening.
          </p>
        </div>
      </section> */}
    </div>
  );
} 