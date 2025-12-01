import Link from "next/link";
import MainButton from "../MainButton";

export const ProPlan = () => {
  return (
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
            <span className="text-3xl font-semibold tracking-tight">$99</span>
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
            <span className="">Unlimited custom reports and dashboards</span>
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
          <Link href="#">
            <MainButton className="rounded-full">Start Pro Trial</MainButton>
          </Link>
        </div>
      </div>
    </div>
  );
};
