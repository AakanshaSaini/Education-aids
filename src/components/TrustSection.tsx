import { Shield, CheckCircle, Users } from "lucide-react";

const TrustSection = () => {
  const guarantees = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "100% Confidentiality",
      description: "Your privacy is our top priority. All personal information and assignments remain strictly confidential."
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-success" />,
      title: "100% Plagiarism-Free",
      description: "Every assignment is original and verified through Turnitin. We guarantee unique, authentic work."
    },
    {
      icon: <Users className="w-12 h-12 text-secondary" />,
      title: "AI Usage Prohibited",
      description: "Human expertise only. Our experienced professionals craft every assignment with personal attention."
    }
  ];

  return (
    <section className="py-20 bg-trust">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-trust-foreground mb-4">
            Built on Trust & Quality
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence ensures you receive the highest quality academic assistance
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-soft text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                {guarantee.icon}
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                {guarantee.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {guarantee.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;