// Interfaces.ts
import { ReactNode } from "react";

export interface ShowcaseProps {
  title: string;
  description: string;
  content: ReactNode;
}

export interface ShowcaseListProps {
  content: ShowcaseProps[];
  Company: string;
  background: string;
  position: string;
}
