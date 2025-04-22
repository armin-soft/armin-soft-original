
import { LucideIcon } from "lucide-react";

export interface ExpertiseCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  textColor: string;
  iconBg: string;
  borderColor: string;
  hoverColor: string;
  shadowColor: string;
  badges: string[];
  detailBackgroundClass: string;
  index: number;
  hoveredIndex: number | null;
  activeIndex: number | null;
  onHover: (index: number | null) => void;
  onClick: (index: number | null) => void;
}
