import { Check, MapPin, Shield, Clock, Headphones, Wifi, Phone, Mail, Train, Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass border-b border-border/50 shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 lg:h-20 items-center justify-between">
          <a href="#" className="font-display text-2xl lg:text-3xl font-semibold text-foreground tracking-tight">
            Boothly
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#early-access"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Coming Soon
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <button
              onClick={() => scrollToSection('early-access')}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Get Early Access
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-border/50">
            <div className="container mx-auto px-4 py-6 space-y-1">
              <a
                href="#how-it-works"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#features"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#early-access"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coming Soon
              </a>
              <a
                href="#contact"
                className="block px-4 py-3 text-base font-medium text-foreground hover:bg-primary/5 hover:text-primary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-4 px-4">
                <button
                  onClick={() => scrollToSection('early-access')}
                  className="btn-primary w-full text-base"
                >
                  Get Early Access
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 lg:pt-20">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Large gradient blobs */}
          <div className="hero-shape hero-shape-1 animate-pulse-soft"></div>
          <div className="hero-shape hero-shape-2 animate-pulse-soft delay-300"></div>
          <div className="hero-shape hero-shape-3 animate-float"></div>
          <div className="hero-shape hero-shape-4 animate-pulse-soft delay-500"></div>
          <div className="hero-shape hero-shape-5 animate-float delay-200"></div>

          {/* Booth silhouettes */}
          <div className="booth-shape booth-shape-1 animate-float delay-200"></div>
          <div className="booth-shape booth-shape-2 animate-float delay-500"></div>
          <div className="booth-shape booth-shape-3 animate-float delay-700"></div>

          {/* Floating dots */}
          <div className="hero-dot hero-dot-1 animate-float delay-100"></div>
          <div className="hero-dot hero-dot-2 animate-float delay-300"></div>
          <div className="hero-dot hero-dot-3 animate-pulse-soft delay-400"></div>
          <div className="hero-dot hero-dot-4 animate-float delay-600"></div>
          <div className="hero-dot hero-dot-5 animate-pulse-soft delay-200"></div>
          <div className="hero-dot hero-dot-6 animate-float delay-500"></div>

          {/* Ring outlines */}
          <div className="hero-ring hero-ring-1 animate-pulse-soft delay-300"></div>
          <div className="hero-ring hero-ring-2 animate-pulse-soft delay-600"></div>
          <div className="hero-ring hero-ring-3 animate-float delay-400"></div>

          {/* Decorative lines */}
          <div className="hero-line hero-line-1"></div>
          <div className="hero-line hero-line-2"></div>
          <div className="hero-line hero-line-3"></div>

          {/* Small crosses */}
          <div className="hero-cross hero-cross-1 animate-pulse-soft delay-200"></div>
          <div className="hero-cross hero-cross-2 animate-pulse-soft delay-500"></div>
          <div className="hero-cross hero-cross-3 animate-pulse-soft delay-700"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div className="opacity-0 animate-fade-up">
                <span className="badge mb-6 inline-flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Launching Q2 2026 in London
                </span>
              </div>

              <h1 className="opacity-0 animate-fade-up delay-100 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.15]">
                When you're{" "}
                <em className="text-gradient not-italic">running late</em>,{" "}
                <br className="hidden sm:block" />
                we're <em className="text-italic-accent">right here</em>
              </h1>

              <p className="opacity-0 animate-fade-up delay-200 text-lg md:text-xl text-muted-foreground mb-8 max-w-xl lg:max-w-none leading-relaxed">
                Private, soundproof meeting spaces in train stations, airports, and transit hubs.
                Take that important call, join your video meeting, or find a quiet moment—all without missing your connection.
              </p>

              <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center">
                <button
                  onClick={() => scrollToSection('early-access')}
                  className="btn-primary w-full sm:w-auto group"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="btn-secondary w-full sm:w-auto"
                >
                  See How It Works
                </button>
              </div>

              {/* Trust indicators */}
              <div className="opacity-0 animate-fade-up delay-400 mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6 justify-center lg:justify-start text-xs md:text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Soundproof & Secure
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  Book in Seconds
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  Pay Per Minute
                </div>
              </div>
            </div>

            {/* Right Visual - Large Typographic Element */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="opacity-0 animate-scale-in delay-200 relative">
                {/* Decorative rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-2 border-primary/10 animate-pulse-soft"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-secondary/20 animate-pulse-soft delay-200"></div>
                </div>

                {/* Large typographic logo - outline style */}
                <div className="relative z-10 p-4 sm:p-6 md:p-8 flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
                  <span className="font-display text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-bold select-none text-stroke animate-float">
                    B
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator - hidden on mobile */}
        <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-800">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem-solution" className="py-16 md:py-24 lg:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Problem */}
            <div className="order-2 lg:order-1">
              <span className="section-label">The Problem</span>
              <h2 className="section-heading mb-6">
                Your office shouldn't be a noisy corridor
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  You're rushing through Liverpool Street Station when your biggest client calls.
                  Do you take it in the noisy corridor where everyone can hear your confidential discussion?
                </p>
                <p className="pull-quote">
                  Important calls deserve important spaces.
                </p>
                <p className="text-lg">
                  Your flight is delayed and you have a crucial video interview in 20 minutes.
                  The airport gate area is packed and echoing—not exactly professional.
                </p>
              </div>
            </div>

            {/* Solution */}
            <div className="order-1 lg:order-2">
              <div className="card-accent p-8 md:p-10">
                <span className="section-label text-secondary-dark">Our Solution</span>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Privacy when you need it most
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Boothly provides on-demand access to private, soundproof meeting spaces
                  right where you need them most—in the heart of transit hubs.
                </p>
                <div className="space-y-4">
                  {[
                    "Soundproof and completely secure",
                    "Professional lighting and crystal-clear audio",
                    "High-speed internet and power outlets",
                    "Book instantly via app or walk-up",
                    "Pay only for time used"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-surface relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label">Simple Process</span>
            <h2 className="section-heading mb-4">
              How <em className="text-italic-accent">Boothly</em> works
            </h2>
            <p className="section-subheading mx-auto">
              Three simple steps to privacy and professionalism, wherever your journey takes you.
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                icon: <MapPin className="h-6 w-6" />,
                title: "Find & Book",
                description: "Open the Boothly app to find available booths near you, or walk up to any booth and book instantly with a tap."
              },
              {
                step: "02",
                icon: <Phone className="h-6 w-6" />,
                title: "Enter & Connect",
                description: "Use your phone to unlock the booth, step inside your private space, and connect to premium WiFi and power."
              },
              {
                step: "03",
                icon: <Check className="h-6 w-6" />,
                title: "Call & Go",
                description: "Take your call in complete privacy, then simply walk out. You're automatically charged only for the time you used."
              }
            ].map((step, index) => (
              <div
                key={index}
                className="card text-center group hover:border-primary/20 relative overflow-hidden"
              >
                {/* Large background number */}
                <div className="absolute -top-4 -right-2 number-editorial text-8xl md:text-9xl pointer-events-none">
                  {step.step}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {step.icon}
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="section-label">Features</span>
            <h2 className="section-heading mb-4">
              Your platform for <em className="text-italic-accent">calling back</em>
            </h2>
            <p className="section-subheading mx-auto">
              Professional-grade privacy and technology in the heart of public spaces.
              Don't miss the moment. Or the call.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Featured Card 1 - Large */}
            <div className="md:col-span-2 lg:col-span-2 card group hover:border-primary/20 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-primary-foreground flex-shrink-0">
                  <Shield className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">Complete Privacy</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Soundproof booths with secure locks ensure your conversations stay confidential,
                    even in the busiest terminals. Our acoustic engineering meets professional recording studio standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Regular Card */}
            <div className="card group hover:border-secondary/30">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-dark mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                <Wifi className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Premium Connectivity</h3>
              <p className="text-muted-foreground leading-relaxed">
                High-speed WiFi, power outlets, and wireless charging stations keep you connected and powered up.
              </p>
            </div>

            {/* Regular Card */}
            <div className="card group hover:border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Clock className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Book on Demand</h3>
              <p className="text-muted-foreground leading-relaxed">
                Reserve instantly through our app or walk up and book. Perfect for last-minute calls and unexpected delays.
              </p>
            </div>

            {/* Regular Card */}
            <div className="card group hover:border-secondary/30">
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center text-secondary-dark mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                <Headphones className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Professional Audio</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crystal-clear acoustics and noise cancellation technology for flawless video calls and conferences.
              </p>
            </div>

            {/* Featured Card 2 - Large */}
            <div className="md:col-span-2 lg:col-span-2 card group hover:border-primary/20 p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark flex items-center justify-center text-secondary-foreground flex-shrink-0">
                  <MapPin className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-semibold mb-2 text-foreground">Prime Locations</h3>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Strategically placed in major transit hubs, airports, and train stations where you need them most.
                    Never more than a few minutes walk from your platform or gate.
                  </p>
                </div>
              </div>
            </div>

            {/* Regular Card */}
            <div className="card group hover:border-primary/20">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <Train className="h-7 w-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 text-foreground">Quick Access</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get in, take your call, and get out—all without worrying about missing your train or flight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="py-16 md:py-24 lg:py-32 bg-surface relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-60 h-60 rounded-full bg-primary/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label">Coming Soon</span>
            <h2 className="section-heading mb-4">
              Coming Soon to <em className="text-italic-accent">London</em>
            </h2>
            <p className="section-subheading mx-auto mb-12">
              We're building the future of private meeting spaces in public places.
              Be among the first to experience privacy and professionalism on the go.
            </p>

            {/* Stats - Enhanced Typography */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-12">
              <div className="card p-3 sm:p-4 md:p-6 text-center">
                <div className="stat-number text-primary">Q2</div>
                <div className="section-label mt-2">2026 Launch</div>
              </div>
              <div className="card p-3 sm:p-4 md:p-6 text-center">
                <div className="stat-number text-secondary-dark">5<span className="text-2xl sm:text-3xl">+</span></div>
                <div className="section-label mt-2">Hub Locations</div>
              </div>
              <div className="card p-3 sm:p-4 md:p-6 text-center">
                <div className="stat-number text-primary">24<span className="text-xl sm:text-2xl">/7</span></div>
                <div className="section-label mt-2">Availability</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:hello@boothlyworks.com?subject=Early Access Interest"
                className="btn-primary w-full sm:w-auto group"
              >
                Join the Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:hello@boothlyworks.com?subject=Partnership Inquiry"
                className="btn-secondary w-full sm:w-auto"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden noise">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="section-heading mb-4">
            Don't miss the <em className="text-italic-accent">moment</em>.
            <br />
            <span className="text-gradient">Or the call.</span>
          </h2>
          <p className="section-subheading mx-auto mb-8">
            Stay updated on our launch and be among the first to experience
            privacy and professionalism on the go.
          </p>
          <a
            href="mailto:hello@boothlyworks.com?subject=Partnership Inquiry"
            className="btn-primary inline-flex group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-2">
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gradient">Boothly</h3>
              <p className="text-background/70 mb-4 sm:mb-6 max-w-sm leading-relaxed text-sm sm:text-base">
                Private meeting spaces in public places. Your platform for calling back
                when you're running late.
              </p>
              <p className="text-xs sm:text-sm text-background/50">
                Proudly made in London.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-display font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Navigate</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <a href="#how-it-works" className="text-background/70 hover:text-background transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-background/70 hover:text-background transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#early-access" className="text-background/70 hover:text-background transition-colors">
                    Coming Soon
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-display font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base">
                <li>
                  <a
                    href="mailto:hello@boothlyworks.com"
                    className="flex items-center gap-2 text-background/70 hover:text-background transition-colors break-all"
                  >
                    <Mail className="h-4 w-4 flex-shrink-0" />
                    <span className="hidden sm:inline">hello@boothlyworks.com</span>
                    <span className="sm:hidden">Email Us</span>
                  </a>
                </li>
                <li className="flex items-center gap-2 text-background/70">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  London, UK
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-background/10 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-background/50 text-xs sm:text-sm">
              &copy; 2025 Boothly. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
