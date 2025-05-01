
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import AiAgents from "@/components/AiAgents";
import Dashboard from "@/components/Dashboard";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
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
