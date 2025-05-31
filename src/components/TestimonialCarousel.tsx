
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Ritesh's expertise in machine learning is exceptional. His innovative approach to problem-solving and attention to detail made our project a tremendous success.",
      name: "Dr. Sarah Johnson",
      role: "Research Director, Tech Innovation Lab",
      rating: 5
    },
    {
      quote: "Working with Ritesh on our AI initiative was a game-changer. His deep understanding of neural networks and practical implementation skills are impressive.",
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      rating: 5
    },
    {
      quote: "Ritesh consistently delivers high-quality work with creative solutions. His passion for AI and dedication to excellence make him a valuable collaborator.",
      name: "Prof. Emily Rodriguez",
      role: "AI Research Professor, Stanford University",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700 overflow-hidden">
        <CardContent className="p-8 md:p-12">
          <div className="text-center">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-slate-200 mb-8 italic leading-relaxed">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            {/* Author */}
            <div className="space-y-2">
              <div className="text-lg font-semibold text-cyan-400">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-slate-400">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation buttons */}
      <div className="flex justify-center space-x-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400/50"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        {/* Dots indicator */}
        <div className="flex items-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-cyan-400 w-8'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-cyan-400/50"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
