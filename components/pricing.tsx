import React from "react";
import { Badge } from "./ui/badge";
import { StarterPlan } from "./pricing-cards/StarterPlan";
import { ProPlan } from "./pricing-cards/ProPlan";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col  items-center">
      <Badge
        variant="outline"
        className="border-primary z-1 mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
      >
        Pricing
      </Badge>
      <h2 className="text-6xl font-bold z-1 text-white">Our Pricing</h2>
      <p className="text-lg text-gray-300 z-1 mt-4 mb-12">
        Simple, transparent pricing for teams of all sizes.
      </p>
      <div className="grid grid-cols-1 px-40 lg:grid-cols-12 gap-4 sm:gap-6 mt-4 sm:mt-6">
        <StarterPlan />
        <ProPlan />
      </div>
    </div>
  );
};

export default Pricing;
