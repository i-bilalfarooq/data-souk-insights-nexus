
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here (would connect to backend in real app)
    console.log("Contact form submitted");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-datasouk-teal/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-datasouk-blue/5 rounded-full blur-3xl" />
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
            Join <span className="gradient-text">DataSouk</span>
          </motion.h2>
          
          <motion.p
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ready to transform how your organization makes economic decisions? Get in touch with us to 
            learn more about becoming part of the DataSouk network.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-white/90 dark:bg-black/60 backdrop-blur-sm border-none shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">First Name</label>
                    <Input placeholder="John" className="bg-background" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Last Name</label>
                    <Input placeholder="Doe" className="bg-background" required />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Email</label>
                  <Input type="email" placeholder="john@company.com" className="bg-background" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Organization</label>
                  <Input placeholder="Your Company" className="bg-background" required />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1 block">Message</label>
                  <Textarea placeholder="I'm interested in learning more about DataSouk..." className="bg-background" rows={4} required />
                </div>
                <Button type="submit" className="w-full bg-datasouk-teal hover:bg-datasouk-blue">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions about DataSouk? Our team is here to help. Contact us for more information
                on how to join our network or to schedule a demonstration.
              </p>
              
              <div className="space-y-4">
                {[
                  { 
                    icon: <Mail className="h-5 w-5" />,
                    title: "Email",
                    content: "info@datasouk.uae"
                  },
                  { 
                    icon: <Phone className="h-5 w-5" />,
                    title: "Phone",
                    content: "+971 (0) 4 123 4567"
                  },
                  { 
                    icon: <MapPin className="h-5 w-5" />,
                    title: "Location",
                    content: "Dubai International Financial Centre (DIFC), Dubai, UAE"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex">
                    <div className="p-2 bg-muted rounded-full h-fit mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-datasouk-blue to-datasouk-navy border-none overflow-hidden">
              <CardContent className="p-8 text-white">
                <h3 className="font-bold text-xl mb-3">Join our Early Access Program</h3>
                <p className="text-white/80 mb-6">
                  Be among the first organizations to benefit from DataSouk's secure economic data network.
                </p>
                <div className="space-y-3">
                  {[
                    "Prioritized onboarding assistance",
                    "Customized integration support",
                    "Influence feature development",
                    "Reduced pricing for early adopters"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="mr-3 bg-white/20 p-1 rounded-full">
                        <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-8 bg-white text-datasouk-blue hover:bg-white/90 hover:text-datasouk-navy">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
