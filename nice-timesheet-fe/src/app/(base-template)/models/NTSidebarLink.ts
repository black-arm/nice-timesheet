import {LucideIcon} from "lucide-react";

export interface NTSidebarLink {
  href: string;
  icon: LucideIcon;
  label: string;
}

export type NTSidebarLinks = NTSidebarLink[];