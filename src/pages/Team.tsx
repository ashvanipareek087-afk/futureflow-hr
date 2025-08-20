import { useState } from "react";
import { Linkedin, Mail, Twitter, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollAnimations } from "@/components/ScrollAnimations";

const Team = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Co-Founder",
      bio: "15+ years in HR leadership with expertise in scaling teams from startup to enterprise. Former VP of People at tech unicorns.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b593?w=400&h=400&fit=crop&crop=face",
      skills: ["Strategic Leadership", "Organizational Design", "Executive Coaching"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@futureflowhr.com"
      }
    },
    {
      name: "Marcus Johnson",
      role: "CTO & Co-Founder", 
      bio: "AI and data science expert with 12+ years building scalable platforms. Previously led engineering teams at Fortune 500 companies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["AI/ML Engineering", "Platform Architecture", "Data Analytics"],
      social: {
        linkedin: "#",
        github: "#",
        email: "marcus@futureflowhr.com"
      }
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Talent Acquisition",
      bio: "Master recruiter with 10+ years placing executives and technical talent. Specialized in high-growth startups and tech companies.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["Executive Search", "Technical Recruiting", "Candidate Experience"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "elena@futureflowhr.com"
      }
    },
    {
      name: "David Chen",
      role: "Senior HR Consultant",
      bio: "HR transformation specialist with expertise in compliance, policy development, and organizational change management.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["HR Compliance", "Change Management", "Policy Development"],
      social: {
        linkedin: "#",
        email: "david@futureflowhr.com"
      }
    },
    {
      name: "Lisa Thompson",
      role: "Data Analytics Manager",
      bio: "Workforce analytics expert who turns HR data into actionable insights. PhD in Industrial Psychology with 8+ years in people analytics.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      skills: ["People Analytics", "Predictive Modeling", "Data Visualization"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@futureflowhr.com"
      }
    },
    {
      name: "James Wilson",
      role: "Client Success Director",
      bio: "Customer success veteran ensuring our clients achieve maximum value. 10+ years building long-term partnerships in SaaS and consulting.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      skills: ["Client Relations", "Account Management", "Success Strategy"],
      social: {
        linkedin: "#",
        email: "james@futureflowhr.com"
      }
    }
  ];

  const companyValues = [
    {
      title: "Innovation First",
      description: "We constantly push boundaries to find better ways to connect talent with opportunity."
    },
    {
      title: "Human-Centered",
      description: "Technology amplifies human potential, but people always come first in everything we do."
    },
    {
      title: "Transparent Partnership",
      description: "We build lasting relationships through honest communication and shared success."
    },
    {
      title: "Continuous Learning",
      description: "We're always growing, adapting, and improving to serve our clients better."
    }
  ];

  return (
    <div className="pt-20">
      <ScrollAnimations />
      
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text fade-in-up">
              Meet Our Team
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Passionate experts dedicated to transforming how companies find, 
              hire, and develop exceptional talent.
            </p>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-32 right-16 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 left-12 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Team Members */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry veterans with a proven track record of success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={index} 
                className="glass hover-lift group overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <CardContent className="p-0">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links Overlay */}
                    <div className={`absolute bottom-4 left-4 right-4 flex justify-center space-x-3 transition-all duration-300 ${
                      hoveredMember === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {member.social.linkedin && (
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0">
                          <Linkedin className="w-4 h-4 text-white" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0">
                          <Twitter className="w-4 h-4 text-white" />
                        </Button>
                      )}
                      {member.social.github && (
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0">
                          <Github className="w-4 h-4 text-white" />
                        </Button>
                      )}
                      {member.social.email && (
                        <Button size="sm" variant="secondary" className="w-10 h-10 p-0 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 border-0">
                          <Mail className="w-4 h-4 text-white" />
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 gradient-text">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Our Culture & Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and shape our relationships with clients and candidates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {companyValues.map((value, index) => (
              <Card key={index} className="glass hover-lift fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-6">
          <Card className="glass max-w-4xl mx-auto text-center fade-in-up">
            <CardContent className="p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                Join Our Growing Team
              </h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                We're always looking for talented individuals who share our passion for 
                connecting great people with great opportunities. Ready to make an impact?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-primary text-lg px-8 py-4">
                  View Open Positions
                </Button>
                <Button size="lg" variant="outline" className="btn-glass text-lg px-8 py-4">
                  Learn About Our Culture
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up">
              <div className="text-4xl font-bold gradient-text mb-2">6+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;