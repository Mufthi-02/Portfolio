import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const contactLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/mufthi-mohamed",
    icon: "💼",
    description: "Connect with me professionally"
  },
  {
    name: "GitHub", 
    url: "https://github.com/mufthi-mohamed",
    icon: "💻",
    description: "Check out my code repositories"
  },
  {
    name: "Email",
    url: "mailto:mufthi.mohamed@email.com",
    icon: "📧",
    description: "Send me a direct message"
  },
];

export const ContactSection = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/1-Qt3dbNxAg8_RmlyXZuINDi0JM7qh58X/view', '_blank');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8">Ready to bring your next project to life</p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button 
              onClick={handleDownloadResume}
              className="text-lg px-8 py-6 shadow-elegant gradient-primary"
            >
              📄 Download Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-center text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactLinks.map((contact, index) => (
                  <motion.a
                    key={contact.name}
                    href={contact.url}
                    target={contact.url.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.url.startsWith('http') ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="block"
                  >
                    <Card className="h-full shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                      <CardContent className="pt-6">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{contact.icon}</span>
                          <div>
                            <h3 className="font-medium">{contact.name}</h3>
                            <p className="text-sm text-muted-foreground">{contact.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.a>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-8 text-center"
              >
                <Badge variant="outline" className="text-lg px-6 py-2">
                  📞 +91 6385456672
                </Badge>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            "Java Full Stack Developer with strong foundation in Java, Spring Boot, MySQL, React, JavaScript, 
            Bootstrap, CSS & HTML. Committed to writing clean, efficient code and delivering high-performance 
            server-side solutions."
          </p>
          <p className="text-sm text-muted-foreground">
            Available for full-time opportunities and exciting projects
          </p>
        </motion.div>
      </div>
    </section>
  );
};