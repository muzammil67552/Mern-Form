const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          
          {/* Logo / Brand */}
          <div className="text-lg font-bold mb-4 md:mb-0">MyWebsite</div>
          
          {/* Links */}
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About Us</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
            <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
          </div>
          
          {/* Copyright */}
          <div className="mt-4 md:mt-0 text-sm">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  