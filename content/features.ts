import {
  Target,
  Activity,
  PlayCircle,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  comingSoon?: boolean;
};

export const features: Feature[] = [
  {
    icon: Target,
    title: "Expert guidance",
    description:
      "Learn directly from experienced traders who have navigated real markets — not just theory.",
  },
  {
    icon: Activity,
    title: "Practical approach",
    description:
      "Hands-on, practice-first learning that turns concepts into confident, repeatable execution.",
  },
  {
    icon: PlayCircle,
    title: "Live sessions & real market insights",
    description:
      "Interactive live sessions and timely market insights that connect the classroom to the trading day.",
  },
  {
    icon: ShieldCheck,
    title: "Risk management focused",
    description:
      "Every strategy is taught with disciplined risk management at its core — protecting capital first.",
  },
];
