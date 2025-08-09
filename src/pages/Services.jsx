import React from 'react';
import { Code, ShoppingCart, Smartphone, TrendingUp } from 'lucide-react';
import RobotAI from '/src/assets/robot.svg';

const ServicesSection = () => {
  return (
    <section id="services" className="flex flex-col">
      {/* Header Container */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-white mb-6">
          Our Digital Solutions
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Transform your business with our cutting-edge digital solutions. From 
          blockchain to AI, we deliver tomorrow's technology today.
        </p>
      </div>

      {/* Bento Grid Container */}
      <div className="flex flex-row gap-2 px-6 py-10 ">
        
        {/* First Row - Full Width Card */}
        <div className="bg-white rounded-2xl p-8 flex-1 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
          <div>
            <h3 className="text-1xl font-bold text-gray-800 mb-4">Blockchain Development</h3>
            <p className="text-gray-600 mb-12 leading-relaxed text-lg">
              Secure, transparent, and decentralized solutions powered by cutting-edge blockchain technology.
            </p>
            {/* Blockchain Visual Elements */}
            <div className="flex flex-col items-center mt-4">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Code className="w-8 h-8 text-gray-600" />
                </div>
                <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-center justify-center hover:bg-red-100 transition-colors">
                  <Code className="w-8 h-8 text-red-500" />
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Code className="w-8 h-8 text-gray-600" />
                </div>
                <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <Code className="w-8 h-8 text-gray-600" />
                </div>
              </div>
              <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-full inline-block animate-pulse">
                Block #2 Verified
              </div>
            </div>
          </div>
        </div>

        {/* Second Row - Stacked AI Integration & E-commerce */}
        <div className="flex flex-col gap-2 flex-1">
          {/* AI Integration Card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-1xl font-bold text-gray-800 mb-4">AI Integration</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Intelligent automation and machine learning solutions that adapt and evolve with your business needs.
            </p>
            {/* AI Visual Elements */}
            <div className="flex flex-col items-center mb-6">
              {/* Spinning Red Circle with Robot */}
              <div className="relative flex items-center justify-center mb-6">
                {/* Spinning Circle */}
                <div className="w-24 h-24 rounded-full border-4 border-gray-100 flex items-center justify-center animate-ai-spin"
                  style={{ borderRightColor: '#ef4444'}}>
                  {/* Robot Icon */}
                  <img src ={RobotAI} alt="AI Robot" className="w-12 h-12" />
                  {/* Popup Button */}
                  <AIPopup />
                </div>
              </div>
            </div>
          </div>
          {/* E-commerce Solutions Card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-1xl font-bold text-gray-800 mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Scalable online stores with advanced features for modern digital commerce experiences.
            </p>
            {/* E-commerce Visual Elements */}
            <div className="flex flex-col items-center mt-6 mb-6 relative">
              {/* Cart Icon with animated badge */}
              <div className="relative flex items-center justify-center mb-6">
                <ShoppingCart className="w-16 h-16 text-red-500 transition-transform duration-300 ease-in-out animate-cart-bounce" />
                <CartBadge />
              </div>
              {/* Popup below cart */}
              <CartPopup />
            </div>
          </div>
        </div>

        {/* Third Row - Stacked Brand Design */}
        <div className="flex flex-col gap-2 flex-1">
          {/* Brand Design Card */}
          <div className="bg-white rounded-2xl p-8 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-1xl font-bold text-gray-800 mb-4">Brand Design</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Compelling visual identities that capture your brand's essence and resonate with your target audience.
            </p>
            {/* Brand Design Visual Elements */}
            <BrandDesignVisuals />
          </div>
        </div>

        {/* Fourth Row - Stacked UI/UX & Digital Marketing Cards */}
        <div className="flex flex-col gap-2 flex-1">
          {/* UI/UX Design Card */}
          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-1xl font-bold text-gray-800 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Intuitive, beautiful interfaces that create seamless user experiences across all digital touchpoints.
            </p>
            {/* UI/UX Visual Elements */}
            <div className="space-y-4">
              <div className="flex space-x-2 justify-center">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
              </div>
              <div className="bg-gray-100 rounded-xl p-6 hover:bg-gray-200 transition-colors">
                <Smartphone className="w-12 h-12 text-gray-600 mx-auto animate-bounce" />
              </div>
            </div>
          </div>
          {/* Digital Marketing Card */}
          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-[1.02]">
            <h3 className="text-1xl font-bold text-gray-800 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Data-driven strategies that amplify your reach and maximize ROI across all digital channels.
            </p>
            {/* Digital Marketing Visual Elements */}
            <div className="space-y-4 mb-14 mt-14">
              <div className="flex items-center justify-between ">
                <div className="relative">
                  <TrendingUp className="w-10 h-10 text-red-500" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                </div>
                <div className="text-right ">
                  <div className="text-red-500 font-bold text-2xl">86%</div>
                  <div className="text-gray-600 text-sm">Growth</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-red-500 font-bold text-sm">36%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full animate-pulse" style={{width: '36%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="text-red-500 font-bold text-sm">72%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full animate-pulse" style={{width: '72%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="text-red-500 font-bold text-sm">86%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                    <div className="bg-red-500 h-2 rounded-full animate-pulse" style={{width: '86%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;

// Add this component above ServicesSection or in the same file
function AIPopup() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 1200); // matches spin speed
    return () => clearInterval(interval);
  }, []);
  const labels = ["AI Integration", "AI Learning", "AI Processing"];
  return (
    <div
      className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-4 py-1 rounded-full border border-gray-300 shadow-lg transition-all duration-300"
      style={{ minWidth: 110, textAlign: "center" }}
    >
      {labels[step]}
    </div>
  );
}

function CartPopup() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  const labels = ["Adding...", "Processing...", "Confirmed!"];
  return (
    <div
      className="absolute left-1/2 -bottom-2 -translate-x-1/2 bg-white text-black text-xs px-4 py-1 rounded-full border border-gray-300 shadow-lg transition-all duration-300"
      style={{ minWidth: 110, textAlign: "center" }}
    >
      {labels[step]}
    </div>
  );
}

function CartBadge() {
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c % 4) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="absolute -top-3 -right-3 bg-red-400 text-white text-sm rounded-full w-8 h-8 flex items-center justify-center animate-cart-badge">
      {count}
    </div>
  );
}

// Place this component above ServicesSection or in the same file
function BrandDesignVisuals() {
  const [active, setActive] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((a) => (a + 1) % 4);
    }, 1200);
    return () => clearInterval(interval);
  }, []);
  const popups = ["Logo", "Typography", "Assets", "Color"];
  return (
    <div className="relative pb-12">
      <div className="grid grid-cols-2 gap-x-6 gap-y-8 mt-8 px-2">
        {[0, 1, 2, 3].map((idx) => (
          <div
            key={idx}
            className={`
              w-24 h-48 rounded-md
              flex items-center justify-center
              transition-all duration-300
              ${active === idx
                ? 'border-2 border-red-500'
                : 'border-2 border-gray-300'}
              bg-white
              relative
            `}
          >
            <div className="w-10 h-10 bg-gray-200 rounded-lg shadow-md" />
          </div>
        ))}
      </div>
      {/* Always show popup centered below rectangles, with spacing and inside card */}
      <div
        className="absolute left-1/2 -translate-x-1/2 bottom-4 bg-red-500 text-white text-xs px-6 py-2 rounded-full shadow-lg transition-all duration-300"
        style={{ minWidth: 90, textAlign: "center", maxWidth: "90%" }}
      >
        {popups[active]}
      </div>
    </div>
  );
}

/* Add this style block inside your component (once) or in your global CSS */
<style>
  {`
    @keyframes aiSpin {
      100% { transform: rotate(360deg); }
    }
    .animate-ai-spin {
      animation: aiSpin 1.2s linear infinite;
    }
    @keyframes cartBounce {
      0%, 100% { transform: translateY(0);}
      20% { transform: translateY(-8px);}
      40% { transform: translateY(0);}
    }
    .animate-cart-bounce {
      animation: cartBounce 1.2s infinite;
    }
    @keyframes cartBadgePulse {
      0%, 100% { box-shadow: 0 0 0 0 #ef4444aa; }
      50% { box-shadow: 0 0 0 6px #ef444400; }
    }
    .animate-cart-badge {
      animation: cartBadgePulse 1.2s infinite;
    }
  `}
</style>