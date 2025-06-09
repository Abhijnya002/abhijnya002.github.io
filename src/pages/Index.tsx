
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhijnya K.G
            </h1>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-white/80'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Abhijnya
              </span>
              <br />
              <span className="text-white">Konanduru Gurumurthy</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
              Data Analysis Engineer & Full-Stack Developer
            </p>
            <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
              Transforming data into insights at Mercedes Benz • Building scalable solutions with AI/ML
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 text-lg"
              >
                Get In Touch
              </Button>
              <Button 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="mailto:abhijnyakg@gmail.com" className="text-white/60 hover:text-blue-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:315-374-0966" className="text-white/60 hover:text-blue-400 transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/ABHIJNYA" className="text-white/60 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/Abhijnya002" className="text-white/60 hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-white/80 leading-relaxed mb-6">
                  I'm a passionate Data Analysis Engineer with a Master's in Computer Science from Syracuse University 
                  and extensive experience at Mercedes Benz Research and Development. I specialize in building scalable 
                  data pipelines, creating insightful dashboards, and implementing AI/ML solutions that drive business impact.
                </p>
                <p className="text-lg text-white/80 leading-relaxed">
                  With a proven track record of enhancing project efficiency by 30% and achieving 99.9% data quality, 
                  I combine technical expertise with strategic thinking to deliver innovative solutions. I'm particularly 
                  passionate about leveraging emerging technologies like Large Language Models and building user-centric applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Academic Credentials
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
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
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
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
      <section id="experience" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <div className="max-w-5xl mx-auto space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
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
                      <li key={i} className="text-white/80 flex items-start">
                        <span className="text-blue-400 mr-3 mt-1">•</span>
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
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-400/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Data Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.dataViz.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-green-500/20 text-green-300 border-green-400/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">Developer Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
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
                    <Badge key={i} variant="secondary" className="bg-pink-500/20 text-pink-300 border-pink-400/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <p className="text-white font-semibold">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.link && (
                      <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-blue-400 transition-colors" />
                    )}
                  </div>
                  <p className="text-white/60 text-sm mb-4">{project.period}</p>
                  <p className="text-white/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <Badge key={i} variant="outline" className="border-white/30 text-white/80 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-white/70 text-sm flex items-start">
                        <span className="text-blue-400 mr-2 mt-1 text-xs">•</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-white/80 mb-12">
              I'm always interested in new opportunities and exciting projects. 
              Let's connect and discuss how we can work together!
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                  <a href="mailto:abhijnyakg@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                    abhijnyakg@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-green-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                  <a href="tel:315-374-0966" className="text-green-400 hover:text-green-300 transition-colors">
                    315-374-0966
                  </a>
                </CardContent>
              </Card>
              
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                  <a href="https://linkedin.com/in/ABHIJNYA" className="text-purple-400 hover:text-purple-300 transition-colors">
                    linkedin.com/in/ABHIJNYA
                  </a>
                </CardContent>
              </Card>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-12 py-4 text-lg"
              onClick={() => window.location.href = 'mailto:abhijnyakg@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
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
