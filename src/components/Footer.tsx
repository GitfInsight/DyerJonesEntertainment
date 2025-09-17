// import Link from 'next/link'; // Commented out until footer content is restored

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        {/* Commented out main content - uncomment when ready to add back
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          {/* <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-4">Dyer-Jones Entertainment</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              An interdisciplinary arts organization focused on creating accessible and live performance art for audiences across Houston.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-300 hover:text-white transition-colors">
                  Upcoming Events
                </Link>
              </li>
              {/* <li>
                <Link href="/media" className="text-gray-300 hover:text-white transition-colors">
                  Media Gallery
                </Link>
              </li> */}
              {/* <li>
                <Link href="/support" className="text-gray-300 hover:text-white transition-colors">
                  Support Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/connect" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#newsletter" className="text-gray-300 hover:text-white transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/contempostudios_htx/" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/profile.php?id=61556104605076" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        {/* <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"> */}
        

        {/* Bottom Bar - Simplified */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Dyer-Jones Entertainment. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Houston, Texas
          </p>
        </div>
      </div>
    </footer>
  );
} 