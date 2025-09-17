export default function MediaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-playfair font-bold text-gray-900 mb-6">
            Media Gallery
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Capturing the moments that define our artistic journey.
          </p>
        </div>
      </section>

      {/* Featured Media */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Featured Content
          </h2>
          
          {/* Video Showcase */}
          <div className="mb-16">
            <div className="relative h-96 lg:h-[500px] bg-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-lg font-semibold">Featured Performance Video</p>
                  <p className="text-sm">Carretera Rehearsal Footage</p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                Behind the Scenes: Carretera
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Go behind the scenes of our upcoming performance and see the collaborative process that brings our interdisciplinary vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Galleries by Performance */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Performance Galleries
          </h2>

          {/* Carretera Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">
              Carretera (2024)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Rehearsal Photo 1</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Rehearsal Photo 2</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Rehearsal Photo 3</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Behind Scenes 1</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Behind Scenes 2</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Behind Scenes 3</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fractured Light Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">
              Fractured Light (March 2024)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 1</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 2</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 3</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 4</p>
                </div>
              </div>
            </div>
          </div>

          {/* Voices Rising Gallery */}
          <div className="mb-16">
            <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">
              Voices Rising (January 2024)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 1</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 2</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 3</p>
                </div>
              </div>
              <div className="relative h-64 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Performance Photo 4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Process Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-center text-gray-900 mb-12">
            Behind the Scenes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-4">
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Creative Process 1</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Collaborative Creation</h4>
              <p className="text-gray-600 text-sm">Artists from different disciplines coming together to explore new possibilities.</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Creative Process 2</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Technical Rehearsals</h4>
              <p className="text-gray-600 text-sm">Integrating multimedia elements with live performance for seamless experiences.</p>
            </div>
            
            <div className="space-y-4">
              <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <p className="text-sm">Creative Process 3</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Community Engagement</h4>
              <p className="text-gray-600 text-sm">Connecting with our audience and building relationships within the Houston arts community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download & Share Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
            Press & Media Kit
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            High-resolution images and promotional materials for press and media use.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors">
              Download Press Kit
            </button>
            <button className="inline-block border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-900 hover:text-white transition-colors">
              Request High-Res Images
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            All images © ConTempo Studios. Please credit when using.
          </p>
        </div>
      </section>
    </div>
  );
} 