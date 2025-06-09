import React, { useState, useEffect, useRef } from 'react';
import { Menu, X,Heart, MessageCircle, Video, Phone, MapPin, Calendar, Star, Download, Play, ChevronLeft, ChevronRight, Clock, MapPinned, Sparkles, Users, Trophy, Coffee, Shield, Zap, CheckCircle, ArrowRight, Smile, Camera, Music, Gift } from 'lucide-react';
import AppScreenshot from './components/AppScreenshot'; // adjust the path as needed

const swipeProfiles = [
  {
    id: 1,
    name: "Sarah",
    age: 25,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Love hiking and coffee dates",
    interests: ["Photography", "Travel", "Music"],
    distance: "2 miles away",
    compatibility: 94
  },
  {
    id: 2,
    name: "Emily",
    age: 28,
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Yoga instructor & foodie",
    interests: ["Yoga", "Cooking", "Art"],
    distance: "5 miles away",
    compatibility: 89
  },
  {
    id: 3,
    name: "Jessica",
    age: 26,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Adventure seeker & book lover",
    interests: ["Reading", "Hiking", "Movies"],
    distance: "3 miles away",
    compatibility: 92
  },
  {
    id: 4,
    name: "Amanda",
    age: 24,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Artist and nature lover",
    interests: ["Painting", "Gardening", "Dancing"],
    distance: "1 mile away",
    compatibility: 96
  }
];

const activities = [
  "Romance",
  "Dinner",
  "Dance",
  "Movies",
  "Coffee",
  "Picnic",
  "Concert",
  "Museum",
  "Beach",
  "Adventure",
  "Sports",
  "Shopping"
];

const romanticIdeas = {
  Romance: [
    "Candlelit dinner under the stars with live acoustic music",
    "Sunset picnic in a botanical garden with champagne",
    "Couples spa day with rose petal treatments",
    "Private rooftop dinner with city skyline views",
    "Romantic horse-drawn carriage ride through the park"
  ],
  Dinner: [
    "Fine dining with live jazz music and wine pairing",
    "Rooftop restaurant with panoramic city views",
    "Private chef cooking experience at home",
    "Wine tasting dinner at a vineyard",
    "Intimate dinner cruise with sunset views"
  ],
  Dance: [
    "Salsa dancing lessons followed by live music",
    "Ballroom dance evening at an elegant venue",
    "Live jazz club with dancing and cocktails",
    "Swing dance under the moonlight in the park",
    "Private dance lesson with a professional instructor"
  ],
  Movies: [
    "Private cinema screening with gourmet popcorn",
    "Drive-in movie experience with cozy blankets",
    "Classic film festival at a historic theater",
    "Outdoor movie in the park with picnic setup",
    "Home movie marathon with homemade treats"
  ],
  Coffee: [
    "Cozy cafe with board games and artisan pastries",
    "Coffee cupping experience with expert barista",
    "Artisan coffee workshop and roasting class",
    "Morning coffee with sunrise view at a scenic spot",
    "Coffee shop hopping tour around the city"
  ],
  Picnic: [
    "Luxury picnic basket in a vineyard setting",
    "Beach picnic at golden hour with bonfire",
    "Garden picnic with live acoustic music",
    "Mountain top picnic adventure with hiking",
    "Lakeside picnic with kayaking activities"
  ],
  Concert: [
    "Intimate acoustic session at a cozy venue",
    "Classical music performance in a cathedral",
    "Jazz club with dinner and dancing",
    "Outdoor concert under the stars",
    "Local band performance at a trendy venue"
  ],
  Museum: [
    "Private art gallery tour with wine tasting",
    "Interactive science museum exploration",
    "Historical mansion tour with period costumes",
    "Contemporary art exhibition opening",
    "Museum night event with special exhibits"
  ],
  Beach: [
    "Sunset beach walk with champagne toast",
    "Beach bonfire with s'mores and stargazing",
    "Surfing lessons together with beach lunch",
    "Beachside massage therapy session",
    "Beach volleyball followed by seafood dinner"
  ],
  Adventure: [
    "Hot air balloon ride with champagne breakfast",
    "Couple's rock climbing with scenic views",
    "Kayaking at sunset with waterfront dinner",
    "Hiking to hidden waterfall with picnic",
    "Zip-lining adventure followed by spa relaxation"
  ],
  Sports: [
    "Tennis match followed by brunch",
    "Mini golf with creative themed courses",
    "Bowling with retro atmosphere and cocktails",
    "Ice skating with hot chocolate afterwards",
    "Rock climbing gym with victory celebration"
  ],
  Shopping: [
    "Vintage market exploration with coffee breaks",
    "Art and craft fair with local artisans",
    "Farmers market tour with cooking class",
    "Antique shopping with lunch at historic cafe",
    "Fashion district tour with personal styling"
  ]
};

