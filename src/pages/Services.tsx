import { Link } from 'react-router-dom';
import { Code, Smartphone, Cloud, Brain, Palette, Users, Check, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies.",
      features: [
        "React & Next.js Applications",
        "E-commerce Solutions",
        "Progressive Web Apps",
        "API Development",
        "Performance Optimization"
      ],
      icon: <Code className="w-8 h-8 mb-4" />
    },
    {
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android.",
      features: [
        "React Native Development",
        "Native iOS & Android Apps",
        "App Store Optimization",
        "Mobile UI/UX Design",
        "App Maintenance & Updates"
      ],
      icon: <Smartphone className="w-8 h-8 mb-4" />
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment services.",
      features: [
        "AWS & Azure Services",
        "Cloud Migration",
        "DevOps Implementation",
        "Serverless Architecture",
        "24/7 Monitoring"
      ],
      icon: <Cloud className="w-8 h-8 mb-4" />
    },
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions for business automation.",
      features: [
        "Custom AI Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Integration"
      ],
      icon: <Brain className="w-8 h-8 mb-4" />
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and functional design solutions.",
      features: [
        "User Interface Design",
        "User Experience Design",
        "Design Systems",
        "Prototyping",
        "Usability Testing"
      ],
      icon: <Palette className="w-8 h-8 mb-4" />
    },
    {
      title: "Consulting",
      description: "Expert guidance for your digital transformation.",
      features: [
        "Technical Consulting",
        "Digital Strategy",
        "Security Audits",
        "Performance Reviews",
        "Technology Stack Selection"
      ],
      icon: <Users className="w-8 h-8 mb-4" />
    }
  ];

  return (
    <section className="min-h-screen pt-20 bg-black/15">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Our Services
          </h2>
          <p className="text-lg text-gray-100">
            We offer a comprehensive suite of technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10 
              transition-transform duration-300 hover:scale-105">
              <div className="text-cyan-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>
              <p className="mb-6 text-gray-100">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-100">
                    <Check className="w-4 h-4 mr-2 text-cyan-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
} 