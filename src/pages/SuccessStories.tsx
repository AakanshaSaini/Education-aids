import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

interface Review {
  name: string;
  course: string;
  rating: number;
  review: string;
  date: string;
}

const SuccessStories = () => {
  const [allReviews, setAllReviews] = useState<Review[]>([]);

  const existingReviews: Review[] = [
    {
      name: "Amandeep Kaur",
      course: "Master's in Business Administration",
      rating: 5,
      review: "The team at Elevate Academic Assist helped me excel in my MBA program. Their professional approach and attention to detail in my assignments was outstanding. I achieved top grades and learned so much from their guidance.",
      date: "2024-01-15"
    },
    {
      name: "Arjun Bhalla",
      course: "Ph.D. in Computer Science",
      rating: 5,
      review: "Exceptional support for my Ph.D. research! The team provided comprehensive assistance with my thesis, from methodology to data analysis. Their expertise in computer science research was invaluable for my academic success.",
      date: "2024-01-10"
    },
    {
      name: "Michael Thompson",
      course: "Master's in Economics",
      rating: 5,
      review: "Outstanding academic support! The team helped me with complex economic theories and statistical analysis. Their expertise and timely delivery made all the difference in my master's program. Highly professional service!",
      date: "2024-01-08"
    },
    {
      name: "Sarah Johnson",
      course: "Master's in Psychology",
      rating: 5,
      review: "Amazing support for my psychology research! The team helped me with statistical analysis and research methodology. Their expertise in academic writing and research design was exactly what I needed to excel in my program.",
      date: "2024-01-05"
    },
    {
      name: "David Rodriguez",
      course: "Master's in Engineering",
      rating: 5,
      review: "Fantastic engineering support! The team helped me with complex technical assignments and project documentation. Their understanding of engineering principles and attention to detail was exceptional. I couldn't have completed my master's without their help.",
      date: "2024-01-03"
    }
  ];

  useEffect(() => {
    // Get user submitted reviews from localStorage
    const userReviews = JSON.parse(localStorage.getItem('userReviews') || '[]');
    const combinedReviews = [...existingReviews, ...userReviews];
    
    // Filter 5-star reviews and sort by date (newest first)
    const fiveStarReviews = combinedReviews
      .filter(review => review.rating === 5)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5); // Show only latest 5
    
    setAllReviews(fiveStarReviews);
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
              Success <span className="text-pink-300">Stories</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Real testimonials from students who achieved academic excellence with our professional assistance
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-2 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-smooth h-11 rounded-md px-8 min-w-48"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                What Our Students Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how we've helped students transform their academic journey and achieve their goals
              </p>
              <div className="flex justify-center mt-6">
                <Link 
                  to="/all-reviews" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-primary text-white p-3 rounded-full shadow-glow hover:shadow-elegant hover:scale-110 transition-smooth"
                >
                  <Plus className="w-6 h-6" />
                  <span className="text-sm font-medium">View All Reviews</span>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="flex overflow-x-auto gap-8 pb-4 scrollbar-hide snap-x snap-mandatory">
                {allReviews.map((review, index) => (
                  <div 
                    key={index}
                    className="bg-card p-8 rounded-2xl shadow-elegant border border-border hover:shadow-glow transition-smooth flex-shrink-0 w-80 snap-start"
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
                    </div>
                    <blockquote className="text-muted-foreground leading-relaxed italic">
                      "{review.review}"
                    </blockquote>
                  </div>
                ))}
              </div>
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

export default SuccessStories;