const stats = [
  { number: "2.5M+", label: "Downloads", icon: Download },
  { number: "850K+", label: "Success Matches", icon: Heart },
  { number: "1.2M+", label: "Dates Planned", icon: Calendar },
  { number: "125K+", label: "Happy Couples", icon: Users }
];

const features = [
  {
    icon: Heart,
    title: "Smart Matching",
    description: "Advanced AI algorithm analyzes your preferences, interests, and behavior to find your perfect match with 94% compatibility accuracy.",
    color: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-600",
    hoverColor: "hover:from-purple-100 hover:to-pink-100"
  },
  {
    icon: Video,
    title: "HD Video Calls",
    description: "Crystal-clear video calls with advanced filters and virtual backgrounds. Connect face-to-face before meeting in person.",
    color: "from-blue-50 to-purple-50",
    iconBg: "bg-blue-600",
    hoverColor: "hover:from-blue-100 hover:to-purple-100"
  },
  {
    icon: Phone,
    title: "Voice Calls",
    description: "High-quality voice calls with noise cancellation. Build deeper connections through meaningful conversations.",
    color: "from-green-50 to-blue-50",
    iconBg: "bg-green-600",
    hoverColor: "hover:from-green-100 hover:to-blue-100"
  },
  {
    icon: MessageCircle,
    title: "Secure Messaging",
    description: "End-to-end encrypted messaging with photos, voice notes, GIFs, and fun stickers. Express yourself freely and safely.",
    color: "from-pink-50 to-yellow-50",
    iconBg: "bg-pink-600",
    hoverColor: "hover:from-pink-100 hover:to-yellow-100"
  },
  {
    icon: MapPin,
    title: "Location-Based",
    description: "Find matches nearby with precise location filtering. Discover local dating spots and hidden gems in your area.",
    color: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-600",
    hoverColor: "hover:from-purple-100 hover:to-pink-100"
  },
  {
    icon: Calendar,
    title: "AI Date Planning",
    description: "Intelligent date suggestions based on your interests, weather, and local events. Never run out of romantic ideas again.",
    color: "from-yellow-50 to-orange-50",
    iconBg: "bg-yellow-600",
    hoverColor: "hover:from-yellow-100 hover:to-orange-100"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Advanced verification system, photo verification, and 24/7 safety monitoring to ensure authentic and secure connections.",
    color: "from-red-50 to-pink-50",
    iconBg: "bg-red-600",
    hoverColor: "hover:from-red-100 hover:to-pink-100"
  },
  {
    icon: Zap,
    title: "Instant Connections",
    description: "Real-time notifications and lightning-fast matching. Connect with your perfect match the moment they join Flamora.",
    color: "from-orange-50 to-yellow-50",
    iconBg: "bg-orange-600",
    hoverColor: "hover:from-orange-100 hover:to-yellow-100"
  }
];

