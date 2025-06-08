import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ success: false, message: '' });

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+233 50 958 0990", "+233 59 283 6387"],
      action: "tel:+233509580990"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["lmtsoftware@gmail.com"],
      action: "mailto:lmtsoftware@gmail.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "WhatsApp",
      details: ["+233 59 283 6387"],
      action: "https://wa.me/+233592836387"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Monday - Friday", "9:00 AM - 6:00 PM GMT"],
      action: null
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (formRef.current) {
        emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
        
        const result = await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        
        console.log('Success:', result.text);
        setFormStatus({ 
          success: true, 
          message: 'Thank you! Your message has been sent successfully.' 
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error: any) {
      console.error('Error details:', error);
      setFormStatus({ 
        success: false, 
        message: error.text || 'Sorry, there was an error sending your message. Please try again.' 
      });
    }
  };

  return (
    <section className="min-h-screen pt-20 bg-black/15">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300">
            Have a question or want to work together? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="p-6 rounded-xl bg-black/20">
                  <div className="mb-4 text-cyan-400">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-300">
                      {detail}
                    </p>
                  ))}
                  {info.action && (
                    <a
                      href={info.action}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-cyan-400 hover:underline"
                    >
                      Connect →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-8 rounded-xl bg-black/50 backdrop-blur-sm border border-white/10">
              {formStatus.message && (
                <div className={`p-4 rounded-lg mb-6 ${
                  formStatus.success 
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-red-100 text-red-700 border border-red-200'
                }`}>
                  {formStatus.message}
                </div>
              )}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2 text-gray-200">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border-gray-600 text-white border-2 
                      focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-200">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border-gray-600 text-white border-2 
                      focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-200">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-2 rounded-lg bg-black/40 border-gray-600 text-white border-2 
                      focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-lg font-medium transition-all duration-300 
                    flex items-center justify-center space-x-2
                    bg-indigo-500 hover:bg-indigo-600 text-white hover:scale-105 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
