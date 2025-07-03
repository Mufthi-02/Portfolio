import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Student Feedback System",
    description: "Developed a full-stack Student Feedback System using React.js, Node.js, Express.js, and MySQL to enable college students to securely log in and submit structured feedback. Designed RESTful APIs with Node.js for authentication, session management, and feedback operations with robust error handling.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "JavaScript", "HTML5", "CSS3", "JWT"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&h=300&fit=crop"
  },
  {
    title: "Bus Reservation System", 
    description: "Developed a full-stack Bus Reservation System using React.js, Java, JSP, Servlets, and JDBC, enabling users to seamlessly book bus tickets, view schedules, and manage reservations through an intuitive web interface.",
    technologies: ["React.js", "Java", "JDBC", "JSP", "Servlets", "MySQL"],
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=500&h=300&fit=crop"
  },
  {
    title: "Document Verification System (DoQfy)",
    description: "Developed a secure, decentralized system for verifying the authenticity of documents using Blockchain technology, ensuring tamper-proof records and enhanced security. The system effectively reduced document fraud by implementing a transparent, distributed ledger.",
    technologies: ["React.js", "JavaScript", "MongoDB", "Blockchain"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=300&fit=crop"
  },
  {
    title: "Tic Tac Toe Game",
    description: "Console-based interactive game with turn-based logic, input validation, and game state management for two players. Built using Core Java with clean, efficient algorithms.",
    technologies: ["Core Java", "Console Application", "Game Logic"],
    image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my recent work</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden cursor-pointer">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};