import { Link } from 'react-router-dom';
import { Code, Zap, Shield, Users } from 'lucide-react';

export default function Home() {
  const stats = [
    { number: "100+", label: "Clients Worldwide" },
    { number: "150+", label: "Projects Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
  ];

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Technology",
      description: "Using the latest frameworks and tools for optimal performance"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Solutions",
      description: "Enterprise-grade security for your peace of mind"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Rapid development and deployment processes"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled professionals with diverse expertise"
    }
  ];

  const testimonials = [
    {
      quote: "Working with LMTsoftware transformed our business operations completely.",
      author: "Sarah Johnson",
      position: "Data Analyst",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop"
    },
    {
      quote: "Their expertise in AI and cloud solutions helped us scale efficiently.",
      author: "Michael Chen",
      position: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-5rem)] pt-20">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className={`p-8 rounded-2xl bg-black/50 backdrop-blur-sm border border-white/10`}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.3)]">
                Building Tomorrow's Solutions Today
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-gray-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                Specialized in creating cutting-edge web applications, desktop software, and AI solutions 
                tailored to transform your business into a digital powerhouse.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-10">
                <Link
                  to="/contact"
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 
                    bg-indigo-500 hover:bg-indigo-600 text-white hover:scale-105 shadow-lg 
                    cursor-pointer relative z-10`}
                >
                  Contact Us
                </Link>
                <Link
                  to="/projects"
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 
                    bg-black/30 hover:bg-black/40 text-white border border-white/50 hover:scale-105
                    cursor-pointer relative z-10`}
                >
                  View Projects
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold mb-2 text-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-100">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 
                transition-transform duration-300 hover:scale-105">
                <div className="mb-4 text-cyan-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-100">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-300">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
                <p className="italic text-gray-100">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}