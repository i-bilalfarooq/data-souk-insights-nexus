
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-datasouk-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-datasouk-teal/10 rounded-full blur-3xl" />
        <div className="absolute top-2/3 right-1/3 w-80 h-80 bg-datasouk-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 flex flex-col lg:flex-row items-center">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Secure <span className="gradient-text">Economic Data</span> Network for the UAE
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Connect businesses, governments and organizations with real-time, trustworthy 
            economic data — without exposing private information.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button asChild className="bg-datasouk-teal hover:bg-datasouk-blue text-white px-8 py-6 text-lg hover:scale-105 transition-transform active:scale-95">
              <Link to="/dashboard">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-datasouk-blue text-datasouk-blue hover:bg-datasouk-blue/10 px-8 py-6 text-lg">
              <a href="#about">
                Learn More
              </a>
            </Button>
          </motion.div>
          
          <motion.div 
            className="pt-6 flex flex-col sm:flex-row gap-8 justify-center lg:justify-start items-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center">
              <div className="bg-green-500/20 p-2 rounded-full">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2">Quantum-secure blockchain</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500/20 p-2 rounded-full">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2">Privacy-preserving insights</span>
            </div>
            <div className="flex items-center">
              <div className="bg-green-500/20 p-2 rounded-full">
                <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-2">Real-time economic data</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex-1 mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative aspect-video max-w-xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-datasouk-blue to-datasouk-teal rounded-2xl -rotate-2 scale-95 opacity-20 blur-md"></div>
            <div className="absolute inset-0 glass-effect border border-white/20 rounded-2xl shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-8 bg-datasouk-light/10 border-b border-white/10 rounded-t-2xl flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>
              <div className="pt-10 px-6 pb-6">
                <div className="flex justify-between items-center mb-6">
                  <div className="space-y-1">
                    <h3 className="font-medium text-datasouk-navy dark:text-white">DataSouk Insights</h3>
                    <p className="text-xs text-datasouk-navy/60 dark:text-white/60">Real-time economic data dashboard</p>
                  </div>
                  <div className="text-sm px-3 py-1 bg-green-500/20 text-green-600 rounded-full">Live</div>
                </div>
                <div className="space-y-4">
                  <div className="h-24 bg-datasouk-teal/10 rounded-lg animate-pulse-slow"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-32 bg-datasouk-blue/10 rounded-lg animate-pulse-slow"></div>
                    <div className="h-32 bg-datasouk-gold/10 rounded-lg animate-pulse-slow"></div>
                  </div>
                  <div className="h-16 bg-datasouk-navy/10 rounded-lg animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
