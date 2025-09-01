import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Review {
  name: string;
  course: string;
  rating: number;
  review: string;
  date: string;
}

const AllReviews = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when component mounts
  }, []);
  
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  const existingReviews: Review[] = [
    {
      name: "Alex M.",
      course: "Human Resource",
      rating: 5,
      review: "Elevate Academic Assist completely transformed my study habits. I went from struggling with complex topics to acing my exams. The personalized guidance and resources were a game-changer!",
      date: "2024-01-15"
    },
    {
      name: "Sarah P.",
      course: "Ph.D. in Industrial Relations",
      rating: 5,
      review: "The support I received for my research paper was invaluable. The feedback was detailed, and my mentor helped me structure my arguments effectively. I'm so grateful for their expertise.",
      date: "2024-01-10"
    },
    {
      name: "David L.",
      course: "MicroEconomics",
      rating: 5,
      review: "I was able to manage my workload and meet all my deadlines thanks to their academic planning tools. The 'Getting Started' chat was quick and easy, and the help was always there when I needed it. Highly recommended!",
      date: "2024-01-08"
    },
    {
      name: "Jaspreet Kaur",
      course: "Ph.D. in Computer Science",
      rating: 5,
      review: "Elevate Academic Assist was a lifesaver for my Ph.D. thesis. Their expert guidance on structuring my research paper and refining my arguments was invaluable. I was stuck for months, but their team helped me get back on track and submit with confidence.",
      date: "2024-01-05"
    },
    {
      name: "Amaira Arora",
      course: "Master's in Business Administration",
      rating: 5,
      review: "Juggling a full-time job and my MBA was incredibly challenging. The team helped me with my case studies and assignments, ensuring they were well-researched and plagiarism-free. My grades have improved significantly. Highly recommended!",
      date: "2024-01-03"
    },
    {
      name: "Michael R.",
      course: "Engineering",
      rating: 4,
      review: "Great support with my technical assignments. The tutors were knowledgeable and helped me understand complex concepts.",
      date: "2024-01-01"
    },
    {
      name: "Emma S.",
      course: "Psychology",
      rating: 4,
      review: "Excellent help with my research methodology. The feedback was constructive and helped improve my paper significantly.",
      date: "2023-12-28"
    }
  ];

  useEffect(() => {
    // Get user submitted reviews from localStorage
    const userReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    const combinedReviews = [...existingReviews, ...userReviews];
    
    // Sort reviews by rating (highest first) and then by date (newest first)
    const sortedReviews = combinedReviews.sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
    
    setAllReviews(sortedReviews);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg key={index} className="w-5 h-5 fill-current text-yellow-400" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              All <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-glow">Reviews</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Browse all student testimonials sorted by rating and discover our impact
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

      {/* All Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                All Student Reviews
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Sorted by rating to show the highest quality feedback first
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allReviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-elegant border border-border hover:shadow-glow transition-smooth"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{review.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{review.course}</p>
                    <div className="flex justify-center text-yellow-400 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-xs text-muted-foreground">{new Date(review.date).toLocaleDateString()}</p>
                  </div>
                  <blockquote className="text-muted-foreground leading-relaxed italic">
                    "{review.review}"
                  </blockquote>
                </div>
              ))}
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

export default AllReviews;
