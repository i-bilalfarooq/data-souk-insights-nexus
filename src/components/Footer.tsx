
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-datasouk-navy text-white">
      <div className="container px-4 md:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="md:col-span-1">
            <span className="text-2xl font-bold">DataSouk</span>
            <p className="mt-3 text-white/70 text-sm">
              Secure economic data network for UAE businesses, powered by quantum-secure blockchain technology.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3 text-datasouk-gold">Platform</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Capabilities</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blockchain</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-datasouk-gold">Resources</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-datasouk-gold">Company</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3 text-datasouk-gold">Legal</h3>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Processing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} DataSouk. All rights reserved.
            </div>
            
            <div className="flex space-x-5">
              {["LinkedIn", "Twitter", "Facebook", "GitHub"].map((social, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
