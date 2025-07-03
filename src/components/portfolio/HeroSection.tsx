import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.img
            src="/lovable-uploads/6af1dd22-7fa0-41e0-8873-bec0009df063.png"
            alt="Mufthi Mohamed M"
            className="w-48 h-48 rounded-full mx-auto mb-8 shadow-elegant object-cover"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mufthi Mohamed M
          </motion.h1>
          
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Badge variant="outline" className="text-lg px-4 py-2">
              📞 +91 6385456672
            </Badge>
          </motion.div>
          
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button asChild className="shadow-elegant">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" className="shadow-card">
              <a href="#projects">View Projects</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};