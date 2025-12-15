export default function Footer(){
    return (
    <footer className="bg-black text-white p-12 md:p-16 lg:p-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 md:gap-4 lg:gap-16">
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">CS — Ticket System</h2>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="flex items-center hover:text-white transition-colors">
                <span className="w-5 mr-2 text-center text-xl">X</span> @CS — Ticket System
              </a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors">
                <span className="w-5 mr-2 text-center text-xl">in</span> @CS — Ticket System
              </a></li>
              <li><a href="#" className="flex items-center hover:text-white transition-colors">
                <span className="w-5 mr-2 text-center text-xl">f</span> @CS — Ticket System
              </a></li>
              <li><a href="mailto:support@cs.com" className="flex items-center hover:text-white transition-colors">
                <span className="w-5 mr-2 text-center text-xl">✉</span> support@cs.com
              </a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
        
      </div>
    </footer>
  );
}