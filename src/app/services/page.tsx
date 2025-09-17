import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
            Our Packages
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Here&rsquo;s how you can bring exceptional live performance into your space, your event, or your community.
          </p>

          {/* Quick Navigation */}
          <div className="bg-white rounded-lg p-6 shadow-sm inline-block">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Jump to Package:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <a href="#private-concerts" className="bg-blue-50 hover:bg-blue-100 text-blue-700 hover:text-blue-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-blue-200 hover:border-blue-300">
                <div className="text-lg mb-1">🎤</div>
                <div className="font-medium">Private Concerts</div>
              </a>
              <a href="#corporate" className="bg-green-50 hover:bg-green-100 text-green-700 hover:text-green-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-green-200 hover:border-green-300">
                <div className="text-lg mb-1">🏢</div>
                <div className="font-medium">Corporate</div>
              </a>
              <a href="#community" className="bg-purple-50 hover:bg-purple-100 text-purple-700 hover:text-purple-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-purple-200 hover:border-purple-300">
                <div className="text-lg mb-1">👵🏼</div>
                <div className="font-medium">Community</div>
              </a>
              <a href="#celebration-gram" className="bg-yellow-50 hover:bg-yellow-100 text-yellow-700 hover:text-yellow-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-yellow-200 hover:border-yellow-300">
                <div className="text-lg mb-1">🎁</div>
                <div className="font-medium">Celebration Gram</div>
              </a>
              <a href="#wine-pairing" className="bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-red-200 hover:border-red-300">
                <div className="text-lg mb-1">🍷</div>
                <div className="font-medium">Wine Pairing</div>
              </a>
              <a href="#karaoke" className="bg-teal-50 hover:bg-teal-100 text-teal-700 hover:text-teal-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-teal-200 hover:border-teal-300">
                <div className="text-lg mb-1">🎹</div>
                <div className="font-medium">Karaoke</div>
              </a>
              <a href="#signature" className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 hover:text-indigo-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-indigo-200 hover:border-indigo-300">
                <div className="text-lg mb-1">🎼</div>
                <div className="font-medium">Signature</div>
              </a>
              <a href="#custom" className="bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 px-4 py-3 rounded-xl text-center transition-all duration-200 hover:shadow-md border border-gray-200 hover:border-gray-300">
                <div className="text-lg mb-1">🌟</div>
                <div className="font-medium">Custom</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Private In-Home Concerts */}
      <section id="private-concerts" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🎤 Private In-Home Concerts
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Elegant. Intimate. Unforgettable.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Turn your living room into a world-class recital hall. We collaborate with you to craft a performance that reflects your taste, your favorite composers, or even your cultural background.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Options include:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">•</span>Opera singer + pianist</li>
                    <li className="flex items-center"><span className="mr-3">•</span>String quartet or trio</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Voice and instrumental duos</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Custom repertoire designed with you</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Perfect for:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center"><span className="mr-3">✨</span>Anniversaries</li>
                  <li className="flex items-center"><span className="mr-3">🎂</span>Birthdays</li>
                  <li className="flex items-center"><span className="mr-3">🌍</span>Cultural gatherings</li>
                  <li className="flex items-center"><span className="mr-3">🍷</span>Magical evenings with friends</li>
                </ul>
                <div className="border-t border-gray-200 pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Why Choose In-Home?</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Experience the intimacy of your own space transformed into a concert venue. No travel, no crowds—just you, your guests, and world-class music in the comfort of your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Experiences */}
      <section id="corporate" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🏢 Corporate Experiences
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Boost morale, celebrate milestones, or simply bring beauty into the workday.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Let live performance inspire your team. Whether you&rsquo;re hosting a retreat, celebrating a company achievement, or just need a break in the day&mdash;our performances are tailored to the moment.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Offerings include:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">•</span>Lunchtime mini-concerts</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Classical, jazz, or contemporary sets</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Guided relaxation performances with calming music</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Thematic performances for annual meetings, galas, or celebrations</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Liven up your customer waiting area (make whole space feel more luxurious)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Ideal for:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center"><span className="mr-3">🏢</span>Company retreats</li>
                  <li className="flex items-center"><span className="mr-3">🎉</span>Achievement celebrations</li>
                  <li className="flex items-center"><span className="mr-3">📊</span>Annual meetings</li>
                  <li className="flex items-center"><span className="mr-3">✨</span>Client appreciation events</li>
                  <li className="flex items-center"><span className="mr-3">🏆</span>Award ceremonies</li>
                </ul>
                <div className="border-t border-gray-200 pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Corporate Benefits</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Live music creates memorable moments that foster team connection, enhance company culture, and leave lasting impressions on clients and employees alike.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Wellness Concerts */}
      <section id="community" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                👵🏼 Community & Wellness Concerts
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Serving retirement homes, rehab centers, and community groups.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bring joy, nostalgia, and connection through music. Our artists perform with warmth and empathy, offering programs designed to uplift and engage.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Programming could include:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">•</span>Opera favorites and classic songs</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Musical theater medleys</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Piano solos or duets</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Fully-staged mini-productions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Available as:</h4>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li className="flex items-center"><span className="mr-3">📅</span>One-time events</li>
                  <li className="flex items-center"><span className="mr-3">🔄</span>Weekly engagements</li>
                  <li className="flex items-center"><span className="mr-3">📆</span>Monthly programs</li>
                </ul>
                <div className="border-t border-gray-200 pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">Our Approach</h5>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Our artists perform with warmth and empathy, creating programs that bring joy, nostalgia, and meaningful connection to community spaces where music can truly make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Celebration Gram */}
      <section id="celebration-gram" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🎁 The Celebration Gram
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                A Show-Stopping Surprise That Sings. Literally.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether it&rsquo;s a birthday, a promotion, a recovery milestone, or a much-needed dose of joy&mdash;The Celebration Gram brings live, heartfelt music directly to your loved one&rsquo;s side.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From glamorous restaurant dinners to quiet hospital rooms, this one-of-a-kind pop-up performance is tailored to the moment: celebratory, soothing, or uplifting.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">🌟 What&rsquo;s Included:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><span className="mr-3">🎂</span>A show-stopping operatic &ldquo;Happy Birthday&rdquo; (or instrumental version)</li>
                    <li className="flex items-start"><span className="mr-3">🎶</span>A mini-set of 1&ndash;3 songs chosen to match the recipient&rsquo;s favorite style</li>
                    <li className="flex items-start"><span className="mr-3">🎻</span>Live instrumental accompaniment (pianist, guitarist, violinist, or small ensemble)</li>
                    <li className="flex items-start"><span className="mr-3">🎤</span>Custom spoken dedication to make it personal and meaningful</li>
                    <li className="flex items-start"><span className="mr-3">🎩</span>Artists arrive dressed for the vibe and can blend in for a surprise entrance</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">💡 Optional Add-Ons:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">🎻</span>Portable &ldquo;flash mob&rdquo; mini-ensemble (2&ndash;4 players)</li>
                    <li className="flex items-center"><span className="mr-3">🎥</span>Video recording or livestreaming</li>
                    <li className="flex items-center"><span className="mr-3">📜</span>Framed keepsake with printed lyrics, music, or dedication</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">🌈 Ideal For:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">🎉</span>Birthdays (surprise at home, restaurant, or office)</li>
                    <li className="flex items-center"><span className="mr-3">🏥</span>Hospital visits for comfort and joy</li>
                    <li className="flex items-center"><span className="mr-3">💍</span>Engagements and anniversaries</li>
                    <li className="flex items-center"><span className="mr-3">🎓</span>Retirement celebrations</li>
                    <li className="flex items-center"><span className="mr-3">💝</span>&ldquo;Just Because&rdquo; moments to uplift someone</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Music & Wine Pairing */}
      <section id="wine-pairing" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🍷 The Music & Wine Pairing Experience
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                A sensory journey where every note meets its perfect pour.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Indulge in an unforgettable evening where the worlds of music and wine come together in harmony. This curated experience pairs a selection of fine wines with live musical performances—each glass accompanied by a thoughtfully chosen piece that enhances its flavor, mood, and origin.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  As the wine shifts, so does the music. From lush romantic arias to spirited chamber music, each piece is chosen to mirror the complexity and nuance of what&rsquo;s in your glass.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We collaborate with sommeliers, chefs, and hosts to create a cohesive, elegant atmosphere where music becomes an essential part of the evening&rsquo;s journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Perfect for:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">🍽️</span>Private dinner parties</li>
                    <li className="flex items-center"><span className="mr-3">🍷</span>Wine tastings</li>
                    <li className="flex items-center"><span className="mr-3">✨</span>Luxury client events</li>
                    <li className="flex items-center"><span className="mr-3">👨‍🍳</span>Culinary experiences seeking a musical centerpiece</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Scale:</strong> Whether it&rsquo;s an intimate evening for eight or a gala for fifty, The Music & Wine Pairing Experience transforms your event into a multisensory celebration of culture, flavor, and connection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Karaoke */}
      <section id="karaoke" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🎹 Elevated Karaoke: The Art of Singing Together
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Where your living room becomes the stage, and your piano the star.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Have a beautiful piano that rarely gets played? Let&rsquo;s change that. Dyer-Jones Entertainment offers a high-end twist on the joy of singing together&mdash;with the help of a classically trained pianist and world-class vocalists by your side.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you&rsquo;re celebrating a birthday, hosting a family reunion, or just want to create unforgettable memories in your home, Elevated Karaoke is a musical gathering like no other.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Think of it as an elegant salon-style evening where everyone is invited to take the stage. No screens, no backing tracks&mdash;just the magic of live music and the thrill of sharing it with the people you love.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">What&rsquo;s included:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start"><span className="mr-3">🎹</span>A professional pianist to accompany you and your guests live</li>
                    <li className="flex items-start"><span className="mr-3">📚</span>A curated library of songs&mdash;classical, Broadway, jazz, pop standards, and more</li>
                    <li className="flex items-start"><span className="mr-3">🎤</span>Performances from professional singers to inspire and delight</li>
                    <li className="flex items-start"><span className="mr-3">🏠</span>A warm, supportive atmosphere that invites participation and fun</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>The Experience:</strong> This is karaoke, reimagined for those who appreciate artistry, intimacy, and the power of music to bring people together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Performance */}
      <section id="signature" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🎼 The Signature Performance
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Commanding. Captivating. Completely Custom.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Bring the full brilliance of live classical performance to your next large-scale corporate event with The Signature Performance&mdash;a bespoke musical experience designed to awe, inspire, and elevate.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you&rsquo;re hosting a black-tie gala, a company anniversary, a product launch, holiday party, or an executive summit, Dyer-Jones Entertainment delivers performances that blend sophistication with unforgettable artistry.
                </p>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">We offer everything from:</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">•</span>A full orchestra with or without featured soloists</li>
                    <li className="flex items-center"><span className="mr-3">•</span>A chamber orchestra or string ensemble for elegant, refined energy</li>
                    <li className="flex items-center"><span className="mr-3">•</span>A duo, trio, or quartet for more intimate yet impactful performances</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Opera singers and world-class instrumentalists to take center stage</li>
                    <li className="flex items-center"><span className="mr-3">•</span>Tailored musical programming to reflect your brand, mission, or occasion</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">This package is perfect for:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center"><span className="mr-3">🎩</span>Corporate galas and annual celebrations</li>
                    <li className="flex items-center"><span className="mr-3">🏔️</span>Executive leadership retreats</li>
                    <li className="flex items-center"><span className="mr-3">🏆</span>Award ceremonies and high-profile client events</li>
                    <li className="flex items-center"><span className="mr-3">💝</span>Donor receptions and brand activations</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Custom Venues:</strong> Let us transform your venue&mdash;whether it&rsquo;s a hotel ballroom, a modern atrium, or a rooftop terrace&mdash;into a concert hall for the night. Every performance is fully customizable to your vision and event flow.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-4">
                    <strong>The Promise:</strong> With Dyer-Jones Entertainment, you&rsquo;re not just hiring a musical group&mdash;you&rsquo;re commissioning an experience that resonates long after the final bow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Curated Events */}
      <section id="custom" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 lg:p-12 border-2 border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
                🌟 Custom Curated Events
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                If you can dream it, we can stage it.
              </p>
            </div>

            <div className="text-center max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Have something specific in mind? Want to feature a tango quartet? A baroque ensemble? A solo violinist under the stars?
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Let&rsquo;s collaborate. Dyer-Jones Entertainment specializes in designing tailor-made musical experiences for private events, festivals, and cultural institutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Music has the power to transform any space&mdash;even for just a few minutes&mdash;into a place of beauty, connection, and joy. Let us help you create that magic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-playfair font-bold mb-6">
            Let&rsquo;s Bring Your Event to Life
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Whether you&rsquo;re looking for elegance, energy, or emotional resonance, Dyer-Jones Entertainment is here to deliver unforgettable performances, wherever you are in Houston.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/connect"
              className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Start Planning Your Event
            </Link>
            <Link
              href="/about"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}