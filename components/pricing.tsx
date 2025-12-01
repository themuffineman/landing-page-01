import React from "react";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col  items-center">
      <h2 className="text-6xl font-bold text-white z-1 mb-12">Pricing</h2>
      <div className="grid grid-cols-1 px-40 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <div className="lg:col-span-6  animate-fadeInLeft z-1 animation-delay-200">
          <div className="rounded-2xl  bg-neutral-900 text-white border border-white/30 shadow-lg p-4 sm:p-6">
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Starter
            </h3>
            <p className="text-neutral-400 mt-1 text-sm">
              Perfect for small teams and individuals getting started with data
              analytics.
            </p>

            <div className="mt-4 mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  $29
                </span>
                <span className="text-neutral-400">/month</span>
              </div>
              <p className="text-xs text-neutral-500 mt-1">Billed monthly</p>
            </div>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span className="text-neutral-400">
                  Track up to 10,000 monthly events
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span className="text-neutral-400">
                  Access to core analytics dashboards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span className="text-neutral-400">
                  Create and save up to 3 custom reports
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span className="text-neutral-400">Email support</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-black shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span className="text-neutral-400">14-day free trial</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-xs font-medium text-white tracking-tight bg-white/10 hover:bg-white/20"
              >
                Start Free Trial
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 animate-fadeInRight animation-delay-300">
          <div className="sm:p-6 text-white bg-white/5 border-amber-400 border rounded-2xl p-4 relative shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2"></div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Pro
            </h3>
            <p className="text-neutral-300 mt-1 text-sm">
              Advanced analytics for growing teams and data-driven businesses.
            </p>

            <div className="mt-4 mb-4">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold tracking-tight">
                  $99
                </span>
                <span className="text-neutral-300">/month</span>
              </div>
              <p className="text-xs text-neutral-400 mt-1">Billed monthly</p>
            </div>

            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span>Unlimited monthly events</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span>Advanced analytics & segmentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span className="">
                  Unlimited custom reports and dashboards
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span>API access for custom integrations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span>Priority support & onboarding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-400 text-neutral-900 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" className=""></path>
                  </svg>
                </span>
                <span>Team collaboration tools</span>
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="#demo"
                className="inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-xs font-medium text-neutral-900 tracking-tight bg-linear-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 transition-all duration-200"
              >
                Start Pro Trial
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
