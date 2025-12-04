import { Check, MapPin, Shield, Clock, Headphones, Wifi, Phone, Mail, Train, Bell, Menu, X } from "lucide-react";
import { useState } from "react";
import boothlyLogo from '@/assets/boothlynew.png';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={boothlyLogo} alt="Boothly" className="h-10 w-10" />
            <span className="font-semibold">Boothly</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
            <a href="#early-access" className="text-muted-foreground hover:text-foreground transition-colors">Coming Soon</a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            <button 
              onClick={() => scrollToSection('problem-solution')}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Learn More
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <a 
                href="#how-it-works" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#early-access" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coming Soon
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button 
                onClick={() => { scrollToSection('problem-solution'); setMobileMenuOpen(false); }}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-3 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full"
              >
                Learn More
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-4 md:mb-6">
              <Bell className="h-3 w-3 mr-1" />
              Launching First in London
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 md:mb-6">
              When you're running late,{" "}
              <span className="text-primary">we're right here</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl lg:max-w-none">
              Private, soundproof meeting spaces in train stations, airports, and transit hubs. Take that important call, join your video meeting, or find a quiet moment—all without missing your connection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:justify-start justify-center items-center mb-8 md:mb-12">
              <button 
                onClick={() => scrollToSection('problem-solution')}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-8 py-3 text-base font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <img 
              src={boothlyLogo} 
              alt="Boothly private meeting booth with person taking a call" 
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section id="problem-solution" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                The problem we're solving
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground">
                <p>
                  You're rushing through Penn Station when your biggest client calls. Do you take it in the noisy corridor where everyone can hear your confidential discussion?
                </p>
                <p>
                  Your flight is delayed and you have a crucial video interview in 20 minutes. The airport gate area is packed and echoing—not exactly professional.
                </p>
                <p>
                  These moments happen every day to business travelers. Important calls in inappropriate spaces. Professional meetings in unprofessional environments.
                </p>
              </div>
            </div>
            <div className="bg-muted/50 rounded-xl p-6 md:p-8 order-1 lg:order-2">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Our solution</h3>
              <p className="text-base md:text-lg text-muted-foreground mb-6">
                Boothly provides on-demand access to private, soundproof meeting spaces right where you need them most—in the heart of transit hubs.
              </p>
              <div className="space-y-3">
                {[
                  "Soundproof and secure",
                  "Professional lighting and audio",
                  "High-speed internet and power",
                  "Book instantly via app or walk-up",
                  "Pay only for time used"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              How Boothly works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Three simple steps to privacy and professionalism, wherever you are.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                icon: <MapPin className="h-8 w-8" />,
                title: "Find & Book",
                description: "Open the Boothly app to find available booths near you, or walk up to any booth and book instantly with a tap."
              },
              {
                step: "02",
                icon: <Phone className="h-8 w-8" />,
                title: "Enter & Connect",
                description: "Use your phone to unlock the booth, step inside your private space, and connect to premium WiFi and power."
              },
              {
                step: "03",
                icon: <Check className="h-8 w-8" />,
                title: "Call & Go",
                description: "Take your call in complete privacy, then simply walk out. You're automatically charged only for the time you used."
              }
            ].map((step, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm text-center relative">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-7 h-7 md:w-8 md:h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xs md:text-sm">
                    {step.step}
                  </div>
                  <div className="mx-auto mb-4 text-primary">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold leading-none tracking-tight">{step.title}</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Your platform for calling back
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Professional-grade privacy and technology in the heart of public spaces. Don't miss the moment. Or the call.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Complete Privacy",
                description: "Soundproof booths with secure locks ensure your conversations stay confidential, even in the busiest terminals."
              },
              {
                icon: <Wifi className="h-8 w-8" />,
                title: "Premium Connectivity",
                description: "High-speed WiFi, power outlets, and wireless charging stations keep you connected and powered up."
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Book on Demand",
                description: "Reserve instantly through our app or walk up and book. Perfect for last-minute calls and unexpected delays."
              },
              {
                icon: <Headphones className="h-8 w-8" />,
                title: "Professional Audio",
                description: "Crystal-clear acoustics and noise cancellation technology for flawless video calls and conferences."
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: "Prime Locations",
                description: "Strategically placed in major transit hubs, airports, and train stations where you need them most."
              },
              {
                icon: <Train className="h-8 w-8" />,
                title: "Quick Access",
                description: "Get in, take your call, and get out—all without worrying about missing your train or flight."
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm text-center">
                <div className="flex flex-col space-y-1.5 p-6">
                  <div className="mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold leading-none tracking-tight">{feature.title}</h3>
                </div>
                <div className="p-6 pt-0">
                  <p className="text-sm md:text-base text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Access Section */}
      <section id="early-access" className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Coming Soon to London
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 px-2">
              We're building the future of private meeting spaces in public places. Stay tuned for our London launch.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-8 md:mt-12 text-center">
              <div className="p-4 sm:p-0">
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">Q4</div>
                <div className="text-xs md:text-sm text-muted-foreground">London Launch</div>
              </div>
              <div className="p-4 sm:p-0">
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">Transit</div>
                <div className="text-xs md:text-sm text-muted-foreground">Hub Locations</div>
              </div>
              <div className="p-4 sm:p-0">
                <div className="text-xl md:text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-xs md:text-sm text-muted-foreground">Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Don't miss the moment. Or the call.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
            Stay updated on our launch and be among the first to experience privacy and professionalism on the go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <a 
              href="mailto:hello@boothlyworks.com?subject=Partnership Inquiry"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 w-full sm:w-auto"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-muted/50 border-t">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <img src={boothlyLogo} alt="Boothly" className="h-8 w-8" />
                <span className="font-semibold">Boothly</span>
              </div>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Private meeting spaces in public places. Your platform for calling back when you're running late.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li><a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How It Works</a></li>
                <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#early-access" className="text-muted-foreground hover:text-foreground transition-colors">Coming Soon</a></li>
                <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm md:text-base">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground break-all">hello@boothlyworks.com</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">London, UK</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 md:mt-12 pt-6 md:pt-8 text-center text-muted-foreground">
            <p className="mb-2 text-sm md:text-base">&copy; 2025 Boothly. All rights reserved.</p>
            <p className="text-xs md:text-sm">Proudly made in London. The idea came to us during a brief moment of sunshine outside The Cow.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}