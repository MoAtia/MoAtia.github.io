
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Recommendation System",
      description: "Built a machine learning system that increased user engagement by 40% using collaborative filtering and deep learning techniques.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "TensorFlow", "AWS", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Computer Vision for Medical Diagnosis",
      description: "Developed a CNN model for medical image analysis with 95% accuracy in detecting anomalies, deployed on cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      technologies: ["PyTorch", "OpenCV", "Google Cloud", "FastAPI"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Natural Language Processing Chatbot",
      description: "Created an intelligent chatbot using transformer models and NLP techniques, handling 10k+ daily conversations.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500&h=300&fit=crop",
      technologies: ["Python", "Hugging Face", "Flask", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Built a real-time analytics platform with ML models for forecasting business metrics and identifying trends.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Scikit-learn", "React", "MongoDB"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Autonomous Data Pipeline",
      description: "Designed and implemented an automated MLOps pipeline for model training, validation, and deployment at scale.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=500&h=300&fit=crop",
      technologies: ["Apache Spark", "Kubernetes", "MLflow", "Jenkins"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "AI Research Publication",
      description: "Contributed to cutting-edge research in federated learning, published in top-tier AI conferences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      technologies: ["Research", "Python", "LaTeX", "TensorFlow"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing innovative AI solutions that drive real-world impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
