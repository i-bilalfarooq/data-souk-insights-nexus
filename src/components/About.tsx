
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Shield, BarChart3, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <TrendingUp className="h-10 w-10 text-datasouk-teal" />,
      title: "Real-Time Economic Signals",
      description: "Access up-to-date market trends, pricing data, and economic indicators to make informed decisions."
    },
    {
      icon: <Shield className="h-10 w-10 text-datasouk-blue" />,
      title: "Quantum-Secure Privacy",
      description: "Share economic signals without exposing sensitive data, protected by Diamante's quantum-secure blockchain."
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-datasouk-navy" />,
      title: "Powerful Insights",
      description: "Gain valuable intelligence on cost-saving opportunities, demand shifts, and market inefficiencies."
    },
    {
      icon: <Users className="h-10 w-10 text-datasouk-gold" />,
      title: "Trusted Network",
      description: "Join a verified ecosystem of businesses, government entities, and organizations across the UAE."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-datasouk-teal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-datasouk-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Why DataSouk <span className="gradient-text">Matters</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            UAE markets are currently disconnected. Prices vary wildly, planning is based on outdated information, 
            and businesses lose billions because they don't know what others are paying or doing.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm dark:bg-black/40">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-muted mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 bg-gradient-to-br from-datasouk-blue to-datasouk-navy p-1 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-datasouk-dark rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Solution</h3>
                <p className="text-muted-foreground mb-6">
                  Using Diamante's quantum-secure blockchain, we enable businesses to share economic signals 
                  without revealing sensitive data. In return, they receive valuable insights worth much more than what they contribute.
                </p>
                <ul className="space-y-3">
                  {[
                    "Businesses don't share raw data, just privacy-protected signals",
                    "They get 10x value back in actionable insights",
                    "We uncover hidden ways to save money or avoid shortages",
                    "We start small, with public data, and build trust over time"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="mr-3 mt-1 bg-green-500/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-radial from-datasouk-teal/20 to-transparent rounded-full absolute inset-0 blur-2xl"></div>
                <div className="relative z-10 bg-white/80 dark:bg-black/40 backdrop-blur-sm rounded-xl border border-datasouk-light p-6 shadow-lg">
                  <div className="flex justify-between items-center mb-8">
                    <h4 className="font-semibold text-lg">Economic Impact</h4>
                    <span className="text-datasouk-gold font-bold">$14.2B</span>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Market Inefficiencies</span>
                        <span className="font-medium">$5.7B</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-datasouk-blue h-2 rounded-full" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Supply Chain Disruptions</span>
                        <span className="font-medium">$4.2B</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-datasouk-teal h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Price Information Gaps</span>
                        <span className="font-medium">$3.1B</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-datasouk-gold h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Planning Errors</span>
                        <span className="font-medium">$1.2B</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-datasouk-navy h-2 rounded-full" style={{ width: '8%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
