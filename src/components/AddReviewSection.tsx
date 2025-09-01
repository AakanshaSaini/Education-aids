import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface Review {
  name: string;
  course: string;
  rating: number;
  review: string;
  date: string;
}

const AddReviewSection = () => {
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
                  className="bg-gradient-primary text-white font-semibold shadow-glow hover:shadow-elegant hover:scale-105 transition-smooth h-11 px-8 min-w-48"
                >
                  Submit Review
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddReviewSection;
