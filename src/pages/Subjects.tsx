import { useState } from "react";

const Subjects = () => {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);

  const subjects = [
    "Mathematics",
    "Physics", 
    "Chemistry",
    "Biology",
    "History",
    "Literature",
    "Computer Science",
    "Economics"
  ];

  const handleSubjectChange = (subject: string, checked: boolean) => {
    if (checked) {
      setSelectedSubjects(prev => [...prev, subject]);
    } else {
      setSelectedSubjects(prev => prev.filter(s => s !== subject));
    }
  };

  const contactOnWhatsApp = () => {
    const phoneNumber = '12368623068';
    let message = 'Hello';
    
    if (selectedSubjects.length > 0) {
      message = `Hello, I'm interested in assignments for the following subjects: ${selectedSubjects.join(', ')}.`;
    }
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Our <span className="text-gradient">Academic Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Browse the subjects below. You can select one or more subjects you need assistance with, and we will get back to you on WhatsApp to discuss your assignment.
          </p>
        </div>

        {/* Subject Selection Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-elegant p-8 mb-8 border border-border">
            <h2 className="text-2xl font-semibold text-card-foreground mb-6 text-center">
              Select Your Subjects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {subjects.map((subject) => (
                <label 
                  key={subject}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-accent hover:border-primary/20 transition-smooth cursor-pointer group"
                >
                  <input 
                    type="checkbox" 
                    name="subjects" 
                    value={subject}
                    checked={selectedSubjects.includes(subject)}
                    onChange={(e) => handleSubjectChange(subject, e.target.checked)}
                    className="w-5 h-5 text-primary border-border rounded focus:ring-primary focus:ring-2 transition-smooth"
                  />
                  <span className="text-card-foreground font-medium group-hover:text-primary transition-smooth">
                    {subject}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Contact Button Section */}
          <div className="text-center">
            <button 
              onClick={contactOnWhatsApp}
              disabled={selectedSubjects.length === 0}
              className="bg-gradient-primary text-white font-semibold py-4 px-8 rounded-lg shadow-glow hover:shadow-elegant hover:scale-105 transition-smooth text-lg min-w-64 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Contact us on WhatsApp
            </button>
          </div>

          {/* Selected Subjects Display */}
          <div className="mt-6 text-center text-muted-foreground">
            {selectedSubjects.length > 0 ? (
              <p className="text-sm text-primary font-medium">
                Selected: {selectedSubjects.join(', ')}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">No subjects selected</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;