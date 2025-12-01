import { Badge } from "./ui/badge";
import { DataDrivenInsights } from "./feature-cards/DataDrivenInsights";
import { RealTimeAnalytics } from "./feature-cards/RealTimeAnalytics";
import { BeautifulDashboards } from "./feature-cards/BeautifulDashboards";
import { CollaborativeReports } from "./feature-cards/CollaborativeReports";
import { TeamCollaboration } from "./feature-cards/TeamCollaboration";

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-32 dark bg-transparent">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative flex flex-col items-center">
          <Badge
            variant="outline"
            className="border-primary z-1 mb-4 px-3 py-1 text-xs font-medium tracking-wider uppercase"
          >
            Features
          </Badge>
          <h2 className="text-6xl font-bold text-white">Main Features</h2>
          <p className="text-lg text-gray-300 mt-4 mb-16">
            Everything you need to understand your data.
          </p>
          <div className="relative z-10 grid grid-cols-6 gap-3">
            <DataDrivenInsights />
            <RealTimeAnalytics />
            <BeautifulDashboards />
            <CollaborativeReports />
            <TeamCollaboration />
          </div>
        </div>
      </div>
    </section>
  );
}
