import { CheckCircle, Clock, GraduationCap, DollarSign } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Quality",
      icon: <CheckCircle className="w-8 h-8 text-success" />,
      features: [
        "Proofreading & Editing",
        "APA/MLA/Chicago Formatting",
        "Quality Assurance Review"
      ]
    },
    {
      category: "Speed", 
      icon: <Clock className="w-8 h-8 text-primary" />,
      features: [
        "Same-Day Delivery",
        "Fast Replies",
        "Rush Order Support"
      ]
    },
    {
      category: "Expertise",
      icon: <GraduationCap className="w-8 h-8 text-secondary" />,
      features: [
        "Experienced Student Work",
        "Brainstorming & Structure",
        "Understand 'Why' Behind 'What'"
      ]
    },
    {
      category: "Affordability",
      icon: <DollarSign className="w-8 h-8 text-success" />,
      features: [
        "Transparent Rates",
        "Affordable Pricing",
        "No Hidden Fees"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Key Services & Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive academic assistance designed to elevate your grades effectively
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-subtle rounded-full mr-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-card-foreground">
                  {service.category}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;