"use client";

import { ChevronRight } from "lucide-react";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import type { Variants } from "framer-motion";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

// Logo components for the brand bar
const LogoAnthropic = () => (
  <span className="text-gray-500 font-medium text-sm tracking-widest">
    ANTHROPIC
  </span>
);

const LogoRobinhood = () => (
  <span className="text-gray-500 font-medium text-sm flex items-center gap-1">
    Robinhood
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  </span>
);

const LogoLoom = () => (
  <span className="text-gray-500 font-medium text-sm flex items-center gap-1">
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <circle cx="12" cy="4" r="2" />
      <circle cx="12" cy="20" r="2" />
      <circle cx="4" cy="12" r="2" />
      <circle cx="20" cy="12" r="2" />
    </svg>
    loom
  </span>
);

const LogoDuolingo = () => (
  <span className="text-gray-500 font-medium text-sm flex items-center gap-1">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <ellipse cx="12" cy="12" rx="8" ry="10" />
    </svg>
    duolingo
  </span>
);

const LogoDiscord = () => (
  <span className="text-gray-500 font-medium text-sm flex items-center gap-1">
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
    Discord
  </span>
);

const LogoBrooklinen = () => (
  <span className="text-gray-500 font-medium text-sm tracking-wide">
    brooklinen
  </span>
);

const LogoNPR = () => (
  <span className="text-gray-500 font-medium text-sm border border-gray-400 px-1">
    n p r
  </span>
);

const LogoGusto = () => (
  <span className="text-gray-500 font-medium text-sm">gusto</span>
);

