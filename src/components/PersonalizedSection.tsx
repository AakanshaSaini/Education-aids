import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Heart, BookOpen } from "lucide-react";

const PersonalizedSection = () => {
  return (
    <section className="py-20 bg-trust">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-gradient-primary rounded-full shadow-glow">
              <Heart className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-trust-foreground mb-6">
            Personalized Academic Assistance
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Feeling overwhelmed by your coursework? You're not alone. Our dedicated team of academic professionals is here to provide personalized support across all subjects.
          </p>
          
          <div className="bg-card p-8 rounded-2xl shadow-elegant mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">One-on-One Consultation</h4>
                <p className="text-sm text-muted-foreground">Direct communication with your assigned expert</p>
              </div>
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">All Subjects Covered</h4>
                <p className="text-sm text-muted-foreground">From STEM to humanities, we've got you covered</p>
              </div>
              <div className="text-center">
                <Heart className="w-8 h-8 text-success mx-auto mb-3" />
                <h4 className="font-semibold text-card-foreground mb-2">Empathetic Support</h4>
                <p className="text-sm text-muted-foreground">Understanding and supportive approach to learning</p>
              </div>
            </div>
            
            <div className="bg-gradient-subtle p-6 rounded-xl">
              <p className="text-lg font-medium text-trust-foreground mb-4">
                "Don't let academic stress hold you back. Connect with us today and let's elevate your grades effectively together."
              </p>
              <a 
                href="https://wa.me/12368623068?text=Hello" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Connect for Personalized Help
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalizedSection;