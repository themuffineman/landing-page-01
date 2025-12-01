export const StarterPlan = () => {
  return (
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
            <span className="text-3xl font-semibold tracking-tight">$29</span>
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
  );
};
