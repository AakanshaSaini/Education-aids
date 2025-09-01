import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10">
          <Star className="w-8 h-8 text-white animate-pulse" />
        </div>
        <div className="absolute top-32 right-20">
          <Star className="w-6 h-6 text-white animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <div className="absolute bottom-20 left-32">
          <Star className="w-4 h-4 text-white animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute bottom-32 right-10">
          <Star className="w-10 h-10 text-white animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Excel in Your Studies?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Join thousands of students who have achieved academic success with our professional assistance. 
            Start your journey to better grades today.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">98%</div>
                <div className="text-white/80 text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">5000+</div>
                <div className="text-white/80 text-sm">Happy Students</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="./success-stories.html" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline-hero" size="lg" className="min-w-64 group">
                Start Your Success Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            No commitment required • Free consultation available • Trusted by students worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;