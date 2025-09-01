import { Upload, DollarSign, Download } from "lucide-react";
import { useState } from "react";

const ProcessSection = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const steps = [
    {
      icon: <Upload className="w-8 h-8 text-primary" />,
      title: "Submit Your Assignment",
      description: "Upload your assignment details, requirements, and deadline. We'll review everything carefully.",
      isClickable: true,
      action: () => {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSc5WvEsJb8uTU0JWGrHXU3f4B74L-Awkr1BloTkq_6yl9as-Q/viewform?usp=header", "_blank");
        // Show success message after a short delay to simulate form submission
        setTimeout(() => {
          setShowSuccessMessage(true);
        }, 2000);
      }
    },
    {
      icon: <DollarSign className="w-8 h-8 text-secondary" />,
      title: "Receive Your Quote",
      description: "Once we've reviewed your submission, we will email you a transparent, affordable quote within minutes. We believe in no hidden fees or surprises.",
      isClickable: false
    },
    {
      icon: <Download className="w-8 h-8 text-success" />,
      title: "Get Completed Work",
      description: "Receive your professionally completed assignment on time, ready for submission.",
      isClickable: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple, transparent process to get your assignments completed professionally
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex-1 flex flex-col">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
                {index + 1}
              </div>
              
              {/* Card */}
              <div 
                className={`bg-card p-8 rounded-2xl shadow-soft border border-border transition-all duration-300 flex-1 flex flex-col justify-between hover:shadow-elegant hover:scale-105 cursor-pointer ${
                  step.isClickable ? 'hover:shadow-elegant' : ''
                }`}
                onClick={step.isClickable ? step.action : undefined}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-subtle rounded-full">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 text-center">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center flex-1">
                  {step.description}
                </p>
                {step.isClickable && (
                  <div className="mt-4 text-center">
                    <span className="text-sm text-primary font-medium">Click to submit →</span>
                  </div>
                )}
              </div>
              
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md mx-auto text-center shadow-elegant">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Thank you!</h3>
            <p className="text-gray-600 mb-6">
              Your assignment details have been successfully saved and recorded. We will get to work on your request immediately to ensure your work is delivered well before the deadline.
            </p>
            <button
              onClick={() => setShowSuccessMessage(false)}
              className="bg-gradient-primary text-white font-semibold py-3 px-6 rounded-lg hover:shadow-elegant transition-all duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProcessSection;