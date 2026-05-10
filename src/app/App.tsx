import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import Slide Components
import CoverSlide from './components/slides/CoverSlide';
import ChallengeSlide from './components/slides/ChallengeSlide';
import IntroSlide from './components/slides/IntroSlide';
import MissionSlide from './components/slides/MissionSlide';
import VisionSlide from './components/slides/VisionSlide';
import AwarenessSlide from './components/slides/AwarenessSlide';
import MedicalCampSlide from './components/slides/MedicalCampSlide';
import YouthEngagementSlide from './components/slides/YouthEngagementSlide';
import BloodDonationSlide from './components/slides/BloodDonationSlide';
import OrganDonationSlide from './components/slides/OrganDonationSlide';
import ImpactSlide from './components/slides/ImpactSlide';
import RoadmapSlide from './components/slides/RoadmapSlide';
import FutureGrowthSlide from './components/slides/FutureGrowthSlide';
import SupportSlide from './components/slides/SupportSlide';
import FinalSlide from './components/slides/FinalSlide';

const slides = [
  <CoverSlide key="slide-0" />,
  <ChallengeSlide key="slide-1" />,
  <IntroSlide key="slide-2" />,
  <MissionSlide key="slide-3" />,
  <VisionSlide key="slide-4" />,
  <AwarenessSlide key="slide-5" />,
  <MedicalCampSlide key="slide-6" />,
  <YouthEngagementSlide key="slide-7" />,
  <BloodDonationSlide key="slide-8" />,
  <OrganDonationSlide key="slide-9" />,
  <ImpactSlide key="slide-10" />,
  <RoadmapSlide key="slide-11" />,
  <FutureGrowthSlide key="slide-12" />,
  <SupportSlide key="slide-13" />,
  <FinalSlide key="slide-14" />
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const totalSlides = slides.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="size-full bg-slate-900 flex flex-col font-sans selection:bg-blue-500/30">
      {/* Slide Container */}
      <div className="flex-1 relative overflow-hidden bg-slate-950">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute inset-0 size-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="bg-slate-900/80 backdrop-blur-md border-t border-slate-800 p-3 flex items-center justify-between z-20">
        <button
          onClick={prevSlide}
          className="group flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all active:scale-95 shadow-lg border border-slate-700"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium text-sm">Previous</span>
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-xl border border-slate-700/50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-blue-500 w-6 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
                  : 'bg-slate-600 hover:bg-slate-500 w-2'
              }`}
              title={`Slide ${index + 1}`}
            />
          ))}
          <span className="ml-3 text-[10px] font-mono text-slate-500">
            {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
          </span>
        </div>

        <button
          onClick={nextSlide}
          className="group flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-900/20"
        >
          <span className="font-medium text-sm">Next</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}