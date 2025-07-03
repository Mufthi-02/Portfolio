import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Mufthi Mohamed M. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Built with React.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};