const testimonials = [
  {
    name: "Maria & James",
    role: "Married couple",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
    text: "I met my soulmate on Flamora! The video calls feature helped us connect deeply before our first date. The AI matching was so accurate - we had everything in common. We're getting married next month!",
    rating: 5,
    relationship: "2 years together"
  },
  {
    name: "Alex Thompson",
    role: "Happy user",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100",
    text: "The date planning feature is incredible! It suggested the perfect romantic dinner spot that I never would have found on my own. My date was impressed, and we've been together for 8 months now.",
    rating: 5,
    relationship: "8 months together"
  },
  {
    name: "Sarah Johnson",
    role: "In a relationship",
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=100",
    text: "Best dating app ever! The voice calls made me feel so much more comfortable before meeting. The safety features gave me peace of mind. Found my perfect match in just 2 weeks!",
    rating: 5,
    relationship: "1 year together"
  },
  {
    name: "David & Lisa",
    role: "Engaged couple",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100",
    text: "Flamora's smart matching is unreal! We matched on day one and instantly clicked. The app's date suggestions helped us plan amazing experiences together. Getting married this summer!",
    rating: 5,
    relationship: "Engaged"
  },
  {
    name: "Emma Rodriguez",
    role: "Success story",
    image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100",
    text: "After trying other apps for years, Flamora was a breath of fresh air. The quality of matches is outstanding, and the conversation starters really work. Met my boyfriend here 6 months ago!",
    rating: 5,
    relationship: "6 months together"
  },
  {
    name: "Michael Chen",
    role: "Happy user",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
    text: "The location-based matching is perfect for busy professionals like me. Found someone amazing who lives just 10 minutes away. We've been on 15 dates planned through the app!",
    rating: 5,
    relationship: "4 months together"
  }
];

