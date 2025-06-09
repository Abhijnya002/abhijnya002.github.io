import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, ExternalLink, Award, Send, User, MapPin, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'certifications', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const skills = {
    languages: ['C++', 'Java', 'Python', 'SQL', 'HTML/CSS', 'XML', 'JavaScript', 'PHP', 'Groovy'],
    databases: ['MySQL', 'PostgreSQL', 'NoSQL', 'MongoDB', 'DynamoDB'],
    dataViz: ['Tableau', 'Power BI', 'Grafana', 'R'],
    tools: ['VS Code', 'GitHub', 'Git', 'Jira', 'Confluence', 'Docker', 'Kubernetes', 'Jenkins', 'Hadoop', 'Excel'],
    frameworks: ['Linux', 'Unix', 'Tensorflow', 'CNN', 'React.js', 'Node.js', 'Angular', 'Django', 'Express.js', 'Bootstrap', 'Flask', 'Agile']
  };

  const experiences = [
    {
      title: "Data Analysis Engineer",
      company: "Mercedes Benz Research and Development",
      location: "Bangalore, India",
      period: "Aug 2022 – Aug 2024",
      highlights: [
        "Received BRONZE STAR award for driving customer-centric strategies, executing three critical service enhancements",
        "Enhanced project efficiency by 30% and accelerated delivery through Agile practices",
        "Designed and optimized scalable data pipelines using Python, AWS, and PostgreSQL, improving data quality to 99.9%",
        "Built CI/CD dashboard with AWS CodePipeline, reducing deployment issues by 30%",
        "Leveraged Power BI, Grafana, and PostgreSQL for real-time monitoring dashboards"
      ]
    },
    {
      title: "Student Trainee",
      company: "Mercedes Benz Research and Development",
      location: "Bangalore, India",
      period: "Mar 2022 – Jun 2022",
      highlights: [
        "Researched 5+ Static Code Analysis tools resulting in 60% improvement in code quality",
        "Evaluated Astree and Coverity tools with detailed analysis",
        "Conducted functional testing identifying 20+ advantages through team collaboration"
      ]
    },
    {
      title: "Research Intern",
      company: "Samsung RD Institute",
      location: "Bangalore, India",
      period: "Nov 2020 – Apr 2021",
      highlights: [
        "Implemented voice-enabled Literary Info Bixby capsule integrating REST APIs",
        "Established structured capsule serving as reference for 3+ project teams",
        "Enhanced user experience through seamless voice interactions"
      ]
    }
  ];

  const projects = [
    {
      title: "IoT Environmental Monitoring System",
      period: "Feb 2025 - Apr 2025",
      tech: ["Python", "MQTT", "ThingSpeak", "IoT", "Cloud Computing"],
      description: "Developed an IoT-based environmental monitoring system that simulates real-time temperature, humidity, and CO2 sensors using MQTT protocol and ThingSpeak for cloud-based data storage and visualization",
      highlights: [
        "Virtual sensors for temperature, humidity, and CO2 levels",
        "MQTT protocol for efficient data transmission", 
        "ThingSpeak cloud platform for data storage and visualization",
        "Real-time sensor data retrieval and historical data analysis"
      ],
      link: "https://github.com/Abhijnya002/IOT-project"
    },
    {
      title: "AI-Powered Data Extraction & Structuring",
      period: "Jan 2025 - April 2025",
      tech: ["Python", "Pandas", "OpenPyXL", "Regex", "NLP"],
      description: "Developed LLM powered pipeline to convert unstructured renovation meeting transcripts into structured Scope of Work data",
      highlights: [
        "Used Flan-T5 and DistilBART-CNN for task generation",
        "Enabled scalable export to Excel using OpenPyXL",
        "Reduced review time & errors while supporting downstream planning"
      ]
    },
    {
      title: "Threat Intelligence Dashboard",
      period: "Apr 2025 – May 2025",
      tech: ["React.js", "Cyber-Security", "AlienVault OTX API", "CSS Animations"],
      description: "Built interactive dashboard with multi-filtering, real-time charts, and dark/light mode",
      highlights: [
        "Built with React.js (Vite) & Recharts with REST API integration",
        "Integrated dynamic visualizations (Pie, Bar, Line charts)",
        "Enhanced security team workflows and cyber situational awareness"
      ],
      link: "#"
    },
    {
      title: "College Event Management System",
      period: "Sep 2020 - Jan 2021",
      tech: ["HTML/CSS", "Bootstrap", "React.JS", "Node.JS", "MongoDB"],
      description: "Full-stack Web Application providing secure login for core members to manage and update event details",
      highlights: [
        "Incorporated accounting functions for financial tracking and reporting",
        "Enabled users to register for events and explore club activities",
        "Ensured secure data transfer with backend validation and error handling"
      ]
    },
    {
      title: "Web Cloner Tool",
      period: "Feb 2021 – Apr 2021",
      tech: ["HTML/CSS", "JavaScript", "Node.JS", "Puppeteer"],
      description: "Developed a web scraping tool that clones static websites by extracting HTML, CSS, and image assets",
      highlights: [
        "Enabled users to input target URLs and download full page structure",
        "View cloned content locally for offline analysis or archival",
        "Implemented robust error handling for dynamic page structures"
      ]
    },
    {
      title: "Handwritten Math Solver",
      period: "Aug 2021 - Sep 2021",
      tech: ["Python", "Keras", "CNN", "Tensorflow", "PyTorch", "Machine Learning", "Flask"],
      description: "Led team achieving 97-99% accuracy in recognizing handwritten alphabets and numbers",
      highlights: [
        "Optimized model for diverse handwriting styles and sizes",
        "Trained on dataset of 10,000 images",
        "Ensured reliable and precise recognition capabilities"
      ]
    }
  ];

  const certifications = [
    "SQL (Advanced) by HackerRank",
    "Power BI Essentials by NASBA",
    "AWS Cloud Technical Essentials by AWS"
  ];

  const achievements = [
    "BRONZE STAR Award - Mercedes Benz R&D (2023)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhijnya K.G
            </h1>
            <div className="hidden md:flex space-x-8 lg:space-x-10">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Certifications', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-blue-400 hover:scale-105 text-sm lg:text-base nav-link ${
                    activeSection === item.toLowerCase() ? 'text-blue-400 font-semibold active' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Interactive Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Interactive Animated Background */}
        <div className="absolute inset-0 interactive-bg">
          <div 
            className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float transition-all duration-300"
            style={{
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
            }}
          ></div>
          <div 
            className="absolute w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float transition-all duration-500"
            style={{
              right: `${mousePosition.x * 0.01}px`,
              bottom: `${mousePosition.y * 0.01}px`,
              animationDelay: '1s'
            }}
          ></div>
          <div 
            className="absolute w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-float transition-all duration-700"
            style={{
              left: `50%`,
              top: `50%`,
              transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`,
              animationDelay: '2s'
            }}
          ></div>
          
          {/* Interactive Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  transform: `translate(${mousePosition.x * 0.001}px, ${mousePosition.y * 0.001}px)`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            {/* Enhanced Profile Image */}
            <div className="mb-12 flex justify-center">
              <div className="relative group">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 p-1 animate-pulse-glow hover:scale-105 transition-transform duration-500">
                  <img 
                    src="/lovable-uploads/d49c34b6-cc41-4935-811a-e22ba5b345df.png"
                    alt="Abhijnya Konanduru Gurumurthy"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-green-500 w-10 h-10 rounded-full border-4 border-slate-900 animate-pulse flex items-center justify-center">
                  <span className="text-xs font-bold">🟢</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient typing-text">
                Abhijnya
              </span>
              <br />
              <span className="text-white animate-fade-in block mt-2" style={{animationDelay: '0.5s'}}>Konanduru Gurumurthy</span>
            </h1>
            
            <div className="mb-10 space-y-6">
              <p className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 font-bold mb-6 animate-fade-in" style={{animationDelay: '1s'}}>
                Data Analysis Engineer & Full-Stack Developer
              </p>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-yellow-400 font-semibold mb-4 animate-fade-in flex items-center justify-center gap-2" style={{animationDelay: '1.5s'}}>
                  <Award className="w-6 h-6" />
                  🏆 BRONZE STAR Awardee at Mercedes Benz
                  <span className="mx-2">•</span>
                  🎓 MS Computer Science @ Syracuse University
                </p>
                
                <p className="text-base md:text-lg text-white/70 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '2s'}}>
                  Transforming data into insights • Building scalable solutions with AI/ML • 99.9% data quality expert
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{animationDelay: '2.5s'}}>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-10 py-4 text-lg hover-scale group btn-ripple"
              >
                <MessageSquare className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-10 py-4 text-lg hover-scale group btn-ripple bg-white/5 backdrop-blur-sm"
              >
                <Download className="w-5 h-5 mr-2 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </div>

            <div className="flex justify-center space-x-8 animate-fade-in" style={{animationDelay: '3s'}}>
              <a href="mailto:abhijnyakg@gmail.com" className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-150 hover-glow">
                <Mail className="w-7 h-7" />
              </a>
              <a href="tel:315-374-0966" className="text-white/60 hover:text-green-400 transition-all duration-300 hover:scale-150 hover-glow">
                <Phone className="w-7 h-7" />
              </a>
              <a href="https://linkedin.com/in/abhijnyakg" className="text-white/60 hover:text-blue-400 transition-all duration-300 hover:scale-150 hover-glow">
                <Linkedin className="w-7 h-7" />
              </a>
              <a href="https://github.com/Abhijnya002" className="text-white/60 hover:text-purple-400 transition-all duration-300 hover:scale-150 hover-glow">
                <Github className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60 cursor-pointer hover:text-blue-400 transition-colors" onClick={() => scrollToSection('about')} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover-scale">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                      <img 
                        src="/lovable-uploads/d49c34b6-cc41-4935-811a-e22ba5b345df.png"
                        alt="Abhijnya Konanduru Gurumurthy"
                        className="w-full h-full rounded-xl object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-white/90 leading-relaxed mb-6">
                      I'm a passionate Data Analysis Engineer with a Master's in Computer Science from Syracuse University 
                      and extensive experience at Mercedes Benz Research and Development. I specialize in building scalable 
                      data pipelines, creating insightful dashboards, and implementing AI/ML solutions that drive business impact.
                    </p>
                    <p className="text-lg text-white/80 leading-relaxed mb-6">
                      With a proven track record of enhancing project efficiency by 30% and achieving 99.9% data quality, 
                      I combine technical expertise with strategic thinking to deliver innovative solutions. I was honored with the 
                      <span className="text-yellow-400 font-semibold"> BRONZE STAR Award</span> at Mercedes Benz for driving customer-centric strategies.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center text-blue-400">
                        <MapPin className="w-4 h-4 mr-2" />
                        Syracuse, NY
                      </div>
                      <div className="flex items-center text-yellow-400">
                        <Award className="w-4 h-4 mr-2" />
                        BRONZE STAR Awardee
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Academic Credentials
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Master of Science (M.S), Computer Science</h3>
                    <p className="text-blue-400 text-lg font-semibold">Syracuse University</p>
                    <p className="text-white/60">Syracuse, NY</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 font-semibold">Aug 2024 - May 2026</p>
                    <p className="text-green-400 font-bold text-lg">GPA: 3.88/4.0</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Engineering (B.E), Computer Science</h3>
                    <p className="text-blue-400 text-lg font-semibold">BMS College of Engineering</p>
                    <p className="text-white/60">Bangalore, India</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 font-semibold">Aug 2018 - Jun 2022</p>
                    <p className="text-green-400 font-bold text-lg">CGPA: 9.54/10</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-blue-400 text-lg font-semibold">{exp.company}</p>
                      <p className="text-white/60">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 font-semibold">{exp.period}</p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-white/80 flex items-start hover:text-white transition-colors">
                        <span className="text-blue-400 mr-3 mt-1 flex-shrink-0">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30 hover:bg-blue-500/30 transition-colors cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30 hover:bg-purple-500/30 transition-colors cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Data Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.dataViz.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30 hover:bg-green-500/30 transition-colors cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 hover:bg-yellow-500/30 transition-colors cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 md:col-span-2">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-4">Frameworks & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-400/30 hover:bg-pink-500/30 transition-colors cursor-pointer">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section id="certifications" className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center mb-10 text-yellow-400">🏆 Awards & Achievements</h3>
              <div className="flex justify-center">
                <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-400/30 backdrop-blur-sm hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 hover-scale">
                  <CardContent className="p-8 text-center">
                    <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
                    <p className="text-white font-bold text-xl mb-2">{achievements[0]}</p>
                    <p className="text-white/60 text-base">For driving customer-centric strategies and executing critical service enhancements</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-center mb-10 text-blue-400">📜 Professional Certifications</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {certifications.map((cert, index) => (
                  <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center hover-scale">
                    <CardContent className="p-8">
                      <div className="text-5xl mb-6">🏆</div>
                      <p className="text-white font-semibold text-lg">{cert}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group hover-scale">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-blue-400 transition-colors cursor-pointer" />
                      </a>
                    )}
                  </div>
                  <p className="text-white/60 text-sm mb-4">{project.period}</p>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-white/30 text-white/80 text-xs hover:bg-white/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1 text-xs flex-shrink-0">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-24 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-xl text-white/80 mb-4">
                I'm always interested in new opportunities and exciting projects.
              </p>
              <p className="text-lg text-white/60">
                Let's connect and discuss how we can work together!
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="w-8 h-8 text-blue-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <a href="mailto:abhijnyakg@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                          abhijnyakg@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-8 h-8 text-green-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <a href="tel:315-374-0966" className="text-green-400 hover:text-green-300 transition-colors">
                          315-374-0966
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover-scale">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Linkedin className="w-8 h-8 text-purple-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">LinkedIn</h4>
                        <a href="https://linkedin.com/in/abhijnyakg" className="text-purple-400 hover:text-purple-300 transition-colors">
                          linkedin.com/in/abhijnyakg
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-white mb-2 block">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your Name"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-white mb-2 block">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="subject" className="text-white mb-2 block">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subject"
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="message" className="text-white mb-2 block">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your message..."
                          rows={6}
                          className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-blue-400 resize-none"
                          required
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 hover-scale group"
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Abhijnya Konanduru Gurumurthy. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
