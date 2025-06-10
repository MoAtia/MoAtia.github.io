
import React from 'react';
import { Brain, Code, Database, TrendingUp } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI/ML Expertise",
      description: "Deep knowledge in neural networks, computer vision, and NLP"
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building end-to-end AI applications with modern frameworks"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Designing scalable data pipelines and ML infrastructure"
    },
    {
      icon: TrendingUp,
      title: "Research & Innovation",
      description: "Staying at the forefront of AI research and emerging technologies"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Transforming Ideas into Intelligent Solutions
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I'm a passionate AI Engineer with expertise in machine learning, deep learning, and artificial intelligence. 
              With a strong background in computer science and mathematics, I specialize in developing innovative AI solutions 
              that drive business value and solve complex problems.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My experience spans across various domains including computer vision, natural language processing, 
              recommendation systems, and predictive analytics. I'm committed to staying at the cutting edge of AI 
              technology and applying best practices in model development, deployment, and monitoring.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-600">AI Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg">
                  <highlight.icon className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 text-gray-800">{highlight.title}</h4>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
