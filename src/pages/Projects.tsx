import { Link } from 'react-router-dom';
import { ArrowRight, Check, MessageSquare } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "AWS"],
      features: [
        "User authentication",
        "Payment processing",
        "Real-time inventory",
        "Analytics dashboard"
      ]
    },
    {
      title: "AI-Powered Analytics",
      description: "Business intelligence platform using machine learning for predictive analytics.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      tags: ["Python", "TensorFlow", "React", "Docker"],
      features: [
        "Predictive modeling",
        "Data visualization",
        "Automated reporting",
        "Custom dashboards"
      ]
    },
    {
      title: "Mobile Banking App",
      description: "Secure and user-friendly mobile banking application with biometric authentication.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop",
      tags: ["React Native", "Node.js", "PostgreSQL"],
      features: [
        "Biometric security",
        "Real-time transactions",
        "Bill payments",
        "Investment tracking"
      ]
    },
    {
      title: "Smart Home System",
      description: "IoT-based home automation system with voice control and energy monitoring.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop",
      tags: ["IoT", "React", "Node.js", "MQTT"],
      features: [
        "Voice control",
        "Energy monitoring",
        "Mobile app control",
        "Automated scheduling"
      ]
    },
    {
      title: "Learning Management",
      description: "Comprehensive e-learning platform with live sessions and progress tracking.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      features: [
        "Live streaming",
        "Course management",
        "Progress tracking",
        "Interactive quizzes"
      ]
    },
    {
      title: "Supply Chain Platform",
      description: "Blockchain-based supply chain management system for transparency and tracking.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      tags: ["Blockchain", "React", "Node.js", "Solidity"],
      features: [
        "Real-time tracking",
        "Smart contracts",
        "Analytics dashboard",
        "Mobile app"
      ]
    }
  ];

  return (
    <section className="min-h-screen pt-20 bg-black/15">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Our Projects
          </h2>
          <p className="text-lg text-gray-100">
            Explore our portfolio of successful projects and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-black/50 backdrop-blur-sm border border-white/10
              transition-transform duration-300 hover:scale-105">
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-100">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-sm px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-100">
                      <Check className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="#" className="inline-flex items-center text-cyan-400 hover:text-cyan-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center relative z-10">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 rounded-full font-medium 
              bg-indigo-500 hover:bg-indigo-600 text-white 
              transition-all duration-300 hover:scale-105 shadow-lg
              cursor-pointer relative z-10"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
} 