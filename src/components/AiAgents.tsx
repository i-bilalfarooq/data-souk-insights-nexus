
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Database, Shield, BarChart3, Activity, Search, Brain } from 'lucide-react';

const AiAgents = () => {
  const agents = [
    {
      id: "extraction",
      icon: <Database className="h-8 w-8" />,
      title: "Data Extraction Agent",
      description: "Extracts useful market signals without exposing raw data.",
      location: "At the user's device or enterprise data vault",
      details: [
        "Leverages federated learning to keep raw data local while sharing insights",
        "Uses zero-knowledge proofs to verify data authenticity without revealing contents",
        "Adapts to different data formats and structures across various industries",
        "Ensures GDPR and UAE PDPL compliance through privacy-preserving techniques"
      ]
    },
    {
      id: "compliance",
      icon: <Shield className="h-8 w-8" />,
      title: "Consent & Compliance Agent",
      description: "Ensures data is only shared with explicit consent, adhering to privacy laws.",
      location: "Embedded in the data-sharing interface and blockchain smart contracts",
      details: [
        "Implements granular consent management for different data categories",
        "Enforces UAE Personal Data Protection Law (PDPL) requirements",
        "Creates immutable audit trails of all consent actions on the blockchain",
        "Provides transparent governance through smart contract verification"
      ]
    },
    {
      id: "insights",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Insight Generation Agent",
      description: "Converts aggregated signals into real-time dashboards and forecasts.",
      location: "On the analytics layer of the platform",
      details: [
        "Utilizes machine learning to identify patterns across fragmented market data",
        "Generates customized economic forecasts for different sectors and regions",
        "Creates intuitive visualizations that highlight actionable business opportunities",
        "Continuously improves accuracy through feedback loops and model training"
      ]
    },
    {
      id: "anomaly",
      icon: <Activity className="h-8 w-8" />,
      title: "Anomaly Detection Agent",
      description: "Detects fraudulent, outlier, or manipulated data to keep the network trustworthy.",
      location: "In the blockchain validation and signal monitoring layer",
      details: [
        "Applies statistical analysis to identify improbable market movements",
        "Flags potential manipulation attempts for human review",
        "Maintains a reputation system for data sources based on historical reliability",
        "Provides confidence scores for each insight based on data quality"
      ]
    },
    {
      id: "knowledge",
      icon: <Search className="h-8 w-8" />,
      title: "Knowledge Sharing Agent",
      description: "Continuously improves the platform by learning which insights provide the most value.",
      location: "In the learning layer of the platform",
      details: [
        "Tracks which insights lead to measurable business outcomes",
        "Personalizes information delivery based on user roles and preferences",
        "Facilitates secure knowledge transfer between organizations",
        "Identifies high-value data types that should be prioritized in collection"
      ]
    }
  ];

  return (
    <section id="ai-agents" className="py-20 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-datasouk-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-datasouk-teal/5 rounded-full blur-3xl" />
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
            AI Agents in <span className="gradient-text">DataSouk</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our platform leverages specialized AI agents to handle different aspects of secure data
            sharing, compliance, insight generation, and network trust.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Tabs defaultValue="extraction" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-muted/50 backdrop-blur-sm">
                {agents.map((agent) => (
                  <TabsTrigger key={agent.id} value={agent.id} className="data-[state=active]:bg-datasouk-teal data-[state=active]:text-white">
                    <span className="hidden md:inline mr-2">{agent.title}</span>
                    <span className="inline md:hidden">{agent.icon}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {agents.map((agent) => (
              <TabsContent key={agent.id} value={agent.id} className="mt-0">
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="md:col-span-1 border-none shadow-lg bg-white/90 dark:bg-black/60 backdrop-blur-sm">
                    <CardHeader>
                      <div className="p-3 rounded-full bg-datasouk-teal/10 w-fit mb-4">
                        {agent.icon}
                      </div>
                      <CardTitle>{agent.title}</CardTitle>
                      <CardDescription className="mt-2">{agent.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start">
                        <div className="p-1 rounded-full bg-datasouk-blue/10 mr-3 mt-1">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 12H12.01M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-xs uppercase text-muted-foreground font-medium mb-1">Location</p>
                          <p className="text-sm">{agent.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2 border-none shadow-lg bg-white/90 dark:bg-black/60 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle>Key Capabilities</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {agent.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start">
                            <div className="mr-3 mt-1 bg-datasouk-teal/20 p-1 rounded-full">
                              <svg className="h-3 w-3 text-datasouk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <motion.div
          className="rounded-2xl overflow-hidden bg-datasouk-blue/5 dark:bg-datasouk-blue/20 p-8 md:p-12 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-datasouk-teal/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-datasouk-blue/10 rounded-full blur-3xl"></div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-datasouk-teal/20 mr-4">
                  <Brain className="h-6 w-6 text-datasouk-teal" />
                </div>
                <h3 className="text-2xl font-bold">AI Technology Stack</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                DataSouk leverages pre-trained AI models from Hugging Face and custom-built
                neural networks to power our agents, providing state-of-the-art capabilities
                while maintaining data privacy and security.
              </p>
              
              <div className="space-y-4">
                <Card className="bg-white/50 dark:bg-black/40">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-datasouk-blue/10 rounded-full mr-4">
                        <svg className="h-5 w-5 text-datasouk-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Privacy-Preserving ML</h4>
                        <p className="text-xs text-muted-foreground">Federated learning keeps data local</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/50 dark:bg-black/40">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-datasouk-teal/10 rounded-full mr-4">
                        <svg className="h-5 w-5 text-datasouk-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Natural Language Processing</h4>
                        <p className="text-xs text-muted-foreground">For market reports and insights</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/50 dark:bg-black/40">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="p-2 bg-datasouk-gold/10 rounded-full mr-4">
                        <svg className="h-5 w-5 text-datasouk-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium">Real-Time Forecasting</h4>
                        <p className="text-xs text-muted-foreground">Time-series prediction models</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative w-full md:w-1/2 h-[300px] md:h-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-datasouk-blue/30 rounded-full flex items-center justify-center z-10">
                  <div className="w-20 h-20 md:w-28 md:h-28 bg-datasouk-teal/30 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-datasouk-gold/30 rounded-full"></div>
                  </div>
                </div>
                
                <div className="absolute w-full h-full flex items-center justify-center">
                  <div className="animate-pulse-slow absolute w-48 h-48 md:w-64 md:h-64 border border-datasouk-blue/30 rounded-full"></div>
                  <div className="animate-pulse-slow absolute w-64 h-64 md:w-80 md:h-80 border border-datasouk-teal/20 rounded-full"></div>
                  <div className="animate-pulse-slow absolute w-80 h-80 md:w-96 md:h-96 border border-datasouk-gold/10 rounded-full"></div>
                </div>
                
                {[1, 2, 3, 4, 5].map((_, i) => {
                  const angle = (i * 72) % 360;
                  const distance = 140;
                  const x = Math.cos(angle * Math.PI / 180) * distance;
                  const y = Math.sin(angle * Math.PI / 180) * distance;
                  
                  return (
                    <div 
                      key={i}
                      className="absolute w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/80 dark:bg-black/60 shadow-lg flex items-center justify-center"
                      style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                        transition: 'all 0.5s ease'
                      }}
                    >
                      <div className="w-4 h-4 rounded-full bg-datasouk-teal/50"></div>
                    </div>
                  );
                })}
                
                {[1, 2, 3, 4].map((_, i) => {
                  const angle = ((i * 90) + 45) % 360;
                  const distance = 100;
                  const x = Math.cos(angle * Math.PI / 180) * distance;
                  const y = Math.sin(angle * Math.PI / 180) * distance;
                  
                  return (
                    <div
                      key={i}
                      className="absolute hidden md:flex w-20 h-12 rounded-lg bg-white/80 dark:bg-black/60 shadow-lg items-center justify-center text-xs"
                      style={{ 
                        transform: `translate(${x}px, ${y}px)`,
                        transition: 'all 0.5s ease'
                      }}
                    >
                      {['NLP', 'ML', 'ZKP', 'RL'][i]}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiAgents;
