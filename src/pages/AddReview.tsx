import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Review {
  name: string;
  course: string;
  rating: number;
  review: string;
  date: string;
}

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    review: ""
  });

  const handleStarClick = (starRating: number) => {
    setRating(starRating);
  };

  const handleStarHover = (starRating: number) => {
    setHoveredRating(starRating);
  };

  const handleStarLeave = () => {
    setHoveredRating(0);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!rating) {
      alert('Please select a rating');
      return;
    }

    const newReview: Review = {
      name: formData.name,
      course: formData.course,
      rating: rating,
      review: formData.review,
      date: new Date().toISOString().split('T')[0]
    };

    // Get existing reviews from localStorage
    let userReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    userReviews.push(newReview);
    
    // Store updated reviews
    localStorage.setItem('userReviews', JSON.stringify(userReviews));
    
    // Show success message
    alert('Thank you for your review! It has been added to our success stories.');
    
    // Reset form
    setFormData({ name: "", course: "", review: "" });
    setRating(0);
  };

  const renderStarRating = () => {
    return Array.from({ length: 5 }, (_, index) => {
      const starRating = index + 1;
      const isActive = starRating <= (hoveredRating || rating);
      
      return (
        <button
          key={index}
          type="button"
          className={`text-2xl transition-smooth ${
            isActive ? 'text-yellow-400' : 'text-gray-300'
          } hover:text-yellow-400`}
          onClick={() => handleStarClick(starRating)}
          onMouseEnter={() => handleStarHover(starRating)}
          onMouseLeave={handleStarLeave}
        >
          ★
        </button>
      );
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Add Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-glow">Review</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Share your success story and help other students discover our academic assistance
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-smooth h-11 rounded-md px-8 min-w-48"
            >
              ← Back to Home Screen
            </Link>
          </div>
        </div>
      </section>

      {/* Review Form Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Share Your Success Story
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Help others by sharing your academic journey and how we assisted you in achieving your goals
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-2xl shadow-elegant border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-card-foreground mb-2">
                      Course/Program *
                    </label>
                    <input
                      type="text"
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="e.g., MBA, Ph.D. in Computer Science"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">
                    Rating *
                  </label>
                  <div className="flex gap-2">
                    {renderStarRating()}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="review" className="block text-sm font-medium text-card-foreground mb-2">
                    Your Review *
                  </label>
                  <textarea
                    id="review"
                    name="review"
                    rows={4}
                    required
                    value={formData.review}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Share your experience and how we helped you achieve academic success..."
                  />
                </div>
                
                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-smooth h-11 px-8 min-w-48 rounded-lg"
                  >
                    Submit Review
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join thousands of students who have achieved academic success with our professional assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://wa.me/12368623068?text=Hello" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-smooth h-11 rounded-md px-8 min-w-64"
              >
                Start Your Journey Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddReview;