const floatingElements = [
  { icon: Heart, color: "text-pink-400", delay: 0 },
  { icon: Star, color: "text-yellow-400", delay: 1 },
  { icon: Smile, color: "text-blue-400", delay: 2 },
  { icon: Camera, color: "text-purple-400", delay: 3 },
  { icon: Music, color: "text-green-400", delay: 4 },
  { icon: Gift, color: "text-red-400", delay: 5 }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);
  const [datePlan, setDatePlan] = useState({
    date: '',
    time: '',
    location: '',
    activity: ''
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [swipeAnimation, setSwipeAnimation] = useState('');
  const [likeAnimation, setLikeAnimation] = useState(false);
  const [passAnimation, setPassAnimation] = useState(false);
  const [planningAnimation, setPlanningAnimation] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [typingText, setTypingText] = useState('');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  const fullText = "Find Your Perfect Match";

  useEffect(() => {
    // Typing animation
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypingText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
            if (entry.target.id === 'stats-section') {
              animateStats();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const animateStats = () => {
    const targets = [2500000, 850000, 1200000, 125000];
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setAnimatedStats(targets.map(target => 
        Math.floor(target * Math.min(progress, 1))
      ));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, increment);
  };

  const formatNumber = (num: number, index: number) => {
    if (index === 0) return `${(num / 1000000).toFixed(1)}M+`;
    if (index === 1) return `${(num / 1000).toFixed(0)}K+`;
    if (index === 2) return `${(num / 1000000).toFixed(1)}M+`;
    if (index === 3) return `${(num / 1000).toFixed(0)}K+`;
    return num.toString();
  };

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      setLikeAnimation(true);
      setSwipeAnimation('animate-pulse');
      setTimeout(() => {
        alert(`It's a match with ${swipeProfiles[currentProfileIndex].name}! 💕`);
        setLikeAnimation(false);
        setSwipeAnimation('');
      }, 1000);
    } else {
      setPassAnimation(true);
      setSwipeAnimation('animate-bounce');
      setTimeout(() => {
        setPassAnimation(false);
        setSwipeAnimation('');
      }, 1000);
    }
    
    setTimeout(() => {
      setCurrentProfileIndex((prev) => (prev + 1) % swipeProfiles.length);
    }, 500);
  };

  const handlePlanDate = () => {
    if (datePlan.activity && romanticIdeas[datePlan.activity as keyof typeof romanticIdeas]) {
      setPlanningAnimation(true);
      setTimeout(() => {
        setSuggestions(romanticIdeas[datePlan.activity as keyof typeof romanticIdeas]);
        setShowSuggestions(true);
        setPlanningAnimation(false);
      }, 1500);
    }
  };

  const currentProfile = swipeProfiles[currentProfileIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-600 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {floatingElements.map((element, index) => {
          const IconComponent = element.icon;
          return (
            <div
              key={index}
              className={`absolute animate-bounce ${element.color}`}
              style={{
                left: `${10 + index * 15}%`,
                top: `${20 + (index % 3) * 30}%`,
                animationDelay: `${element.delay}s`,
                animationDuration: '3s'
              }}
            >
              <IconComponent className="w-6 h-6 opacity-20" />
            </div>
          );
        })}
      </div>

      {/* Cursor Follower */}
      <div
        className="fixed w-4 h-4 bg-yellow-300 rounded-full pointer-events-none z-50 transition-all duration-100 ease-out opacity-50"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'scale(1.5)'
        }}
      />

      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden">
        <div className="container mx-auto px-6 py-12">
          <nav className="flex items-center justify-between mb-16 animate-fade-in relative z-20">
            <div className="flex items-center space-x-2 group">
              <Heart className="w-8 h-8 text-white fill-current group-hover:animate-pulse transition-all" />
              <span className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">Flamora</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Features', 'Demo', 'Stats', 'Reviews'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-yellow-300 transition-all duration-300 hover:scale-110 transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger Icon */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-white hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
              <div className="absolute top-full right-0 left-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-700 shadow-lg rounded-b-3xl mx-6 mt-2 p-6 flex flex-col space-y-6 z-30">
                {['Features', 'Demo', 'Stats', 'Reviews'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-white text-xl font-semibold hover:text-yellow-300 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="inline-block animate-fade-in-up">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </span>
                <span className="text-yellow-300 block animate-fade-in-up" style={{ animationDelay: '2s' }}>
                  Perfect Match
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '2.5s' }}>
                Experience dating like never before with AI-powered matching, HD video calls, voice conversations, smart date planning, and genuine connections all in one beautiful app.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '3s' }}>
                <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-purple-800 transition-all transform hover:scale-110 hover:rotate-2 flex items-center justify-center group">
                  <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Download Now
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all transform hover:scale-110 hover:-rotate-2 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:animate-spin" />
                  Watch Demo
                </button>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-white/80 animate-fade-in-up" style={{ animationDelay: '3.5s' }}>
                <div className="flex items-center group hover:text-green-300 transition-colors">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300 group-hover:animate-spin" />
                  <span>Free to Download</span>
                </div>
                <div className="flex items-center group hover:text-green-300 transition-colors">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-300 group-hover:animate-spin" />
                  <span>Verified Profiles</span>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <div className="relative group">
                <div className="w-80 h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 group-hover:scale-105 transition-all duration-500 group-hover:rotate-3">
                  <img 
                    src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=400" 
                    alt="Happy couple" 
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center animate-pulse group-hover:animate-bounce">
                  <Heart className="w-8 h-8 text-purple-600 fill-current" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-bounce group-hover:animate-spin">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center animate-ping">
                  <Video className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50" />
        <div className="container mx-auto px-6 relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Trusted by <span className="text-purple-600 animate-pulse">Millions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the fastest-growing dating community and become part of our success stories
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index} 
                  className={`text-center group transition-all duration-500 ${isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 group-hover:shadow-2xl">
                    <IconComponent className="w-10 h-10 text-white group-hover:animate-bounce" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {formatNumber(animatedStats[index], index)}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-800 transition-colors">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className={`mt-16 text-center transition-all duration-1000 ${isVisible['stats-section'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '1s' }}>
            <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-4 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-lg group">
              <Trophy className="w-6 h-6 text-yellow-500 mr-3 group-hover:animate-bounce" />
              <span className="text-gray-700 font-medium">#1 Dating App of 2024</span>
            </div>
          </div>
        </div>
      </section>
<section
  className="relative z-10 py-20"
  style={{ backgroundColor: '#fcf9fe' }}
>
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">App</span>
      </h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Get a glimpse of Flamora's beautiful interface and powerful features designed to help you find meaningful connections.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-12 items-center justify-center">
      <AppScreenshot
        title="Home Screen"
        description="Discover compatible profiles with our advanced matching algorithm and compatibility scores."
        delay={0}
      />
      
      <AppScreenshot
        title="Chat Screen"
        description="Connect through secure messaging with photos, voice notes, and fun emoji reactions."
        delay={200}
      />
      
      <AppScreenshot
        title="Video Call Screen"
        description="High-quality video and voice calls to build genuine connections before meeting."
        delay={400}
      />
    </div>
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-200 rounded-full animate-pulse opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Everything You Need for <span className="text-purple-600 animate-pulse">Perfect Dates</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI-powered matching to seamless date planning, Flamora has all the advanced features you need for meaningful connections and unforgettable experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index} 
                  className={`bg-gradient-to-br ${feature.color} ${feature.hoverColor} p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-rotate-2 cursor-pointer ${isVisible['features'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${hoveredFeature === index ? 'scale-125 rotate-12' : ''}`}>
                    <IconComponent className={`w-8 h-8 text-white ${hoveredFeature === index ? 'animate-bounce' : ''}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  {hoveredFeature === index && (
                    <div className="mt-4 flex items-center text-purple-600 font-medium animate-fade-in">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Swipe Demo */}
<section id="demo" className="py-20 bg-white relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-30" />
  
  <div className="container mx-auto px-6 relative">
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
        Try Our <span className="text-purple-600 animate-pulse">Smart Matching</span>
      </h2>
      <p className="text-xl text-gray-600 mb-8">Experience the magic of finding your perfect match with our advanced AI algorithm</p>
      <div className="flex justify-center space-x-8 text-sm text-gray-500">
        <div className="flex items-center group hover:text-red-500 transition-colors">
          <ChevronLeft className="w-4 h-4 mr-1 text-red-500 group-hover:animate-bounce" />
          <span>Swipe left to pass</span>
        </div>
        <div className="flex items-center group hover:text-green-500 transition-colors">
          <Heart className="w-4 h-4 mr-1 text-green-500 fill-current group-hover:animate-pulse" />
          <span>Swipe right to like</span>
        </div>
      </div>
    </div>

    <div className="max-w-md mx-auto">
      <div
        className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        style={{ transformOrigin: 'center center' }}
      >
        <div className="relative h-96">
          <img 
            src={currentProfile.image} 
            alt={currentProfile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Compatibility Badge */}
          <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            {currentProfile.compatibility}% Match
          </div>
          
          <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm">
            {currentProfile.distance}
          </div>
          
          {/* Like Animation Overlay */}
          {likeAnimation && (
            <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center animate-pulse">
              <div className="text-6xl text-green-500 animate-bounce">💚</div>
            </div>
          )}
          
          {/* Pass Animation Overlay */}
          {passAnimation && (
            <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center animate-pulse">
              <div className="text-6xl text-red-500 animate-bounce">💔</div>
            </div>
          )}
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{currentProfile.name}, {currentProfile.age}</h3>
            <p className="text-white/90 mb-3">{currentProfile.bio}</p>
            <div className="flex flex-wrap gap-2">
              {currentProfile.interests.map((interest, index) => (
                <span 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-all cursor-pointer"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-white">
          <div className="flex justify-center gap-8">
            <button 
              onClick={() => handleSwipe('left')}
              className="w-16 h-16 bg-gray-100 hover:bg-red-100 rounded-full flex items-center justify-center transition-all transform hover:scale-125 hover:rotate-12 group active:scale-95"
            >
              <ChevronLeft className="w-8 h-8 text-red-500 group-hover:text-red-600 group-hover:animate-bounce" />
            </button>
            <button 
              onClick={() => handleSwipe('right')}
              className="w-16 h-16 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-all transform hover:scale-125 hover:rotate-12 group active:scale-95"
            >
              <Heart className="w-8 h-8 text-green-500 fill-current group-hover:text-green-600 group-hover:animate-pulse" />
            </button>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Profile {currentProfileIndex + 1} of {swipeProfiles.length}
          </p>
          
          {/* Profile Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div 
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentProfileIndex + 1) / swipeProfiles.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Date Planning Tool */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-pink-200 rounded-full animate-bounce opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: '4s'
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Plan Your <span className="text-purple-600 animate-pulse">Perfect Date</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Let our AI-powered date planner create unforgettable romantic experiences tailored just for you</p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
              <Coffee className="w-4 h-4 animate-bounce" />
              <span>Over 10,000 unique date ideas</span>
              <span>•</span>
              <MapPin className="w-4 h-4 animate-pulse" />
              <span>Location-based suggestions</span>
              <span>•</span>
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Personalized recommendations</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-purple-600 animate-bounce" />
                  Date Details
                </h3>
                
                <div className="space-y-6">
                  <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-2 group-hover:text-purple-600 transition-colors">
                      <Calendar className="w-5 h-5 mr-2 text-purple-600 group-hover:animate-spin" />
                      Select Date
                    </label>
                    <input 
                      type="date"
                      value={datePlan.date}
                      onChange={(e) => setDatePlan({...datePlan, date: e.target.value})}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300 focus:scale-105"
                    />
                  </div>

                  <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-2 group-hover:text-purple-600 transition-colors">
                      <Clock className="w-5 h-5 mr-2 text-purple-600 group-hover:animate-spin" />
                      Select Time
                    </label>
                    <input 
                      type="time"
                      value={datePlan.time}
                      onChange={(e) => setDatePlan({...datePlan, time: e.target.value})}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300 focus:scale-105"
                    />
                  </div>

                  <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-2 group-hover:text-purple-600 transition-colors">
                      <MapPinned className="w-5 h-5 mr-2 text-purple-600 group-hover:animate-bounce" />
                      Location
                    </label>
                    <input 
                      type="text"
                      placeholder="Enter your city or specific location"
                      value={datePlan.location}
                      onChange={(e) => setDatePlan({...datePlan, location: e.target.value})}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300 focus:scale-105"
                    />
                  </div>

                  <div className="group">
                    <label className="flex items-center text-gray-700 font-medium mb-2 group-hover:text-purple-600 transition-colors">
                      <Sparkles className="w-5 h-5 mr-2 text-purple-600 group-hover:animate-pulse" />
                      Activity Type
                    </label>
                    <select 
                      value={datePlan.activity}
                      onChange={(e) => setDatePlan({...datePlan, activity: e.target.value})}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all hover:border-purple-300 focus:scale-105"
                    >
                      <option value="">Choose your perfect activity type</option>
                      {activities.map((activity) => (
                        <option key={activity} value={activity}>{activity}</option>
                      ))}
                    </select>
                  </div>

                  <button 
                    onClick={handlePlanDate}
                    disabled={!datePlan.activity || planningAnimation}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 hover:rotate-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none active:scale-95 group"
                  >
                    {planningAnimation ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Planning Your Perfect Date...
                      </div>
                    ) : (
                      <>
                        Plan My Perfect Date 
                        <Sparkles className="inline w-5 h-5 ml-2 group-hover:animate-spin" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <Sparkles className="w-6 h-6 mr-3 text-yellow-600 animate-pulse" />
                  Romantic Ideas
                </h3>
                
                {showSuggestions ? (
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-xl mb-6 animate-fade-in">
                      <div className="text-purple-700 font-semibold text-lg mb-2">
                        Perfect {datePlan.activity} Date Ideas
                      </div>
                      <div className="text-purple-600 text-sm">
                        Curated specifically for your preferences and location
                      </div>
                    </div>
                    {suggestions.map((suggestion, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-xl border border-yellow-200 hover:border-yellow-400 transition-all transform hover:scale-105 hover:rotate-1 cursor-pointer group animate-fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start">
                          <Heart className="w-5 h-5 text-pink-500 fill-current mr-3 mt-1 flex-shrink-0 group-hover:animate-pulse" />
                          <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">{suggestion}</p>
                        </div>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200 animate-fade-in hover:bg-blue-100 transition-colors">
                      <div className="flex items-center text-blue-700 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 animate-pulse" />
                        <span>All suggestions include booking assistance and local recommendations</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <Sparkles className="w-12 h-12 text-yellow-600 animate-pulse" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">Ready to Plan Something Amazing?</h4>
                    <p className="text-gray-600 leading-relaxed">Select your activity type and click "Plan My Perfect Date" to get personalized romantic suggestions powered by our AI algorithm!</p>
                    <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-500">
                      <div className="flex items-center justify-center group hover:text-purple-600 transition-colors">
                        <MapPin className="w-4 h-4 mr-1 group-hover:animate-bounce" />
                        <span>Local venues</span>
                      </div>
                      <div className="flex items-center justify-center group hover:text-purple-600 transition-colors">
                        <Clock className="w-4 h-4 mr-1 group-hover:animate-spin" />
                        <span>Perfect timing</span>
                      </div>
                      <div className="flex items-center justify-center group hover:text-purple-600 transition-colors">
                        <Heart className="w-4 h-4 mr-1 group-hover:animate-pulse" />
                        <span>Romantic atmosphere</span>
                      </div>
                      <div className="flex items-center justify-center group hover:text-purple-600 transition-colors">
                        <Star className="w-4 h-4 mr-1 group-hover:animate-bounce" />
                        <span>Highly rated</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Reviews Section */}
      <section id="reviews" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 opacity-30" />
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Real Love Stories from <span className="text-purple-600 animate-pulse">Real People</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8">Join thousands of couples who found their perfect match on Flamora</p>
            <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center group hover:text-yellow-500 transition-colors">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1 group-hover:animate-spin" />
                <span>4.9/5 App Store Rating</span>
              </div>
              <span>•</span>
              <div className="flex items-center group hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4 text-red-400 fill-current mr-1 group-hover:animate-pulse" />
                <span>125,000+ Success Stories</span>
              </div>
              <span>•</span>
              <div className="flex items-center group hover:text-blue-500 transition-colors">
                <Users className="w-4 h-4 text-blue-400 mr-1 group-hover:animate-bounce" />
                <span>2.5M+ Active Users</span>
              </div>
            </div>
          </div>

          {/* Featured Testimonial Carousel */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-300 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-2xl mb-6 leading-relaxed italic">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="w-16 h-16 rounded-full mr-4 border-4 border-white shadow-lg" 
                    />
                    <div>
                      <div className="font-bold text-xl">{testimonials[currentTestimonial].name}</div>
                      <div className="text-white/80">{testimonials[currentTestimonial].role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-yellow-300 font-bold">{testimonials[currentTestimonial].relationship}</div>
                  </div>
                </div>
              </div>
              
              {/* Carousel Indicators */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:rotate-2 cursor-pointer border border-purple-100 group"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:animate-spin" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic group-hover:text-gray-900 transition-colors">"{testimonial.text.slice(0, 120)}..."</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-white shadow-md group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-purple-600 font-medium text-sm group-hover:text-purple-800 transition-colors">{testimonial.relationship}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl max-w-4xl mx-auto hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
              <h3 className="text-3xl font-bold mb-4 group-hover:animate-pulse">Ready to Write Your Love Story?</h3>
              <p className="text-xl mb-6 text-white/90">Join millions of singles who trust Flamora to find their perfect match</p>
              <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 hover:text-purple-800 transition-all transform hover:scale-110 hover:rotate-2 active:scale-95 group">
                <span className="group-hover:animate-bounce inline-block">Start Your Journey Today</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6 group">
              <Heart className="w-8 h-8 text-pink-500 fill-current group-hover:animate-pulse" />
              <span className="text-3xl font-bold group-hover:text-pink-400 transition-colors">Flamora</span>
            </div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Start your journey to finding true love. Download Flamora today and discover meaningful connections with verified, genuine people near you.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 text-sm text-gray-400 mb-12">
              {[
                { title: "Features", items: ["Smart Matching", "Video & Voice Calls", "Date Planning", "Safety Features"] },
                { title: "Company", items: ["About Us", "Careers", "Press", "Blog"] },
                { title: "Support", items: ["Help Center", "Safety Tips", "Contact Us", "Community"] },
                { title: "Legal", items: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Guidelines"] }
              ].map((section, index) => (
                <div key={section.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h4 className="text-white font-semibold mb-3 hover:text-pink-400 transition-colors cursor-pointer">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="hover:text-white transition-colors cursor-pointer hover:translate-x-2 transform duration-200">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-110 hover:rotate-2 flex items-center justify-center group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for iOS
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-110 hover:-rotate-2 flex items-center justify-center group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download for Android
            </button>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400 hover:text-white transition-colors">© 2024 Flamora. All rights reserved. Made with ❤️ for meaningful connections.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default App;