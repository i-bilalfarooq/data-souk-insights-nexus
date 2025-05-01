
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import AiAgents from "@/components/AiAgents";
import Dashboard from "@/components/Dashboard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Add prominent CTA section */}
      <div className="bg-gradient-to-br from-datasouk-blue to-datasouk-navy py-16 text-white">
        <div className="container max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Access Secure Economic Data</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Select your role to access end-to-end encrypted market data protected by Kyber quantum-resistant cryptography on Diamante blockchain.
          </p>
          <Button asChild size="lg" className="bg-datasouk-accent hover:bg-datasouk-accent/80 text-datasouk-navy">
            <Link to="/dashboard" className="flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Select Your Role & Access Data
            </Link>
          </Button>
        </div>
      </div>
      
      <About />
      <Technology />
      <AiAgents />
      <Dashboard />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
