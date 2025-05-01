
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Activity, Globe, Database } from 'lucide-react';

const Technology = () => {
  const technologies = [
    {
      icon: <Shield className="h-8 w-8 text-datasouk-blue" />,
      title: "Quantum-Secure Protection",
      description: "Using Kyber and Dillithium algorithms to ensure data remains secure even against quantum computing attacks."
    },
    {
      icon: <Activity className="h-8 w-8 text-datasouk-teal" />,
      title: "Fast, Secure Consensus",
      description: "Rapid verification of market activity with minimal energy consumption through advanced consensus mechanisms."
    },
    {
      icon: <Globe className="h-8 w-8 text-datasouk-gold" />,
      title: "Offline Capabilities",
      description: "Works in challenging locations thanks to mobile synchronization and offline-first architecture."
    },
    {
      icon: <Database className="h-8 w-8 text-datasouk-navy" />,
      title: "Smart Contracts",
      description: "Automated decisions based on real market conditions through programmable business logic."
    }
  ];

  return (
    <section id="technology" className="py-20 gradient-bg text-white relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNi02aDZ2LTZoLTZ2NnptLTYgMGg2di02aC02djZ6TTI0IDI0aDZ2LTZoLTZ2NnptMCA2aDZ2LTZoLTZ2NnptLTYtMTJoNnYtNmgtNnY2em0xMiAwaC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Powered by <span className="text-datasouk-gold">Cutting-Edge</span> Technology
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            DataSouk leverages Diamante's quantum-secure blockchain to create a resilient, 
            private, and efficient platform for economic data exchange.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/10 border-none backdrop-blur-sm hover:bg-white/15 transition-colors">
                <CardContent className="p-6 flex">
                  <div className="p-3 rounded-full bg-white/10 h-fit mr-4">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-white/70">{tech.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-datasouk-blue via-datasouk-teal to-datasouk-gold"></div>
          <div className="p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">How Diamante Blockchain Works</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Data Submission",
                  content: "Businesses submit encrypted economic signals through privacy-preserving techniques like federated learning or zero-knowledge proofs."
                },
                {
                  number: "02",
                  title: "Quantum-Secure Verification",
                  content: "Kyber and Dillithium algorithms ensure data integrity and authenticity while maintaining quantum resistance."
                },
                {
                  number: "03",
                  title: "Insight Generation",
                  content: "Verified data is processed to generate valuable market insights without exposing underlying sensitive information."
                }
              ].map((step, idx) => (
                <div key={idx} className="relative pb-4">
                  <div className="text-3xl font-bold text-datasouk-gold opacity-50 mb-2">{step.number}</div>
                  <h4 className="text-xl font-medium mb-3">{step.title}</h4>
                  <p className="text-white/70">{step.content}</p>
                  
                  {idx < 2 && (
                    <div className="hidden md:block absolute -right-4 top-8">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-5 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-lg font-medium mb-4 flex items-center">
                <Shield className="h-5 w-5 mr-2 text-datasouk-gold" />
                Technical Security Features
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {[
                  "Post-quantum cryptography",
                  "Homomorphic encryption",
                  "Private key management",
                  "Secure multi-party computation",
                  "Zero-knowledge proofs",
                  "Federated learning",
                  "Differential privacy",
                  "Hardware security modules"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <div className="mr-2 bg-datasouk-teal/20 p-1 rounded-full">
                      <svg className="h-3 w-3 text-datasouk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technology;