// Hero Image Card Components
const MainDashboardCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
    {/* Search Bar */}
    <div className="px-4 py-2 border-b border-gray-100 flex items-center justify-center">
      <div className="flex items-center gap-2 bg-gray-50 rounded-full px-4 py-1.5 text-sm text-gray-400">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        Ask Lattice Assistant or search...
        <span className="ml-8 text-xs bg-gray-200 px-1.5 py-0.5 rounded">
          ⌘K
        </span>
      </div>
    </div>

    {/* Main Content */}
    <div className="p-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="flex gap-4">
        {/* Left Panel - Tasks */}
        <div className="w-1/3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200"></div>
            <span className="font-semibold text-gray-800">Welcome,</span>
          </div>
          <div className="space-y-3">
            <p className="font-medium text-gray-700 text-sm">Tasks</p>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>
                <div className="h-2 bg-gray-100 rounded flex-1"></div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <p className="font-medium text-gray-700 text-sm mb-3">
              3 active goals
            </p>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-4 bg-green-500 rounded-sm"></div>
                </div>
                <div className="h-2 bg-gray-100 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel - Ask Lattice */}
        <div className="flex-1 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-purple-600 text-xs">✦</span>
              </div>
              <span className="font-semibold text-purple-700">Ask Lattice</span>
            </div>
            <button className="text-gray-400 hover:text-gray-600">✕</button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              How can{" "}
              <span className="font-semibold text-gray-800">
                I get promoted?
              </span>
            </p>

            <div>
              <p className="font-semibold text-gray-800 mb-2">
                Revisit your Q3 performance review
              </p>
              <div className="h-2 bg-purple-100 rounded w-3/4 mb-1"></div>
              <div className="h-2 bg-purple-100 rounded w-1/2"></div>
            </div>

            <button className="flex items-center gap-2 text-purple-600 text-sm font-medium">
              <span>✦</span> REVIEW SUMMARY
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div>
              <p className="font-semibold text-gray-800 mb-3">
                Review role expectations
              </p>
              <div className="flex gap-3">
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded">
                    CURRENT LEVEL • L2
                  </span>
                  <p className="font-medium text-gray-800 mt-2 text-sm">
                    Associate Content Marketing...
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Content Strategy</p>
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-3">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">
                    NEXT LEVEL • L3
                  </span>
                  <p className="font-medium text-gray-800 mt-2 text-sm">
                    Content Marketing
                  </p>
                  <p className="text-gray-500 text-xs mt-1">Content Strategy</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-purple-600 text-sm font-medium border border-purple-200 rounded-full px-3 py-1.5">
              <span>✦</span> SUGGESTED LEARNING RESOURCES
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AnalyticsCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full">
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-gray-800">People analytics summary</h3>
      <span className="text-sm text-gray-500">Summary ↓</span>
    </div>

    <div className="flex gap-4 mb-4">
      <div>
        <p className="text-xs text-gray-500">Current headcount</p>
        <p className="text-2xl font-bold text-gray-800">244</p>
      </div>
      <div className="flex-1">
        <div className="flex items-end gap-1 h-16">
          {[40, 55, 45, 60, 50, 70, 65, 75].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t"
              style={{
                height: `${h}%`,
                backgroundColor: i < 4 ? "#818CF8" : "#A78BFA",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>

    <div className="text-xs text-gray-500 mb-2">
      <span className="bg-yellow-100 text-yellow-700 px-1 rounded">
        IN THE LAST 30 DAYS
      </span>
    </div>
    <p className="text-sm text-gray-600 mb-4">
      New hires <span className="font-semibold text-gray-800 ml-8">18</span>
    </p>

    <div className="grid grid-cols-3 gap-2 text-xs">
      <div>
        <p className="text-gray-500 mb-1">◇ SENTIMENT FROM UPDATES</p>
        <p className="text-gray-600">Team sentiment has dropped...</p>
        <div className="h-8 mt-1">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <path
              d="M0,25 Q25,20 50,15 T100,10"
              fill="none"
              stroke="#10B981"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="text-gray-500 mb-1">◇ MANAGER 1:1</p>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span>Set up 1:1</span>
            <div className="flex-1 bg-yellow-400 h-2 rounded"></div>
            <span>83%</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Used 1:1</span>
            <div className="flex-1 bg-yellow-400 h-2 rounded w-1/4"></div>
            <span>24%</span>
          </div>
        </div>
      </div>
      <div>
        <p className="text-gray-500 mb-1">◇ FEEDBACK</p>
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <span>Sent feedback</span>
            <div className="flex-1 bg-green-400 h-2 rounded"></div>
            <span>72%</span>
          </div>
          <div className="flex items-center gap-1">
            <span>Received feedback</span>
            <div className="flex-1 bg-green-400 h-2 rounded w-1/3"></div>
            <span>36%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ProfileCard = () => (
  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-200 to-teal-200 flex items-center justify-center">
        <span className="text-lg">👩</span>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">Ruby Gu</h3>
        <p className="text-sm text-gray-500">Account Executive</p>
      </div>
    </div>

    <div className="flex gap-4">
      <div className="flex-1">
        <h4 className="font-medium text-gray-700 mb-2">Agenda</h4>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-500 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <span className="text-sm text-gray-600 line-through">
              How are you feeling?
            </span>
            <div className="flex -space-x-1">
              <div className="w-4 h-4 rounded-full bg-yellow-200"></div>
              <div className="w-4 h-4 rounded-full bg-blue-200"></div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-gray-300"></div>
            <span className="text-sm text-gray-600">
              Your priorities this quarter
            </span>
            <div className="w-4 h-4 rounded-full bg-purple-200"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded border border-gray-300"></div>
            <span className="text-sm text-gray-600">PTO request</span>
            <div className="w-4 h-4 rounded-full bg-orange-200"></div>
          </div>
        </div>
        <button className="text-sm text-gray-400 mt-2 flex items-center gap-1">
          <span>+</span> Add talking point
        </button>
      </div>

      <div className="flex-1">
        <h4 className="font-medium text-gray-700 mb-2">About Ruby</h4>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-2xl">😊</span>
          <span className="text-2xl font-bold text-gray-800">3.4</span>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <span className="text-green-500">😊</span>
          <span className="text-sm text-green-600">Good</span>
        </div>
        <div className="bg-gray-50 rounded-lg p-2">
          <p className="text-xs text-gray-500">
            What did you focus on this week?
          </p>
          <div className="h-8 mt-1">
            <svg viewBox="0 0 100 30" className="w-full h-full">
              <path
                d="M0,20 L20,15 L40,18 L60,10 L80,12 L100,8"
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
              />
              <circle cx="0" cy="20" r="3" fill="#10B981" />
              <circle cx="20" cy="15" r="3" fill="#10B981" />
              <circle cx="40" cy="18" r="3" fill="#10B981" />
              <circle cx="60" cy="10" r="3" fill="#10B981" />
              <circle cx="80" cy="12" r="3" fill="#10B981" />
              <circle cx="100" cy="8" r="3" fill="#10B981" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Hero = () => {
  return (
    <section className="relative z-1 mx-auto max-w-full bg-white overflow-hidden">
      <div className="z-10 mx-auto max-w-7xl px-6 py-12 md:py-16 md:px-12 lg:px-16">
        {/* Main Hero Content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
          {/* Left Side - Text Content */}
          <div className="flex-1 lg:max-w-xl lg:pt-8">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <h1 className="font-bricolage text-[#0D4A2B] text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium leading-[1.1] tracking-tight">
                People + AI:
                <br />
                Succeeding
                <br />
                Together
              </h1>

              <p className="mt-8 text-[#1a1a1a] text-lg md:text-xl leading-relaxed max-w-md">
                Join 5,000+ forward-thinking teams using Lattice&apos;s HR and
                AI tools to manage people, pay, and performance — all on one
                trusted platform.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <button className="bg-[#0D7A5F] hover:bg-[#0a6650] text-white font-medium px-6 py-3.5 rounded-full transition-colors duration-200 shadow-lg shadow-[#0D7A5F]/25">
                  Request a demo
                </button>
                <button className="text-[#0D7A5F] font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200">
                  Take a tour
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </AnimatedGroup>
          </div>

          {/* Right Side - Image Grid */}
          <div className="flex-1 mt-12 lg:mt-0 lg:max-w-2xl">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.4,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative">
                {/* Grid Container */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Top Large Card - spans both columns */}
                  <div className="col-span-2 relative">
                    <div className="bg-gradient-to-br from-[#E8E4F8] via-[#F0EDF9] to-[#E8E4F8] rounded-3xl p-3 shadow-xl">
                      <MainDashboardCard />
                    </div>
                  </div>

                  {/* Bottom Left Card */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#D4F5F0] via-[#E0F7F4] to-[#D4F5F0] rounded-3xl p-3 shadow-xl">
                      <AnalyticsCard />
                    </div>
                  </div>

                  {/* Bottom Right Card */}
                  <div className="relative">
                    <div className="bg-gradient-to-br from-[#D8F5E3] via-[#E5F9ED] to-[#D8F5E3] rounded-3xl p-3 shadow-xl">
                      <ProfileCard />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </div>

        {/* Logo Bar */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:gap-14">
            <LogoAnthropic />
            <LogoRobinhood />
            <LogoLoom />
            <LogoDuolingo />
            <LogoDiscord />
            <LogoBrooklinen />
            <LogoNPR />
            <LogoGusto />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
